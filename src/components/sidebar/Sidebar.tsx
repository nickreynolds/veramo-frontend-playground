import react from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
    return (
        <div className="Sidebar">
            <Link to="/veramo-frontend-playground/create-post" className="SidebarLink">Issue Credential</Link>
            <Link to="/my-credentials" className="SidebarLink">My Credentials</Link>
            <div className="Empty"></div>
        </div>
    )
}