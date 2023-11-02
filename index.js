

const baseURL = "https://northwind.vercel.app/api/products";
const list = document.getElementById("list"); 

function deleteItem(id) {
    fetch(`${baseURL}/${id}`, {
        method: "DELETE"
    }).then(res => {
        console.log(res);
        window.location.reload();
    }).catch(err => console.log(err));
}

fetch(baseURL) 
    .then(res => res.json())
    .then(data => {
        console.log(data);
        let innerText = "";
        for (let i = 0; i < data.length; i++) {
            innerText += `
                <tr>
                    <th scope="row">${data[i].id}</th>
                    <td>${data[i].name}</td>
                    <td>${data[i].unitsInStock}</td>
                    <td>${data[i].quantityPerUnit}</td>
                    <td>${data[i].unitPrice}</td>
                    <td><button class="btn btn-danger" onclick="deleteItem(${data[i].id})">Delete</button></td>
                </tr>`;
        }
        list.innerHTML = innerText;
    })
    .catch(err => console.log(err));