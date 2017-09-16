<template>
    <div class="bodychart">
        <div :class="className" id='bodychart' :style="{height:height,width:width}"></div>
    </div>
</template>
<script>
import echarts from 'echarts'
import $ from 'jquery'
import {resize} from 'jquery'
import china from 'echarts/map/js/china'
function randomData() {
    return Math.round(Math.random() * 1000);
}

var data = [{
    name: '北京',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '天津',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '上海',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '重庆',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '河北',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '河南',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '云南',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '辽宁',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '黑龙江',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '湖南',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '安徽',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '山东',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '新疆',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '江苏',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '浙江',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '江西',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '湖北',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '广西',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '甘肃',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '山西',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '内蒙古',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '陕西',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '吉林',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '福建',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '贵州',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '广东',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '青海',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '西藏',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '四川',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '宁夏',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '海南',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '台湾',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '香港',
    value1: randomData(),
    value2: randomData(),
}, {
    name: '澳门',
    value1: randomData(),
    value2: randomData(),
}];

var resultdata0 = [];
var resultdata1 = [];
var resultdata2 = [];
var sum0 = 0;
var sum1 = 0;
var sum2 = 0;
var titledata = [];
for (var i = 0; i < data.length; i++) {
    var d0 = {
        name: data[i].name,
        value: data[i].value1 + data[i].value2
    };
    var d1 = {
        name: data[i].name,
        value: data[i].value1
    };
    var d2 = {
        name: data[i].name,
        value: data[i].value2
    };
    titledata.push(data[i].name)
    resultdata0.push(d0);
    resultdata1.push(d1);
    resultdata2.push(d2);
    sum0 += data[i].value1 + data[i].value2;
    sum1 += data[i].value1;
    sum2 += data[i].value2;
}

function NumDescSort(a,b){
    return a.value-b.value;
}

resultdata0.sort(NumDescSort);
resultdata1.sort(NumDescSort);
resultdata2.sort(NumDescSort);

export default {
    props: {
        className: {
            type: String,
            default: 'chart'
        },
        id: {
            type: String,
            default: 'chart'
        },
        width: {
            type: String,
            default: '100%'
        },
        height: {
            type: String,
            default: '450px'
        }
    },
    data () {
        return {
            chart: null
        }
    },
    mounted() {
        this.initChart()
    },
    methods: {
        initChart () {
            var _this = this;
            this.chart = echarts.init(document.getElementById('bodychart'))
            window.addEventListener('resize',function(){
                _this.chart.resize();
            })
//          this.chart = echarts.init(document.getElementById('bodychart'))
//          if(window.onresize){
//	            window.addEventListener('resize',function(){
//              	_this.chart.resize();
//          	})
//          }
            this.chart.setOption({
                backgroundColor: "#fff",
                title: [{
                    text: '销售量统计',
                    left: 'center'
                }],
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['全部', 'iphone', '华为'],
                    selectedMode: 'single',
                },
                visualMap: {
                    min: 0,
                    max: 2500,
                    left: 'left',
                    top: 'bottom',
                    text: ['高', '低'],
                    calculable: true,
                    colorLightness: [0.2, 100],
                    color: ['#006edd', '#e0ffff'],
                    dimension: 0
                },
                toolbox: {
                    show: true,
                    orient: 'vertical',
                    left: 'right',
                    top: 'center',
                    feature: {
                        dataView: {
                            readOnly: false
                        },
                        restore: {},
                        saveAsImage: {}
                    }
                },
                grid: {
                    right: 40,
                    top: 50,
                    bottom: 40,
                    width: '30%'
                },
                xAxis: [{
                    position: 'top',
                    type: 'value',
                    boundaryGap: false,
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                }],
                yAxis: [{
                    type: 'category',
                    data: titledata,
                    axisTick: {
                        alignWithLabel: true
                    }
                }],
                series: [{
                    z: 1,
                    name: '全部',
                    type: 'map',
                    map: 'china',
                    left: '10',
                    right: '35%',
                    zoom: 0.8,
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    roam: true,
                    data: resultdata0
                }, {
                    z: 1,
                    name: 'iphone',
                    type: 'map',
                    map: 'china',
                    left: '10',
                    right: '35%',
                    top: 100,
                    bottom: "35%",
                    zoom: 0.75,
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    roam: true,
                    data: resultdata1
                }, {
                    z: 1,
                    name: '华为',
                    type: 'map',
                    map: 'china',
                    left: '10',
                    right: '35%',
                    top: 100,
                    bottom: "35%",
                    zoom: 0.85,
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    roam: true,
                    data: resultdata2
                }, {
                    name: '全部',
                    z: 2,
                    type: 'bar',
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true,
                        }
                    },
                    itemStyle: {
                        emphasis: {
                            color: "rgb(254,153,78)"
                        }
                    },
                    data: resultdata0
                }, {
                    name: 'iphone',
                    z: 2,
                    type: 'bar',
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    itemStyle: {
                        emphasis: {
                            color: "rgb(254,153,78)"
                        }
                    },
                    data: resultdata1
                }, {
                    name: '华为',
                    z: 2,
                    type: 'bar',
                    label: {
                        normal: {
                            show: true
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    itemStyle: {
                        emphasis: {
                            color: "rgb(254,153,78)"
                        }
                    },
                    data: resultdata2
                }]
            })
        }
    }
}
</script>

<style>
</style>
