
import './Alerts.css';
import { useEffect, useRef, useState } from 'react';
import { MessagingObservable } from '../../../services/messaging.service';
import { MessageInterface } from '../../../models/notification.model';
// import { takeUntil, fromEvent, interval, takeLast, delay } from "rxjs";
import { delay } from 'rxjs';
export interface AlertsProps {
    children: React.ReactNode;
    }



export const Alerts = () => {
    const detailsRef = useRef<HTMLDetailsElement>(null);
    const [messages, setMessages] = useState<MessageInterface[]>([]);
    // const [notification, setNotification] = useState<MessageInterface | null>(null);
     useEffect(() => {
    
        const unsubscribe = MessagingObservable.onMessageReceived().pipe(delay(2000)).subscribe(
          (message: MessageInterface) => {
            // console.log("Message received in alert", message);
            setMessages((prevMessages) => [...prevMessages, message]);
            if (detailsRef.current) {
              detailsRef.current.open = true;
            }
          }
        );
    
        return () => {
          unsubscribe.unsubscribe();

        };
      }, [detailsRef]);

  return (
    <details className="alert-overlay" ref={detailsRef}>
        <summary>Alerts &#128204;</summary>

      <div className="alert">
        {" "}
        {messages.map((message, index) => (
          <div key={index}>
            <h3>{message.payload.data.from}</h3>
            <p>{message.payload.data.text}</p>
          </div>
        ))}
      </div>
    </details>
  );
};
