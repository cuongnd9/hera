import { thinid } from '../src';

// Create unique id with length equal default(24).
console.log(thinid());
// Create unique id with length equal 0.
console.log(thinid(0));
// Create unique id with length equal 8.
console.log(thinid(8));
// Create unique id with length equal 12.
console.log(thinid(12));
// Create unique id with length equal 32.
console.log(thinid(32));
