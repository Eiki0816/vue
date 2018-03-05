 import storageUtil from '../util/storageUtil'

 import {RECEIVE_TODOS,ADD_TODO,DELETE_TODO,CLERA_COMPLETE} from './types'

 export default{
 	readTodos({commit}){
 		setTimeout(()=>{
            const todos = storageUtil.fetch()
            commit(RECEIVE_TODOS,{todos}) //交给mutation 的数据必须包含在一个对象中
 		},1000)
 	},
 	addTodo({commit},todo){
 		commit(ADD_TODO,{todo})
 	},
 	delete_todo({commit},index){
 		commit(DELETE_TODO,{index})
 	},
 	selectAll({commit},checkAll){
       commit(SELECT_ALL,{checkALL})
 	},
 	cleraComplete({commit}){
 		commit(CLERA_COMPLETE)
 	}
 }