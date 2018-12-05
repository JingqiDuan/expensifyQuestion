import React from 'react';
import {connect} from 'react-redux';

const TodoList = (props) => (
<div>
    <h1>Todo List</h1>
    {props.todos.length}
</div>
);



const mapStateToProps = (state)=>{
    return{
        todos: state.todos,
        filter: state.filter
    };
};



export default connect(mapStateToProps)(TodoList);

