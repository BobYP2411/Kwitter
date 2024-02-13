function addUser() {
  user_name = document.getElementById("user_name").value;//No Id user_name se for colocado algum valor eu pego esse valor e coloco na variável username 
  localStorage.setItem("user_name", user_name);//localStorage é um banco de dados; eu pego os nomes de usuários e coloco em uma caixa chamada user name
  window.location = "kwitter_room.html";//Você abre janela kwitter_room.html
}
