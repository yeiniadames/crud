document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim().toLowerCase();
  const password = document.getElementById('password').value;

  const usuarioGuardado = {
    username: 'admin',
    password: '1234'
  };

  if (username === usuarioGuardado.username.toLowerCase() && password === usuarioGuardado.password) {
    localStorage.setItem('usuarioLogueado', username);
    window.location.href = 'dashboard.html';
  } else {
    document.getElementById('message').textContent = 'Usuario o contraseña incorrectos';
  }
});
