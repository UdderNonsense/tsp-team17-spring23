class Task {
    // Stores its name, description, and progress
    name;
    description;
    progress;
    constructor() {
        this.name = "";
        this.description = "";
        this.progress = 0;
    }

    get getName(){
        return this.name;
    }

    set setName(name){
        // This will check for the new line character, just in case the user put '\n' in their description, we want to keep that for them
        let nameArray = name.split("");
        nameArray.forEach((item, index) => {
            if (item === '\n'){
                nameArray.push('\\n', index);
            }

        })
        this.name = nameArray.join("");
    }

    get getDescription(){
        return this.description;
    }

    set setDescription(description){
        let nameArray = description.split("");
        nameArray.forEach((item, index) => {
            if (item === '\n'){
                nameArray.push('\\n', index);
            }

        })
        this.description = nameArray.join("");
    }

    get progress(){
        return this.progress;
    }

    set progress(progress){
        this.progress =  progress;
    }
}

class TaskList {
    name;
    list;

    constructor() {
        this.name = "";
        this.list = [];
    }

    get name(){
        return this.name;
    }

    set name(name){
        let nameArray = name.split("");
        nameArray.forEach((item, index) => {
            if (item === '\n'){
                nameArray.push('\\n', index);
            }

        })
        this.name = nameArray.join("");
    }

    get list(){
        return this.list;
    }

    get length(){
        return this.list.length;
    }

}
var listOfTaskLists = []

// For testing purposes
for (let i = 0; i < 3; i++){
    listOfTaskLists[i] = new TaskList();
    listOfTaskLists[i].name = "LIST NAME" + i;
    for (let j = 0; j < 3; j++){
        listOfTaskLists[i].list[j] = new Task();
        listOfTaskLists[i].list[j].setName = "Task NAME";
        listOfTaskLists[i].list[j].setDescription = "[DESCRIPTION]";
        listOfTaskLists[i].list[j].progress = Math.round((((j+1)/3) * 100)*100)/100;
    }
}


const fs = require('fs')
const filePath = "test.txt";
const kanbanTitle = "Cool Board Title";

var writeStream = fs.createWriteStream(filePath);

writeStream.write(kanbanTitle);
var currentList;
var currentTask;

for (let i = 0; i < listOfTaskLists.length; i++){
    currentList = listOfTaskLists[i];
    writeStream.write("\n" + (i+1) + " " + currentList.name);
    for (let j = 0; j < currentList.length; j ++){
        currentTask = currentList.list[j];
        writeStream.write("\n" + (i+1) + "." + (j+1) + " " + currentTask.getName);
        writeStream.write("\n" + currentTask.getDescription);
        writeStream.write("\nProgress: " + currentTask.progress.toString());
    }


}
writeStream.close();