const firebaseConfig = {
  apiKey: "AIzaSyALAnJV1JezO-Bi1RiZAmuLcfCqtgwwppc",
  authDomain: "kwitterbd-c9b27.firebaseapp.com",
  databaseURL: "https://kwitterbd-c9b27-default-rtdb.firebaseio.com",
  projectId: "kwitterbd-c9b27",
  storageBucket: "kwitterbd-c9b27.appspot.com",
  messagingSenderId: "765789229419",
  appId: "1:765789229419:web:1f8efde36d26b887c4bc2e",
};

firebase.initializeApp(firebaseConfig);//Configuração do banco de dados

user_name = localStorage.getItem("user_name");//localStorage é um banco de dados; eu pego os nomes de usuários e coloco na variável chamada user name

document.getElementById("user_name").innerHTML =
  "Bem vindo(a) " + user_name + "!";//eu passo pra variável user name: Bem vindo mais o nome de usuário que a pessoa escolheu

function addRoom() {
  room_name = document.getElementById("room_name").value;//no Id room name se for colocado algum valor eu pego esse valor e coloco na variável

  firebase.database().ref("/").child(room_name).update({
    purpose: "adicionando nome da sala",
  });//Uma configuração do firebase para ele criar um quarto

  localStorage.setItem("room_name", room_name);// cria uma caixa dentro do banco de dados e coloca nela o nome do quarto

  window.location = "kwitter_page.html";//abre kwitter_page.html
}

function getData() {
  firebase
    .database()
    .ref("/")
    .on("value", function (snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key;
        Room_names = childKey;
        console.log("Nome da sala: " + Room_names);
        row =
          "<div class='room_name' id=" +
          Room_names +
          " onclick='redirectToRoomName(this.id)' >" +
          Room_names +
          "</div><hr>";
        document.getElementById("output").innerHTML += row;
      });
    });
}//nesse comando ele cria a sala com todos os elementos HTML

getData();//Chamar função da sala

function redirectToRoomName(name) {//Redirecionar para a sala com o nome escolido
  console.log(name);
  localStorage.setItem("room_name", name);//eu pego o nome do quarto e coloco na caixa
  window.location = "kwitter_page.html";//abre a kwitter_page.html
}

function logout() {//logout= sair da conta
  localStorage.removeItem("user_name");// ele tira o nome de usuário da caixa
  localStorage.removeItem("room_name");//tira o nome da sala da caixa
  window.location = "index.html";//abre index.html
}
