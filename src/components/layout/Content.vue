<template>
    <content class="fixed flex flex-col top-0 left-64 w-full h-full">
	    <div id="map" style="width:100%; height:900px;"></div>
    </content>
</template>

<script type="text/javascript" src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=vacjlo3i2q"></script>

<script>
import axios from 'axios'

export default {
    name: "map",
    data(){
        return{
            msg:"테스트"
        }
    },
    mounted() {
      // var container = document.getElementById('map');
      var mapOptions = {
          center: new naver.maps.LatLng(37.3595704, 127.105399),
          zoom: 25
          };
      var map = new naver.maps.Map('map', mapOptions);
    }
};
</script>

<style scoped>

</style>