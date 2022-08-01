import { Backdrop } from "@mui/material"


const BackdropComponent = ({component,open} : any) => {
    return <Backdrop component={component} open={open}></Backdrop>
}

export default BackdropComponent;