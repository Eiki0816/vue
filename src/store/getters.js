 export default{
 	todos(state){
 	   return state.todos
 	},
 	completeSize(state){
       return state.todos.reduce((pretotal,todo) =>{
          return pretotal + (todo.complete ? 1 : 0)
       },0)
 	},
 	totleSize(state){
 	   return state.todos.length
 	},
 	isAllComplete(state,getters){
      return  getters.completeSize == getters.totleSize && getters.totleSize>0
 	}
 } 