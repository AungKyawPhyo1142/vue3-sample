<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/contact">Contact</router-link> |

    <!-- use the allList with path from router -->
    <!-- <router-link to="/allList">All List(Path)</router-link> | -->

    <!-- use the allList with name from router -->
    <router-link :to="{name:'allList'}">All List(Name)</router-link> |
    <router-link to="/homePage">Home</router-link> |
    <router-link to="/loginPage">Login</router-link>

  </nav>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
