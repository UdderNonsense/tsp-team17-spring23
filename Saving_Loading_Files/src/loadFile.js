const fs = require('fs');
let arrayString;


fs.readFile('test.txt', 'utf8', (err, data) => {
    if(err){
        console.err(err);
        return;
    }
    arrayString = data.split("\n")

    console.log(arrayString);

    var boardTitle = arrayString[0];
    var taskList;
    var task;
    var description;
    var progress;

    //task, description, progress, need some sort of loop before we set tasklist again
    for (let i = 1; i < arrayString.length; i = i + 4){
        taskList = arrayString[i];
        console.log("Name of Tasklist: " + taskList);

        task = arrayString[i+1];
        description = arrayString[i+2];
        progress = arrayString[i+3];

        console.log("\nName of Task " + task);
        console.log("\nDescription of task: " + description);
        console.log("\nCurrent Progress: " + progress + "\n");
    }

})
