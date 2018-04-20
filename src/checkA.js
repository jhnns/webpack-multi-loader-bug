import A from "./other.js";

if (A !== "A") {
    throw new Error(`A should be "A", instead was "${A}"`);
}

console.log("A is fine");