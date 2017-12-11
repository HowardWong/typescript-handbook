// interface
// simple example
(function () {
    function printLabel(labelledObj) {
        console.log(labelledObj.label);
    }
    var myObj = { size: 10, label: "Size 10 Object" };
    printLabel(myObj);
})();
// single interface declared
(function () {
    function printLabel(labelledObj) {
        console.log(labelledObj.label);
    }
    var myObj = { size: 10, label: "Size 10 Object" };
    printLabel(myObj);
})();
// Optional Properties
(function () {
    function createSquare(config) {
        var newSquare = { color: "white", area: 100 };
        if (config.color) {
            newSquare.color = config.color;
        }
        if (config.width) {
            newSquare.area = config.width * config.width;
        }
        return newSquare;
    }
    var mySquare = createSquare({ color: "black", color_fsafsdfasdfsdf: "black" });
})();
// readonly array
var a = [1, 2, 3, 4];
var ro = a;
// the names of the parameters do not need to match
var mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
