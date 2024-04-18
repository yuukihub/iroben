import { createApp } from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate';

//const app = createApp(App);
//app.use(Vuex);
export default new Vuex.Store({
    state:{
        first: {
            faultArray: [],
        },
        second: {
            faultArray: [],
        },
        third: {
            faultArray: [],
        },
        toggles: {
            second: false,
            third: false,
            paint: false,
        },
    },
    mutations: {
        addFaultItem({ commit },{ level , item }) {
            let target = this.state[level];
            target.faultArray.push(item);
        },
        reset({ state },{ level }) {
            let target = this.state[level];
            target.faultArray = [];
        },
        toggle({ state },{ level , flag }){
            this.state.toggles[level] = flag;
        },
    },
    plugins: [createPersistedState(
        {
            key: 'iroben',
            paths: [
                'first',
                'second',
                'third',
            ],
            storage: window.localStorage,
        }
    )]
})
