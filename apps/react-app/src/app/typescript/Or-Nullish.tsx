// Difference Between Logical OR (||) and Nullish Coalescing Operator (??)
// ?? : null | undefined
// || : falsy => false | 0 | null | undefined | ... https://developer.mozilla.org/en-US/docs/Glossary/Falsy
// examples using the logical OR operator
console.log(0 || 'default');          // it will log: default
console.log(5 || 'default');          // it will log: 5
console.log(-0 || 'default');         // it will log: default
console.log(-3 || 'default');         // it will log: -3

console.log(false || 'default');     // it will log: default
console.log(true || 'default');      // it will log: true

console.log(null || 'default');      // it will log: default
console.log(undefined || 'default'); // it will log: default

// examples using the nullish coalescing operator
console.log(0 ?? 'default');         // it will log: 0
console.log(5 ?? 'default');         // it will log: 5
console.log(-0 ?? 'default');        // it will log: -0
console.log(-3 ?? 'default');        // it will log: -3

console.log(false ?? 'default');    // it will log: false
console.log(true ?? 'default');     // it will log: true

console.log(null ?? 'default');      // it will log: default
console.log(undefined ?? 'default'); // it will log: default