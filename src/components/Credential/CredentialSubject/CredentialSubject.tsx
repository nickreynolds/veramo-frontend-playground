import PostCredential from "./PostCredentialSubject/PostCredential";

interface CredentialSubjectProps {
    type: string[];
    subject: any;
}

export default function(props: CredentialSubjectProps) {
    if (props.type.includes("HtmlPost")) {
        return <PostCredential post={props.subject.post} id={props.subject.id}/>
    }
    return <div className="CredentialSubject">

    </div>
}