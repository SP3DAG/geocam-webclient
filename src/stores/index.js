import { defineStore } from 'pinia'

export const useGeoCamStore = defineStore('geocam', {
  state: () => ({
    photos: [],
    currentLocation: null,
    isLoading: false
  }),
  actions: {
    async fetchPhotos() {
      this.isLoading = true
      // API call would go here
      this.isLoading = false
    },
    updateLocation(position) {
      this.currentLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
    }
  }
})