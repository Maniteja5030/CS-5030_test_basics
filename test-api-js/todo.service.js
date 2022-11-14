class todoservice{
    todo_data = {
        "todo":[{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
            "description": "D1",
            "done": false
        },{
            "title": "T1",
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
        return this.todos;
    }

    delete_todo(id){
        this.todo_data.todo.splice(id, 1);
        return this.todos;
       
    }

    update_todo(id, todo){
        console.log(this.todo_data.todo[id]);
        this.todo_data.todo[id] = todo;
        console.log(this.todo_data);
        return this.todos;
    }
}


module.exports= todoservice;
