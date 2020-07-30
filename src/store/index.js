import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from "../router"

const _api = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api",
  timeout: 3000
})

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cars: [],
    activeCar: {}
  },
  mutations: {
    setCars(state, cars) {
      state.cars = cars
    },
    setActiveCar(state, car) {
      state.activeCar = car
    }
  },
  actions: {
    async getCars({ commit, dispatch }) {
      try {
        let res = await _api.get("cars")
        commit("setCars", res.data.data)
      } catch (error) {
        console.error(error);
      }
    },
    async getCar({ commit, dispatch }, carId) {
      try {
        let res = await _api.get("cars/" + carId)
        console.log("got a car:", res.data);
        commit("setActiveCar", res.data.data)
      } catch (error) {
        console.error(error);
      }
    },
    async createCar({ commit, dispatch, state }, carData) {
      try {
        let res = await _api.post("cars", carData)
        console.log(res.data);
        //NOTE two ways to handle this
        // commit("setCars", [...state.cars, res.data.data])
        dispatch("getCars")
      } catch (error) {
        console.error(error);
      }
    },
    async deleteCar({ commit, dispatch, state }, carId) {
      try {
        let res = await _api.delete("cars/" + carId)
        console.log(res.data);
        router.push({ name: "Cars" })
        commit("setActiveCar", {})
      } catch (error) {
        console.error(error);
      }
    },
    async updateCar({ commit }, updatedCar) {
      try {
        let res = await _api.put("cars/" + updatedCar.id, updatedCar.data)
        commit("setActiveCar", res.data)
      } catch (error) {
        console.error(error);
      }
    }
  },
  modules: {
  }
})
