import B from "./other.js";

if (B !== "B") {
    throw new Error(`B should be "B", instead was "${B}"`);
}

console.log("B is fine");