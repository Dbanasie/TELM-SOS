// Initialize and add the map
var map;
var setMarker = () => console.log('za wczesnie');

function initMap() {
    //call location
    var warsaw = {
        lat: 52.231884,
        lng: 21.005984
    };
    // The map, centered at call location
    map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 10,
            center: warsaw
        });
    /*he marker, positioned at Uluru
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });*/
    setMarker = () => {
        var marker = new google.maps.marker({
            position: point
        })

        marker.setMap(map);
    }
};
var point = {
    lat: 52.231884,
    lng: 21.005984
}

function showPosition(point) {
    var marker = new google.maps.Marker({
        position: point
    })

    marker.setMap(map);

};


const getData = () => {
    fetch(`http://localhost:8888/calls`)
        .then(resp => resp.json())
        .then(data => {
            const tableBody = document.getElementById('calls-table')

            data.forEach(call => {
                row = document.createElement("tr");
                row.setAttribute('data-id', `${call.phone}`);

                var date = new Date(call.date).toString().slice(0, 25);

                row.innerHTML =
                    `
                        <td>${date}</td>
                        <td>${call.phone}</td>
                        <td>${call.lat}</td>
                        <td>${call.lng}</td>
                    `;
                //tu dodajemy wiersz z pacjentem
                tableBody.appendChild(row);
            })
        });

}

jQuery(document).on('click', '#calls-table tr', evt => {
    const phone = jQuery(evt.currentTarget).data().id;
    // console.log(jQuery(evt.currentTarget).data());
    //console.log(phone);
    fetch(`http://localhost:8888/user?dupaMarysi=${phone}`)
        .then(resp => resp.json())
        .then(data => {
            alert('Zgłoszenie od użytkownika:\n' + data.name + ' ' + data.surname + '\n' + 'PESEL: ' + data.pesel + '\nData urodzenia: ' + data.date_of_birth);
        })
});

getData();