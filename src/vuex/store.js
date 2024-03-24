import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var state = { 
  count: '',
}

var mutations = {
  incCount(state, step) { // 接收 state 参数
    
    state.count = step  ; // 使用传入的 step 参数
    console.log("中转传参", state.count)
  }
}

// 类似于计算属性 state里边的数据改变时候触发的方法。可以做一些操作 并且可以有返回值
var getters = {
  completedCountChange(state) {
    return state.count * 2 + '位';
  }
}

var actions = {
  asyncIncCount(context, step) {
    // 因此你可以调用 context.commit 来提交一个 mutation 使用 action 需要用 dispatch
    context.commit('incCount', step);

  }
}

const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
})

export default store;
