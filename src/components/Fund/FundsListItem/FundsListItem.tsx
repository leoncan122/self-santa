

export interface FundsListItemProps {
    key: number | string;
    children: React.ReactNode;
}

const FundsListItem =  ({ key, children }: FundsListItemProps) => {
    return (
        <li key={key} className="funds-item">
            {children}
            
      </li>
    )

}

export default FundsListItem;