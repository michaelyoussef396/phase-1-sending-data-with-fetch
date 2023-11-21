// Add your code here

function submitData(name, email) {
    const userData = {
        name: name,
        email: email,
    };

    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(userData),
    };

    return fetch("http://localhost:3000/users", configurationObject)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            document.body.innerHTML += `<p>New ID: ${data.id}</p>`;
            return data;
        })
        .catch(function (error) {
            document.body.innerHTML += `<p>Error: ${error.message}</p>`;
            return error.message;
        });
}