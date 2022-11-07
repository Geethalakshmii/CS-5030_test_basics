class todoservice{
    todo_data = {
        "todo":[{
            "title": "T0",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T2",
            "description": "D1",
            "done": false
        }]
    }
    constructor(){
        this.todos=this.todo_data;
    }

    get_todos(){
        return this.todos;
    }

    add_todo(todo){
        this.todo_data.todo.push(todo);
        console.log(this.todo_data.todo)
    }

    delete_todo(title){
        // Your code here
        this.todo_data.todo.shift(title,1)
        console.log(this.todo_data.todo)
    }

    update_todo(title, todo){
        // Your code here
        this.todo_data.todo.shift(title,1)
        this.todo_data.todo.push(todo)
        console.log(this.todo_data.todo)
    }
}

module.exports= todoservice;