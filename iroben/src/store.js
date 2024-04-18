import { createApp } from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate';

//const app = createApp(App);
//app.use(Vuex);
export default new Vuex.Store({
    state:{
        questions: {
            first: {
                faultArray: [],
            },
            second: {
                faultArray: [],
            },
            third: {
                faultArray: [],
            },
        },
        tools: {
            toggles: {
                second: false,
                third: false,
                paint: false,
            }
        },
    },
    mutations: {
        addFaultItem({ commit },{ level , item }) {
            let target = this.state.questions[level];
            target.faultArray.push(item);
        },
        reset({ state },{ level }) {
            let target = this.state.questions[level];
            target.faultArray = [];
        },
        toggle({ state },{ level , flag }){
            this.state.tools.toggles[level] = flag;
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
