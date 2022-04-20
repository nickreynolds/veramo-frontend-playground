import { useState } from "react";
import "./CredentialFooter.css";

interface CredentialFooterProps {
    proof: any;
}

export default function(props: CredentialFooterProps) {
    const [isOpen, setIsOpen] = useState(false);
    return <div className="Footer">
    {!isOpen ? (
        <div className="ProofClosed">
            <span className="OpenState" onClick={() => setIsOpen(true)}>open proof</span>
        </div>
    ) : (
        <div className="ProofOpen">
            <span className="OpenState" onClick={() => setIsOpen(false)}>close</span>
            <p>Proof: <br/> {JSON.stringify(props.proof)}</p>
        </div>
    )}
    </div>
}