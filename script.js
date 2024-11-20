// script.js
const postForm = document.getElementById("postForm");
const forumPosts = document.getElementById("forumPosts");
const noPostsMessage = document.getElementById("noPostsMessage");

postForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Obtener los datos del formulario
  const postTitle = document.getElementById("postTitle").value.trim();
  const postContent = document.getElementById("postContent").value.trim();

  if (!postTitle || !postContent) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  // Crear una nueva publicación
  const newPost = document.createElement("div");
  newPost.classList.add("post");

  newPost.innerHTML = `
    <p class="post-title">${postTitle}</p>
    <p class="post-content">${postContent}</p>
    <div class="reply-section">
      <h4>Respuestas</h4>
      <div class="replies"></div>
      <textarea placeholder="Escribe tu respuesta..."></textarea>
      <button class="reply-button">Responder</button>
    </div>
  `;

  // Agregar la publicación al foro
  forumPosts.appendChild(newPost);

  // Ocultar mensaje de "No hay publicaciones"
  noPostsMessage.style.display = "none";

  // Limpiar el formulario
  postForm.reset();

  // Agregar funcionalidad al botón de responder
  const replyButton = newPost.querySelector(".reply-button");
  const replyInput = newPost.querySelector("textarea");
  const repliesDiv = newPost.querySelector(".replies");

  replyButton.addEventListener("click", function () {
    const replyText = replyInput.value.trim();

    if (replyText) {
      const newReply = document.createElement("p");
      newReply.classList.add("reply");
      newReply.textContent = replyText;

      repliesDiv.appendChild(newReply);
      replyInput.value = ""; // Limpiar campo de respuesta
    } else {
      alert("Escribe algo antes de responder.");
    }
  });
});
