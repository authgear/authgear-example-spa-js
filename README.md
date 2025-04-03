# Authgear sample for SPA (Single Page App)

This repo demonstrates how to add authentication into any JavaScript apps using Authgear.

## Project setup

1. Run `npm install` to install project dependencies. 
2. Next, run `npm run dev` to start the application using `nodemon`, monitoring for changes as we modify files.

### Create Free Authgear Account
1. Goto [https://portal.authgear.com](https://portal.authgear.com) and create a free account (or login to your existing account).

2. Then navigate to Applications and create a new client application of type Single Page Application.

### Configuration

The project needs to be configured with your Authgear app's Endpoint and client ID in order for the authentication flow to work.

To do this, in `public/app.js`, replace these values with with your own Authgear application credentials:

```javascript
const AUTHGEAR_CLIENT_ID = "<CLIENT_ID>";
const AUTHGEAR_ENDPOINT = "<AUTHGEAR_ENDPOINT>";
```

Ensure that you add `http://localhost:3000/` as an Authorized Redirect URI in your Authgear Client Application.

## What is Authgear?

[Authgear](https://www.authgear.com/) is a highly adaptable identity-as-a-service (IDaaS) platform for web and mobile applications.
Authgear makes user authentication easier and faster to implement by integrating it into various types of applications - from single-page web apps to mobile applications to API services.

### Key Features

- Zero trust authentication architecture with [OpenID Connect](https://openid.net/developers/how-connect-works/) (OIDC) standard.
- Easy-to-use interfaces for user registration and login, including email, phone, username as login ID, and password, OTP, magic links, etc for authentication.
- Support a wide range of identity providers, such as [Google](https://developers.google.com/identity), [Apple](https://support.apple.com/en-gb/guide/deployment/depa64848f3a/web), and [Azure Active Directory](https://azure.microsoft.com/en-gb/products/active-directory/) (AD).
- Support biometric login on mobile, Passkeys, and Multi-Factor Authentication (MFA) such as SMS/email-based verification and authenticator apps with TOTP.

## Documentation

View other Authgear Documentation at [https://docs.authgear.com/](https://docs.authgear.com/)
