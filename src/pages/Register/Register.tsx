import { Link, useNavigate } from "react-router-dom"
import { Button } from "../../components/Button/Button"
import { Headling } from "../../components/Headling/Headling"
import { Input } from "../../components/Input/Input"
import { FormEvent, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../store/store"
import { clearRegisterError, register } from "../../store/user.slice"

import styles from "./Register.module.css"

export type LoginForm = {
    email: {
        value: string
    };
    password: {
        value: string
    };
    name: {
        value: string
    }
}

export const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const {jwt, registerErrorMessage} = useSelector((s: RootState) => s.user)

    useEffect(() => {
        if(jwt) {
            navigate('/')
        }
    }, [jwt, navigate])

    const submit = async (e: FormEvent) => {
        e.preventDefault()
        dispatch(clearRegisterError())
        const target = e.target as typeof e.target & LoginForm;
        const { email, password, name } = target;
        dispatch(register({ email: email.value, password: password.value, name: name.value}))
    }

    return (
        <div className={styles['register']}>
            <Headling>Регистрация</Headling>
            {registerErrorMessage && <div className={styles['error']}> {registerErrorMessage} </div>}
            <form className={styles['form']} onSubmit={submit}>
                <div className={styles['field']}>
                    <label htmlFor="email">Ваш email</label>
                    <Input id="email" name="email" placeholder="Email"/>
                </div>
                <div className={styles['field']}>
                    <label htmlFor="password">Ваш пароль</label>
                    <Input id="password" name="password" type="password" placeholder="Пароль"/>
                </div>
                <div className={styles['field']}>
                    <label htmlFor="name">Ваше имя</label>
                    <Input id="name" name="name" placeholder="Имя"/>
                </div>
                <Button appearence="big">Зарегестрироваться</Button>
            </form>
            <div className={styles['links']}>
                <p>Есть аккаунт?</p>
                <Link to="/auth/login">Вход</Link>
            </div>
        </div>
    )
}