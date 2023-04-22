import { createRouter, createWebHistory } from 'vue-router'
import KanbanBoard from './components/single-kanban.vue'
import PomodoroTimer from './components/pomodoro-timer'

const routes = [
  { path: '/', redirect: '/kanban' },
  { path: '/kanban', component: KanbanBoard },
  { path: '/kanban/:id', component: KanbanBoard },
  { path: '/pomodoro', component: PomodoroTimer }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
