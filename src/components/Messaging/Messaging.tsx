import { MessagingObservable } from "../../services/messaging.service";
import PageViewWrapper from "../Layout/PageViewWrapper/PageViewWrapper";
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
    return (
        <PageViewWrapper>
            <h2>Messaging Panel</h2>
            <button onClick={handleNotification}>Send Message</button>
        </PageViewWrapper>
    )
}