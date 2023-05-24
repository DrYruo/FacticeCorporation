<template>
    <div class="container-fluid">
        <div class="btn-group mb-3 d-flex justify-content-between">
            <button class="btn" :class="{ 'btn-dark': currentSort.includes('date'), 'btn-outline-dark': !currentSort.includes('date') }" @click="sortRdv('date')">Trier par date</button>
            <button class="btn" :class="{ 'btn-dark': currentSort.includes('employe'), 'btn-outline-dark': !currentSort.includes('employe') }" @click="sortRdv('employe')">Trier par employé</button>
            <button class="btn" :class="{ 'btn-dark': currentSort.includes('client'), 'btn-outline-dark': !currentSort.includes('client') }" @click="sortRdv('client')">Trier par client</button>
        </div>

        <div class="d-flex justify-content-between mb-3">
            <input class="form-control flex-grow-1 mx-2" type="date" v-model="selectedDate">
            <button v-if="selectedDate" @click="selectedDate = null">X</button>

            <select class="form-control flex-grow-1 mx-2" v-model="selectedEmployer">
                <option v-for="employe in employes" :key="employe.id" :value="employe">{{employe.nom}} {{employe.prenom}}</option>
            </select>
            <button v-if="selectedEmployer" @click="selectedEmployer = null">X</button>

            <select class="form-control flex-grow-1 mx-2" v-model="selectedClient">
                <option v-for="client in clients" :key="client.id" :value="client">{{client.nom}} {{client.prenom}}</option>
            </select>
            <button v-if="selectedClient" @click="selectedClient = null">X</button>
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
            <tr v-for="rdv in filteredRdvList" :key="rdv.id">
                <td>{{ formatDate(rdv.date)}}</td>
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
      currentSort: [],
      localRdvList: []
    }
  },

  created() {
    store.commit('setEmployes', employes);
    store.commit('setClients', clients);
    store.commit('setRdvList', rdvList);
    this.localRdvList = [...this.rdvList];
  },

  computed: {
    ... mapState ({
      rdvList: state => state.rdvList,
      employes: state => state.employes,
      clients: state => state.clients,
    }),

    filteredRdvList() {
      return this.localRdvList.filter (rdv => {
        let isMatch = true;

        // Si une date est sélectionnée, on vérifie si elle correspond à celle du rendez-vous
        if (this.selectedDate) {
          const selectedDate = new Date(this.selectedDate);
          const rdvDate = new Date(rdv.date);

          // Comparer les dates en ignorant l'heure
          isMatch = isMatch && selectedDate.toISOString().substring(0, 10) === rdvDate.toISOString().substring(0, 10);
        }

        // Si un employé est sélectionné, on vérifie si c'est celui du rendez-vous
        if (this.selectedEmployer) {
          isMatch = isMatch && rdv.employe.id === this.selectedEmployer.id;
        }

        // Si un client est sélectionné, on vérifie si c'est celui du rendez-vous
        if (this.selectedClient) {
          isMatch = isMatch && rdv.client.id === this.selectedClient.id;
        }

        return isMatch;
      });
    },
  },

  methods: {
    sortRdv(sortBy) {
      // Vérifiez si le critère de tri est déjà actif
      const index = this.currentSort.indexOf(sortBy);

      if (index !== -1) {
        // Si le critère de tri est déjà actif, le supprimer pour désactiver le tri
        this.currentSort.splice(index, 1);
      } else {
        // Si le critère de tri n'est pas actif, l'ajouter à la liste des tris actifs
        this.currentSort.push(sortBy);
      }

      // Effectuez le tri approprié en fonction de currentSort.
      this.localRdvList.sort((a, b) => {
        for (let sortBy of this.currentSort) {
          let comparison = 0;
          switch(sortBy) {
            case 'date':
              comparison = new Date(a.date) - new Date(b.date);
              break;
            case 'employe':
              comparison = a.employe.nom.localeCompare(b.employe.nom);
              break;
            case 'client':
              comparison = a.client.nom.localeCompare(b.client.nom);
              break;
          }

          // Si cette clé de tri différencie les deux éléments, retournez la comparaison
          if (comparison !== 0) {
            return comparison;
          }
        }
        // Si aucune clé de tri ne différencie les deux éléments, ils sont considérés comme égaux
        return 0;
      });
    },

    formatDate(date) {
      return new Date(date).toLocaleDateString('fr-FR');
    },
  }
}
</script>

<style scoped>
</style>
