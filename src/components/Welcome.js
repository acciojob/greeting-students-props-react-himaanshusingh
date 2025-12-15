import React, { useState } from "react";

const Welcome = ({ name }) => {
  name = "Himanshu";
  return (
    <div>
      <h1>Welcome Page</h1>
      <p>Hey {name}!</p>
      <h2>Welcome to School.</h2>
    </div>
  );
};

export default Welcome;
