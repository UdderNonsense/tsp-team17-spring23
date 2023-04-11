const fs = require('fs');
let arrayString;


fs.readFile('test.txt', 'utf8', (err, data) => {
    if(err){
        console.err(err);
        return;
    }
    arrayString = data.split("\n")


    var boardTitle = arrayString[0];
    var taskList;
    var task;
    var description;
    var progress;

    var foundList = true;
    var j = 1;

    console.log("Title is: " + boardTitle);
    //task, description, progress, need some sort of loop before we set tasklist again

    for (let i = 1; i < arrayString.length; i = i + 3){
        if (arrayString[i] === j.toString()) {
            taskList = arrayString[i+1];
            console.log("\nName of LIST: " + taskList);
            foundList = false;
            i+=2;
            j++;
        }

        task = arrayString[i];
        description = arrayString[i+1];
        progress = arrayString[i+2];




        console.log("\nName of TASK " + task);
        console.log("\nDESCRIPTION: " + description);
        console.log("\nPROGRESS: " + progress + "\n");


    }

})
