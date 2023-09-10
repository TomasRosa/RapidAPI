document.addEventListener("DOMContentLoaded", function() {
    const idLista = document.getElementById('nombres');
    const idListaApellidos = document.getElementById('username');
    const idListaEmail = document.getElementById('email');
  
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) =>{
        console.log(res);
        return res.json();
      })
      .then ((json)=>{
        console.log(json);
        for(let i = 0; i < json.length; i++)
        {
            const liNombre = document.createElement("li");
            liNombre.textContent = json[i].name;
            idLista.appendChild(liNombre);

            const liUserName = document.createElement("li");
            liUserName.textContent = json[i].username;
            idListaApellidos.appendChild(liUserName);

            const liEmail = document.createElement("li");
            liEmail.textContent = json[i].email;
            idListaEmail.appendChild(liEmail);
        }
      })
      .catch((err) => {
        console.log(err); /*Preguntar Nahue*/ 
      });
  });
  