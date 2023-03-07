import React from "react";
import Container from "react-bootstrap/Container";
import LoginForm from "../../components/form";

const Login = () => {
  return (
    <Container className="d-flex mt-5">
      <LoginForm />
    </Container>
  );
};

export default Login;
