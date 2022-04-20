import "./CredentialHeader.css";

interface CredentialHeaderProps {
    issuanceDate: string;
    context: string[];
    issuer: string;
    type: string[]
}

export default function(props: CredentialHeaderProps) {

    return (<div className="CredentialHeader">
        <div>Issuer: {props.issuer}</div>
        <div>Issued: {props.issuanceDate}</div>
        <div>Type: {props.type}</div>
    </div>)
}