import { MessagingObservable } from "../../services/messaging.service";
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
        <div>
            <h1>Messaging Panel</h1>
            <button onClick={handleNotification}>Send Message</button>
        </div>
    )
}