import React, { PureComponent } from 'react';
import { withData } from '../../context/Data';
import Mail from '../Mail';

class InboxMail extends PureComponent {
  render() {
    const {
      match: {
        params: { id }
      },
      data
    } = this.props;
    const mail = data.inbox.find(mail => mail.id === id);

    return <Mail key={mail.id} {...mail} />;
  }
}

export default withData(InboxMail);
