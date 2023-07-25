import Cookies from "js-cookie"
import { Navigate } from "react-router-dom"

const Private = (props) => {
    console.log(Cookies.get(),'123');
    if(Cookies.get('TOKEN_PARAMS')){
        console.log(props.children,'props.children');
        return <>{props.children}</>
    }else{
        return <Navigate to={{'pathname':'/login'}}></Navigate>
    }
}
export default Private