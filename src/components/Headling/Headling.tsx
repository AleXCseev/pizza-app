import { HeadlingProps } from "./Hedling.props"
import styles from "./Headling.module.css"
import cn from "classnames"


export const Headling = (({ children, className, ...props }: HeadlingProps) => {
    return (
       <h1 {...props} className={cn(styles["title"], className)}>
        {children}
       </h1> 
    )
})