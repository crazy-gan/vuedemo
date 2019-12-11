import Vue from 'vue'
import Vuex from 'vuex'
// import temp from '@/store/modules/temp'
// import createPersistedSatte from 'vuex-persistedstate'
Vue.use( Vuex );
const store = new Vuex.Store({
  state: {
    count: '0'
  },
  mutations: {
	increment (state) {
	  state.count++
	},
	// increment1 (state) {
	//   state.count=88
	// }
  }
})
export default store
