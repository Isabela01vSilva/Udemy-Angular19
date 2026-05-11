import { AuthConfig } from "angular-oauth2-oidc";

export const auth: AuthConfig = {
    issuer: 'https://accounts.google.com',
    redirectUri: window.location.origin,
    clientId: '677389764542-ao6kflbluger1sjp0kovlfuig7vtctvq.apps.googleusercontent.com',
    scope: 'openid profile email',
    strictDiscoveryDocumentValidation: false
}