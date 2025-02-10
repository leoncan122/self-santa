import { ReactNode } from "react";



export interface FundsItemInfoProps {
    children: ReactNode;
}


const FundsItemInfo = ({ children }: FundsItemInfoProps) => {
    return (
        <div className="funds-Info">
            {children}
        </div>
    )
}

export default FundsItemInfo;