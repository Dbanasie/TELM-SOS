document.getElementById('add-user-from')
    .addEventListener('submit', evt => {
        const formData = jQuery('form').serializeArray();
        const payload = {};
        formData.forEach(input => {
            if (input.value) {
                payload[input.name] = input.value;
            }
        })
        const payloadKeys = Object.keys(payload);

        if (['name', 'surname', 'PESEL', 'phone'].every(field => payloadKeys.includes(field))) {
            fetch("http://localhost:8888/addUser", {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                }).then(response => response.json())
                .then(response => console.log(response))
        } else {
            alert('uzupelnij wszystkie pola!')
        }
        evt.preventDefault();
    });