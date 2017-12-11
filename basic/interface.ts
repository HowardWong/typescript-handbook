
// interface

// simple example
(() => {

  function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
  }

  let myObj = {size: 10, label: "Size 10 Object"};
  printLabel(myObj);

})();

// single interface declared
(() => {

  interface LabelledValue {
    label: string;
  }

  function printLabel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
  }

  let myObj = {size: 10, label: "Size 10 Object"};
  printLabel(myObj);

})();

// Optional Properties
(() => {

  interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
  }

  function createSquare(config: SquareConfig): {color: string; area: number} {
      let newSquare = {color: "white", area: 100};
      if (config.color) {
          newSquare.color = config.color;
      }
      if (config.width) {
          newSquare.area = config.width * config.width;
      }
      return newSquare;
  }

  let mySquare = createSquare({ color: "black", color_fsafsdfasdfsdf: "black" });

})();

// readonly
interface Point {
  readonly x: number;
  readonly y: number;
}

// readonly array
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
/**
  ro[0] = 12; // error!
  ro.push(5); // error!
  ro.length = 100; // error!
  a = ro; // error!
*/

// readonly vs const
// Variables use const whereas properties use readonly.

// Function type
interface SearchFunc {
  (source: string, subString: string): boolean;
}
// the names of the parameters do not need to match
let mySearch: SearchFunc = (source: string, subString: string) => {
  let result = source.search(subString);
  return result > -1;
}
