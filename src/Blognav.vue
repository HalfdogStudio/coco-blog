<template>
  <div class="HelloNav">
    <ul>
      <li>Home</li>
      <li>Archives</li>
      <li>Categories</li>
      <li>Tags</li>
      <li>RSS</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'msg'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.HelloNav ul li {
  float: left;
  width:120px;
}
</style>
