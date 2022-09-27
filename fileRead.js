let fs = require("fs");

console.log("Before");

async function fn(){
    console.log("in fn before fs promise");

    let token = fs.promises.readFile(f1.txt);

    console.log("In fn before Await");

    let hexa = await token;
    let content =  hexa + "";

    console.log(content);
}

fn();

console.log("After");
