import { Link } from "react-router-dom"
import { Button } from "../../components/Button/Button"
import { Headling } from "../../components/Headling/Headling"
import { Input } from "../../components/Input/Input"
import styles from "./Login.module.css"
import { FormEvent } from "react"
import axios from "axios"
import { PREFIX } from "../../helpers/API"

export type LoginForm = {
    email: {
        value: string
    }, 
    password: {
        value: string
    }
}

export const Login = () => {

    const submit = async (e: FormEvent) => {
        e.preventDefault()
        const target = e.target as typeof e.target & LoginForm;
        const { email, password } = target;
        await sendLogin(email.value, password.value)
    }

    const sendLogin = async (email: string, password: string) => {
        const { data } = await axios.post(`${PREFIX}/auth/login`, {
            email,
            password
        });
        console.log(data)
    }

    return (
        <div className={styles['login']}>
            <Headling>Вход</Headling>
            <form className={styles['form']} onSubmit={submit}>
                <div className={styles['field']}>
                    <label htmlFor="email">Ваш email</label>
                    <Input id="email" name="email" placeholder="Email"/>
                </div>
                <div className={styles['field']}>
                    <label htmlFor="password">Ваш пароль</label>
                    <Input id="password" name="password" type="password" placeholder="Пароль"/>
                </div>
                <Button appearence="big">Вход</Button>
            </form>
            <div className={styles['links']}>
                <p>Нет Аккаунта?</p>
                <Link to="auth/register">Зарегестрироваться</Link>
            </div>
            
        </div>
    )
}