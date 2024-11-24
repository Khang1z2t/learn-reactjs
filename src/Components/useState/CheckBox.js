import React from "react";

const courses = [
  { id: 1, name: "ReactJS" },
  { id: 2, name: "NodeJS" },
  { id: 3, name: "VueJS" },
  { id: 4, name: "Angular" },
];

function CheckBox() {
  const [checked, setChecked] = React.useState([]);

  const handleChecked = (id) => {
    setChecked((prev) => {
      const isChecked = checked.includes(id);
      if (isChecked) {
        return prev.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  console.log(checked.join(", "));

  const handleSubmit = () => {
    // Call API
    console.log({ id: checked });
  };
  return (
    <div className="container">
      {courses.map((course) => (
        <div key={course.id}>
          <input
            type="checkbox"
            id={course.id}
            checked={checked.includes(course.id)}
            onChange={() => handleChecked(course.id)}
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

export default CheckBox;
