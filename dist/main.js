"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//*****************************************************************************
// Enable user to properly close down server...
process.stdin.resume();
process.stdin.setEncoding("ascii");
process.stdin.on('data', function (text) {
    //log.info('received data:', text);
    if (text == "q\r\n") {
        handleNormalExit(); // TODO: Doesn't seem to work!?
    }
    handleNormalExit(); // Use "AnyKey" for now!
});
function handleNormalExit() {
    console.log('User shut down.');
    process.exit();
}
const express = require("express");
var app = express();
const port = 3000;
let count = 0;
app.get('/', (req, res) => {
    res.send('Hello World!!' + count++);
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
console.log("Programs is running again!");
//# sourceMappingURL=main.js.map