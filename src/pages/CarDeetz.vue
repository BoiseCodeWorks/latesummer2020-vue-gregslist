<template>
  <div class="car-deetz">
    <h3>{{car.make}}</h3>
    <img class="img-fluid" :src="car.imgUrl" />
    <h3>{{car.model}}</h3>
    <h3>{{car.year}}</h3>
    <h3>{{car.price}}</h3>
    <p>{{car.description}}</p>
    <button class="btn btn-danger btn-block" @click="deleteCar">Delete</button>
  </div>
</template>


<script>
export default {
  name: "car-deetz",
  data() {
    return {};
  },
  mounted() {
    this.$store.dispatch("getCar", this.$route.params.id);
  },
  computed: {
    car() {
      return this.$store.state.activeCar;
    },
  },
  methods: {
    deleteCar() {
      //   this.$store.dispatch("deleteCar", this.$route.params.id);
      this.$store.dispatch("deleteCar", this.car._id);
    },
  },
  components: {},
};
</script>


<style scoped>
</style>