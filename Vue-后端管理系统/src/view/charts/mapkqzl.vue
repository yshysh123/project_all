<template>
    <div class="components-container" style='height:85vh'>
        <div class='chart-container'>
            <mapkqzl height='100%' width='100%'></mapkqzl>
        </div>
    </div>
</template>

<script>
import mapkqzl from '../../components/charts/map2'
export default {
    components: {
        mapkqzl
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
