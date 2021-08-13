import {

    BrowserRouter as Router,
    Route,

} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthContext from "./contexts/AuthContext";
import { useState } from "react";

export default function Routes() {
    const [token, setToken] = useState('');

    return (
        <AuthContext.Provider value={ {token, setToken} }>
            <Router>
                <Route
                    path="/cadastro"
                    exact
                    component={Register}
                />
                <Route
                    path="/login"
                    component={Login}
                />
                <Route
                    path="/produtos"
                    component={Home}
                />
            </Router>
        </AuthContext.Provider>
    )

}