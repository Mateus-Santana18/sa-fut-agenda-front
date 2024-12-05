import { useContext } from "react";
import AuthContext from "./AuthContext";

export default function useAuthentication() {
    const auth = useContext(AuthContext);
    return auth;
}