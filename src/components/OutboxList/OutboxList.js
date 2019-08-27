// Реализуйте компонент OutboxList
// Он должен показывать список писем на отправку.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать MailList для отображения данных.

import React from "react";
import { withData } from "../../context/Data";
import MailList from "../MailList";

const OutboxList = ({ match, data }) => {
    const outboxData = data.outbox;

    return (
        <div className="t-outbox-list">
            {outboxData.map((item) => (
                <MailList key={item.id} body={item.body} toPath={`${match.url}/${item.id}`}/>
            ))}
        </div>
    )
}

export default withData(OutboxList)
