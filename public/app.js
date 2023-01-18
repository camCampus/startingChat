let socket = io();
let loginForm = document.getElementById("loginForm");
let loginInput = document.getElementById("loginInput");
let loginSubmit = document.getElementById("loginSubmit");
let chatForm = document.getElementById("chatForm");

let chatSection = document.getElementById("chatSection");

Array.from(chatSection.children).forEach((element) => {
  console.log(element);
  element.classList.add("enable");
});

loginSubmit.addEventListener("click", () => {
  console.log(loginInput.value);
});
chatForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (input.value) {
    socket.emit("chat message", input.value);
    input.value = "";
  }
});

socket.on("chat message", function (msg) {
  var item = document.createElement("li");
  item.textContent = msg;
  messages.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});
