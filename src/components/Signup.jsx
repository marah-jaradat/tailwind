import { useContext, useState } from "react";
import { LoginContext } from "../context/auth/main";

import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

const Parent1 = styled.div`
  width: 100%;
  height: 100%;
  display: table;
`;
const Child1 = styled.div`
  background-color: #fff;
  // padding: 70px 20px 10px 70px;
  width: 35%;
  display: table-cell;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Image1 = styled.div`
  // background: url("https://user-images.githubusercontent.com/75664971/175835750-ea519f51-9753-4e1f-b75c-85035ca2d89f.png") no-repeat fixed right;

  background-image: linear-gradient(
      to bottom,
      rgba(245, 246, 252, 0.52),
      rgb(75, 93, 103)
    ),
    url("https://www.how2become.com/wp-content/uploads/2019/07/Answering-interview-questions-with-no-experience-is-really-tough..jpeg");

  // background: linear-gradient(to right,#673ab7,#e91e63) no-repeat fixed right;
  object-fit: cover;
  background-size: 100%;
  width: 65%;

  display: table-cell;
  hight: 100%;
`;

const Text1 = styled.h1`
  font-size: 1.5em;
  // color:#e91e63;
  color: var(--Primary-Main);
  text-align: center;
  font-weight: bold;
  margin-bottom: 0.5em;
`;

const FormStyle1 = styled.div`
  width: 100%;
  color: #673ab7;
`;

const Icons1 = styled.div`
  color: #673ab7;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 10px;
`;

export default function Signup(props) {
  const context = useContext(LoginContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [Email, setEmail] = useState("");

  const signupHandller = (e) => {
    // e.preventDefault();
    context.signup(username, password, firstname, lastname, Email);
  };
  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <>
      <Parent1>
        <Image1>
          <img />
        </Image1>
        <Child1>
          <Text1>Welcome to Support</Text1>

          {/* <Card.Body> */}
          <form onSubmit={signupHandller}>
            <FormStyle1>
              <InputGroup className="mb-3">
                <Form.Control
                  aria-label="FirstName"
                  placeholder="First Name"
                  onChange={(e) => setFirstname(e.target.value)}
                  value={firstname}
                  aria-describedby="basic-addon1"
                />

                <Form.Control
                  aria-label="LastName"
                  onChange={(e) => setLastname(e.target.value)}
                  value={lastname}
                  placeholder="Last Name"
                  style={{ marginLeft: "2%" }}
                />
              </InputGroup>

              <InputGroup className="mb-3">
                {/* <InputGroup.Text id="basic-addon1">username</InputGroup.Text> */}
                <Form.Control
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  placeholder="User Name"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>

              <InputGroup className="mb-3">
                {/* <InputGroup.Text id="basic-addon1">Email</InputGroup.Text> */}
                <Form.Control
                  onChange={(e) => setEmail(e.target.value)}
                  value={Email}
                  placeholder="Email"
                  type="Email"
                  aria-label="Email"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>

              <InputGroup className="mb-3">
                {/* <InputGroup.Text id="basic-addon1">password</InputGroup.Text> */}
                <Form.Control
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder="Password"
                  type="password"
                  aria-label="password"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </FormStyle1>

            <Button
              type="submit"
              style={{
                borderColor: "#673ab7",
                background: "#FF06B7",
                textAlign: "center",
                height: "39px",
                width: "100%",
              }}
            >
              Sign up
            </Button>

            <p
              style={{
                textAlign: "center",
                color: "gray",

                textAlign: "center",
                borderBottom: "1px solid #000",
                lineHeight: "0.1em",
                margin: "10px 0 20px",
                marginTop: "20px",
              }}
            >
              {" "}
              <span
                style={{
                  background: "#fff",
                  padding: "0 10px",
                  fontSize: "13px",
                }}
              >
                Or
              </span>
            </p>
          </form>

          <Button
            variant="link"
            style={{
              fontSize: "15px",
              color: "#673ab7",
              width: "100%",
              textAlign: "center",
              marginTop: "10px",
            }}
            onClick={props.toggleShow}
          >
            If you have an account,{" "}
            <span style={{ fontWeight: "bold" }}>Click here</span>
          </Button>
          {/* </Card.Body> */}
        </Child1>
      </Parent1>
    </>
  );
}
