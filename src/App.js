import React, { useState } from "react";
import "./App.css";

const Form = () => {
  const [name, setName] = useState("No name");
  const [age, setAge] = useState("No age");

  function handleNameChange(e) {
    setName(e.target.value);
  }
  // function handleAgeChange(e) {
  //   setAge(e.target.value);
  // }
  function handleBirthDateChange(e) {
    const dateOfBirth = e.target.value;
    const calculatedAge = calculateAge(dateOfBirth);
    setAge(calculatedAge);
  }

  function calculateAge(dob) {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    // If birth date is not reached this year yet
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age;
  }
  return (
    <div className="form">
      <div className="form-left">
        <div className="label">
          <label>Name:</label>
          <input type="text" onChange={handleNameChange} />
        </div>
        <div className="label">
          <label>Date of birth year:</label>
          <input type="text" onChange={handleBirthDateChange} />
        </div>
      </div>
      <div className="form-right">
        <p>Name: {name}</p>
        <p>Age: {age}</p>
      </div>
    </div>
  );
};

export default Form;
