import { useState } from "react";

const User = ({ name }) => {
  const [count1] = useState(0);
  const [count2] = useState(0);

  return (
    <div className="user-card">
      <h1>Count = {count1}</h1>
      <h1>Count = {count2}</h1>
      <h2>Name:{name}</h2>
      <h3>Loaction: Nagpur</h3>
      <h4>Contact: @Aniket_Code</h4>
    </div>
  );
};

export default User;
