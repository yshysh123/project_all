<template>
  <div id="photochange" style="height:93vh">
    <carousal></carousal>
    <carousal2></carousal2>
    <carousal3></carousal3>
  </div>
</template>

<script>
import carousal from '../../../components/carousal/carousal'
import carousal2 from '../../../components/carousal/carousal2'
import carousal3 from '../../../components/carousal/carousal3'
export default{
    data () {
      return {
        items: items,
      }
    },
    components: {
        carousal,
        carousal2,
        carousal3
    },
}

</script>


<style>
#photochange{
    margin-left: 180px;
}
</style>