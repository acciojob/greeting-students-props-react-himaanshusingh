import React, { useState } from "react";

const Welcome = ({ name }) => {
  name = "Himanshu";
  return (
    <>
      <h1>Hey ! {name}</h1>
      <h2>Welcome to Newton School.</h2>
    </>
  );
};

export default Welcome;
