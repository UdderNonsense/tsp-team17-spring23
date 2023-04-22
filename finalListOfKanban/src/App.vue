<template>
  <div>
    <h1>
      TSP - Kanban Pomdor Timer
    </h1>
  </div>
  <div>
    <KanbanBoard />
  </div>
</template>

<script>
import KanbanBoard from './components/KanbanBoard-list.vue'

export default {
  name: 'App',
  components: {
    KanbanBoard
  }
}
</script>
