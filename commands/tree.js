//======================================= import inbuild module's =====================================================//
let fs = require("fs");
let path = require("path");
const process = require("process");


//============================== Function "tree" which is the main function of this tree cmd option ===================//
function tree(srcpath) {
    console.log("|---Folder ->"+path.basename(srcpath));
    let temp=fs.readdirSync(srcpath);
    fun(temp,0,srcpath);
    return;
}

function fun(temp,i,srcpath) {
    //=== base case
    if(i==temp.length)
   { return;  }


    let tempvar=path.join(srcpath,temp[i]);
    let isFolder=fs.lstatSync( tempvar ).isDirectory();
    if(isFolder==true)
    {
            tree(tempvar);
    }
    if(isFolder==false)
       console.log("|__File ="+temp[i]);
       fun(temp,i+1,srcpath); 
}
module.exports={
    tree:tree
}