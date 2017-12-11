
// Boolean
const bool: boolean = true;

// Number
const decimal: number = 6;
const hex: number = 0xf00d;
const binary: number = 0b1010;
const octal: number = 0o744;

// String
let s: string;
s = 'string by single/double quotes';
s = `string by template, not only ${s}`;

// Array
let list: number[];
list = [ 1, 2, 3 ];

// Tuple
let t: [ string, number ];
t = [ '1', 1 ];

// Enum
enum Color { Red, Green }
let c: Color = Color.Green; // 1
enum CustomColor { Red = 1, Green = 9 }
let cc: CustomColor = CustomColor.Green; // 9

// Any is Any
let any: any = 4;
any.ifItExists(); // ok, check in runtime
let obj: Object = 4;
/**
 *  obj.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'. *
 */


// void
let unusable: void = undefined;
function warnUser(): void {
  alert("This is my warning message");
}

// null & undefined
let u: undefined = undefined;
let n: null = null;

// never
function error(message: string): never {
    throw new Error(message);
}

// type assertions
let someValue: any, strLength: number;
someValue = "this is a string";
strLength = (<string>someValue).length;

someValue = "this is a string";
strLength = (someValue as string).length;
