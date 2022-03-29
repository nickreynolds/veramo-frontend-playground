import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getAgent } from "./veramo/setup";
import { ethers } from "ethers";

const provider = new ethers.providers.Web3Provider((window as any).ethereum, "any");

const testVc = "%7B%22%40context%22%3A%5B%22https%3A%2F%2Fwww.w3.org%2F2018%2Fcredentials%2Fv1%22%2C%22https%3A%2F%2Fbeta.api.schemas.serto.id%2Fv1%2Fpublic%2Fsocial-media-linkage-credential%2F1.0%2Fld-context.json%22%5D%2C%22type%22%3A%5B%22VerifiableCredential%22%2C%22SocialMediaProfileLinkage%22%5D%2C%22issuer%22%3A%22did%3Aethr%3A0x1B64DaD844f2017aa66C1a1ffF74425889141e50%22%2C%22issuanceDate%22%3A%222022-03-24T19%3A10%3A07.314Z%22%2C%22credentialSubject%22%3A%7B%22socialMediaProfileUrl%22%3A%22https%3A%2F%2Ftwitter.com%2Fasdf%22%2C%22id%22%3A%22did%3Aethr%3A0x1B64DaD844f2017aa66C1a1ffF74425889141e50%22%7D%2C%22credentialSchema%22%3A%7B%22id%22%3A%22https%3A%2F%2Fbeta.api.schemas.serto.id%2Fv1%2Fpublic%2Fsocial-media-linkage-credential%2F1.0%2Fjson-schema.json%22%2C%22type%22%3A%22JsonSchemaValidator2018%22%7D%2C%22proof%22%3A%7B%22verificationMethod%22%3A%22did%3Aethr%3A0x1B64DaD844f2017aa66C1a1ffF74425889141e50%23controller%22%2C%22created%22%3A%222022-03-24T19%3A10%3A07.314Z%22%2C%22proofPurpose%22%3A%22assertionMethod%22%2C%22type%22%3A%22EthereumEip712Signature2021%22%2C%22proofValue%22%3A%220x98274ea3c8f697893c50b1686e3f61d24f0e832a1318991fa693cc52f67ead3961248b0cc5bf428d4582f4c15ca80fc6c4ebecefedf882a11f0b0bb4e0cc5b651b%22%2C%22eip712Domain%22%3A%7B%22domain%22%3A%7B%22chainId%22%3A1%2C%22name%22%3A%22SocialMediaProfileLinkage%22%2C%22version%22%3A%221%22%7D%2C%22messageSchema%22%3A%7B%22EIP712Domain%22%3A%5B%7B%22name%22%3A%22name%22%2C%22type%22%3A%22string%22%7D%2C%7B%22name%22%3A%22version%22%2C%22type%22%3A%22string%22%7D%2C%7B%22name%22%3A%22chainId%22%2C%22type%22%3A%22uint256%22%7D%5D%2C%22CredentialSchema%22%3A%5B%7B%22name%22%3A%22id%22%2C%22type%22%3A%22string%22%7D%2C%7B%22name%22%3A%22type%22%2C%22type%22%3A%22string%22%7D%5D%2C%22CredentialSubject%22%3A%5B%7B%22name%22%3A%22id%22%2C%22type%22%3A%22string%22%7D%2C%7B%22name%22%3A%22socialMediaProfileUrl%22%2C%22type%22%3A%22string%22%7D%5D%2C%22Proof%22%3A%5B%7B%22name%22%3A%22created%22%2C%22type%22%3A%22string%22%7D%2C%7B%22name%22%3A%22proofPurpose%22%2C%22type%22%3A%22string%22%7D%2C%7B%22name%22%3A%22type%22%2C%22type%22%3A%22string%22%7D%2C%7B%22name%22%3A%22verificationMethod%22%2C%22type%22%3A%22string%22%7D%5D%2C%22VerifiableCredential%22%3A%5B%7B%22name%22%3A%22%40context%22%2C%22type%22%3A%22string%5B%5D%22%7D%2C%7B%22name%22%3A%22credentialSchema%22%2C%22type%22%3A%22CredentialSchema%22%7D%2C%7B%22name%22%3A%22credentialSubject%22%2C%22type%22%3A%22CredentialSubject%22%7D%2C%7B%22name%22%3A%22issuanceDate%22%2C%22type%22%3A%22string%22%7D%2C%7B%22name%22%3A%22issuer%22%2C%22type%22%3A%22string%22%7D%2C%7B%22name%22%3A%22proof%22%2C%22type%22%3A%22Proof%22%7D%2C%7B%22name%22%3A%22type%22%2C%22type%22%3A%22string%5B%5D%22%7D%5D%7D%2C%22primaryType%22%3A%22VerifiableCredential%22%7D%7D%7D"
const testEthersVc = "%7B%22%40context%22%3A%5B%22https%3A%2F%2Fwww.w3.org%2F2018%2Fcredentials%2Fv1%22%2C%22https%3A%2F%2Fbeta.api.schemas.serto.id%2Fv1%2Fpublic%2Fsocial-media-linkage-credential%2F1.0%2Fld-context.json%22%5D%2C%22type%22%3A%5B%22VerifiableCredential%22%2C%22SocialMediaProfileLinkage%22%5D%2C%22issuer%22%3A%22did%3Aethr%3A0x1B64DaD844f2017aa66C1a1ffF74425889141e50%22%2C%22issuanceDate%22%3A%222022-03-24T19%3A54%3A38.777Z%22%2C%22credentialSubject%22%3A%7B%22socialMediaProfileUrl%22%3A%22http%3A%2F%2Ftwitter.com%2Ftest1%22%2C%22id%22%3A%22did%3Aethr%3A0x1B64DaD844f2017aa66C1a1ffF74425889141e50%22%7D%2C%22credentialSchema%22%3A%7B%22id%22%3A%22https%3A%2F%2Fbeta.api.schemas.serto.id%2Fv1%2Fpublic%2Fsocial-media-linkage-credential%2F1.0%2Fjson-schema.json%22%2C%22type%22%3A%22JsonSchemaValidator2018%22%7D%2C%22proof%22%3A%7B%22verificationMethod%22%3A%22did%3Aethr%3A0x1B64DaD844f2017aa66C1a1ffF74425889141e50%23controller%22%2C%22created%22%3A%222022-03-24T19%3A54%3A38.777Z%22%2C%22proofPurpose%22%3A%22assertionMethod%22%2C%22type%22%3A%22EthereumEip712Signature2021%22%2C%22proofValue%22%3A%220xf9921772abbffd5065944dd944a9fafb992320056ed6334b58925996c0e18f586eda66a81813aeec8dde501ee25c39cc0aab58ddafb0d2b8577659a3e506cc491b%22%2C%22eip712Domain%22%3A%7B%22domain%22%3A%7B%22chainId%22%3A1%2C%22name%22%3A%22VerifiableCredential%22%2C%22version%22%3A%221%22%7D%2C%22messageSchema%22%3A%7B%22CredentialSchema%22%3A%5B%7B%22name%22%3A%22id%22%2C%22type%22%3A%22string%22%7D%2C%7B%22name%22%3A%22type%22%2C%22type%22%3A%22string%22%7D%5D%2C%22CredentialSubject%22%3A%5B%7B%22name%22%3A%22id%22%2C%22type%22%3A%22string%22%7D%2C%7B%22name%22%3A%22socialMediaProfileUrl%22%2C%22type%22%3A%22string%22%7D%5D%2C%22Proof%22%3A%5B%7B%22name%22%3A%22created%22%2C%22type%22%3A%22string%22%7D%2C%7B%22name%22%3A%22proofPurpose%22%2C%22type%22%3A%22string%22%7D%2C%7B%22name%22%3A%22type%22%2C%22type%22%3A%22string%22%7D%2C%7B%22name%22%3A%22verificationMethod%22%2C%22type%22%3A%22string%22%7D%5D%2C%22VerifiableCredential%22%3A%5B%7B%22name%22%3A%22%40context%22%2C%22type%22%3A%22string%5B%5D%22%7D%2C%7B%22name%22%3A%22credentialSchema%22%2C%22type%22%3A%22CredentialSchema%22%7D%2C%7B%22name%22%3A%22credentialSubject%22%2C%22type%22%3A%22CredentialSubject%22%7D%2C%7B%22name%22%3A%22issuanceDate%22%2C%22type%22%3A%22string%22%7D%2C%7B%22name%22%3A%22issuer%22%2C%22type%22%3A%22string%22%7D%2C%7B%22name%22%3A%22proof%22%2C%22type%22%3A%22Proof%22%7D%2C%7B%22name%22%3A%22type%22%2C%22type%22%3A%22string%5B%5D%22%7D%5D%7D%2C%22primaryType%22%3A%22VerifiableCredential%22%7D%7D%7D"
const t = "%7B%22%40context%22%3A%5B%22https%3A%2F%2Fwww.w3.org%2F2018%2Fcredentials%2Fv1%22%2C%22https%3A%2F%2Fbeta.api.schemas.serto.id%2Fv1%2Fpublic%2Fsocial-media-linkage-credential%2F1.0%2Fld-context.json%22%5D%2C%22type%22%3A%5B%22VerifiableCredential%22%2C%22SocialMediaProfileLinkage%22%5D%2C%22issuer%22%3A%22did%3Aethr%3A0x1B64DaD844f2017aa66C1a1ffF74425889141e50%22%2C%22issuanceDate%22%3A%222022-03-24T19%3A55%3A50.626Z%22%2C%22credentialSubject%22%3A%7B%22socialMediaProfileUrl%22%3A%22http%3A%2F%2Ftwitter.com%2Ftest1%22%2C%22id%22%3A%22did%3Aethr%3A0x1B64DaD844f2017aa66C1a1ffF74425889141e50%22%7D%2C%22credentialSchema%22%3A%7B%22id%22%3A%22https%3A%2F%2Fbeta.api.schemas.serto.id%2Fv1%2Fpublic%2Fsocial-media-linkage-credential%2F1.0%2Fjson-schema.json%22%2C%22type%22%3A%22JsonSchemaValidator2018%22%7D%2C%22proof%22%3A%7B%22verificationMethod%22%3A%22did%3Aethr%3A0x1B64DaD844f2017aa66C1a1ffF74425889141e50%23controller%22%2C%22created%22%3A%222022-03-24T19%3A55%3A50.626Z%22%2C%22proofPurpose%22%3A%22assertionMethod%22%2C%22type%22%3A%22EthereumEip712Signature2021%22%2C%22proofValue%22%3A%220x3df6d758944ef8de2d034f4974cade25c5846067aa40f37ee8fe99c9fe0a1a7222daa9c60b93410aa530a16d5e3ccd2795e77791415bc6ab393488e6f102bea61b%22%2C%22eip712Domain%22%3A%7B%22domain%22%3A%7B%22chainId%22%3A1%2C%22name%22%3A%22VerifiableCredential%22%2C%22version%22%3A%221%22%7D%2C%22messageSchema%22%3A%7B%22CredentialSchema%22%3A%5B%7B%22name%22%3A%22id%22%2C%22type%22%3A%22string%22%7D%2C%7B%22name%22%3A%22type%22%2C%22type%22%3A%22string%22%7D%5D%2C%22CredentialSubject%22%3A%5B%7B%22name%22%3A%22id%22%2C%22type%22%3A%22string%22%7D%2C%7B%22name%22%3A%22socialMediaProfileUrl%22%2C%22type%22%3A%22string%22%7D%5D%2C%22Proof%22%3A%5B%7B%22name%22%3A%22created%22%2C%22type%22%3A%22string%22%7D%2C%7B%22name%22%3A%22proofPurpose%22%2C%22type%22%3A%22string%22%7D%2C%7B%22name%22%3A%22type%22%2C%22type%22%3A%22string%22%7D%2C%7B%22name%22%3A%22verificationMethod%22%2C%22type%22%3A%22string%22%7D%5D%2C%22VerifiableCredential%22%3A%5B%7B%22name%22%3A%22%40context%22%2C%22type%22%3A%22string%5B%5D%22%7D%2C%7B%22name%22%3A%22credentialSchema%22%2C%22type%22%3A%22CredentialSchema%22%7D%2C%7B%22name%22%3A%22credentialSubject%22%2C%22type%22%3A%22CredentialSubject%22%7D%2C%7B%22name%22%3A%22issuanceDate%22%2C%22type%22%3A%22string%22%7D%2C%7B%22name%22%3A%22issuer%22%2C%22type%22%3A%22string%22%7D%2C%7B%22name%22%3A%22proof%22%2C%22type%22%3A%22Proof%22%7D%2C%7B%22name%22%3A%22type%22%2C%22type%22%3A%22string%5B%5D%22%7D%5D%7D%2C%22primaryType%22%3A%22VerifiableCredential%22%7D%7D%7D"
function App() {
  const wallet = provider.getSigner();
  const [vc, setVc] = useState<any>({});
  const [encodedVc, setEncodedVc] = useState<any>("");
  const [encoded, setEncoded] = useState<any>({});
  const [handled, setHandled] = useState<any>({});
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={async () => {
          const profileUrl = "http://twitter.com/test1";
          const date = new Date().toISOString();
          let credential = constructSocialMediaProfileLinkage("did:ethr:0x1B64DaD844f2017aa66C1a1ffF74425889141e50", date, profileUrl);
          const vc = await getAgent(wallet).createVerifiableCredentialEIP712({ credential, ethereumAccountId: "0x1B64DaD844f2017aa66C1a1ffF74425889141e50"});
          console.log("vc: " + JSON.stringify(vc));
          const encodedVc = encodeURIComponent(JSON.stringify(vc));
          setVc(vc);
          setEncodedVc(encodedVc);
        }}>Create VC</button>
        {vc && <pre id="result">{JSON.stringify(vc)}</pre>}
        {encodedVc && <pre id="result">{encodedVc}</pre>}
        <br />
        <button onClick={async () => {
          // const encoded = encodeURIComponent(vc);
          // console.log("encoded: ", encoded);
          const handled = await getAgent(wallet).handleMessage({ raw: encodedVc });
          console.log("handled: " + JSON.stringify(handled));
          setHandled(handled);
        }}>Validate VC</button>
        {handled && <pre id="result">{JSON.stringify(handled)}</pre>}

        <br />
        <button onClick={async () => {
          const handled = await getAgent(wallet).handleMessage({ raw: testVc });
          console.log("handled: " + JSON.stringify(handled));
          setHandled(handled);
        }}>Validate VC</button>
        {handled && <pre id="result">{JSON.stringify(handled)}</pre>}
      </header>
    </div>
  );
}



function constructSocialMediaProfileLinkage(did: string, date: string, profileUrl: string) {
  return {
    "@context": [
      "https://www.w3.org/2018/credentials/v1",
      "https://beta.api.schemas.serto.id/v1/public/social-media-linkage-credential/1.0/ld-context.json",
    ],
    type: ["VerifiableCredential", "SocialMediaProfileLinkage"],
    issuer: did,
    issuanceDate: date,
    credentialSubject: {
      socialMediaProfileUrl: profileUrl,
      id: did,
    },
    credentialSchema: {
      id: "https://beta.api.schemas.serto.id/v1/public/social-media-linkage-credential/1.0/json-schema.json",
      type: "JsonSchemaValidator2018",
    },
    proof: {
      verificationMethod: did + "#controller",
      created: date,
      proofPurpose: "assertionMethod",
      type: "EthereumEip712Signature2021",
    }
  };
}

export default App;
