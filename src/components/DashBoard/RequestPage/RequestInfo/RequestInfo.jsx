import React from "react";
import "./RequestInfo.css";

function RequestInfo({ name, gender, designation, topic }) {
  return (
    <div className="Req">
      <div className="ReqName">
        <p>{name}</p>
      </div>
      <div className="ReqGender">{gender}</div>
      <div className="ReqDesignation">{designation}</div>
      <div className="ReqTopic">{topic}</div>
      <div className="ReqAccept">
        <div className="Accept">Accept</div>
      </div>
      <div className="ReqDecline">
        <div className="Decline">Decline</div>
      </div>
    </div>
  );
}

export default RequestInfo;
