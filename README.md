# **keymark**

<div align="center">
<br>
  <p>
 <a href="https://www.npmjs.com/package/keymark"><img src="https://img.shields.io/npm/v/keymark.svg?style=for-the-badge" alt="NPM version" /></a>
 <a href="https://www.npmjs.com/package/keymark"><img src="https://img.shields.io/npm/dt/keymark.svg?maxAge=3600&style=for-the-badge" alt="NPM downloads" /></a>
  <a href="https://www.npmjs.com/package/keymark"><img src="https://img.shields.io/npm/l/keymark.svg?maxAge=3600&style=for-the-badge" alt="license" /></a>
    <a href="https://github.com/4i8/keymark/issues">
        <img src="https://img.shields.io/github/issues/4i8/keymark?label=Issues&style=for-the-badge">
    </a>
     </p>
</div>

# **About**

**highlighting a specific key in a string**

## **Example**

###### **support ASCII escape**

```js
const keymark = require("keymark");
keymark("Random String ok", "ok");
```

##### **output:**

```
Random String ok
              ^^
```

##### **custom mark**

```js
const keymark = require("keymark");
keymark("Random String ok", "ok", "*");
```

##### output:

```
Random String ok
              **
```
