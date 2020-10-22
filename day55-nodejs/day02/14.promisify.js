const fs = require("fs");
const path = require("path");
const {
    promisify
} = require("util");

const filePath = path.resolve(__dirname, "./01.txt");

const openFile = promisify(fs.open);
const writeFile = promisify(fs.write);
const closeFile = promisify(fs.close);

(
    async () => {
        const fd = await openFile(filePath,"a");
        await writeFile(fd,"这是用promisify写的");
        await closeFile(fd);
    }
)()