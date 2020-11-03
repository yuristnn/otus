import React, { useState } from 'react';

type CellProps = {
    num: number;
};

const Cell: React.FC<CellProps> = ({ num }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <td
            onClick={() => setIsOpen(!isOpen)}
            style={{
                border: '1px solid #000',
                width: 25,
                height: 25,
                textAlign: 'center',
            }}
        >
            {isOpen ? num : ' '}
        </td>
    );
};

export default Cell;
