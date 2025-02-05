import { useState, useEffect } from 'react';
import { concatMap, mapTo, range, timer } from "rxjs";
import "./ProgresiveCounter.css";
interface ProgresiveCounterProps {
    start: number;
    end: number;
}

const ProgresiveCounter: React.FC<ProgresiveCounterProps> = ({ start, end, }) => {
    const [count, setCount] = useState(start);

    useEffect(() => {
        range(count,end)
        .pipe(
          concatMap(value => timer(20).pipe(mapTo(value)))
        )
        .subscribe({
          next: (fund) => setCount(fund),
          error: (error) => console.error("Error updating funds", error),
          complete: () => console.log("Funds updated"),
        });
    }, [start, end]);

    return       <div className="funds-total">${count}</div>;
};

export default ProgresiveCounter;