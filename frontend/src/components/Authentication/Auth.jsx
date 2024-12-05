import { Navigate } from "react-router";
import { useAuth } from "./useAuth"

export function AuthComponent({
    // eslint-disable-next-line react/prop-types
    component
}) {
    const {
        isAuthenticated,
        logout
    } = useAuth();
    if (!isAuthenticated) {
        logout()
        return <Navigate to={"/"} replace /> 
    }
    return component;
}