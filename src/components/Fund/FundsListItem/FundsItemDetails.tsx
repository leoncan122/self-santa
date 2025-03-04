import { ReactNode } from "react";



export interface FundsItemDetailsProps {
    children: ReactNode;
}


const FundsItemDetails = ({ children }: FundsItemDetailsProps) => {
    return (
        <div className="funds-details">
            {children}
        </div>
    )
}

export default FundsItemDetails;