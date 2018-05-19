<template>
  <div id="app">
    <div class="container">

      <!-- NAVBAR -->
      <div class="navbar">Frontend Snippets</div>

      <!-- SIDEBAR -->
      <div class="sidebar">
        <!-- Css-grid -->
        <h3>CSS-Grid Experiments</h3>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/responsivecards">Responsive Cards</router-link></li>
          <li><router-link :to="{name: 'Flexgrid'}">Flexbox grid nested</router-link></li>
          
        </ul>

        <!-- Vuejs -->
        <h3>Vuejs Experiments</h3>
        <ul>
          <li><router-link :to="{name: 'Coins'}">Latest Crypto Prices</router-link></li>
          <hr>
          directives
          <hr>
          navbar
          <hr>
          JWT and Oauth
          <hr>
          
          
        </ul>



      </div>

      <!-- CONTENT -->
      <div class="content">
        <router-view></router-view>
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Snippets"
    };
  }
};
</script>

<style>
*,
*:before,
*:after {
  box-sizing: border-box;
}

html {
  height: 100%;
}
body {
  height: 100%;
}

h3 {
  border: 3px solid black;
}

.container {
  display: grid;
  grid-template-columns: 2fr 7fr;
  grid-template-rows: 25px auto;
}

.navbar {
  border: 2px solid green;
  grid-column: 1/3;
  grid-row: 1/2;
  background-color: #2c3e50;
  color: white;
}
.sidebar {
  grid-column: 1/2;
  grid-row: 2/3;
  background-color: lightgrey;
  height: 100vh;
}
.content {
  grid-column: 2/3;
  grid-row: 2/3;
  height: 100vh;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #259864;
}
</style>
