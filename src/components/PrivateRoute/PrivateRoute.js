import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import { Route, Redirect } from 'react-router-dom';

class PrivateRoute extends Component {
  // Реализуйте приватный роут.
  // Он должен проверять статус авторизации
  // и перенаправлять пользователя на страницу логина,
  // если тот не авторизован.
    render() {
        const {
            component: RouteComponent,
            isAuthorized,
            to: loginPath,
            ...rest
        } = this.props;

        return (
            <Route
                {...rest}
                render={routeProps =>
                    isAuthorized ? (
                        <RouteComponent {...routeProps} />
                    ) : (
                        <Redirect to={loginPath} />
                    )
                }
            />
        );
    }
}

export default withAuth(PrivateRoute);
