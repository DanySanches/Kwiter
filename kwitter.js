const firebaseConfig = {
  apiKey: "AIzaSyBf6SbXKOyccUQSky0L6LWnR8IyxktyEf4",
  authDomain: "kwiteradv.firebaseapp.com",
  databaseURL: "https://kwiteradv-default-rtdb.firebaseio.com",
  projectId: "kwiteradv",
  storageBucket: "kwiteradv.appspot.com",
  messagingSenderId: "955924527297",
  appId: "1:955924527297:web:9261f503b7c386dba6bc40"
};
// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

function addUser() {

  user_name = document.getElementById("user_name").value;

  localStorage.setItem("user_name", user_name);
  
    window.location = "kwitter_room.html";
}

