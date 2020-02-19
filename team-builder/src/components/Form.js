import React, { useState } from 'react';

function Form = props => {
    const [member, setMember] = useState({
        memName: "",
        memEmail: "",
        memRole: "",
    });

    const changeHandler = event => {
        setMember({ ...member, [event.target.name]: event.target.value });
    };

    const submitForm = event => {
      event.preventDefault(); 
      props.addNewMember(member); 
      setNote({ memName: "", memEmail: "", memRole: "" }); 
    };

    return (
        <Form onSubmit={submitForm}>
            <label htmlFor="memName">Name</label>
            <input 
                type="text" 
                id="memName" 
                name="memName" 
                placeholder="Enter Name" 
                value={member.memName} 
                onChange={changeHandler}>
            </input>

            <label htmlFor="memEmail">Email</label>
            <input 
                type="email"
                id="memEmail" 
                name="memEmail" 
                placeholder="Enter Email Address" 
                value={memEmail} 
                onChange={changeHandler}>
            </input>

            <label htmlFor="memRole">Role</label>
            <input 
                type="select" 
                id="memRole" 
                name="memRole" 
                value={memRole} 
                onChange={changeHandler}>
                    <option value="1">UX/UI Designer</option>
                    <option value="2">Front-End Developer</option>
                    <option value="3">Back-End Developer</option>
                    <option value="4">Full Stack Developer</option>
            </input>

            <button type="submit">Add Note</button>

        </Form>
    );
  }
  
  export default Form;

  

