import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";

const FormPage = ({ signin }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const handleSignin = (e) => {
    e.preventDefault();
    if (email === "admin@test.com") {
      if (password === "admin@1234") {
        localStorage.setItem("loggedin", true);
        signin();
      } else {
        alert("wrong password");
      }
    } else {
      alert("email not registered");
    }
  };

  return (
    <MDBContainer
      style={{
        marginTop: "20vh",
        marginLeft: "30vw",
      }}
    >
      <MDBRow>
        <MDBCol md="6">
          <form onSubmit={handleSignin}>
            <p className="h5 text-center mb-4">Sign in</p>
            <div className="grey-text">
              <MDBInput
                label="Type your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
                onChange={(e) => setEmail(e.target.value)}
              />
              <MDBInput
                label="Type your password"
                icon="lock"
                group
                type="password"
                validate
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="text-center">
              <MDBBtn onClick={handleSignin}>Login</MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default FormPage;
