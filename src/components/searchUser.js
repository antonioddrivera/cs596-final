import axios from "axios";
import React, { useEffect, useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const SearchUser = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState("Submit");
  const [attempts, setAttempts] = useState(3);

  const navigate = useNavigate();

  const handleGetUser = async () => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      if (response.status === 200) {
        setUser(response.data);
        setLoading("Submit");
        setErrorMsg(null);
      }
    } catch (error) {
      setLoading("Submit");
      setAttempts((currentAttempt) => currentAttempt - 1);
      setErrorMsg(`User does not exist! ${attempts - 1} attempts remaining`);
    }
  };

  const handleAddFriend = () => {
    const currentFriends = JSON.parse(localStorage.getItem('friends') || '[]');
    if (!currentFriends.includes(username)) {
      localStorage.setItem('friends', JSON.stringify([...currentFriends, username]));
      alert(`${username} added to friends!`);
    }
  };

  useEffect(() => {
    if (attempts <= 0) {
      setErrorMsg("Too many attempts, REDIRECTING...");
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [attempts, navigate]);

  return (
    <>
      <h3>Search User</h3>
      <form className="login-form" onSubmit={(e) => e.preventDefault()}>
        {errorMsg && (
          <span style={{ fontSize: "12px", color: "orangered" }}>
            {errorMsg}
          </span>
        )}
        <input
          type="text"
          placeholder="GitHub Username"
          className="login-inp"
          onChange={(e) => {
            setUsername(e.target.value);
            setUser(null);
            setErrorMsg(null);
          }}
          value={username}
        />
        <button type="button" className="login-submit-btn" onClick={handleGetUser}>
          {loading}
        </button>
      </form>
      {user && (
        <div className="user-profile">
          <img src={user.avatar_url} alt="Avatar" />
          <div>{user.login}</div>
          <button onClick={handleAddFriend}>Add to Friends</button>
        </div>
      )}
    </>
  );
};

export default SearchUser;