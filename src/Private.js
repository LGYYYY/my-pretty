import Cookies from "js-cookie"
import { Navigate } from "react-router-dom"

const Private = (props) => {
    if(Cookies.get('TOKEN_PARAMS')){
        return <>{props.children}</>
    }else{
        return <Navigate to={{'pathname':'/login'}}></Navigate>
    }
}
export default Private