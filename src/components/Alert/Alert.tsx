import { AlertProps } from "./Alert.interfaces"

function Alert({ children, alertType }: AlertProps){
    return(
        <div className={`${alertType} alert text-center shadow`}>
            { children }
        </div>
    )
}

export default Alert