import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import { Redirect } from 'react-router-dom';
import styles from './LoginForm.module.css'
import AppRouter from "../AppRouter";

// Реализуйте компонент формы логина.
// Используйте `/contexts/Auth` для получения метода authorize
// и статуса isAuthorized.

// Когда пользователь авторизован - перенаправьте его на роут /app

class LoginForm extends Component  {
    constructor(props) {
        super(props);
        this.handlSubmit = this.handlSubmit.bind(this);
    }

    handlSubmit = (event) => {
        event.preventDefault();

        const { authorize } = this.props;

        authorize(event.target.email.value, event.target.password.value);
    }

    render() {
        const { authError, isAuthorized } = this.props;

        return (
            <>
                { isAuthorized ? (
                  <Redirect to="/app"/>
                ) : (
                    <div className={styles.bg}>
                        <form action="" className={`${styles.form} t-form`} onSubmit={this.handlSubmit}>
                            <p>
                                <label htmlFor="email" className={styles.labelText}>Почта</label>
                                <input type="text" name='email' className={`${styles.input} t-input-email`}/>
                            </p>
                            <p>
                                <label htmlFor="password" className={styles.labelText}>Пароль</label>
                                <input type="password" name='password' className={`${styles.input} t-input-password`}/>
                            </p>
                            <p className={styles.error}>{authError}</p>
                            <div className={styles.buttons}>
                                <button type='submit' className={`${styles.button} t-login`}>Войти</button>
                            </div>
                        </form>
                    </div>
                    )
                }
            </>)

    }
}

export default withAuth(LoginForm)
