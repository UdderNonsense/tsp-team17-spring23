<template>
  <main @click="clearSelectedTask">
    <div class="container">
      <!--Most of the basic buttons-->
      <div class="addTaskContainer">
        <input type="text" v-model="newTask" placeholder="Enter new task name...">
        <button class="btn addButton" @click="addTask">Add Task</button>
      </div>
      <button class="btn loadButton" @click="loadTasksFromFile">Load Tasks</button>
      <input type="file" ref="fileInput" @change="onFileChange" style="display: none" />
      <button class="btn saveButton" @click="saveTasksToFile">Save Tasks</button>
      
      <!--All the lists are the same, just different headers. This is just setting which list structure their tied to as well as some formatting-->
      <!--Each one also their own edit and delete buttons so the tasks can be editted when needed-->
      <!--They all also have a way to select a task in them for details to show up when clicked-->
      <div class="d-flex flex-row">
        <div class="col-4">
          <h4 class="mb-3">TO-DO</h4>
          <draggable class="draggableList" :list="list1" group="board" item-key="name">
            <template #item="{ element }">
              <div class="listItem" :key="element.name" @click="selectTask(element)">
                <span class="text" :title="element.name">{{ element.name }}</span>
                <div>
                  <button class="btn editButton btn-sm" @click.stop="editTask(element)">Edit</button>
                  <button class="btn delButton btn-sm" @click.stop="deleteTask(list1, element)">X</button>
                </div>
              </div>
            </template>
          </draggable>
        </div>

        <div class="col-4">
          <h4 class="mb-3">IN PROGRESS</h4>
          <draggable class="draggableList" :list="list2" group="board" item-key="name">
            <template #item="{ element }">
              <div class="listItem" :key="element.name" @click="selectTask(element)">
                <span class="text" :title="element.name">{{ element.name }}</span>
                <div>
                  <button class="btn editButton btn-sm" @click.stop="editTask(element)">Edit</button>
                  <button class="btn delButton btn-sm" @click.stop="deleteTask(list2, element)">X</button>
                </div>
              </div>
            </template>
          </draggable>
        </div>

        <div class="col-4">
          <h4 class="mb-3">DONE</h4>
          <draggable class="draggableList" :list="list3" group="board" item-key="name">
            <template #item="{ element }">
              <div class="listItem" :key="element.name" @click="selectTask(element)">
                <span class="text" :title="element.name">{{ element.name }}</span>
                <div>
                  <button class="btn editButton btn-sm" @click.stop="editTask(element)">Edit</button>
                  <button class="btn delButton" @click.stop="deleteTask(list3, element)">X</button>
                </div>
              </div>
            </template>
          </draggable>
        </div>
      </div>

      <!--Formatting for the timer and the buttons to control it-->
      <div class="timerContainer">
        <div class="timer">
          <span>{{ minutes }}:</span>
          <span>{{ seconds }}</span>
        </div>
        <div class="timerControls">
          <button class="btn startTimerButton" @click="startTimer">Start Timer</button>
          <button class="btn resetTimerButton" @click="resetTimer">Reset Timer</button>
        </div>
        <div class="timerSettings">
          <label for="timerDuration">Set Timer Duration (min):</label>
          <input type="number" id="timerDuration" v-model.number="userDefinedTime" min="25" />
          <button class="btn updateTimerButton" @click="updateTimer">Update Timer</button>
        </div>
      </div>

      <!--Selected taskk to show off details if a task has any and was clicked-->
      <div v-if="selectedTask">
        <h4>{{ selectedTask.name }}</h4>
        <p>{{ selectedTask.details }}</p>
      </div>
    </div>
    <!--Just a counter showing off how many cycles was done-->
    <div class="cyclesCompleted">
      Cycles Completed: {{ cyclesCompleted }}
    </div>
  </main>
</template>

