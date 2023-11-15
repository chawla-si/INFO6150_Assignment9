
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import userService from '../../services/userService';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const users = await userService.getAllUsers();
            const foundUser = users.find((user) => user.email === email && user.password === password);

            if (foundUser) {
                navigate('/dashboard');
            } else {
                alert('Invalid credentials. Please try again.');
            }
        } catch (error) {
            console.error('Error during login:', error);
            alert('An error occurred during login. Please try again later.');
        }
    };

    return (
        <div className="login-container">
            <h1>Login Page</h1>
            <div className="input-row">
                <label>Email:</label>
                <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="input-row">
                <label>Password:</label>
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
