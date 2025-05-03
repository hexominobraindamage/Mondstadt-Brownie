// because recycling is good for the environment, and this is a good practice to do so.
// thanks poicitaco on github for the fixed codebase

var button = document.getElementById('button');
button.addEventListener('click', fillForm);
button.addEventListener('click', submitForm);
button.addEventListener('click', saveToLocal);
dispFromLocal();

function submitForm(event) {
    event.preventDefault();
}

function fillForm() {
    var name = document.getElementById('name').value;
    var mail = document.getElementById('email').value;
    var phone = document.getElementById('phoneno').value;
    var location = document.getElementById('location').value;


    var imageFile = document.getElementById('image-file').files[0];
    if (imageFile) {
        var reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('image-display').src = e.target.result; // Hiển thị ảnh đã chọn
        };
        reader.readAsDataURL(imageFile); // Chuyển ảnh thành base64
    }


    document.getElementById('namedisp').innerHTML = "Tên: " + name;
    document.getElementById('emaildisp').innerHTML = "Email: " + mail;
    document.getElementById('phonedisp').innerHTML = "Số điện thoại: " + phone;
    document.getElementById('locationdisp').innerHTML = "Địa điểm: " + location;
}

function saveToLocal() {
    localStorage.setItem('nameSet', document.getElementById('namedisp').innerHTML);
    localStorage.setItem('mailSet', document.getElementById('emaildisp').innerHTML);
    localStorage.setItem('numSet', document.getElementById('phonedisp').innerHTML);
    localStorage.setItem('addSet', document.getElementById('locationdisp').innerHTML);


    var image = document.getElementById('image-display').src;
    if (image) {
        localStorage.setItem('imageSet', image); 
    }
}

function dispFromLocal() {
    var name1 = localStorage.getItem('nameSet');
    var mail1 = localStorage.getItem('mailSet');
    var num1 = localStorage.getItem('numSet');
    var add1 = localStorage.getItem('addSet');
    var image1 = localStorage.getItem('imageSet'); 


    if (name1) document.getElementById('namedisp').innerHTML = name1;
    if (mail1) document.getElementById('emaildisp').innerHTML = mail1;
    if (num1) document.getElementById('phonedisp').innerHTML = num1;
    if (add1) document.getElementById('locationdisp').innerHTML = add1;


    if (image1) {
        document.getElementById('image-display').src = image1; // Hiển thị ảnh từ localStorage
    }
}



// hilariously this file is from an another project, but the code is not used in this project.
// this is only kept as a referral purpose.

// export const TMDB_API_KEY = "9b7c3ede447b14c5e0e9d33a137ddac9";

// addEventListener("scroll", () => {
//   if (window.scrollY === 0) {
//     document
//       .querySelector(".navbar")
//       .classList.remove("navbar-background-visible");
//   } else {
//     document
//       .querySelector(".navbar")
//       .classList.add("navbar-background-visible");
//   }
// });

// // Kiểm tra tình trạng người dùng để hiển thị giỏ hàng và user hiện tại.
// window.handleSignOut = () => {
//   localStorage.removeItem("currentUser");
//   localStorage.removeItem("cart");
//   location.reload();
// };

// window.signIn = () => { };

// //// Nếu người dùng đăng đăng nhập.
// if (localStorage.getItem("currentUser")) {
//   document.querySelector("#avatar-action-container").innerHTML += /*html*/ `
//     <div tabindex="0" class="avatar-action">
//       <img src="${`https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(
//     JSON.parse(localStorage.getItem("currentUser")).username
//   )}`}" />
//       <div class="popup">
//         <button class="action-button" onclick="handleSignOut()">
//           <i class="fa-solid fa-right-from-bracket"></i>
//           <span> Logout</span>
//         </button>
//       </div>
//     </div>
//   `;
// } else {
//   document.querySelector("#avatar-action-container").innerHTML += /*html*/ `
//     <a style="font-size: 25px" href="./login.html">
//       <i class="fa-solid fa-right-to-bracket"></i>
//     </a>
//   `;
// }


