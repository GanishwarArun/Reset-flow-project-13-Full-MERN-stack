import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Form, Button, Card, Container } from "react-bootstrap";
import toast from "react-hot-toast";
import config from "../utils/config";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Log API URL for debugging purposes
      console.log("API URL:", config.API_URL);

      const res = await axios.post(`${config.API_URL}/user/login`, {
        email,
        password,
      });

      if (res.status === 200) {
        console.log(res.data.message);
        toast.success(res.data.message);
        navigate("/dashboard"); // Redirect to dashboard upon successful login
      }
    } catch (error) {
      // Enhanced error handling with default error message
      toast.error(
        error.response?.data?.message || "Login failed. Please try again."
      );
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
      <Card style={{ width: "22rem" }} className="p-4 shadow-sm">
        <h2 className="text-center mb-4">Log In</h2>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              autoComplete="current-password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="w-100"
            disabled={loading}
          >
            {loading ? "Loading..." : "Submit"}
          </Button>

          <div className="text-center mt-3">
            <Link to="/user/forgot-password" className="text-decoration-none">
              Forgot Password?
            </Link>
          </div>
          <div className="text-center mt-3">
            <Link to="/user/create" className="text-decoration-none">
              Register?
            </Link>
          </div>
        </Form>
      </Card>
    </Container>
  );
}

export default Login;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { Form, Button, Card, Container } from "react-bootstrap";
// import toast from "react-hot-toast";
// import config from "../utils/config";

// function Login() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("")

//     const handleLogin = async () => {
//          {
//             const res = await axios.post(`${config.API_URL}/user/login`, { email, password });
//             if (res.status === 200) {
//                 console.log(res.data.message)
//                 toast.success(res.data.message);
//             }
//         } catch (error) {
//             toast.error(error.response.data.message)
//         }
//     }

//     return (
//         <>
//             <Container className='d-flex justify-content-center align-items-center min-vh-100'>
//                 <Card style={{ width: '22rem' }} className="p-4 shadow-sm">
//                     <h2 className='text-center mb-4'> LogIn </h2>
//                     <Form>
//                         <Form.Group className='mb-3' controlId='formemail'>
//                             <Form.Label>Email</Form.Label>
//                             <Form.Control type='text' placeholder='Enter email' required onChange={(e) => setEmail(e.target.value)} />
//                         </Form.Group>

//                         <Form.Group className='mb-3' controlId='formPassword'>
//                             <Form.Label>Password</Form.Label>
//                             <Form.Control type='password' placeholder='Enter password' autocomplete="current-password" required onChange={(e) => setPassword(e.target.value)} />
//                         </Form.Group>

//                         <Button variant='primary' onClick={handleLogin} className='w-100'>Submit</Button>

//                         <div className='text-center mt-3'>
//                             <Link to="/user/forgot-password" className='text-decoration-none'>Forgot Password</Link>
//                         </div>
//                         <div className='text-center mt-3'>
//                             <Link to="/user/create" className='text-decoration-none'>Register?</Link>
//                         </div>

//                     </Form>
//                 </Card>
//             </Container >

//         </>
//     );
// };

// export default Login;
