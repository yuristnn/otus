import React from 'react';
import Cell from './Cell';

type RowsProps = {
    rows: number;
    cells: number;
};

const Rows: React.FC<RowsProps> = (props) => {
    const { rows, cells } = props;

    const arrRows = Array.from(Array(rows).keys());
    const arrCells = Array.from(Array(cells).keys());
    return (
        <>
            {arrRows.map((row) => (
                <tr key={row}>
                    {arrCells.map((cell) => (
                        <Cell num={row * cells + cell + 1} key={cell} />
                    ))}
                </tr>
            ))}
        </>
    );
};

export default Rows;
