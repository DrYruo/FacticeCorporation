<template>
    <h1 class="bg-dark text-white text-center p-3">FacticeCorporation & Co</h1>
    <ListeRendezVousComponent/>
    <NouveauRendezVousModal v-if="showModal" @close="showModal = false"></NouveauRendezVousModal>
    <button class="align-bottom btn btn-outline-primary float-button" @click="showModal = true">Ajouter un RDV</button>
</template>

<script>
import ListeRendezVousComponent from "@/components/ListeRendezVousComponent.vue";
import NouveauRendezVousModal from "@/components/NouveauRendezVousModal.vue";
export default {
  name: "HomePage",

  components: {
      NouveauRendezVousModal,
      ListeRendezVousComponent
  },

  data() {
    return {
        showModal: false
    }
  },
}
</script>

<style scoped>
.float-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
}
</style>