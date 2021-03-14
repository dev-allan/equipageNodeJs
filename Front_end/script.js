let submit = document.getElementById("submitName");
let memberList = document.getElementById("member-list");
let nameInput = document.getElementById("name");


fetch('http://localhost:3000/name/')
.then(function(response) {
    response.text().then(function(text) {
      renderHTML(JSON.parse(text));
      });
  })
  .catch(error => alert("Erreur : " + error));


function submitForm()
{
    fetch("http://localhost:3000/name/add", { 
    method: "POST",
    body: JSON.stringify({ 
        name: nameInput.value,
    }),
    headers: { 
        "Content-type": "application/json; charset=UTF-8"
    } 
    }) 
}


function renderHTML(data) {
  for (let i = 0; i < data.length; i++) {
    memberList.innerHTML += `
    <div class="list-name">${data[i].name}</div>`;
  }
};