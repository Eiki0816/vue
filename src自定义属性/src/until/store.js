const TODOS_KEY='todos_key';
export default {
	save:function(todos){
	 	localStorage.setItem(TODOS_KEY,JSON.stringify(todos))
	},
	fetch:function(){
		//获取数据解析成json数据
		return JSON.parse(localStorage.getItem(TODOS_KEY || '[]'))
	}
	
}