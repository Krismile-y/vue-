import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  state: {
    cartList:[]
  },
  mutations: { //mutations 唯一目的就是修改state中的状态，每个方法完成的事件尽可能单一一点
AddCounter(state,payload){
 payload.count++
},

AddToCart(state,payload){
 state.cartList.push(payload)
}
  },
  actions: {
    addCart(context,payload){//actions 第一个参数是context
      // let oldProdunct=null;
      // for (let item of state.cartList){
      //   if(item.iid=== payload.iid){
      //     oldProdunct =item
      //   }
      // }
      //count自定义数量加1
      let oldProdunct =context.state.cartList.find(item => item.iid === payload.iid )//箭头函数
      if(oldProdunct){
        // oldProdunct.count +=1
        context.commit('AddCounter',oldProdunct)
      }else {
        payload.count=1
        // context.state.cartList.push(payload)
        context.commit('AddToCart',payload)
      }

    }

  },
  modules: {
  }
})