<script>
//Importing the draggable. This component handles all of the drag and drop features.
import draggable from "vuedraggable";
export default {
  components: {
    draggable,
  },
  //setting up all the variables the program uses as well as some sample data
  data() {
    return {
      list1: [{ name: "Sample 1", details: "Test Details 1" }],
      list2: [{ name: "Sample 2", details: "Test Details 2" }],
      list3: [{ name: "Sample 3", details: "Test Details 3" }],
      newTask: '',
      selectedTask: null,
      time: 1500,
      timerId: null,
      userDefinedTime: 25,
      cyclesCompleted: 0,
    };
  },

  //calculating minutes and seconds for the display
  computed: {
    minutes() {
      return Math.floor(this.time / 60).toString().padStart(2, '0');
    },
    seconds() {
      return (this.time % 60).toString().padStart(2, '0');
    },
  },

  methods: {
    //adding a task to the first list
    addTask() {
      if (this.newTask.trim() !== '') {
        this.list1.push({ name: this.newTask, details: "" });
        this.newTask = '';
      }
    },
    selectTask(task) {
      this.selectedTask = task;
    },
    //removing a task from the list
    deleteTask(list, task) {
      const index = list.indexOf(task);
      if (index !== -1) {
        list.splice(index, 1);
      }
    },
    //this is set up so you can click anywhere on screen to get rid of details showing up
    clearSelectedTask(event) {
      if (!event.target.classList.contains('listItem')) {
        this.selectedTask = null;
      }
    },

    //edit task that just prompts you to entner a new name and details for that item
    editTask(task) {
      const newName = prompt('Enter new task name:', task.name);
      const newDetails = prompt('Enter new task details:', task.details);
      if (newName !== null && newDetails !== null) {
        task.name = newName;
        task.details = newDetails;
      }
    },

    //logic for the timer
    startTimer() {
      if (!this.timerId) {
        this.timerId = setInterval(() => {
          if (this.time > 0) {
            this.time--;

            // 5 minute break
            if (this.time === 300) {
              alert('Your 5 minute break starts now.');
            }
          } else {
            clearInterval(this.timerId);
            this.timerId = null;
            this.cyclesCompleted++;
            alert("Cycle Completed");
          }
        }, 1000);
      }
    },

    //this just resets it the timer
    resetTimer() {
      clearInterval(this.timerId);
      this.time = 1500;
      this.timerId = null;
    },

    //this is how you change the time to you preferred interval. Break time notice is unchanged though.
    updateTimer() {
      if (this.userDefinedTime >= 25) {
        this.time = this.userDefinedTime * 60;
      } else {
        alert("Please set the timer duration to at least 25 minutes.");
        this.userDefinedTime = 25;
      }
    },
    //where the file load gets triggered
    loadTasksFromFile() {
      this.$refs.fileInput.click();
    },
    //handles all the loading of the files into the 3 lists format we have
    onFileChange(e) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const tasksData = JSON.parse(e.target.result);
          this.list1 = tasksData.list1 || [];
          this.list2 = tasksData.list2 || [];
          this.list3 = tasksData.list3 || [];
        };
        reader.readAsText(file);
      }
      e.target.value = '';
    },

    //handles the saving of the 3 lists into a format we can use and then downloads it
    saveTasksToFile() {
      const tasksData = {
        list1: this.list1,
        list2: this.list2,
        list3: this.list3
      };
      const data = new Blob([JSON.stringify(tasksData)], { type: 'text/plain' });
      const url = URL.createObjectURL(data);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'tasks.txt';
      link.click();
      URL.revokeObjectURL(url);
    }


  },

};
</script>

<!--All the formatting and colors for the code-->
<style scoped>
.draggableList {
  background: #acdaac;
  color: #030303;
  border: 1px solid;
  height: 60vh;
  margin-right: 20px;
}

.listItem {
  margin: 10px;
  padding: 10px;
  cursor: pointer;
  font-size: 18px;
  border-radius: 5px;
  background: #ffffff;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.addButton {
  background-color: #acdaac;
  color: #000000;
  border-color: #acdaac;
}

.addButton:hover {
  background-color: #006e0f;
  border-color: #006e0f;
}

.delButton {
  background-color: #dc3545;
  color: #fff;
  border-color: #dc3545;
}

.delButton:hover {
  background-color: #c82333;
  border-color: #bd2130;
}

.editButton {
  background-color: #8b8b8b;
  color: #fff;
  border-color: #8b8b8b;
}

.editButton:hover {
  background-color: #414141;
  border-color: #414141;
}

.timerContainer {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.timer {
  font-size: 5em;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-bottom: 10px;
}

.timer span:first-child {
  margin-right: 10px;
}

.timerControls button {
  margin-right: 10px;
}

.startTimerButton {
  background-color: #007bff;
  color: #fff;
  border-color: #007bff;
}

.startTimerButton:hover {
  background-color: #0069d9;
  border-color: #0062cc;
}

.resetTimerButton {
  background-color: #ffc107;
  color: #fff;
  border-color: #ffc107;
}

.resetTimerButton:hover {
  background-color: #e0a800;
  border-color: #d39e00;
}

.timerSettings {
  margin-top: 10px;
  display: flex;
  align-items: center;
}

.timerSettings input {
  margin-left: 10px;
  margin-right: 10px;
}

.updateTimerButton {
  background-color: #17a2b8;
  color: #fff;
  border-color: #17a2b8;
}

.updateTimerButton:hover {
  background-color: #138496;
  border-color: #117a8b;
}

.cyclesCompleted {
  position: fixed;
  bottom: 10px;
  right: 10px;
  font-size: 1.5em;
  font-weight: bold;
}

.loadButton {
  background-color: #6c757d;
  color: #fff;
  border-color: #6c757d;
}

.loadButton:hover {
  background-color: #5a6268;
  border-color: #545b62;
}

.saveButton {
  background-color: #28a745;
  color: #fff;
  border-color: #28a745;
}

.saveButton:hover {
  background-color: #218838;
  border-color: #1e7e34;
}
</style>