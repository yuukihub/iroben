import { createApp } from 'vue';
import App from './App.vue';
import Vuex from 'vuex';

const app = createApp(App);
app.use(Vuex);

export default new Vuex.Store({
    state: {
        title: "タイトル",
        num: 1,
    },
    mutations: {
        addCount() {
            this.state.num++;
            console.log(this.state.num);
        },
    },
})
