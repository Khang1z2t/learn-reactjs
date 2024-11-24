import React from "react";

function Form() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  const submitForm = () => {
    console.log({
        name,
        email,
    });
    
  };

  return (
    <div className="container">
      <div className="form-group ">
        <label htmlFor="name">Tên</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary" onClick={submitForm}>
        Gửi
      </button>
    </div>
  );
}

export default Form;
