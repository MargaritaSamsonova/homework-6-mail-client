// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.

import {Link} from "react-router-dom";
import React from "react";
import styles from './MailList.module.css';

const MailList = ({ body, toPath }) => <Link className={styles.link} to={toPath}>{body}</Link>

export default MailList
