import { Agent } from "@veramo/core";
import { useContext, useEffect, useState } from "react";
import { VeramoContext } from "../../App";
import Credential from "../Credential/Credential";
import "./ViewCredentials.css";

export default function () {
    const [creds, setCreds] = useState([]); 
    const agentContext = useContext(VeramoContext);
    // console.log("availableMethods: ", (agentContext as Agent).availableMethods());

    // TODO: this doesn't actually update in realtime
    useEffect(() => {
        const getCreds = async () => {
            const foundCreds = await agentContext.dataStoreORMGetVerifiableCredentials();
            console.log("foundCreds: ", foundCreds);
            setCreds(foundCreds);
        }

        getCreds().catch((e) => console.log("error finding credentials: ", e));
    }, [])
    
    return (
        <div>
            {creds.map((c) => {
                return <Credential credential={c.verifiableCredential} />
            })}
        </div>
    )
}