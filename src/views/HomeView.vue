<template>

  <body>
    <ul>
      <li>
        <router-link :to="{ name: 'admin' }">Admin</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'player' }">Player</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'overlay' }">Overlay</router-link>
      </li>
    </ul>
  </body>
</template>

<script>
</script>

<style scoped>

</style>
