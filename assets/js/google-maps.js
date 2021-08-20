function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: -17.825897, lng: 31.006728};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Harare' // Title Location
    });
}