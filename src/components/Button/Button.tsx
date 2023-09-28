import { FC } from 'react'
import styles from './Button.module.css'
import { ButtonProps } from './Button.props'
import cn from "classnames"

export const Button: FC<ButtonProps> = ({children, className, ...props}) => {
    return (
        <button className={cn(styles["button"], styles["accent"], className)} {...props}>{children}</button>
    )
}