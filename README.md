With npm

```shell
 npm install @nits.frontend/number-utils --save

```

With yarn

```shell
yarn add @nits.frontend/number-utils

```

#EXAMPLE

```js
const { addSpaceEvery3Char } = require("@nits.frontend/number-utils");

ES2015;

import { addSpaceEvery3Char } from "@nits.frontend/number-utils";

const result = addSpaceEvery3Char({ num: 1234567, count: 2 });

console.log(result);

// 1 234 567,00

const result = addSpaceEvery3Char({ num: 1234567, count: 3 });

console.log(result);

// 1 234 567,000

const result = addSpaceEvery3Char({ num: 1234567, separator: "_" });

console.log(result);

// 1_234_567,00

const result = addSpaceEvery3Char({
  num: 1234567,
  separator: "_",
  decimal: ".",
});

console.log(result);

// 1_234_567.00
```

DEFINITION

| Parameter |    Value     |
| --------- | :----------: |
| num       |   required   |
| count     |  default: 2  |
| separator | default: " " |
| decimal   | default: "," |
