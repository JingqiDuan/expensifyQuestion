import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter, sortByDate,sortByImportance} from '../actions/filters';

const TodoListFilters = (props)=>(
    <div>
        <input type="text" value={props.filters.text} onChange={ (e)=>{
            props.dispatch(setTextFilter(e.target.value));
        }}/>

        <select
            value = {props.filters.sortBy}
            onChange = {(e)=>{
                if(e.target.value==='amount'){
                    props.dispatch(sortByDate());
                }else if(e.target.value==='importance'){
                    props.dispatch(sortByImportance());
                }
            }}
        >
            <option value = "date">Date</option>
            <option value = "importance">Importance</option>
        </select>
    </div>
);



const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(TodoListFilters);