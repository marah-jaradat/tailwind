import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../context/auth/main";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import { Form, InputGroup } from "react-bootstrap";

const Parent = styled.div`
  width: 100%;
  height: 100%;
  display: table;
`;
const Child = styled.div`
  background-color: #fff;
  display: table-cell;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Image = styled.div`
  // background: url("https://user-images.githubusercontent.com/75664971/175835664-d12571e6-6099-450c-b325-967728e09b91.png")
  //   no-repeat fixed right;
  background-image: linear-gradient(
      to bottom,
      rgba(245, 246, 252, 0.52),
      rgb(75, 93, 103)
    ),
    url("https://th.bing.com/th/id/R.3619575fb9d6fdba617b0b41f4e26819?rik=4HuiW3eM%2fGEQJw&pid=ImgRaw&r=0");
  object-fit: cover;
  background-size: 100%;
  width: 65%;
  display: table-cell;
  hight: 100%;
`;
const Text = styled.h1`
  font-size: 1.5em;
  // color:#e91e63;
  color: var(--Primary-Main);
  text-align: center;
  font-weight: bold;
  margin-bottom: 0.5em;
`;

const FormStyle = styled.div`
  width: 100%;
  color: #673ab7;
`;

const Icons = styled.div`
  color: #673ab7;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 10px;
`;
export default function Login(props) {
  let navigate = useNavigate();
  const context = useContext(LoginContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  useEffect(() => {
    if (context.loggedIn) navigate("/browse");
  });

  const handleLogin = (e) => {
    e.preventDefault();
    context.login(username, password);
  };

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  return (
    <>
      {/* <BsFillArrowLeftCircleFill  onClick={() => navigate(-1)} style={{ fontSize: "30px" ,color: "#673AB7",marginLeft:'3%',position:'absolute',marginTop:'3%'}} /> */}

      <Parent>
        <Image>
          <img alt="" />
        </Image>

        <Child>
          <Text>Welcome back </Text>
          <form onSubmit={handleLogin}>
            <FormStyle>
              <InputGroup className="mb-3">
                {/* <InputGroup.Text id="basic-addon1">username</InputGroup.Text> */}
                <Form.Control
                  onChange={handleChange}
                  value={username}
                  placeholder="User Name"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>

              {/* <InputGroup className="mb-3">
                <Form.Control
                  onChange={handleChange}
                  placeholder="username"
                  value={username}
                  type="text"
                  name="username"
                />
              </InputGroup> */}

              <InputGroup className="mb-3">
                <Form.Control
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder="Password"
                  type="password"
                  name="password"
                />
              </InputGroup>
            </FormStyle>

            <Button
              type="submit"
              style={{
                borderColor: "#673AB7",
                background: "rgb(255, 6, 183)",
                textAlign: "center",
                height: "39px",
                width: "100%",
              }}
            >
              Sign in
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
                OR
              </span>
            </p>

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
              Don't have an account,{" "}
              <span style={{ fontWeight: "bold" }}>Click here</span>
            </Button>
          </form>
        </Child>
      </Parent>
    </>
  );
}
