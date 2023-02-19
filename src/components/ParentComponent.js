import React, { useState, useCallback } from "react";
import Hello from "./Hello";
import Count from "./Count";
import Button from "./Button";

function ParentComponent() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const incermentage = useCallback(() => {
    setAge((prev) => prev + 1);
  }, [age]);

  const incermentSalary = useCallback(() => {
    setSalary((prev) => prev + 1000);
  }, [salary]);

  return (
    <div>
      <Hello />
      <Count text="age" count={age} />
      <Button handleClick={incermentage}>incerment age</Button>
      <Count text="salary" count={salary} />
      <Button handleClick={incermentSalary}>incerment salary</Button>
    </div>
  );
}

export default ParentComponent;
