<template>
  <div class="blogfooter">
    <div>copyleft＠2011-2016</div>
    <div>reverland built with vue and webpack</div>
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
      msg: 'copyleft＠2011-2016\nreverland built with vue and webpack'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blogfooter {
  clear:both;
  text-align:center;
  margin:0 auto;
}
</style>
