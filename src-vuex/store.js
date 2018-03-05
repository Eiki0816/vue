//  store 对象模块
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state ={  //指定属性并初始化数据  相当于 data 对象
	count : 0
}

// mutations 是一个对象  包含多个用于更新state的方法  如何调用  通过在action 中调用 commit(mutationname) 方法来触发 
const mutations ={
	increment(state){
       state.count++
	},
	decrement(state){
       state.count--
	}
}

// actions是一个对象 包含多个触发mutation 触发的方法 （action）
// 在actions 中可以执行异步代码 或者逻辑代码
// 如何调用 ： 在组件中通过$store.dispatch(actionName)
const actions ={
	increment({commit}) {
		commit('increment')
	},
	decrement({commit}) {
		commit("decrement")
	},
	incrementIfodd({commit,state}) {
       if(state.count%2===1){
       	commit('increment')
       }
	},
	incrementIfAsync({commit}) {
		setTimeout(()=>{
			commit('increment')
		},1000)
	}

}

// getters 是一个对象 
// 包含了 多个计算属性（getter）方法

const getters={
	oddOrEven (state){
		return state.count%2 ==0 ? "偶数" :"奇数"
	},

	count (state){
		return state.count
	}
}

// 向外暴露store 实力对象
export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})