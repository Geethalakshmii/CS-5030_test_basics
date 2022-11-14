

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

    test("add", () => {
        todo_service.add_todo(
            {
                "title": "add",
                "description": "add",
                "done":   true 
            }
        )
        expect(todo_service.get_todos().todo.length).toEqual(4);
    });

    test("delete", () => {
        todo_service.delete_todo("add")
        expect(todo_service.get_todos().todo.length).toEqual(3);
    });

    test("delete", () => {
        todo_service.update_todo("T0",{
            "title": "update",
                "description": "update",
                "done":   true 
        })
        expect(todo_service.get_todos().todo.length).toEqual(3);
    });
});