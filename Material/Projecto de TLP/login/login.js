// Alterna entre login e registro
const container = document.querySelector('.container');
const registerBtn = document.querySelector('.register-btn');
const loginBtn = document.querySelector('.login-btn');

registerBtn.addEventListener('click', () => container.classList.add('active'));
loginBtn.addEventListener('click', () => container.classList.remove('active'));

// Função para pegar lista de usuários do LocalStorage
function getUsuarios() {
  const usuarios = localStorage.getItem('usuarios');
  return usuarios ? JSON.parse(usuarios) : [];
}

// Função para salvar lista de usuários no LocalStorage
function saveUsuarios(usuarios) {
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

// Registro
const registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('regUser').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const password = document.getElementById('regPass').value.trim();

  if (!username || !email || !password) {
    alert('Preencha todos os campos!');
    return;
  }

  let usuarios = getUsuarios();

  // Limite máximo de 20 usuários
  if (usuarios.length >= 20) {
    alert('Limite máximo de 20 usuários atingido!');
    return;
  }

  // Verifica se já existe usuário ou email cadastrado
  const existe = usuarios.some(u => u.username === username || u.email === email);
  if (existe) {
    alert('Usuário ou email já cadastrado!');
    return;
  }

  // Adiciona novo usuário à lista
  usuarios.push({ username, email, password });

  // Salva lista atualizada no LocalStorage
  saveUsuarios(usuarios);

  // Marca usuário como logado
  localStorage.setItem('usuarioLogado', username);

  // Redireciona automaticamente para a página de serviços
  window.location.href = "../Conteudo/servicos.html";
});

// Login
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('loginUser').value.trim();
  const password = document.getElementById('loginPass').value.trim();

  const usuarios = getUsuarios();

  // Procura usuário correspondente
  const usuario = usuarios.find(u => u.username === username && u.password === password);

  if (usuario) {
    // Marca usuário como logado
    localStorage.setItem('usuarioLogado', usuario.username);

    alert(`Bem-vindo, ${usuario.username}!`);
    window.location.href = "../Conteudo/servicos.html";
  } else {
    alert('Usuário ou senha incorretos!');
  }
});
