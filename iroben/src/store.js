import { createApp } from "vue";
import App from "./App.vue";
import Vuex from "vuex";

const app = createApp(App);
app.use(Vuex);

export default new Vuex.Store({
    state: {
        second: {
            faultArray: [],
        },
        third: {
            faultArray: [],
        },
    },
    mutations: {
        addCount({ commit },{ level , item }) {
            let target = this.state[level];
            target.faultArray.push(item);
            console.log(target.faultArray);
        },
    },
})
