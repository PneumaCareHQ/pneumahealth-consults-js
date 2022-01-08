# PneumaHealth Widget JavaScript SDK

JS library for implementing the PneumaHealth widget - PneumaHealthJS is a safe and secure web drop-in module and this library provides a front-end web

## Try the demo
Checkout the [React JS Demo](https://codesandbox.io/s/pneumahealth-js-demo-yo832) or [Static HTML Demo](https://codesandbox.io/s/pneumahealth-js-html-demo-ihd3i) to view how the PneumaHealth Consults Widget works. *Click "Talk to a Doctor" or "Connect with a Lab"*

## Installing

Using CDN:

```html
<script src="https://cdn.jsdelivr.net/gh/PneumaCareHQ/pneumahealth-consults-js@1.0.3/dist/bundle.js"/>
```

## Usuage
For JS frameworks import it and use
```js
import PneumaHealthJS from 'pneumahealth-js'
```
For others, just use
```js
PneumaHealthJS.init({
    userId: 'xxxxxxxxxxxxxxx',
    service: "consults", // or "diagnostics",
    businessName: "Test Medical Clinic"
});
```


## PneumaHealthJS.init Options

|Name                   | Type           | Required            | Description         |
|-----------------------|----------------|---------------------|---------------------|
|  `userId `             | `String`       | true                | Your patient's ID.
|  `service `             | `String`       | false                | "consults" or "diagnostics".
|  `paystackKey `             | `String`       | true (for diagnostics) | Your paystack Public Key.
|  `markup `             | `String`       | false                | Your percentage profit for diagnostics.
|  `businessName `             | `String`       | true (for diagnostics) | Your business name.