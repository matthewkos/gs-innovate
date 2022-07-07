import * as React from "react";
import {Button} from "antd";
import {useNavigate} from "react-router-dom";

const Login: React.FC = () => {
    const navigate = useNavigate();
    const onClick = () => {
        navigate('/home');
    };
    return (
        <div>
            <h1>GS Dashboard</h1>
            <div style={{height: "100vh", justifyContent: "center", alignContent: "center", display: "flex"}}>
                <Button type="primary" size="large" onClick={onClick}>DashBoard</Button>
            </div>

        </div>
    );
};

export default Login;