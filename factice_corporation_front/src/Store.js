import { createStore } from 'vuex';

export default createStore({
  state: {
    rdvList: [],
    employes: [],
    clients: [],
  },
  mutations: {
    setRdvList(state, rdvList) {
      state.rdvList = rdvList;
    },
    setEmployes(state, employes) {
      state.employes = employes;
    },
    setClients(state, clients) {
      state.clients = clients;
    },
  },
  actions: {
    // Ajoutez ici les actions pour modifier les états ci-dessus
  },
});
