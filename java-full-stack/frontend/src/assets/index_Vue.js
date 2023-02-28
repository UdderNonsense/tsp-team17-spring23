const app = new Vue({
    el: ".boards-container",
    data: {
        boards: [
        {
            title: "Work Board",
            color: "work-board",
            progress: 20,
            stats: [{ label: "To-do:", value: 10 },
                    { label: "In-progress:", value: 5 },
                    { label: "Done:", value: 2 },],
        },

        {
            title: "School Board",
            color: "school-board",
            progress: 50,
            stats: [{ label: "To-do:", value: 20 },
                    { label: "In-progress:", value: 10 },
                    { label: "Done:", value: 8 },],
        },

        {
            title: "Personal Board",
            color: "personal-board",
            progress: 80,
            stats: [{ label: "To-do:", value: 15 },
                    { label: "In-progress:", value: 12 },
                    { label: "Done:", value: 0 },],
        },],

    },
});

app.Mount('#board-list')