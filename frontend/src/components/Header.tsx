import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Box from '@mui/material/Box'
import Logo from './shared/Logo';
import { useAuth } from '../context/AuthContext';
import NavigationLink from './shared/NavigationLink';



const Header = () => {
    const auth = useAuth();

    const handleLogout = async () => {
        try {
            if(auth){
                await auth.logout();
            }
            else{
                throw new Error("Unable to logout");
            }
        } catch (error) {
            console.error("Logout failed", error);
        }
    };

    return <AppBar sx={{bgcolor : "#B769E8", position : "static"}}>
        <Toolbar sx={{display : "flex", justifyContent : 'center'}}>
        <Box sx={{ flexGrow: 1.75 }}/>
            <Logo />
            <Box sx={{ flexGrow: 1 }}/>
            <div style={{justifyContent : 'right'}}>
                {auth?.isLoggedIn ? (
                <>
                    <NavigationLink 
                        bg="#00fffc" 
                        to="/chat" 
                        text="Chat" 
                        textColor="black"
                    />
                    <NavigationLink 
                        bg="#51538f" 
                        to="/" 
                        text="Logout" 
                        textColor="white"
                        onClick={handleLogout}
                    />
                </>
                ) : (
                <>
                    <NavigationLink 
                        bg="#00fffc" 
                        to="/login" 
                        text="Login" 
                        textColor="black"
                    />
                    <NavigationLink 
                        bg="#51538f" 
                        to="/signup" 
                        text="Signup" 
                        textColor="white"
                    />
                </>
                )}
            </div>
        </Toolbar>
    </AppBar>
};


export default Header;