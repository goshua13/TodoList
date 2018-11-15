import { 
    ADD_TASK,
    REMOVE_TASK
} from '../actions/types';

const INITIAL_STATE = {
    tasks: []
}

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    action.payload
                ]
            }
        case REMOVE_TASK:
            const taskToDelete = action.payload;
            let newTasks = [];
            state.tasks.map(task => {
                if(task != taskToDelete) {
                    newTasks.push(task)
                }
            })
            return {
                ...state,
                tasks: newTasks
            }
        default: return state;
    }
}