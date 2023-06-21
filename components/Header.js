import React from 'react'

const Header = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-white bg-white">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <a class="navbar-brand mt-2 mt-lg-0" href="/">
              <img
                src="https://cdn-icons-png.flaticon.com/512/906/906334.png"
                height="40"
                alt="Anotação"
                loading="lazy"
              />
            </a>

            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="/Usuario">Usuário</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Tarefa">Tarefas</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Lembrete">Lembrete</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/Tipo">Tipos</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header