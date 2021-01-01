# Deno DeepMerge
This is a deno module for merging two objects/array deeply. This is **__NOT__** the same as deepmerge npm package

## How to use

```ts
import { deepmerge } from "https://deno.land/x/deepmerge@VERSION/mod.ts"

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

## Documentation

```ts
// Merges objects from sources into another (target) object
function deepmerge(target: any, ...sources: any[]): any
```

Full doc can be found at https://doc.deno.land/x/deepmerge@VERSION/mod.ts
