import react from "react";
import "./Header.css";

interface HeaderProps {
    address: string;
}

export default function Header(props: HeaderProps) {
    return (
        <div className="Header">
            {props.address}
        </div>
    )
}