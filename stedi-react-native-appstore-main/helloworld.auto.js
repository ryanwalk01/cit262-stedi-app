import assert from "assert";
import {sayHello} from "./helloworld.mjs";

let test = sayHello();

console.assert(test == "hello", "Should say 'hello'");