// Initialize and add the map
function initMap() {
    //call location
    var uluru = {
        lat: 52.225210,
        lng: 21.017171
    };
    // The map, centered at call location
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 10,
            center: uluru
        });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
};