//======================================= import inbuild and userDefine module ========================================//
let fs_Module=require("fs");
let path_Module=require("path");
let helpModule=require("./commands/help");     
let organizeModule=require("./commands/organize");     



//=================== take cmd input using process.argv and use slice for neglect first 2 =========================// 
let inputcmd= process.argv.slice(2);

//=================================== put options in cmd and path variables ===========================================//
let cmd=inputcmd[0];
var path=inputcmd[1];

// console.log(path);


//=========================================== switch statement for options executions ================================// 

switch (cmd) 
{
    case 'help':
        // console.log("help");
        helpModule.helpfun();
        break;
    case "organize":
        // console.log("organize"+path);
        organizeModule.organize(path);
        break;
    case "tree":
        console.log("tree"+path);
        break;
    default:
        console.log("Invalid Cmd");
        break;
}
