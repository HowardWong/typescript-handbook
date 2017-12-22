export interface StringValidator {
  isAcceptable(s: string): boolean;
}

export const numberRegexp = /^[0-9]+$/;
export class ZipCodeValidator implements StringValidator {
  isAcceptable(s: string) {
    return s.length === 5 && numberRegexp.test(s);
  }
}

class ZipCodeValidator implements StringValidator {
    isAcceptable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}
export { ZipCodeValidator };
export { ZipCodeValidator as mainValidator };


export * from "./StringValidator"; // exports interface 'StringValidator'
export * from "./LettersOnlyValidator"; // exports class 'LettersOnlyValidator'
export * from "./ZipCodeValidator";  // exports class 'ZipCodeValidator'


// default export
`
// JQuery.d.ts
declare let $: JQuery;
export default $;

// App.ts
import $ from "JQuery";
$("button.continue").html( "Next Step..." );

`

// cjs & AMD
`
// ZipCodeValidator.ts
export = ZipCodeValidator;

// Test.ts
import zip = require("./ZipCodeValidator");
`
