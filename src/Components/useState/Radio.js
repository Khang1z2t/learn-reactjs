import React from "react";

const courses = [
  { id: 1, name: "ReactJS" },
  { id: 2, name: "NodeJS" },
  { id: 3, name: "VueJS" },
  { id: 4, name: "Angular" },
];

function Radio() {
  const [checked, setChecked] = React.useState();

  const handleSubmit = () => {
    // Call API
    console.log(checked);
  };

  return (
    <div className="container">
      {courses.map((course) => (
        <div key={course.id}>
          <input
            type="radio"
            id={course.id}
            checked={checked === course.id}
            onChange={() => setChecked(course.id)}
          />
          <label htmlFor={course.id}>{course.name}</label>
        </div>
      ))}
      <button className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}

export default Radio;
