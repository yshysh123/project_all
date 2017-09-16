<template>
  <div id="markdown" style="height:85vh">
    <mavon-editor v-model="value"/>
  </div>
</template>

<script>
export default {
  name: 'markdown',
  data() {
    return {
    	value:''
    }
  }
}
</script>
<style>
#markdown{
  margin-left: 180px;
  padding-top:3%;
  padding-left: 5%;
  padding-right: 5%;
}
#markdown .markdown-body{
    height: 80%;
}
</style>