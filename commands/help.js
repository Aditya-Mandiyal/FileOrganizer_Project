// console.log("hello i m execute whenever help.js require");
function help() {
    console.log(`
    These are common commands used in various situations:

                 1). node main.js help
                 2). node main.js organize path
                 3). node main.js tree path

    `);
}

// module.exports=help;               // Either we can export whole help.js 

module.exports={                  // or a particular function with your choice name    
    helpfun:help
}