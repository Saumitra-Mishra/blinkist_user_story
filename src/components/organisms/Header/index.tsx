import { Box } from "@mui/material";
import Button from "../../atoms/Button";
import BackdropComponent from "../../molecules/Backdrop";


const Header = () => {
    function handleClick() {

    }
    return <Box>
        <Button onClick={handleClick}></Button>
        <BackdropComponent></BackdropComponent>
    </Box>
}

export default Header;