import axios from 'axios'
import router from '../router';
const _api = axios.create({
    baseURL: "//bcw-sandbox.herokuapp.com/api",
    timeout: 3000
})

export default {
    state: {

    },
    mutations: {

    },
    actions: {
        async getCars({ commit }) {
            try {
                let res = await _api.get("cars")
                commit("setResource", { resource: "cars", data: res.data.data })
            } catch (error) {
                console.error(error);
            }
        },
        async getCar({ commit }, carId) {
            try {
                let res = await _api.get("cars/" + carId)
                console.log("got a car:", res.data);
                let payload = {
                    resource: "activeCar",
                    data: res.data.data
                }
                commit("setResource", payload)
            } catch (error) {
                console.error(error);
            }
        },
        async createCar({ dispatch }, carData) {
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
        async deleteCar({ commit }, carId) {
            try {
                let res = await _api.delete("cars/" + carId)
                console.log(res.data);
                router.push({ name: "Cars" })
                commit("setResource", { resource: "activeCar", data: {} })
            } catch (error) {
                console.error(error);
            }
        },
        async updateCar({ commit }, updatedCar) {
            try {
                let res = await _api.put("cars/" + updatedCar.id, updatedCar.data)
                commit("setResource", { resource: "activeCar", data: res.data })
            } catch (error) {
                console.error(error);
            }
        }
    }
}