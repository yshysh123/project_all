<template>
    <div class="components-container" style='height:85vh'>
        <div class='chart-container'>
            <chartpie height='100%' width='100%'></chartpie>
        </div>
    </div>
</template>

<script>
import chartpie from '../../components/charts/chart_pie'
export default {
    components: {
        chartpie
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