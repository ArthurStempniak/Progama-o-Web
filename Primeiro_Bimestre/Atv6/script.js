const tarefaInput = document.getElementById("tarefaInput");
const adicionarBtn = document.getElementById("adicionarBtn");
const listaTarefas = document.getElementById("listaTarefas");

adicionarBtn.addEventListener("click", function () {
  const textoTarefa = tarefaInput.value.trim();

  if (textoTarefa === "") {
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    <span class="tarefa">
      <input type="checkbox" class="checkTarefa">
      <span class="textoTarefa">${textoTarefa}</span>
    </span>
  `;

  listaTarefas.appendChild(li);
  tarefaInput.value = "";
  tarefaInput.focus();
});

listaTarefas.addEventListener("click", function (event) {
  if (event.target.classList.contains("checkTarefa")) {
    const texto = event.target.parentElement.querySelector(".textoTarefa");
    texto.classList.toggle("concluida");
    event.stopPropagation();
    return;
  }

  const item = event.target.closest("li");

  if (item) {
    item.remove();
  }
});