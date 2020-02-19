import React from "react";

const Team = props => {
  return (
    <div className="note-list">
      {props.teamMember.map(note => (
        <div className="note" key={member.id}>
            <h2>{member.memName}</h2>
            <p>{member.memEmail}</p>
            <p>{member.memRole}</p>
        </div>
      ))}
    </div>
  );
};

export default Team;