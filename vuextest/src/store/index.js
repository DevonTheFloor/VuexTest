import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0,
    name:'',
    price:''
  },
  mutations: {
    INCREMENT(state){
      state.count++
    },
    DECREMENT(state){
      state.count--
    },
    GET_TEDDIES(state){
   
      let req = new XMLHttpRequest();
      req.onreadystatechange = function (){
        if (req.readyState === 4) {
          let res = JSON.parse(this.responseText)
          console.log(res);
          res.forEach(object =>{
            state.name = object.name;
            state.price = object.price/100+' €'
          })
          
        }
      }
      //req.addEventListener('load',console.log(req.response));
      req.open('GET','http://localhost:3000/api/teddies');
      req.send();
      }
    },
  actions: {
    getteddies(context){
      context.commit('GET_TEDDIES')
    }
  },
  modules: {
  }
})
