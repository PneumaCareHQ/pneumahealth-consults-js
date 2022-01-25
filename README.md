# PneumaHealth Widget JavaScript SDK

A JS library for implementing the PneumaHealth widget - PneumaHealthJS is a safe and secure web drop-in module and this library provides a front-end web

### Try the demo
Checkout the [React JS Demo](https://codesandbox.io/s/pneumahealth-js-demo-yo832) or [Static HTML Demo](https://codesandbox.io/s/pneumahealth-js-html-demo-ihd3i) to view how the PneumaHealth Consults Widget works. *Click "Talk to a Doctor" or "Connect with a Lab"*

### Installing

Using CDN:
```html
<script src="https://cdn.jsdelivr.net/gh/PneumaCareHQ/pneumahealth-consults-js@1.0.4/dist/bundle.js"/>
```

For JS frameworks import it and use
```js
import PneumaHealthJS from 'pneumahealth-js'
```

### Usage

```js
PneumaHealthJS.init({
    userId: 'xxxxxxxxxxxxxxx',
    service: "consults", // or "diagnostics",
    businessName: "Test Medical Clinic"
});
```


### PneumaHealthJS.init Options
General
|Name                   | Type           | Required            | Description         |
|-----------------------|----------------|---------------------|---------------------|
|  `userId `             | `String`       | true                | Your patient's ID.
|  `service `             | `String`       | false                | "consults" or "diagnostics".

For "CONSULTS" service
|Name                   | Type           | Required            | Description         |
|-----------------------|----------------|---------------------|---------------------|
|  `paystackKey `             | `String`       | false | Your paystack Public Key.
|  `consultationFee `             | `String`       | false | Amount for Consultation in NGN

For "DIAGNOSTICS" service
|Name                   | Type           | Required            | Description         |
|-----------------------|----------------|---------------------|---------------------|
|  `paystackKey `             | `String`       | true | Your paystack Public Key.
|  `markup `             | `String`       | false                | Your percentage profit for diagnostics.
|  `businessName `             | `String`       | true | Your business name.