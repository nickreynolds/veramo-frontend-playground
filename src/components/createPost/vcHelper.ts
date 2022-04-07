export const  constructSocialMediaProfileLinkage = (did: string, date: string, profileUrl: string) => {
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

export const constructHtmlPost = (did: string, date: string, html: string) => {
    return {
        "@context": [
            "https://www.w3.org/2018/credentials/v1",
        ],
        type: ["VerifiableCredential", "HtmlPost"],
        issuer: did,
        issuanceDate: date,
        credentialSubject: {
            id: did,
            post: html,
        },
        proof: {
            verificationMethod: did + "#controller",
            created: date,
            proofPurpose: "assertionMethod",
            type: "EthereumEip712Signature2021",
        }
    }
}
