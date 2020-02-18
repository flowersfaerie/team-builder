import React from 'react';

function Form() {
    const [teamMember, setTeamMember] = useState();
    return (
        <Form>
            <label>Name</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="email"></input>
            <label>Role</label>
            <input type="select"></input>
        </Form>
    );
  }
  
  export default Form;