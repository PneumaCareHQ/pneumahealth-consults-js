# PneumaHealth Widget JavaScript SDK

A JS library for implementing the PneumaHealth widget - PneumaHealthJS is a safe and secure web drop-in module and this library provides a front-end web for tele-medicine and medical consultations.

## Try the demo

Checkout the [React JS Demo](https://replit.com/@PneumaCare/PneumaHealthJS-ReactJS-Demo) or [Static HTML Demo](https://replit.com/@PneumaCare/PneumaHealthJS-HTML-Demo) to view how the PneumaHealth Consults Widget works. _Click "Talk to a Doctor"_ button.

### Installing

Using CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/@pneumahealth/pneumahealth-js@1.2.4/dist/bundle.js"></script>
```

For JS frameworks import it and use:

```js
import PneumaHealthJS from "@pneumahealth/pneumahealth-js";
```

### Usage

```js
PneumaHealthJS.init({
    userId: 'xxxxxxxxxxxxxxx',
    service: "consults", // or "diagnostics",
    businessName: "Test Medical Clinic",
    developerAPIKey: "xxxxxxxxxxxxxxx",
    firebaseConfig: {
        ... //firebase config object goes here
    },
    firebaseUsersCollectionName: "users",
});
```

### PneumaHealthJS.init Options

General
|Name | Type | Required | Description |
|-----------------------|----------------|---------------------|---------------------|
| `userId` | `String` | false | Your patient's ID.
| `developerAPIKey` | `String` | true | Your developer API key.
| `service` | `String` | false | "consults" or "diagnostics".
| `firebaseConfig` | `Object` | true | Config object from your firebase app's console
| `firebaseUsersCollectionName` | `string` | true | Name of your firebase store
| `brandLogo` | `string` | false | Brand logo of your business

> **Note:** By providing the `userId` key, you skip the entire auth flow, similarly, not providing the `userId` key means patients would be required to register / login before access to the widget.

For "CONSULTS" service
|Name | Type | Required | Description |
|-----------------------|----------------|---------------------|---------------------|
| `paystackKey` | `String` | false | Your paystack Public Key.
| `consultationFee` | `String` | false | Amount for Consultation in NGN

> **Note:** Not providing the `paystackKey` means the service would be free. You should add your paystack key to enable payments.

### Adding Firebase

Firebase allows you to implement authentication and file uploads

1: Create a Firebase App. _([Relevant docs](https://cloud.google.com/firestore/docs/create-database-web-mobile-client-library))_

2: Enable Authentication with `email/password` Sign-in method. _([Relevant docs](https://cloud.google.com/appengine/docs/legacy/standard/python/authenticating-users-firebase-appengine))_

2: Enable Firestore. _([Relevant docs](https://cloud.google.com/firestore/docs/create-database-web-mobile-client-library))_

3: Enable Storage. _([Relevant docs](https://firebase.google.com/docs/storage))_

4: Copy the Firebase App Config
