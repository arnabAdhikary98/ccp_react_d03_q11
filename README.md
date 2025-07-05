# ccp_react_d03_q11

## Controlled Form Basics

### Problem Statement

Build a simple controlled form in React with a single input field for a **"username"**. The form should:

- Use `useState` to manage the value of the input.
- Display an error message if the input is empty when submitted.
- Display the submitted value in an alert if valid.

---

### Explanation

- We use `useState` to keep track of the `username` value.
- The input field is **controlled**, meaning its value is driven by React state.
- On form submission:
  - If the username is empty, an error message is displayed.
  - Otherwise, an alert with the submitted username is shown.

---

### Code

```jsx
import React, { useState } from "react";

function ControlledForm() {
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

export default ControlledForm;
