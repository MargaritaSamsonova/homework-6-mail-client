// Реализуйте роутер приложения.
// Здесь должны быть обьявлены роуты,
// которые будут доступны авторизованному пользователю.
// - Home
// - InboxList
// - InboxMail
// - OutboxList
// - OutboxMail

// Так же в этом файле обьявите лейаут,
// используйте стили из AppRouter.module.css

import React, { Component } from 'react';
import styles from './AppRouter.module.css';
import { Route, Redirect, Link, Switch } from 'react-router-dom';
import InboxList from "../InboxList";
import InboxMail from "../InboxMail";
import OutboxList from "../OutboxList";
import OutboxMail from "../OutboxMail";
import Home from "../Home";

export default class AppRouter extends Component {
    render() {
        const { match } = this.props;

        return (
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <div className={styles.nav}>
                        <ul className={`${styles.navList} t-nav-list`}>
                            <li className={styles.navElement}>
                                <Link className="t-link-home" to={`${match.url}`}>Home</Link>
                            </li>
                            <li className={styles.navElement}>
                                <Link className="t-link-inbox" to={`${match.url}/inbox`}>Inbox</Link>
                            </li>
                            <li className={styles.navElement}>
                                <Link className="t-link-outbox" to={`${match.url}/outbox`}>Outbox</Link>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.content}>
                        <h3 className={styles.title}>
                            <Switch>
                                <Route path={`${match.path}`} exact render={() => ('Home')} />
                                <Route path={`${match.path}/inbox`} render={() => ('Inbox')} />
                                <Route path={`${match.path}/outbox`} render={() => ('Outbox')} />
                            </Switch>
                        </h3>
                        <Switch>
                            <Route path={`${match.path}`} exact component={Home} />
                            <Route path={`${match.path}/inbox`} exact component={InboxList} />
                            <Route path={`${match.path}/inbox/:id`} component={InboxMail} />
                            <Route path={`${match.path}/outbox`} exact component={OutboxList}/>
                            <Route path={`${match.path}/outbox/:id`} component={OutboxMail}/>
                        </Switch>
                    </div>
                </div>
            </div>
        )
    }
}
