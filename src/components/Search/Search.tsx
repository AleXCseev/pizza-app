import { forwardRef } from "react";
import { SearchProps } from "./Search.props";
import styles from "./Search.module.css"
import cn from "classnames"


export const Search = forwardRef<HTMLInputElement, SearchProps>(({ isValid = true, className, ...props}) => {
    return (
        <div className={styles['input-wrapper']}>
            <input 
                className={cn( styles["input"], className, {
                    [styles['invalid']]: isValid
                } )} 
                // ref={ref} 
                {...props} 
            />
            <img src="/search.svg" alt="" />
        </div>
       
    )
})