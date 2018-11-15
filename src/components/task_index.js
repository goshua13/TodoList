import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';


class TaskIndex extends Component {

    render(){
        return(
            <div>
                <Link className='btn btn-primary' to='/task/new'>
                    Add Tasks
                </Link>
                
                <div className='niggers'>
                    {
                        this.props.tasks.map(task => {
                            return <div key={Math.random()}>{task}</div>
                        })
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const tasks = state.task.tasks;
    return { tasks }
}

TaskIndex = connect(mapStateToProps)(TaskIndex);


export default TaskIndex;