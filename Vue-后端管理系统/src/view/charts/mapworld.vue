<template>
    <div class="components-container" style='height:85vh'>
        <div class='chart-container'>
            <mapworld height='100%' width='100%'></mapworld>
        </div>
    </div>
</template>

<script>
import mapworld from '../../components/charts/map_world'
export default {
    components: {
        mapworld
    }
}
</script>

<style>
.components-container{
    margin: 30px 50px;
    position: relative;
    margin-left: 230px;
    background: #eef1f6;
}
.chart-container{
  position: relative;
  width: 100%;
  height: 100%;
}
</style>