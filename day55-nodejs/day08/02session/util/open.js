const {exec} = require("child_process");

function open(url){
    const platForm = process.platform;
    // console.log(platForm);

    let cmd = "";
    switch(platForm) {
        case "win32":
            cmd = "start";
            break;
        case "darwin":
            cmd = "open";
            break;
        case "linux":
            cmd = "xdg-open";
            break;
    }
    exec(cmd + " " + url);
}

module.exports = open;