<template>
  <div class="ui container">
    <div class="ui secondary pointing menu">
      <a class="item active">Home </a>
      <a class="item">Archives </a>
      <a class="item">Categories </a>
      <a class="item">Tags </a>
      <a class="item">RSS </a>
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
