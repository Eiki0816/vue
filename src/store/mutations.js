 import {RECEIVE_TODOS,ADD_TODO,DELETE_TODO,SELECT_ALL,CLERA_COMPLETE} from './types'


 export default {

 	[RECEIVE_TODOS] (state,{todos}) {
        state.todos = todos
 	},
 	[ADD_TODO] (state,{todo}){
 		state.todos.unshift(todo)
 	},
    [DELETE_TODO] (state,{index}){
 		state.todos.splice(index,1)
 	},
 	[SELECT_ALL] (state,{checkAll}){
 		state.todos.forEach(todo =>{
 			todo.complate = checkAll
 		})
 	},
 	[CLERA_COMPLETE] (state){
 		state.todos =state.todos.filter(todo => !todo.complate)
 	}
 }