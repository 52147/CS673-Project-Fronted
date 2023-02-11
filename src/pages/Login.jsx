import React, { useState } from 'react'

export const Login = () => {
  //[current state, function is used to update state]
  // useState(initial state to empty string)
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  const [isMouseOver, setMouseOver] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setContact((preValue) => {
      return {
        // spread operator(...) : allows us to copy existing array/object into another array/object
        ...preValue,
        [name]: value
      };
    });
  }

  function handleMouseOver() {
    setMouseOver(true);
  }
  function handleMouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      {/* useState to update first and last name */}
      <h1>
        Hello {contact.fName}
        {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          // onchange event: event occurs when value of element has been changed
          onChange={handleChange}
          name="fName"
          value={contact.fName}
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          name="lName"
          value={contact.lName}
          placeholder="Last Name"
        />
        <input
          onChange={handleChange}
          name="email"
          value={contact.email}
          placeholder="Email"
        />
        <button
          style={{ background: isMouseOver ? "black" : "white" }}
          // html dom event: onMouseOver, onMouseOut
          // event handling: allows javascript handle html event
          onMouseOver={handleMouseOver} // handleMouseOver function will be executed when Mouse over
          onMouseOut={handleMouseOut}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
// export default Login;
