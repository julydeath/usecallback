import React from "react";

function Hello() {
  console.log("render hello");
  return (
    <div>
      <h2>UseCallback Hook</h2>
    </div>
  );
}

export default React.memo(Hello);
