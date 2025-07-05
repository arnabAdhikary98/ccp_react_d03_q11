import React, { useState } from "react";

function Form() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.trim() === "") {
      setError("Username cannot be empty.");
    } else {
      setError("");
      alert(`Submitted username: ${username}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username: </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
