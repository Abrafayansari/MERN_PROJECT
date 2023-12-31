
import { useSelector } from "react-redux"

const useAuth=()=>{
    const globalstate=useSelector((state)=>state)
    return globalstate.User?.loginuser?.Username !== undefined
}
export default useAuth 