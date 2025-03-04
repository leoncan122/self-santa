import { BehaviorSubject,  Observable, range} from "rxjs";
import { MessageInterface } from "../models/notification.model";
import { messageMocks, notificationMocks } from "../mocks/notifications.mock";

export interface Publisher {
    subscribe: (callback: (message: MessageInterface) => void) => () => void;
    notify: (message: MessageInterface) => void;
    onMessageReceived: () => Observable<MessageInterface>;
}

class MessagingPublisher implements Publisher {
    // public static: Observable<MessageInterface> = from([...notificationMocks, ...messageMocks])
    private messages$: BehaviorSubject<MessageInterface> 
    
    constructor (initialMessages: MessageInterface[]) {
        this.messages$ = new BehaviorSubject<MessageInterface>(initialMessages[0])
    }

    public subscribe (callback: (message: MessageInterface) => void): () => void {
        const subscription = this.messages$.subscribe(callback)
        return () => subscription.unsubscribe()
    }

    public notify (message: MessageInterface): void {
        this.messages$.next(message)
    }
    
    public notifyAll(messages: MessageInterface[]) {
        messages.forEach((message) => this.notify(message)); // Llama a `notify` para cada mensaje
    }

    public onMessageReceived (): Observable<MessageInterface> {
        return this.messages$.asObservable()
    }

    public onFundReceived (number?: number, count?: number) {
        return range(number ||0, count)
    }


}

const initialMessages = [...notificationMocks, ...messageMocks]

export const MessagingObservable = new MessagingPublisher(initialMessages)