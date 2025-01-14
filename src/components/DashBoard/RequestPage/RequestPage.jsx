import React from "react";
import "./RequestPage.css";
import RequestInfo from "./RequestInfo/RequestInfo";
import requests from "./RequestInfo/ReqInfo";

function RequestPage() {
  return (
    <div className="RequestContainer">
      <div className="RequestText">
        <p>Requests</p>
      </div>
      <div className="Requests">
        {requests.map((request, index) => (
          <RequestInfo
            key={index}
            name={request.name}
            gender={request.gender}
            designation={request.designation}
            topic={request.topic}
          />
        ))}
      </div>
    </div>
  );
}

export default RequestPage;