// ///// Lập trình giao diện hiển thị chatbot.
// document.body.innerHTML += /*html*/ `
//   <button class="chatbot-toggler">
//     <span class="material-symbols-rounded">mode_comment</span>
//     <span class="material-symbols-outlined">close</span>
//   </button>
//   <div class="chatbot">
//     <header>
//       <h2>Chatbot</h2>
//       <span class="close-btn material-symbols-outlined">close</span>
//     </header>
//     <ul class="chatbox">
//       <li class="chat incoming">
//         <span class="material-symbols-outlined">smart_toy</span>
//         <p>Hi there 👋<br />How can I help you today?</p>
//       </li>
//     </ul>
//     <div class="chat-input">
//       <textarea
//         placeholder="Enter a message..."
//         spellcheck="false"
//         required
//       ></textarea>
//       <span id="send-btn" class="material-symbols-rounded">send</span>
//     </div>
//   </div>

//   <!-- Google tag (gtag.js) -->
//   <script
//     async
//     src="https://www.googletagmanager.com/gtag/js?id=G-VNJX66Z0YF"
//   ></script>
//   <script>
//     window.dataLayer = window.dataLayer || [];
//     function gtag() {
//       dataLayer.push(arguments);
//     }
//     gtag("js", new Date());

//     gtag("config", "G-VNJX66Z0YF");
//   </script>
// `;

// const chatbotToggler = document.querySelector(".chatbot-toggler");
// const closeBtn = document.querySelector(".close-btn");
// const chatbox = document.querySelector(".chatbox");
// const chatInput = document.querySelector(".chat-input textarea");
// const sendChatBtn = document.querySelector(".chat-input span");

// let userMessage = null; // Variable to store user's message
// const API_KEY = ""; // Paste your API key here
// const inputInitHeight = chatInput.scrollHeight;

// const createChatLi = (message, className) => {
//   // Create a chat <li> element with passed message and className
//   const chatLi = document.createElement("li");
//   chatLi.classList.add("chat", `${className}`);
//   let chatContent =
//     className === "outgoing"
//       ? `<p></p>`
//       : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
//   chatLi.innerHTML = chatContent;
//   chatLi.querySelector("p").textContent = message;
//   return chatLi; // return chat <li> element
// };

// const generateResponse = (chatElement) => {
//   // const API_URL = "https://api.openai.com/v1/chat/completions";
//   const API_URL =
//     "https://openai-proxy.napdev.workers.dev?url=https://api.openai.com/v1/chat/completions";
//   const messageElement = chatElement.querySelector("p");

//   // Define the properties and message for the API request
//   const requestOptions = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       // Authorization: `Bearer ${API_KEY}`,
//     },
//     body: JSON.stringify({
//       model: "gpt-3.5-turbo",
//       messages: [{ role: "user", content: userMessage }],
//     }),
//   };

//   // Send POST request to API, get response and set the reponse as paragraph text
//   fetch(API_URL, requestOptions)
//     .then((res) => res.json())
//     .then((data) => {
//       messageElement.textContent = data.choices[0].message.content.trim();
//     })
//     .catch(() => {
//       messageElement.classList.add("error");
//       messageElement.textContent =
//         "Oops! Something went wrong. Please try again.";
//     })
//     .finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
// };

// const handleChat = () => {
//   userMessage = chatInput.value.trim(); // Get user entered message and remove extra whitespace
//   if (!userMessage) return;

//   // Clear the input textarea and set its height to default
//   chatInput.value = "";
//   chatInput.style.height = `${inputInitHeight}px`;

//   // Append the user's message to the chatbox
//   chatbox.appendChild(createChatLi(userMessage, "outgoing"));
//   chatbox.scrollTo(0, chatbox.scrollHeight);

//   setTimeout(() => {
//     // Display "Thinking..." message while waiting for the response
//     const incomingChatLi = createChatLi("Thinking...", "incoming");
//     chatbox.appendChild(incomingChatLi);
//     chatbox.scrollTo(0, chatbox.scrollHeight);
//     generateResponse(incomingChatLi);
//   }, 600);
// };

// chatInput.addEventListener("input", () => {
//   // Adjust the height of the input textarea based on its content
//   chatInput.style.height = `${inputInitHeight}px`;
//   chatInput.style.height = `${chatInput.scrollHeight}px`;
// });

// chatInput.addEventListener("keydown", (e) => {
//   // If Enter key is pressed without Shift key and the window
//   // width is greater than 800px, handle the chat
//   if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
//     e.preventDefault();
//     handleChat();
//   }
// });

// sendChatBtn.addEventListener("click", handleChat);
// closeBtn.addEventListener("click", () =>
//   document.body.classList.remove("show-chatbot")
// );
// chatbotToggler.addEventListener("click", () =>
//   document.body.classList.toggle("show-chatbot")
// );
