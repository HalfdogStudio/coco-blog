<template>
  <div id="app">
    <blognav></blognav>
    <br/>
    <content></content>
    <br/>
    <blogfooter></blogfooter>
  </div>
</template>

<script>
import Blognav from './Blognav'
import Content from './Content'
import Blogfooter from './Blogfooter'
export default {
  components: {
    Blognav,
    Content,
    Blogfooter
  }
}
</script>


