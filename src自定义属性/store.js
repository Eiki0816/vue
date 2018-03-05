const TODOS_KEY='todos_key';
export default {
	alert(334)
	readTodos:function(){
		//获取数据解析成json数据
		return JSON.parse(window.localStorage.getItem(TODOS_KEY || '[]'))
	},
	saveTodos :function(todos){
		window.localStorage.setItem(TODOS_KEY,JSON.stringify(todos))
	}
}