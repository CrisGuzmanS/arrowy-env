# arrowy-env 

A function that accesses environment variables located in the .env file at the root of your project.

## getting started

1. Install the dependency:
```shell
npm i arrowy-env
```

2. Create your .env file in the root directory and declare your variables:
```shell
touch <your-project>/.env
```

3. Utilize the package in any file of your project:
```js
import {env} from "arrowy-env"

env("DATABASE_NAME")

```