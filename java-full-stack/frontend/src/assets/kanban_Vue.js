Vue.component('kanban-board', {
  props: ['board'],
  
});

var app = new Vue({
  el: "#kanban",
  data: {
    boards: [
      {
        name: "Backlog",
        progress: 0,
        todo: 2,
        inprogress: 0,
        done: 0,
        cards: [
          {
            id: 1,
            title: "Task 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          },
          {
            id: 2,
            title: "Task 2",
            description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          }
        ]
      },
      {
        name: "In Progress",
        progress: 50,
        todo: 0,
        inprogress: 1,
        done: 1,
        cards: [
          {
            id: 3,
            title: "Task 3",
            description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          }
        ]
      },
      {
        name: "Done",
        progress: 100,
        todo: 0,
        inprogress: 0,
        done: 2,
        cards: [
          {
            id: 4,
            title: "Task 4",
            description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          },
          {
            id: 5,
            title: "Task 5",
            description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          }
        ]
      }
    ]
  }
});
