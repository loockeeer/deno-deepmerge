# deno-deepmerge
This is a deno module for merging two objects/array deeply. This is NOT the same as deepmerge node.js package

## How to use

```ts
import { deepmerge } from "https://deno.land/x/deepmerge@1.0.0/mod.ts"

const a = {
    foo: {
        bar: "somestring"
    }
}

const b = {
    foo: {
        baz: "something else"
    }
}

const output = deepmerge(a, b)

console.log(output)
/*
{
    foo: {
        bar: "somestring"
        baz: "something else"
    }
}
*/
```

/!\ You cannot merge Arrays, only Objects are currently supported /!\

Documentation can be found at https://doc.deno.land/x/deepmerge/mod.ts
