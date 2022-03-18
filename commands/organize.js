//======================================= import inbuild module's =====================================================//
let fs_Module = require("fs");
let path_Module = require("path");
const process = require("process");

//====================== create an Object type which include media,documents,app,image key's as array==================//
let type = {
  media: ["mp4", "mkv", "mp3"],
  archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
  documents: [
    "docx",
    "doc",
    "pdf",
    "xlsx",
    "xls",
    "odt",
    "ods",
    "odp",
    "odg",
    "odf",
    "txt",
    "ps",
    "tex",
  ],
  app: ["exe", "dmg", "pkg", "deb"],
  images: ["png", "jpg", "jpeg"],
};

//===== ek Function bnayege "organize" naam se jisme hum Path Bheje ge or usme kush kush operation process honge ======//
function organize(srcPath) {
  if (srcPath == undefined) {
    srcPath = process.cwd(); //process.cwd() returns current working directory of Node.js process
  }

  //================Humne New Folder bnana tha Organize_files naam ka us directory me jo user hume dega Path ke through so path toh "srcPath" me store hai toh abhi Bnate hai new Folder usme ===================================================//

  //========== Step 1. path me folder ka naam add kro ---- ====================//
  let organize_files_path = path_Module.join(srcPath, "organize_files");

  //========== Step 2. abhi "Organize_files_path" ko ek inbuild function (Jo folder create krta hai) or Folder Create krdo
  if (fs_Module.existsSync(organize_files_path) == true)
    console.log("Folder Already Exist !!!!!!!!!!!");
  else fs_Module.mkdirSync(organize_files_path);

  var allfiles = fs_Module.readdirSync(srcPath);
  // console.log(allfiles);

  for (let i = 0; i < allfiles.length; i++)
  {
    // fullpath Found krna 
    let fullPathOfFile = path_Module.join(srcPath, allfiles[i]);


    // check krna weather it is file or folder
    let isFile=fs_Module.lstatSync(fullPathOfFile).isFile();
    if (isFile) {
      //1.1 get ext name
      let ext = path_Module.extname(allfiles[i]).split(".")[1];
      // console.log(ext);
      //1.2 get folder name from extension
      let folderName = getFolderName(ext); //archives 
      //1.3 copy from src folder (srcPath) and paste in dest folder (folder_name e.g. document, media etc)
                  //copy      kya copy kro    paste 


      copy(srcPath, fullPathOfFile, folderName);
  }
}
}

function getFolderName(ext) 
{
     for(let temp in type)
     {
            for(let i=0;i<type[temp].length;i++)
            {
              if(ext==type[temp][i])
              return temp;
            }
     }
     return "other";                          // edge case....

}
function copy(srcPath, fullPathOfFile, folderName)
{
  let desPath=path_Module.join(srcPath,"organize_files",folderName);
  
  if(!fs_Module.existsSync(desPath))
   fs_Module.mkdirSync(desPath);

  let tempVariable= path_Module.basename(fullPathOfFile);
  let finalDesFile=path_Module.join(desPath,tempVariable);
  fs_Module.copyFileSync(fullPathOfFile,finalDesFile);
}

module.exports={
  organize:organize
}