import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import CreatePost from "./components/CreatePost/CreatePost";
import { getAgent } from "./veramo/setup";
import { ethers } from "ethers";
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from "react-router";
import Head from 'next/head';
import ViewCredentials from './components/ViewCredentials/ViewCredentials';

export const EthereumAccountContext = React.createContext("");
export const VeramoContext = React.createContext(undefined);

function App() {
  const [wallet, setWallet] = useState<any>({}); //provider.getSigner();
  const [vc, setVc] = useState<any>({});
  const [encodedVc, setEncodedVc] = useState<any>("");
  const [encoded, setEncoded] = useState<any>({});
  const [handled, setHandled] = useState<any>({});

  const [ethereumAddress, setEthereumAddress] = useState<string>("");

  console.log("here")
  /// @ts-ignore
  window.ethereum?.on("accountsChanged", async function (accounts) {
    console.log("accounts changed: ", accounts);
    const provider = new ethers.providers.Web3Provider((window as any).ethereum, "any");
    setEthereumAddress(await provider.getSigner().getAddress());
  })

  if (!ethereumAddress) {
    console.log("asdfa")
    return (
      <div className="App">
        <button onClick={async () => {
          const provider = new ethers.providers.Web3Provider((window as any).ethereum, "any");
          const accounts = await provider.send("eth_requestAccounts", []);
          setWallet(provider.getSigner())
          if (accounts.length > 0) {
            setEthereumAddress(await provider.getSigner().getAddress());
          }
        }}>Connect Wallet</button>
      </div>
    );
  }

  console.log("bleh")
  return (
    <Router>
      <Head>
        <title>Veramo Post</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i&subset=latin-ext"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
    <div className="App">
      <VeramoContext.Provider value={getAgent(wallet)}>
        <EthereumAccountContext.Provider value={ethereumAddress}>
          <Header address={ethereumAddress}/>
          <div className="InnerApp">
            <Sidebar />
            <Routes>
              <Route path="/" element={<div/>}/>
              <Route path="/create-post" element={<CreatePost />}/>
              <Route path="/view-credentials" element={<ViewCredentials />}/>
            </Routes>
          </div>
        </EthereumAccountContext.Provider>
      </VeramoContext.Provider>
    </div>
    </Router>
  )

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <button onClick={async () => {
  //         const profileUrl = "http://twitter.com/test1";
  //         const date = new Date().toISOString();
  //         let credential = constructSocialMediaProfileLinkage("did:ethr:0x1B64DaD844f2017aa66C1a1ffF74425889141e50", date, profileUrl);
  //         const vc = await getAgent(wallet).createVerifiableCredentialEIP712({ credential, ethereumAccountId: "0x1B64DaD844f2017aa66C1a1ffF74425889141e50"});
  //         console.log("vc: " + JSON.stringify(vc));
  //         const encodedVc = encodeURIComponent(JSON.stringify(vc));
  //         setVc(vc);
  //         setEncodedVc(encodedVc);
  //       }}>Create VC</button>
  //       {vc && <pre id="result">{JSON.stringify(vc)}</pre>}
  //       {encodedVc && <pre id="result">{encodedVc}</pre>}
  //       <br />
  //       <button onClick={async () => {
  //         // const encoded = encodeURIComponent(vc);
  //         // console.log("encoded: ", encoded);
  //         const handled = await getAgent(wallet).handleMessage({ raw: encodedVc });
  //         console.log("handled: " + JSON.stringify(handled));
  //         setHandled(handled);
  //       }}>Validate VC</button>
  //       {handled && <pre id="result">{JSON.stringify(handled)}</pre>}

  //       <br />
  //       <button onClick={async () => {
  //         const handled = await getAgent(wallet).handleMessage({ raw: testVc });
  //         console.log("handled: " + JSON.stringify(handled));
  //         setHandled(handled);
  //       }}>Validate VC</button>
  //       {handled && <pre id="result">{JSON.stringify(handled)}</pre>}
  //     </header>
  //   </div>
  // );
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
