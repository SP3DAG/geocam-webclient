<script setup>
  import {watch, ref} from 'vue';
  import { defineProps } from 'vue';
  import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet"

  let zoom = ref(10)
  let center = ref([52, 7.5])

  const props = defineProps(['msg'])
  const displayedMsg = ref("")
  const coordinates = ref([])

  function createContent(msg){
    if(msg.includes('|')){
      let parts = msg.split('|');
      let coordstring = parts[1].split(':')
      let coords = coordstring[1].split(',')
      coordinates.value = [coords[0], coords[1]]
      displayedMsg.value = "test"
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
</script>

<template>
  <p>{{displayedMsg}}</p>
  <button v-if="coordinates.length < 1" type="button" class="btn btn-primary modal-button" data-bs-toggle="modal" data-bs-target="#exampleModal">
    More Details
  </button>

  <!-- Modal -->
  <div class="modal fade modal-custom" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                <td>51.234 7.89</td>
              </tr>
              <tr>
                <td><b>Device</b></td>
                <td>GeoCam_1</td>
              </tr>
            </table>
          </div>

          <div class="map-container">
            <l-map ref="map" v-model:zoom="zoom" v-model:center="center" :useGlobalLeaflet="false">
              <l-tile-layer url="https://sgx.geodatenzentrum.de/wmts_basemapde/tile/1.0.0/de_basemapde_web_raster_farbe/default/GLOBAL_WEBMERCATOR/{z}/{y}/{x}.png"
                            layer-type="base"
                            name="Stadia Maps Basemap"></l-tile-layer>
            </l-map>
          </div>
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
  width: 25vw;
  height: 50vh;
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