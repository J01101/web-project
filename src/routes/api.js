import axios from 'axios'

export default({
    mounted() {

        if (window.naver && window.naver.maps) {
            this.initMap();
        } else {
            const script = document.createElement('script');
            /* global naver */
            script.onload = () => naver.maps.load(this.initMap);
            script.src = 'https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=vacjlo3i2q';
            document.head.appendChild(script);
        }
    },
    methods: {
        initMap() {
            var container = document.getElementById('map');
            var options = {
              center: new naver.maps.LatLng(this.addr.lat,this.addr.lon),
              level: 3
            };

            var map2 = new naver.maps.Map(container, options);

            var markerPosition  = new naver.maps.LatLng(this.addr.lat,this.addr.lon); 
            var marker = new naver.maps.Marker({
                 position: markerPosition
            });
            marker.setMap(map2);

        }
    }
})

