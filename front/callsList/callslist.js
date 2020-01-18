// Initialize and add the map
function initMap() {
    //call location
    var warsaw = {
        lat: 52.231884,
        lng: 21.005984
    };
    // The map, centered at call location
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 10,
            center: warsaw
        });
    /*he marker, positioned at Uluru
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });*/
};

function showPosition(lat, lng) {
    var point = { lat, lan };
    var marker = new google.maps.marker({
        position: point,
        map: map
    })

};


const getData = () => {
    fetch(`http:localhost:8888/calls`)
        .then(resp => resp.json())
        .then(data => {
            const tableBody = document.getElementById('calls-table')

            data.forEach(call => {
                row = document.createElement("tr");
                row.setAttribute('id', `${call.phone}`);

                row.innerHTML = `
            <td>${call.date}</td>
            <td>${call.phone}</td>
            <td>${call.lat}</td>
            <td>${call.lng}</td>
        `;
                //tu dodajemy wiersz z pacjentem
                tableBody.appendChild(row);
            })
        });

}
getData();