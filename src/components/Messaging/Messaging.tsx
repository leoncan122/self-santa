import { MessagingObservable } from "../../services/messaging.service";
import PageViewWrapper from "../Layout/PageViewWrapper/PageViewWrapper";
import {MESSAGES_LIST} from "../../mocks/messages";
import FundsListItem from "../Fund/FundsListItem/FundsListItem";
import FundsItemDetails from "../Fund/FundsListItem/FundsItemDetails";
import FundsItemInfo from "../Fund/FundsListItem/FundsItemInfo";
import { Link } from "react-router-dom";


export interface MessageListItem {
    id: number;
    from: string;
    body: string;
    timestamp: Date;
    thread_id: string;
}
export const MessagingPanel = () => {
    

    const handleNotification = () => {
            MessagingObservable.notify({
                type: "notification",
                payload: {
                    id: "notif134",
                    data: {
                        text: `You have added 233 from leon`,
                        amount: '23',
                        dateCreated: new Date(),
                        from: 'leon'
                    }
                }
            });
      
    }
    if (MESSAGES_LIST.length === 0) {
        return (
            <PageViewWrapper>
                <h2>Messaging Panel</h2>
                <p>No messages found</p>
            </PageViewWrapper>
        )
    }

    return (
        <PageViewWrapper>
            <div className="last-interactions">
                {Array(3).fill(0).map((_, index) => (
                    <div key={index} className="last-interaction" />
                ))}
            </div>
            <h2>Messaging Panel</h2>
            <button onClick={handleNotification}>Send Message</button>
            <ul className="primary-list">
          {MESSAGES_LIST.map(({id,from,thread_id,body, timestamp}) => (
               <Link to={`/messages/${thread_id}`}>
               <FundsListItem key={id} >
                    <FundsItemDetails>
                        <p className="fund-name">{from}</p>
                        <p className="fund-text">{body}</p>
                  </FundsItemDetails>
                  <FundsItemInfo>
                    {/* <p className="fund-amount">${amount}</p> */}
                    <p className="fund-date">{timestamp ? new Date(timestamp).toLocaleDateString('en-US', {day: 'numeric', month: 'short',hour: 'numeric'}) : '-'}</p>
                  </FundsItemInfo>
            </FundsListItem>
            </Link>
        ))}
        </ul>
        </PageViewWrapper>
    )
}