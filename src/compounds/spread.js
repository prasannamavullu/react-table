import React, { useState } from 'react';
import "./css/in.css"; // Import custom CSS for styling

const Spreadsheet = () => {
  const [data, setData] = useState({});
  
  const handleChange = (row, col, value) => {
    // Update the cell value in the state
    setData((prevData) => ({
      ...prevData,
      [`${row}-${col}`]: value,
    }));
  };

  const renderTableHeader = () => {
    const cols = 26; // Number of columns (A-Z)
    return (
      <tr>
        <th></th>
        {Array.from({ length: cols }, (_, i) => (
          <th key={i}>{String.fromCharCode(65 + i)}</th>
        ))}
      </tr>
    );
  };

  const renderTableBody = () => {
    const rows = 1000; // Number of rows (adjust as needed)
    return Array.from({ length: rows }, (_, rowIndex) => (
      <tr key={rowIndex}>
        <th>{rowIndex + 1}</th>
        {Array.from({ length: 26 }, (_, colIndex) => (
          <td key={colIndex}>
            <input
              type="text"
              value={data[`${rowIndex}-${colIndex}`] || ''}
              onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
            />
          </td>
        ))}
      </tr>
    ));
  };

  return (
    <div className="spreadsheet-container">
      <table className="spreadsheet-table">
        <thead>{renderTableHeader()}</thead>
        <tbody>{renderTableBody()}</tbody>
      </table>
    </div>
  );
};

export default Spreadsheet;
