<template>
  <div class="cars row">
    <!-- Button trigger modal -->
    <button
      type="button"
      class="col-12 mb-3 btn btn-primary btn-lg"
      data-toggle="modal"
      data-target="#car-modal"
    >Create Car</button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="car-modal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="modelTitleId"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Create Car</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="container-fluid">
              <form @submit.prevent="createCar">
                <div class="form-group row">
                  <label for="inputName" class="col-sm-1-12 col-form-label">Make</label>
                  <div class="col-sm-1-12">
                    <input
                      type="text"
                      class="form-control"
                      name="make"
                      id="inputName"
                      placeholder="Enter make here..."
                      v-model="newCar.make"
                      required
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="inputName" class="col-sm-1-12 col-form-label">Model</label>
                  <div class="col-sm-1-12">
                    <input
                      type="text"
                      class="form-control"
                      name="model"
                      id="inputName"
                      placeholder="Enter model here..."
                      v-model="newCar.model"
                      required
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="inputName" class="col-sm-1-12 col-form-label">Year</label>
                  <div class="col-sm-1-12">
                    <input
                      type="number"
                      class="form-control"
                      name="year"
                      id="inputName"
                      v-model="newCar.year"
                      required
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="inputName" class="col-sm-1-12 col-form-label">Price</label>
                  <div class="col-sm-1-12">
                    <input
                      type="number"
                      class="form-control"
                      name="price"
                      id="inputName"
                      v-model="newCar.price"
                      required
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="inputName" class="col-sm-1-12 col-form-label">Description</label>
                  <div class="col-sm-1-12">
                    <input
                      type="text"
                      class="form-control"
                      name="description"
                      id="inputName"
                      placeholder="Enter description here..."
                      v-model="newCar.description"
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <label for="inputName" class="col-sm-1-12 col-form-label">Image Url</label>
                  <div class="col-sm-1-12">
                    <input
                      type="text"
                      class="form-control"
                      name="imgUrl"
                      id="inputName"
                      placeholder="Enter image url here..."
                      v-model="newCar.imgUrl"
                      required
                    />
                  </div>
                </div>
                <div class="form-group row">
                  <div class="offset-sm-2 col-sm-10">
                    <button type="submit" class="btn btn-primary">Make Car</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal End -->
    <button
      class="btn-secondary btn btn-block mb-2"
      @click="highToLow = !highToLow"
    >Price: High To Low</button>
    <car v-for="car in cars" :carData="car" :key="car.id" />
    <car
      :carData="{make: 'Whatevs', model: 'neat', price: 200, year: 2020, description: 'fake car', imgUrl: '//placehold.it/200x200'}"
      :sold="true"
    ></car>
  </div>
</template>


<script>
import Car from "../components/Car";
export default {
  name: "cars",
  data() {
    return {
      newCar: {},
      highToLow: false,
      lowToHigh: false,
    };
  },
  mounted() {
    this.$store.dispatch("getCars");
  },
  computed: {
    cars() {
      let cars = [...this.$store.state.cars];
      if (this.highToLow) {
        return cars.sort((a, b) => b.price - a.price);
      }
      return cars;
    },
  },
  methods: {
    createCar() {
      this.$store.dispatch("createCar", this.newCar);
      this.newCar = {};
      $("#car-modal").modal("hide");
    },
  },
  components: {
    Car,
  },
};
</script>


<style scoped>
</style>