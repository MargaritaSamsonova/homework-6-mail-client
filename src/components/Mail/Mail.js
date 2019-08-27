// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.

import React from "react";
import styles from './Mail.module.css';

const Mail = ({ to, from, body }) => {
    const mailTitle = to ? (
        <p className="t-mail-to">To: <b>{ to }</b></p>
    ) : (
        <p className="t-mail-from">From: <b>{ from }</b></p>
    )

    return (
        <div className={styles.container}>
            {mailTitle}
            <p className="t-mail-body">{ body }</p>
        </div>
    )
}

export default Mail
