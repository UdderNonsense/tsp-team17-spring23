<template>
  <div class="single-kanban">
    <h1>Single Kanban Board</h1>
    <div class="kanban-board">
      <div class="kanban-column">
        <h2>To Do</h2>
        <div class="kanban-column-items">
          <div class="kanban-item" v-for="item in todoList" :key="item.id">
            <div>{{ item.task }}</div>
            <button @click="deleteItem(item.id)">Delete</button>
          </div>
        </div>
        <form @submit.prevent="addItem">
          <input type="text" v-model="newTask" placeholder="Add New Task" />
          <button type="submit">Add</button>
        </form>
      </div>
      <div class="kanban-column">
        <h2>In Progress</h2>
        <div class="kanban-column-items">
          <div class="kanban-item" v-for="item in inProgressList" :key="item.id">
            <div>{{ item.task }}</div>
            <button @click="deleteItem(item.id)">Delete</button>
          </div>
        </div>
      </div>
      <div class="kanban-column">
        <h2>Done</h2>
        <div class="kanban-column-items">
          <div class="kanban-item" v-for="item in doneList" :key="item.id">
            <div>{{ item.task }}</div>
            <button @click="deleteItem(item.id)">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      todoList: [
        { id: 1, task: 'Finish coding challenge' },
        { id: 2, task: 'Do laundry' },
        { id: 3, task: 'Buy groceries' }
      ],
      inProgressList: [],
      doneList: [],
      newTask: ''
    }
  },
  methods: {
    addItem () {
      if (this.newTask !== '') {
        this.todoList.push({
          id: this.todoList.length + 1,
          task: this.newTask
        })
        this.newTask = ''
      }
    },
    deleteItem (itemId) {
      this.todoList = this.todoList.filter((item) => item.id !== itemId)
      this.inProgressList = this.inProgressList.filter(
        (item) => item.id !== itemId
      )
      this.doneList = this.doneList.filter((item) => item.id !== itemId)
    }
  }
}
</script>

<style scoped>
.kanban-board {
  display: flex;
}

.kanban-column {
  flex: 1;
  margin: 0 10px;
  border: 1px solid black;
  padding: 10px;
}

.kanban-column h2 {
  margin-top: 0;
}

.kanban-item {
  margin-bottom: 5px;
  display: flex;
  justify-content: space-between;
}

.kanban-item button {
  margin-left: 10px;
}
</style>
