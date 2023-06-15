import React from "react";
import { useSelector } from "react-redux";
import {Route} from "react-router-dom";
import AuthPage from "../../Views/AuthPage/AuthPage";

const ProtectedRoute = ({ path, exact, children }) => {
    const auth = useSelector((store) => store.authenticated);

    return auth 
        ?   <Route path={path} exact={exact}>
                {children}
            </Route>
        :   <Route path={'/auth'} element={<AuthPage />} />
    
};

export default ProtectedRoute;