import React, { useState } from "react";

const Welcome = ({ name }) => {
  name = "Himanshu";
  return (
    <>
      <h1>Hey !</h1>
      <p>{name}</p>
      <h2>Welcome to School.</h2>
    </>
  );
};

export default Welcome;
