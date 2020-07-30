<template>
  <div class="car col-3 border rounded mb-3" @click="moveToCarPage">
    <!-- add router link dynamically -->
    <router-link :to="{name: 'Car', params: {id: carData._id}}">
      <h3>{{carData.make}}</h3>
    </router-link>
    <img class="img-fluid" :src="carData.imgUrl" />
    <h3>{{carData.model}}</h3>
    <p>Price: {{carData.price}}</p>
    <p>{{sold ? "This one is sold!": ""}}</p>
  </div>
</template>


<script>
export default {
  name: "car",
  props: ["carData", "sold"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    moveToCarPage() {
      this.$router.push({ name: "Car", params: { id: this.carData._id } });
    },
  },
  components: {},
};
</script>


<style scoped>
</style>