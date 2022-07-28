# PneumaHealth Widget JavaScript SDK

A JS library for implementing the PneumaHealth widget - PneumaHealthJS is a safe and secure web drop-in module and this library provides a front-end web

### Try the demo

Checkout the [React JS Demo](https://codesandbox.io/s/pneumahealth-js-demo-yo832) or [Static HTML Demo](https://codesandbox.io/s/pneumahealth-js-html-demo-ihd3i) to view how the PneumaHealth Consults Widget works. _Click "Talk to a Doctor" or "Connect with a Lab"_

### Installing

Using CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/@pneumahealth/pneumahealth-js@1.1.4/dist/bundle.js"></script>
```

For JS frameworks import it and use

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

For "CONSULTS" service
|Name | Type | Required | Description |
|-----------------------|----------------|---------------------|---------------------|
| `paystackKey` | `String` | false | Your paystack Public Key.
| `consultationFee` | `String` | false | Amount for Consultation in NGN

For "DIAGNOSTICS" service
|Name | Type | Required | Description |
|-----------------------|----------------|---------------------|---------------------|
| `paystackKey` | `String` | true | Your paystack Public Key.
| `markup` | `String` | false | Your percentage profit for diagnostics.
| `businessName` | `String` | true | Your business name.

For "SERVICE" service
|Name | Type | Required | Description |
|-----------------------|----------------|---------------------|---------------------|
| `paystackKey` | `String` | true | Your paystack Public Key.
| `providerId` | `String` | true | Your paystack Public Key.
| `markup` | `String` | false | Your percentage profit for diagnostics.

### Adding Firebase

Firebase allows you to implement authentication and also for chat file uploads

##### Step 1: Create a Firebase App

##### Step 2: Copy the Firebase App Config

##### Step 3: Enable Firestore

##### Step 4: Enable Storage
