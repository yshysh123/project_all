<template>
    <div class="components-container" style='height:85vh'>
        <div class='chart-container'>
            <chartmove height='100%' width='100%'></chartmove>
        </div>
    </div>
</template>

<script>
import chartmove from '../../components/charts/chart_move'
export default {
    components: {
        chartmove
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