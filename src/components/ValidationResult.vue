<script setup>
  import {watch, ref, onMounted} from 'vue';
  import { defineProps } from 'vue';
  import * as L from 'leaflet'

  const props = defineProps(['msg'])
  const displayedMsg = ref("")
  const coordinates = ref({"lat": 0, "lon": 0})
  let map;


  function createContent(msg){
    if(msg.includes('|')){
      let parts = msg.split('|');
      let coordstring = parts[1].split(':')
      let coords = coordstring[1].split(',')
      coordinates.value = {"lat":coords[0], "lon":coords[1]}
      displayedMsg.value = "Image was successfully validated!"
      console.log(parts[0])
    }else{
      displayedMsg.value = props.msg;
    }
  }

  watch(() => props.msg, (newVal, oldVal) => {
    if(!(oldVal === newVal)) {
      createContent(props.msg)
      console.log(coordinates)
    }
  })

  function modalMapInit(){
    setTimeout(() => {
      map.invalidateSize()
    }, 400)

    L.marker([coordinates.value.lat, coordinates.value.lon]).addTo(map);
    map.panTo(L.latLng(coordinates.value.lat, coordinates.value.lon));
  }

  onMounted(()=>{
    map = L.map('map').setView([51.505, -0.09], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
  })
</script>

<template>
  <p>{{displayedMsg}}</p>
  <button
      v-if="coordinates.lat !== 0"
      type="button"
      class="btn btn-primary modal-button"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal"
      @click="modalMapInit"
  >
    More Details
  </button>

  <!-- Modal -->
  <div class="modal fade modal-custom" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Validation was successful!</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div>
            <table class="table table-hover table-modal">
              <tr>
                <td><b>Time</b></td>
                <td>23.04.2025</td>
              </tr>
              <tr>
                <td><b>Location</b></td>
                <td>{{coordinates.lat}}, {{coordinates.lon}}</td>
              </tr>
            </table>
          </div>

          <div id="map" class="map-container"></div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.map-container{
  width: 450px;
  height: 500px;
}
.modal-button {
  display: block;
  appearance: none;
  border: 0;
  border-radius: 10px;
  padding: 0.75rem 3rem;
  margin: 1rem auto;
  font-size: 1.25rem;
  font-weight: bold;
  background: var(--green);
  color: var(--white-soft);
  text-transform: uppercase;
}
.table-modal{
  text-align: left;
}
</style>