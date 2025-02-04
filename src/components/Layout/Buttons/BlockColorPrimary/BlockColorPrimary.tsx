import React from 'react';
import './BlockColorPrimary.css';

interface BlockColorPrimaryProps {
    children: React.ReactNode;
}

const BlockColorPrimary: React.FC<BlockColorPrimaryProps> = ({  children }) => {
    return (
        <div className="block-transparent" >
            {children}
        </div>
    );
};

export default BlockColorPrimary;