import React, { useState } from 'react';

function Expense() {
  const [userText, setUserText] = useState('');
  const [userAge, setUserAge] = useState('');
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  const changeHandler = (event) => {
    setUserText(event.target.value);
  };

  const changeAgeHandler = (event) => {
    setUserAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // Condition 1: Validate name and age are not empty
    if (!userText.trim() || !userAge.trim()) {
      setError('Please enter a valid name and age.');
      return;
    }

    // Condition 2: Validate age is greater than 0
    const ageValue = parseInt(userAge);
    if (isNaN(ageValue) || ageValue <= 0) {
     alert('Please enter a valid age greater than 0.');
      return;
    }

    // Reset error message
    setError('');

    const newUser = {
      text: userText,
      age: userAge
    };
    setUsers((prevUsers) => [...prevUsers, newUser]);
    setUserText('');
    setUserAge('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label> UserName</label>
        <input type="text" value={userText} onChange={changeHandler} />

        <label>age</label>
        <input type="number" value={userAge} onChange={changeAgeHandler} />

        <button type="submit">Add User</button>
      </div>

      <div>
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <h2>Users:</h2>
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              {user.text}, {user.age}
            </li>
          ))}
        </ul>
      </div>
    </form>
  );
}

export default Expense;