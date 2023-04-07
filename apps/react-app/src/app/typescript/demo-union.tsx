// Union from Enum
enum StringEnum {
  Small = 'S',
  Medium = 'M',
  Large = 'L',
}

// Size = 'S' | 'M' | 'L'
type ValueUnion = `${StringEnum}`;
const myValue: ValueUnion = 'M';

// KeyUnion = 'Small' | 'Medium' | 'Large'
type KeyUnion = keyof typeof StringEnum;
const myKey: KeyUnion = 'Large';

// --------------------
// Type from Array
const sizes = ['small', 'medium', 'large'] as const;
// SizeUnion = 'small' | 'medium' | 'large'
type SizeUnion = typeof sizes[number];
type T = typeof sizes;
let t: T = ['small', 'medium', 'large'];

// -----
// Union from Object
const obj = {
  name: 'Bobby Hadz',
  country: 'Chile',
} as const;

console.dir(document.body);
console.trace(document.body);
// type UValues = "Bobby Hadz" | "Chile"
type UValues = typeof obj[keyof typeof obj];

// type UKeys = "name" | "country"
type UKeys = keyof typeof obj;

export function DemoUnion() {
  return <>DEMO Union</>;
}
