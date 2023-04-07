type X = Promise<string>;
type Y = Promise<{ field: number }>;
type Z = { field: number };

/*
type Transform<T> = T extends object & {
  then(onfulfilled: infer F, ...args: infer _): any;
}
  ? F extends (value: infer V, ...args: infer _) => any
    ? V
    : never
  : never;
*/

type Transform<T> = T extends Promise<infer V> ? V : undefined;

type ResultX = Transform<X>; // ResultX: string
type ResultY = Transform<Y>; // ResultY: {field: number}
type ResultZ = Transform<Z>; // ResultZ: undefined

type User = {
  id: number;
  kind: string;
};

type Doc = {
  id: string;
};

type GetProperty<T, Prop extends keyof T> = T extends { [K in Prop]: infer V }
  ? V
  : never;

type UserId = GetProperty<User, 'id'>; // UserId: number
type DocId = GetProperty<Doc, 'id'>; // DocId: string
type UserKind = GetProperty<User, 'kind'>;

function makeCustomer<T extends User>(u: T): T {
  return {
    ...u,
    id: u.id,
    kind: 'customer',
  };
}

const u: User = {
  id: 1,
  kind: 'user',
};

const eu: User & { dob: string } = {
  dob: '',
  id: 2,
  kind: 'eu-user',
};

const c = makeCustomer(u);

const ec = makeCustomer(eu);

/*
function f(a: string | number, b: string | number) {
  if (typeof a === 'string') {
    return a + ':' + b; // no error but b can be number!
  } else if (typeof b === 'number') {
    return a + b;
  } else {
    return a + b; // error as b can be number | string
  }
}

const f1 = f(12, 24);
const f2 = f('23', 'a');
*/
function f(a: string, b: string): string;
function f(a: number, b: number): number;
function f(a: string | number, b: string | number): string | number {
  if (typeof a === 'string') {
    return a + b;
  } else {
    return a + (b as number);
  }
}
const a = f('a', 'b'); // a is string :)
const b = f(1, 2); // b is number :)

//
type SomeF = (a: number, b: string) => number;
/*
type AppendArgument<F, A> = F extends (...args: infer AF) => infer RF
  ? (x: A, ...args: AF) => RF
  : never;
type FinalF = AppendArgument<SomeF, User>;
*/
type AppendArgument<F extends (...args: any) => any, A> = (
  x: A,
  ...args: Parameters<F>
) => ReturnType<F>;
type FinalF = AppendArgument<SomeF, User>;
