import uuid from 'uuid';

//add todos
export const addTodos=(
 {
     eventName='',
     description='',
     createdAt=0
 } = {}
)=>({
    type: 'ADD_TODO',
    todo: {
        id:uuid(),
        eventName,
        description,
        createdAt
    }
});

//remove todo
export const removeTodo = ({id} = {})=>({
    type: 'REMOVE_TODO',
    id
});

//EDIT_TODO
export const editTodo = (id,update)=>({
    type: 'EDIT_TODO',
    id,
    updates
});