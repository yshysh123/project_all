<template>
    <div id="bmap" style="height:85vh">
        <div class="bmap">
            <div class='bmap_title'>只是百度地图的简单调用,添加了全景控件,如果想看更复杂的地图类应用,请点击:
                <a href='http://hydrology.ltd/'>demo1</a>
            </div>
            <baidu-map class="bm-view" :center="{lng: 116.404, lat: 39.915}" :zoom="5" :scroll-wheel-zoom="true" :min-zoom="4" :max-zoom="8" >
                <bm-panorama></bm-panorama>
            </baidu-map>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
            }
        },
        methods: {
        }
    }
</script>

<style>
#bmap {
  margin-left: 180px;
}
.bmap{
  width: 1400px;
  height: 650px;
  margin: 40px auto;
}
.bmap .bmap_title{
    text-align: center;
    line-height: 40px;
    font-size: 20px;
}
.bm-view{
  width: 100%;
  height: 100%;
}
.BMap_cpyCtrl  
{  
    display:none;   
}  
.anchorBL{  
    display:none;   
}
</style>