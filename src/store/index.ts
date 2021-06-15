import { createStore } from "vuex";
import manufacturers from "../store/modules/manufacturers";

const store = createStore({
  modules: {
    manufacturers,
  },
});

export default store;
