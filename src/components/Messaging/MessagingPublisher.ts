import { BehaviorSubject, filter, Observable} from "rxjs";
import { MessagePayload, NotificationPayload } from "../../models/notification.model";
import { messageMocks, notificationMocks } from "../../mocks/notifications.mock";


export interface MessageInterface {
    type: string
    payload: MessagePayload | NotificationPayload

}


class MessagingPublisher {
    // public static: Observable<MessageInterface> = from([...notificationMocks, ...messageMocks])
    private messages$: BehaviorSubject<MessageInterface[]> = new BehaviorSubject<MessageInterface[]>([])
    
    constructor (initialMessages: MessageInterface[]) {
        this.messages$.next(initialMessages)
    }

    public subscribe (callback: (message: MessageInterface[]) => void) {
        const subscription = this.messages$.subscribe(callback)
        return () => subscription.unsubscribe()
    }

    public notify (message: MessageInterface[]) {
        this.messages$.next(message)
    }
    
    public onMessage (): Observable<MessageInterface[]> {
        return this.messages$.asObservable()
    }

    public onNotification (): Observable<MessageInterface[]> {
        return this.messages$.asObservable()
    }
    
    public onFundReceived (): Observable<MessageInterface[]> {
        return this.messages$.asObservable()
    }
}

const initialMessages = [...notificationMocks, ...messageMocks]

export const MessagingObservable = new MessagingPublisher(initialMessages)