import React, { useState } from "react";
import { styled } from "styled-components";
import { Navigate } from "react-router-dom";

function LoginComponent({ login }) {
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [navigate, setNavigate] = useState(false);
  const LOGIN_URL = "http://localhost:8080/auth/login";
  const handleSubmit = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };
    fetch(LOGIN_URL, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setEmail("");
        setPassword("");
        setNavigate(true)
        console.log(data);
  // note using deconstructuring is better for cleaner code
        const {access, refresh} = data.token;
        localStorage.setItem("accessToken", data.token);
        localStorage.setItem("refreshToken", data.token);
      });
    
  };
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    alert("Tokens have been removed");
  };
  if (navigate) {
    return <Navigate to="/signup" />;
  }

  return (
    <div>
      <LoginContainer>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <Input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button>Login</Button>
        <button onClick={handleLogout}>Logout</button>
      </Form>
      </LoginContainer>
    </div>
  )
}
const LoginContainer = styled.section`
  border: 1px solid black;
  height: 400px;
  width: 350px;
  margin: 100px auto;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 200px;
`;
const Input = styled.input`
  width: 240px;
  height: 28px;
  border-radius: 3px;
  border-color: rgba(0, 0, 0, 0.2);
  padding: 3px;
`;
const Button = styled.button`
  width: 200px;
  border-color: rgba(0, 0, 0, 0.2);
  height: 30px;
  margin-top: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export default LoginComponent
