import React, { useState } from 'react';
import Rows from './Rows';

const App: React.FC = () => {
    const [rows, setRows] = useState(3);
    const [cells, setCells] = useState(3);

    return (
        <div>
            <div>
                <p>Введите высоту поля:</p>
                <input
                    value={rows}
                    onChange={(e) => setRows(+e.target.value)}
                    type="number"
                />
            </div>
            <div style={{ marginBottom: 20 }}>
                <p>Введите ширину поля:</p>
                <input
                    value={cells}
                    onChange={(e) => setCells(+e.target.value)}
                    type="number"
                />
            </div>
            <table style={{ borderCollapse: 'collapse' }}>
                <tbody>
                    <Rows rows={rows} cells={cells} />
                </tbody>
            </table>
        </div>
    );
};

export default App;
