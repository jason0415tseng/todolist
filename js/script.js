Vue.component('todo-list', {
    template: '#todo-list',
    props: {
        todolist: {
            default: function() { return [] }
        }



    },
    data() {
        return {
            newToDo: ''
        };
    },
    computed: {
        incomplete() {
            return this.todolist.filter(this.inProgress).length;
        }
    },
    methods: {
        addToDo() {
            let _this = this;
            axios.get("https://yesno.wtf/api").then(function(response) {
                console.log(response);
                // _this.answer = response.data.answer;
                // _this.image = response.data.image;
            });
            if (this.newToDo) {
                this.todolist.push({
                    title: this.newToDo,
                    completed: false
                });
                this.newToDo = '';
            }
        },
        completeToDo(todo) {
            todo.completed = !todo.completed;
        },
        removeToDo(index) {
            this.todolist.splice(index, 1);
        },
        clearCompleted() {
            this.todolist = this.todolist.filter(this.inProgress);
        },
        clearAll() {
            this.todolist = [];
        },

        inProgress(todo) {
            return !this.isCompleted(todo);
        },
        isCompleted(todo) {
            return todo.completed;
        }
    }
});

Vue.component('todo-item', {
    template: '#todo-item',
    props: ['todo'],
    computed: {
        className() {
            let classes = ['tasks__item__toggle'];
            if (this.todo.completed) {
                classes.push('tasks__item__toggle--completed');
            }
            return classes.join(' ');
        }
    }
});

var labApp = new Vue({
    el: '#lab',
    data: {
        todolist: [{
                title: 'Make todo list',
                completed: true
            },
            {
                title: 'Go skydiving',
                completed: false
            }
        ]
    }
});