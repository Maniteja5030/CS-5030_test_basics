

var todoservice = require('./todo.service.js');
describe('todo test suite', () => {

    test("truth_value", () => {
        expect(true).toBe(true);
    });
    
    let todo_service = new todoservice();

    test("if service instance is created", () => {
        expect(todo_service instanceof todoservice).toBe(true);
    });

    
    // Initial length of the todo list is 3 // 3 default tasks
    test("get_todos", () => {
        expect(todo_service.get_todos().todo.length).toEqual(3);
    });

    

    // Write all your test cases here that corresponds to software requirements
    test("add_todo", () => {
        expect(todo_service.add_todo({
            "title": "Add1",
            "description": "D1",
            "done": false
        }).todo.length).toEqual(4);
    });
    test("add_todo", () => {
        expect(todo_service.add_todo({
            "title": "Add2",
            "description": "D2",
            "done": false
        }).todo.length).toEqual(5);
    });
    test("delete_todo", () => {
        expect(todo_service.delete_todo({
            "title": "Add1",
            "description": "D1",
            "done": false
        }).todo.length).toEqual(4);
    });
    test("delete_todo", () => {
        expect(todo_service.delete_todo({
            "title": "Add2",
            "description": "D2",
            "done": false
        }).todo.length).toEqual(3);
    });
    test("update_todo", () => {expect(todo_service.update_todo(1,{
        "title": "Update3",
        "description": "Des1",
        "done": false
    }).todo[1]).toEqual({
        "title": "Update3",
        "description": "Des1",
        "done": false
    }); 
    });
    test("update_todo", () => {expect(todo_service.update_todo(1,{
        "title": "Update4",
        "description": "Des2",
        "done": false
    }).todo[1]).toEqual({
        "title": "Update4",
        "description": "Des2",
        "done": false
    }); 
    });
});