<template>
  <div class="app">
    <div class="pomodoro-timer-wrapper">
      <pomodoro-timer />
    </div>
    <div class="single-kanban-list-wrapper">
      <single-kanban-list />
    </div>
  </div>
</template>

<script>
import PomodoroTimer from './pomodoro-timer.vue'
import SingleKanbanList from './single-kanban.vue'

export default {
  components: {
    PomodoroTimer,
    SingleKanbanList
  }
}
</script>

<style>
.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.pomodoro-timer-wrapper {
  height: 25%;
}

.single-kanban-list-wrapper {
  height: 75%;
}
</style>
