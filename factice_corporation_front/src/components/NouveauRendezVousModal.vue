<template>
    <div class="modal show d-block">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title text-white">Ajouter un nouveau rendez-vous</h5>
                    <button type="button" class="btn-close" @click="$emit('close')"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="submitForm">
                        <div class="mb-3">
                            <label class="form-label text-white">Employé :</label>
                            <select class="form-control" v-model="rdv.employe">
                                <option v-for="employe in employes" :key="employe.id" :value="employe">{{employe.nom}} {{employe.prenom}}</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label class="form-label text-white">Client :</label>
                            <select class="form-control" v-model="rdv.client">
                                <option v-for="client in clients" :key="client.id" :value="client">{{client.nom}} {{client.prenom}}</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label class="form-label text-white">Date :</label>
                            <input class="form-control" v-model="rdv.date" type="date">
                        </div>

                        <div class="mb-3">
                            <label class="form-label text-white">Heure de début :</label>
                            <div class="row">
                                <div class="col">
                                    <div class="text-center text-white mb-1">H</div>
                                    <select class="form-control" v-model="rdv.heureDebut">
                                        <option v-for="heure in heures" :key="heure" :value="heure">{{ heure }}</option>
                                    </select>
                                </div>
                                <div class="col">
                                    <div class="text-center text-white mb-1">Min</div>
                                    <select class="form-control" v-model="rdv.minuteDebut">
                                        <option v-for="minute in minutes" :key="minute" :value="minute">{{ minute }}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label text-white">Heure de fin :</label>
                            <div class="row">
                                <div class="col">
                                    <div class="text-center text-white mb-1">H</div>
                                    <select class="form-control" v-model="rdv.heureFin">
                                        <option v-for="heure in heures" :key="heure" :value="heure">{{ heure }}</option>
                                    </select>
                                </div>
                                <div class="col">
                                    <div class="text-center text-white mb-1">Min</div>
                                    <select class="form-control" v-model="rdv.minuteFin">
                                        <option v-for="minute in minutes" :key="minute" :value="minute">{{ minute }}</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <button type="submit" class="btn btn-primary">Ajouter le rendez-vous</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "NouveauRendezVousModal",

  computed: {
    ...mapState({
      employes: state => state.employes,
      clients: state => state.clients,
    }),
  },

  data() {
    return {
      heures: Array.from({ length: 24 }, (_, i) => i),
      minutes: Array.from({ length: 60 }, (_, i) => i),
      rdv: {
        date: '',
        employe: null,
        client: null,
        heureDebut: null,
        heureFin: null,
      },
    }
  },

  methods: {
    submitForm() {
      if (!Object.values(this.rdv).every(Boolean)) {
        // Un des champs du rendez-vous n'est pas renseigné.
        alert('Veuillez renseigner tous les champs.');
        return;
      }

      // Convertir les heures et minutes en format HH:MM
      this.rdv.heureDebut = `${String(this.rdv.heureDebut).padStart(2, '0')}:${String(this.rdv.minuteDebut).padStart(2, '0')}`;
      this.rdv.heureFin = `${String(this.rdv.heureFin).padStart(2, '0')}:${String(this.rdv.minuteFin).padStart(2, '0')}`;


      console.log(this.rdv);

      // Réinitialisez le formulaire après la soumission
      this.rdv = {
        date: '',
        employe: null,
        client: null,
        heureDebut: null,
        heureFin: null,
      };
    },
  },
}
</script>

<style scoped>
.modal {
    background-color: rgba(255, 255, 255, 0.6);
    position: fixed;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1050;
}

.modal-dialog {
    background-color: rgba(208, 165, 165, 0.61); /* Couleur de fond sans opacité */
    border-radius: 8px;
    width: 500px;
    max-width: 90%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Ombre pour donner du relief */
}

.modal-content {
    background-color: white;
}
.modal-header {
    background-color: rgba(34, 103, 196, 0.61);
}
.modal-body {
    background-color: rgba(65, 140, 196, 0.61);
}
</style>