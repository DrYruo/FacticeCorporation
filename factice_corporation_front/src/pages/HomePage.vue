<template>
    <h1 class="bg-dark text-white text-center p-3">FacticeCorporation & Co</h1>
    <ListeRendezVousComponent/>
</template>

<script>
import ListeRendezVousComponent from "@/components/ListeRendezVousComponent.vue";
export default {
  name: "HomePage",
  components: {
      ListeRendezVousComponent
  },
}
</script>

<style scoped>

</style>