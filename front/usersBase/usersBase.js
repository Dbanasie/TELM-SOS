const getData = () => {
    fetch(`http:localhost:8888/users`)
        .then(resp => resp.json())
        .then(data => {
            const tableBody = document.getElementById('users-table')

            data.forEach(user => {
                row = document.createElement("tr");
                row.setAttribute('id', `${user.phone}`);

                row.innerHTML = `
                <td>${user.surname}</td>
            <td>${user.name}</td>
            <td>${user.pesel}</td>
            <td>${user.phone}</td>
        `;
                //tu dodajemy wiersz
                tableBody.appendChild(row);
            })
        });

}
getData();