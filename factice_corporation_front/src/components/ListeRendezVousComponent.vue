<template>
    <div class="container-fluid">
        <div class="btn-group mb-3 d-flex justify-content-between">
            <button class="btn" :class="{ 'btn-dark': currentSort === 'date', 'btn-outline-dark': currentSort !== 'date' }" @click="sortRdv('date')">Trier par date</button>
            <button class="btn" :class="{ 'btn-dark': currentSort === 'employe', 'btn-outline-dark': currentSort !== 'employe' }" @click="sortRdv('employe')">Trier par employé</button>
            <button class="btn" :class="{ 'btn-dark': currentSort === 'client', 'btn-outline-dark': currentSort !== 'client' }" @click="sortRdv('client')">Trier par client</button>
            <button class="btn btn-primary" @click="sortRdv('all')">Tous les RDV</button>
        </div>

        <div class="d-flex justify-content-between mb-3">
            <input class="form-control flex-grow-1 mx-2" type="date" v-model="selectedDate">

            <select class="form-control flex-grow-1 mx-2" v-model="selectedEmployer">
                <option v-for="employe in employes" :key="employe.id" :value="employe">{{employe.nom}} {{employe.prenom}}</option>
            </select>

            <select class="form-control flex-grow-1 mx-2" v-model="selectedClient">
                <option v-for="client in clients" :key="client.id" :value="client">{{client.nom}} {{client.prenom}}</option>
            </select>
        </div>

        <table class="table table-striped">
            <thead>
            <tr>
                <th>Date</th>
                <th>Heure de début</th>
                <th>Heure de fin</th>
                <th>Employé</th>
                <th>Client</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="rdv in rdvList" :key="rdv.id">
                <td>{{rdv.date}}</td>
                <td>{{rdv.heureDebut}}</td>
                <td>{{rdv.heureFin}}</td>
                <td>{{rdv.employe.nom}} {{rdv.employe.prenom}}</td>
                <td>{{rdv.client.nom}} {{rdv.client.prenom}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import store from "@/Store";
import { employes, clients, rdvList } from '@/assets/FakeDB';

export default {
  name: "ListeRendezVousComponent",
  data() {
    return {
      selectedDate: '',
      selectedEmployer: null,
      selectedClient: null,
      currentSort: '',
    }
  },


  created() {
    store.commit('setEmployes', employes);
    store.commit('setClients', clients);
    store.commit('setRdvList', rdvList);
  },

  computed: mapState({
    rdvList: state => state.rdvList,
    employes: state => state.employes,
    clients: state => state.clients,
  }),

  methods: {
      sortRdv(sortBy) {
          // Si le bouton actuellement sélectionné est cliqué à nouveau, annulez le tri.
          if (this.currentSort === sortBy) {
              this.currentSort = '';
          } else {
              this.currentSort = sortBy;
          }

          // Effectuez le tri approprié en fonction de currentSort.
          switch(this.currentSort) {
              case 'date':
                  this.rdvList.sort((a, b) => a.date - b.date);
                  break;
              case 'employe':
                  this.rdvList.sort((a, b) => a.employe.nom.localeCompare(b.employe.nom));
                  break;
              case 'client':
                  this.rdvList.sort((a, b) => a.client.nom.localeCompare(b.client.nom));
                  break;
              default:
                  // Dans le cas où aucun tri n'est sélectionné ou pour "all", remettre les rdv dans leur état original.
                  this.rdvList = [...rdvList];
                  break;
          }
      },
  }
}
</script>

<style scoped>
</style>
