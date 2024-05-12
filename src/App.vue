<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { inject } from 'vue';

const GStore = inject('GStore')
</script>

<template>
  <div class="container" id="layout">
    <div id="flashMessage" v-if="GStore.flashMessage">
      {{ GStore.flashMessage }}
    </div>
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink :to="{ name: 'event-list' }">Events</RouterLink> |
          <RouterLink :to="{ name: 'about' }">About</RouterLink>
        </nav>
      </div>
    </header>
    <main>

      <RouterView />
    </main>
  </div>
</template>

<style>
@keyframes yellowfade {
  from {
    background: yellow;
  }

  to {
    background: transparent;
  }
}

#flashMessage {
  animation-name: yellowfade;
  animation-duration: 3s;
}

#layout {
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
