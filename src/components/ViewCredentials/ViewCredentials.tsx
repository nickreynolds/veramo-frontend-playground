import { Agent } from "@veramo/core";
import { useContext, useEffect, useState } from "react";
import { VeramoContext } from "../../App";
import Credential from "../Credential/Credential";
import "./ViewCredentials.css";

export default function () {
    // const [creds, setCreds] = useState([]); 
    // const agentContext = useContext(VeramoContext);
    // // console.log("availableMethods: ", (agentContext as Agent).availableMethods());
    // const args = {}
    // useEffect(() => {
    //     const getCreds = async () => {
    //         const foundCreds = await agentContext.dataStoreORMGetVerifiablePresentations(args);
    //         console.log("foundCreds: ", foundCreds);
    //         setCreds(foundCreds);
    //     }

    //     getCreds().catch((e) => console.log("error finding credentials: ", e));
    // })
    
    const creds = [{"@context":["https://www.w3.org/2018/credentials/v1"],"type":["VerifiableCredential","HtmlPost"],"issuer":"did:ethr:0xF0AC1Ae2CD4f3A336FC5139CC880bF7f26B19881","issuanceDate":"2022-04-20T17:20:39.077Z","credentialSubject":{"id":"did:ethr:0xF0AC1Ae2CD4f3A336FC5139CC880bF7f26B19881","post":"<p>This is editable <strong>rich</strong> text, much better than a &lt;textarea&gt;!</p><p>Since it&#39;s rich text, you can do things like turn a selection of text <strong>bold</strong>, or add a semantically rendered block quote in the middle of the page, like this:</p>A wise quote.<p>Try it out for yourself!</p>"},"proof":{"verificationMethod":"did:ethr:0xF0AC1Ae2CD4f3A336FC5139CC880bF7f26B19881#controller","created":"2022-04-20T17:20:39.077Z","proofPurpose":"assertionMethod","type":"EthereumEip712Signature2021","proofValue":"0x0b24594eb2218a836a72ffb9b3e0ffe5de4c453a1fde5505f842bb0a147b6cdd61c6eb59539c7dc5e7142981f4480af87c038d53d280b06aeec923086f4572481c","eip712Domain":{"domain":{"chainId":"1","name":"VerifiableCredential","version":"1"},"messageSchema":{"EIP712Domain":[{"name":"name","type":"string"},{"name":"version","type":"string"},{"name":"chainId","type":"uint256"}],"CredentialSubject":[{"name":"id","type":"string"},{"name":"post","type":"string"}],"Proof":[{"name":"created","type":"string"},{"name":"proofPurpose","type":"string"},{"name":"type","type":"string"},{"name":"verificationMethod","type":"string"}],"VerifiableCredential":[{"name":"@context","type":"string[]"},{"name":"credentialSubject","type":"CredentialSubject"},{"name":"issuanceDate","type":"string"},{"name":"issuer","type":"string"},{"name":"proof","type":"Proof"},{"name":"type","type":"string[]"}]},"primaryType":"VerifiableCredential"}}}]

    return (
        <div>
            {creds.map((c) => {
                return <Credential credential={c} />
            })}
        </div>
    )
}