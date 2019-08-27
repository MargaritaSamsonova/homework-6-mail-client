// Реализуйте компонент InboxList
// Он должен показывать список входящих писем.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать MailList для отображения данных.

import React from "react";
import { withData } from "../../context/Data";
import MailList from "../MailList";

const InboxList = ({ match, data }) => {
    const inboxData = data.inbox;

    return (
        <div className="t-inbox-list">
            {inboxData.map((item) => (
                <MailList key={item.id} body={item.body} toPath={`${match.url}/${item.id}`}/>
            ))}
        </div>
    )
}

export default withData(InboxList)
