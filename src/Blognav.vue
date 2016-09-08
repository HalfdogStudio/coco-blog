<template>
  <div class="ui container">
    <div class="ui secondary pointing menu">
      <a v-link="{ path: '/home' }" class="item active">Home</a>
      <a v-link="{ path: '/archives' }" class="item">Archives</a>
      <a v-link="{ path: '/categories' }" class="item">Categories </a>
      <a v-link="{ path: '/tags' }" class="item">Tags </a>
      <a v-link="{ path: '/rss' }" class="item">RSS </a>
    </div>
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
