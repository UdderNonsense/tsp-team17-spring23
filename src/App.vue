<template>
  <main @click="clearSelectedTask">
    <div class="container">
      <div>
        <input type="text" v-model="newTask" placeholder="Enter new task name...">
        <button class="btn addButton" @click="addTask">Add Task</button>
      </div>
      <div class="d-flex flex-row">
        <div class="col-4">
          <h3 class="mb-3">TO-DO</h3>
          <draggable class="draggableList" :list="list1" group="board" item-key="name">
            <template #item="{element}">
              <div class="listItem" :key="element.name" @click.stop="selectTask(element)">
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
          <h3 class="mb-3">IN PROGRESS</h3>
          <draggable class="draggableList" :list="list2" group="board" item-key="name">
            <template #item="{element}">
              <div class="listItem" :key="element.name" @click.stop="selectTask(element)">
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
          <h3 class="mb-3">DONE</h3>
          <draggable class="draggableList" :list="list3" group="board" item-key="name">
            <template #item="{element}">
              <div class="listItem" :key="element.name" @click.stop="selectTask(element)">
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
      <div v-if="selectedTask">
        <h4>{{ selectedTask.name }}</h4>
        <p>{{ selectedTask.details }}</p>
      </div>
    </div>
  </main>
</template>

<script>
import draggable from "vuedraggable";
export default {
  components: {
    draggable,
  },
  data() {
    return {
      list1: [{ name: "Sample 1", details:"Test Details 1" }],
      list2: [{ name: "Sample 2", details:"Test Details 2" }],
      list3: [{ name: "Sample 3", details:"Test Details 3" }],
      newTask: '',
      selectedTask: null,
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== '') {
        this.list1.push({ name: this.newTask, details: "" });
        this.newTask = '';
      }
    },
    selectTask(task) {
      this.selectedTask = task;
    },
    deleteTask(list, task) {
      const index = list.indexOf(task);
      if (index !== -1) {
        list.splice(index, 1);
      }
    },
    clearSelectedTask() {
      if (!event.target.classList.contains('list-item')) {
        this.selectedTask = null;
      }
    },
    editTask(task) {
      const newName = prompt('Enter new task name:', task.name);
      const newDetails = prompt('Enter new task details:', task.details);
      if (newName !== null && newDetails !== null) {
        task.name = newName;
        task.details = newDetails;
      }
    }
  },
};
</script>

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



.list-item span {
  max-width: 80%;
  word-wrap: break-word;
}

body {
  background-color: #2b2a2a !important;
}
html {
  background-color: #2b2a2a;
}
</style>
