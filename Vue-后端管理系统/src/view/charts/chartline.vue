<template>
    <div class="components-container" style='height:85vh'>
        <div class='chart-container'>
            <chartline height='100%' width='100%'></chartline>
        </div>
    </div>
</template>

<script>
import chartline from '../../components/charts/chart_line'
export default {
    components: {
        chartline
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