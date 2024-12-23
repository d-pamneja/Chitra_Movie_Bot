// Importing the dependencies
import { NextFunction, Request, Response} from "express";
import { ValidationChain, body, validationResult } from "express-validator";

// Validation function to check multiple validations
export const validate = (validations: ValidationChain[]) => {
    return async (
        req : Request,
        res : Response,
        next : NextFunction
    ) => {
        for(let validation of validations){
            const result = await validation.run(req);
            if(!result.isEmpty()){
                break;
            }
        }

        const errors = validationResult(req);
        if(errors.isEmpty()){
            return next();
        }
        
        return res.status(422).json({errors : errors.array()})
    }

};

// Creating validators
export const loginValidator = [
    body("email")
        .not().isEmpty().withMessage("Email cannot be empty")
        .trim()
        .isEmail().withMessage("Email is required in valid format"),

    body("password")
        .not().isEmpty().withMessage("Password cannot be empty")
        .trim()
        .isLength({min:6}).withMessage("Password has to be atleast 6 characters"),
]

export const signUpValidator = [
    body("name")
        .notEmpty().withMessage("Name cannot be empty"),
    ...loginValidator // Inherit all fields from the login validator
]
