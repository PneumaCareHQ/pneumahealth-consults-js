# PneumaHealth Widget JavaScript SDK

JS library for implementing the PneumaHealth widget - PneumaHealthJS is a safe and secure web drop-in module and this library provides a front-end web

## Try the demo
Checkout the [widget flow](https://jsbin.com/linacimije/edit?html,output) to view how the PneumaHealth Consults Widget works. *Click "Talk to a Doctor"*

## Installing

Using CDN:

```html
<script src="https://cdn.jsdelivr.net/gh/PneumaCareHQ/pneumahealth-consults-js@1.0.2/dist/bundle.js"/>
```

## Usuage
For JS frameworks import it and use
```js
import PneumaHealthJS from 'pneumahealth-js'
```
For others, just use
```js
PneumaHealthJS.init({
    publicAPIKey: 'xxxxxxxxxxxxxxx',
    userId: 'xxxxxxxxxxxxxxx',
    service: "consults", // or "diagnostics" 
});
```


## PneumaHealthJS.init Options

|Name                   | Type           | Required            | Default Value       | Description         |
|-----------------------|----------------|---------------------|---------------------|---------------------|
|  `publicAPIKey `               | `String`       | true                |                     | Your public key from your Dashboard.
|  `userId `             | `String`       | true                |                     | Your patient's ID.
|  `service `             | `String`       | true                |                     | "consults" or "diagnostics" .