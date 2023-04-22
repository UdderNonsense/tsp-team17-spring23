<template>
  <div>
    <div>
      <form class="board-form" @submit.prevent="createBoard">
        <input type="text" v-model="newBoardTitle" />
        <button type="submit" class="add-board-button">Add Board</button>
      </form>
    </div>
    <div>
      <div class="board-list">
      <div v-for="board in boards" :key="board.id" class="board-container" @click="goToSingleKanban(board.id)">
        <div class="board-title">{{ board.title }}</div>
        <div class="board-status">
          <div class="status-item">Backlog: {{ board.backlog }}</div>
          <div class="status-item">In-Prog: {{ board.inProgress }}</div>
          <div class="status-item">Done: {{ board.done }}</div>
        </div>
        <button @click.stop="deleteBoard(board.id)">Delete</button>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      boards: [
        { id: 1, title: 'School Board', backlog: 3, inProgress: 1, done: 2 },
        { id: 2, title: 'Work Board', backlog: 2, inProgress: 2, done: 4 },
        { id: 3, title: 'Personal Board', backlog: 1, inProgress: 0, done: 3 }
      ],
      newBoardTitle: ''
    }
  },
  methods: {
    createBoard () {
      const id = this.boards.length + 1
      this.boards.push({
        id,
        title: this.newBoardTitle,
        backlog: 0,
        inProgress: 0,
        done: 0
      })
      this.newBoardTitle = ''
    },
    deleteBoard (id) {
      const index = this.boards.findIndex((board) => board.id === id)
      this.boards.splice(index, 1)
    },
    goToSingleKanban (id) {
      this.$router.push({ name: 'SingleKanban', params: { id } })
    }
  }
}
</script>

<style>
.board-form {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.add-board-button {
  margin: 20px 0;

}

.add-board-container {
  margin: 40px 0;
}

.board-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.board-container {
  background-color: #f4f4f4;
  border-radius: 5px;
  padding: 20px;
  cursor: pointer;
  width: 300px;
  height: 200px;
}

.board-title {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.board-status {
  display: flex;
  flex-direction: column;
}

.status-item {
  margin-bottom: 5px;
}
</style>
