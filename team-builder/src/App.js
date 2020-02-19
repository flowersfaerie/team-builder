import React, { useState } from 'react';
import './App.css';
import Form from "./components/Form";
import Team from "./components/Team";

function App() {
  const [teamMember, setTeamMember] = useState({name: "", email: "", role: "" });

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      memName: member.memName,
      memEmail: member.memEmail,
      memRole: member.memRole,
    };

    setTeamMember([...teamMember, newMember]);
  };

  return (
    <div className="App">
      <h1>My Team</h1>
      {/* Step 7: Pass addNewNote as a prop into NoteForm */}
      <Form addNewMember={addNewMember} />
      <Team teamMember={teamMember} />
    </div>
  );
};

export default App;
