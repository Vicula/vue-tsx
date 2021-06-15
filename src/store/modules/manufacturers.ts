interface ManState {
  name: string;
}

export default {
  state: () => ({
    name: "Buster",
  }),

  getters: {
    //
  },

  mutations: {
    SET_NAME(state: ManState, payload: string) {
      state.name = payload;
    },
  },

  actions: {
    saveName({ commit }: { commit: () => void }, data: string) {
      commit("SET_NAME", data);
    },
  },
};
