import { createApp } from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import createPersistedState from 'vuex-persistedstate';

const app = createApp(App);
app.use(Vuex);


export default new Vuex.Store({
    state:{
        second: {
            faultArray: [],
        },
        third: {
            faultArray: [],
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
    },
    plugins: [createPersistedState(
        {
            // ストレージのキーを指定。デフォルトではvuex
            key: 'myApp',
            // 管理対象のステートを指定
            paths: [
                'second',
                'third',
            ],
            // ストレージの種類を指定。デフォルトではローカルストレージ
            storage: window.localStorage,
        }
    )]
})
