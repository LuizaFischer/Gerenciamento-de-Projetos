// Array para armazenar os projetos temporariamente
let projetos = [];

// Referências aos elementos do DOM
const form = document.getElementById('project-form');
const tbody = document.getElementById('projects-tbody');

// Função para renderizar a lista de projetos
function renderProjects() {
  // Limpa a tabela
  tbody.innerHTML = '';

  // Adiciona cada projeto na tabela
  projetos.forEach((projeto, index) => {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${projeto.nome}</td>
      <td>${projeto.descricao}</td>
      <td>${projeto.dataInicio}</td>
      <td>${projeto.dataFim}</td>
      <td>
        <button onclick="editProject(${index})">Editar</button>
        <button onclick="deleteProject(${index})">Excluir</button>
      </td>
    `;

    tbody.appendChild(row);
  });
}

// Função para adicionar um novo projeto
function addProject(event) {
  event.preventDefault();

  const nome = document.getElementById('project-name').value;
  const descricao = document.getElementById('project-description').value;
  const dataInicio = document.getElementById('start-date').value;
  const dataFim = document.getElementById('end-date').value;

  const novoProjeto = { nome, descricao, dataInicio, dataFim };
  projetos.push(novoProjeto);

  // Renderiza a lista de projetos
  renderProjects();

  // Limpa o formulário
  form.reset();
}

// Função para editar um projeto
function editProject(index) {
  const projeto = projetos[index];

  document.getElementById('project-name').value = projeto.nome;
  document.getElementById('project-description').value = projeto.descricao;
  document.getElementById('start-date').value = projeto.dataInicio;
  document.getElementById('end-date').value = projeto.dataFim;

  form.onsubmit = function(event) {
    event.preventDefault();

    projetos[index] = {
      nome: document.getElementById('project-name').value,
      descricao: document.getElementById('project-description').value,
      dataInicio: document.getElementById('start-date').value,
      dataFim: document.getElementById('end-date').value,
    };

   
    form.onsubmit = addProject;
    renderProjects();
    form.reset();
  };
}


function deleteProject(index) {
  projetos.splice(index, 1);
  renderProjects();
}


form.onsubmit = addProject;

renderProjects();
