import React from "react";
import './CustomerDocument.css';
import { FaEye, FaDownload, FaTrash } from "react-icons/fa";

const files = Array(8).fill({
  name: "Abc-defghijkl",
  size: "1.2 Mb",
  date: "28 July 2024",
  sender: "CA Anuj Verma",
});

const FilesTable = () => {
  return (
    <div className="container">
      <div className="headerdiv">
        <h2>All Files</h2>
      </div>
      <div className='tabsandbut'>
      <div className="tabs">
          <span className="active">View all</span>
          <span>Documents</span>
          <span>Media Files</span>
          <span>PDFs</span>
          
        </div>
      <div className="actions">
        <button className="filter-btn">Filters</button>
        <button className="export-btn">Export</button>
      </div>
      </div>


      <div className="table-container">
        <table className="files-table">
          <thead>
            <tr>
              <th>File Name</th>
              <th>Size</th>
              <th>Date</th>
              <th>Send By</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {files.map((file, index) => (
              <tr key={index}>
                <td>
                  <span className="file-icon">📁</span> {file.name}
                </td>
                <td>{file.size}</td>
                <td>{file.date}</td>
                <td>
                  <span className="avatar"></span> {file.sender}
                </td>
                <td className="action-icons">
                  <FaEye className="icon" />
                  <FaDownload className="icon" />
                  <FaTrash className="icon delete" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      

    </div>
  );
};

export default FilesTable;
