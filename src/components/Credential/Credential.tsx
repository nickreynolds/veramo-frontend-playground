import "./Credential.css";
import CredentialFooter from "./CredentialFooter/CredentialFooter";
import CredentialHeader from "./CredentialHeader/CredentialHeader";
import CredentialSubject from "./CredentialSubject/CredentialSubject";

interface CredentialProps {
    credential: any;
}

export default function ({ credential }: CredentialProps) {
    console.log("credprops: ", credential);
    return (
        <div className="Credential">
            <CredentialHeader 
                issuer={credential.issuer} 
                context={credential["@context"]} 
                issuanceDate={credential.issuanceDate} 
                type={credential.type} 
            />
            <CredentialSubject 
                type={credential.type}
                subject={credential.credentialSubject}
            />
            <CredentialFooter proof={credential.proof} />
        </div>
    )
}

