<template>

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Universidad</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
      aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#">Programas</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/courses">Asignaturas</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" v-on:click="logout()">Logout</a>
        </li>
      </ul>
    </div>
  </nav>

</template>

<script>

export default {

  methods: {
    logout() {
      const token = localStorage.getItem('token-mvc');
      if (token == null) {
        console.log("no logeado")
      } else {
        localStorage.removeItem('token-mvc')
        alert("Usuario deslogeado")
        this.$router.push('/login');
      }
    }
  }
}

</script>
