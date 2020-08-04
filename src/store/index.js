import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from "../router"
import carModule from './CarModule'

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
    setResource(state, payload) {
      state[payload.resource] = payload.data
    },
    setCars(state, cars) {
      state.cars = cars
    },
    setActiveCar(state, car) {
      state.activeCar = car
    }
  },
  actions: {

  },
  modules: {
    carModule
  }
})
