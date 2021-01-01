import { assertEquals, assertThrows } from "https://deno.land/std@0.83.0/testing/asserts.ts";

import { deepmerge } from "../mod.ts"

Deno.test("Should return target if sources is empty", () => {
    const target = {
        hello: 69,
        foo: {
            bar: 42
        }
    }

    assertEquals(target, deepmerge(target));
});

Deno.test("Should throw an error if target is not an object", () => {
    assertThrows(() => {
        return deepmerge(undefined)
    })
});

Deno.test("Should throw an error if target is an object but sources is not an array of objects", () => {
    assertThrows(() => {
        return deepmerge({}, [], undefined)
    })
});

Deno.test("Should deeply merge two objects", () => {
    const a = {
        foo: 1,
        bar: {
            john: 42
        }
    }
    const b = {
        bar: {
            doe: 69
        }
    }

    const dest = {
        foo: 1,
        bar: {
            john: 42,
            doe: 69
        }
    }
    assertEquals(deepmerge(a, b), dest)
});

Deno.test("Should deeply merge three objects", () => {
    const a = {
        foo: 1,
        bar: {
            john: 42
        }
    }
    const b = {
        bar: {
            doe: 69
        }
    }

    const c = {
        bar: {
            somebody: {
                once: "told me the world is gonna roll me"
            }
        }
    }

    const dest = {
        foo: 1,
        bar: {
            john: 42,
            doe: 69,
            somebody: {
                once: "told me the world is gonna roll me"
            }
        }
    }
    assertEquals(deepmerge(a, b, c), dest)
});