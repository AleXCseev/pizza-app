import { forwardRef } from "react";
import { InputProps } from "./Input.props";
import styles from "./Input.module.css"
import cn from "classnames"


export const Input = forwardRef<HTMLInputElement, InputProps>(({ isValid = true, className, ...props}, ref) => {
    return (
        <input 
            className={cn( styles["input"], className, {
                [styles['invalid']]: isValid
            } )} 
            ref={ref} 
            {...props} 
        />
    )
})