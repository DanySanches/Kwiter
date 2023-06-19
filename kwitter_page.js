//LINKS DO SEU APP FIREBASE
const firebaseConfig = {
    apiKey: "AIzaSyBf6SbXKOyccUQSky0L6LWnR8IyxktyEf4",
    authDomain: "kwiteradv.firebaseapp.com",
    databaseURL: "https://kwiteradv-default-rtdb.firebaseio.com",
    projectId: "kwiteradv",
    storageBucket: "kwiteradv.appspot.com",
    messagingSenderId: "955924527297",
    appId: "1:955924527297:web:9261f503b7c386dba6bc40"
  };

firebase.initializeApp(firebaseConfig);

//Antes de iniciarmos a função send(), vamos obter o nome de usuário e o nome da sala do armazenamento local para armazená-los em variáveis.
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send()
{
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
});

document.getElementById("msg").value = "";
}

//inicio da aula 105

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
     firebase_message_id = childKey;
     message_data = childData;
//Inicie a programar aqui
     console.log(firebase_message_id);
       console.log(message_data);
       name = message_data['name'];
       message = message_data['message'];
     like = message_data['like'];
     name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
     message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
     span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Curtidas: "+ like +"</span></button><hr>";

    row = name_with_tag + message_with_tag +like_button + span_with_tag;       
    document.getElementById("output").innerHTML += row;
//Programe até aqui
  } });  }); }
getData();

function updateLike(message_id)
{
console.log("clicou no botão curtir - " + message_id);
button_id = message_id;
likes = document.getElementById(button_id).value;
updated_likes = Number(likes) + 1;
console.log(updated_likes);

firebase.database().ref(room_name).child(message_id).update({
    like : updated_likes  
 });

}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("index.html");
}