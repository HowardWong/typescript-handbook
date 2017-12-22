const func1 = (x, y: number): number => {
  return x + y;
}

const func2: (x, y: number) => number = func1

const func_optional: (x, y?: number) => number = func1

const func_default_init: (x, y: number) => number = (x: number, y: number = 1 ): number => {
  return x + y;
}

function buildName(firstName: string, ...restOfName: string[]) {
  return firstName + " " + restOfName.join(" ");
}
let buildNameFun: (fname: string, ...rest: string[]) => string = buildName;


// `this`
let deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  createCardPicker: function() {
    return () => {
        let pickedCard = Math.floor(Math.random() * 52);
        let pickedSuit = Math.floor(pickedCard / 13);

        return {suit: this.suits[pickedSuit], card: pickedCard % 13};
    }
  }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

// Even better, TypeScript will warn you when you make this mistake if you pass the --noImplicitThis flag to the compiler.
// It will point out that this in this.suits[pickedSuit] is of type any.


// overload
let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: {suit: string; card: number; }[]): number;
function pickCard(x: number): {suit: string; card: number; };
function pickCard(x): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
