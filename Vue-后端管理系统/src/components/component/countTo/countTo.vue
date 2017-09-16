<template>
    <div class='container'>
        <div class="example-item">
            <h3>增加:0->2017</h3>
            <count-to ref='example1' class='example1' :start-val='0' :end-val='2017' :duration=4000></count-to>
            <div class='example-btn' @click='start1'>开始</div>
        </div>
        <div class="example-item">
            <h3>递减:2017->0</h3>
            <count-to ref='example2' class='example2' :start-val='2017' :end-val=0 :duration=8000></count-to>
            <div class='example-btn' @click='start2'>开始</div>
        </div>
        <div class="example-item">
            <h3>价钱计算器</h3>
            <count-to ref='example3' class='example3' :start-val='_startVal' :end-val='_endVal' :duration='_duration' :decimals='_decimals' :separator='_separator' :prefix='_prefix' :suffix='_suffix' :autoplay=false>
            </count-to>
            <div class="canshu">
                <label class="label" for="startValInput">初始值:
                    <input type="number" v-model.number='setStartVal' name='startValInput' />
                </label>
                <label class="label" for="endValInput">结束值:
                    <input type="number" v-model.number='setEndVal' name='endVaInput' />
                </label>
                <label class="label" for="durationInput">时间:
                    <input type="number" v-model.number='setDuration' name='durationInput' />
                </label>
                <div class="startBtn example-btn" @click='start3'>开始</div>
                <div class="pause-resume-btn example-btn" @click='pauseResume'>暂停/恢复</div>
                <br/>
                <label class="label" for="decimalsInput">小数位:
                    <input type="number" v-model.number='setDecimals' name='decimalsInput' />
                </label>
                <label class="label" for="separatorInput">千位符:
                    <input v-model='setSeparator' name='separatorInput' />
                </label>
                <label class="label" for="prefixInput">起始符:
                    <input v-model='setPrefix' name='prefixInput' />
                </label>
                <label class="label" for="suffixInput">结束符:
                    <input v-model='setSuffix' name='suffixInput' />
                </label>
            </div>
        </div>
    </div>
</template>

<script>
import countTo from 'vue-count-to';
export default {
    components: { countTo },
    data() {
        return {
            setStartVal: 0,
            setEndVal: 2017,
            setDuration: 4000,
            setDecimals: 0,
            setSeparator: ',',
            setSuffix: ' rmb',
            setPrefix: '¥ '
        }
    },
    computed: {
        _startVal() {
            if (this.setStartVal) {
                return this.setStartVal
            } else {
                return 0
            }
        },
        _endVal() {
            if (this.setEndVal) {
                return this.setEndVal
            } else {
                return 0
            }
        },
        _duration() {
            if (this.setDuration) {
                return this.setDuration
            } else {
                return 100
            }
        },
        _decimals() {
            if (this.setDecimals) {
                if (this.setDecimals < 0 || this.setDecimals > 20) {
                    alert('digits argument must be between 0 and 20')
                    return 0
                }
                return this.setDecimals
            } else {
                return 0
            }
        },
        _separator() {
            return this.setSeparator
        },
        _suffix() {
            return this.setSuffix
        },
        _prefix() {
            return this.setPrefix
        },
    },
    methods: {
        callback() {
            console.log('callback')
        },
        start1() {
            this.$refs.example1.start();
        },
        start2() {
            this.$refs.example2.start();
        },
        start3() {
            this.$refs.example3.start();
        },
        pauseResume() {
            this.$refs.example3.pauseResume();
        }
    }
}
</script>

<style>
.container {
    margin-left: 180px;
    padding-top: 20px;
    min-width: 800px;
}

.container code {
    display: block;
    padding: 8px 15px;
    background-color: #f6f8fa;
    border-radius: 5px;
    border: 1px solid #e5e5e5;
    overflow-x: auto;
    font-family: Monaco, Bitstream Vera Sans Mono, Lucida Console, Terminal;
    color: #333;
    font-size: 12px;
}

.container h3 {
    font-size: 36px;
    color: #494949;
    line-height: 1.1;
    text-align: center;
}

.container .github-corner:hover .octo-arm {
    animation: octocat-wave 560ms ease-in-out
}

@keyframes octocat-wave {
    0%,
    100% {
        transform: rotate(0)
    }
    20%,
    60% {
        transform: rotate(-25deg)
    }
    40%,
    80% {
        transform: rotate(10deg)
    }
}

@media (max-width:500px) {
    .github-corner:hover .octo-arm {
        animation: none
    }
    .github-corner .octo-arm {
        animation: octocat-wave 560ms ease-in-out
    }
}

.container .example-btn {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 500;
    text-align: center;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    line-height: 1.5;
    padding: 4px 15px;
    font-size: 12px;
    border-radius: 4px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-transition: all .3s cubic-bezier(.645, .045, .355, 1);
    transition: all .3s cubic-bezier(.645, .045, .355, 1);
    position: relative;
    color: rgba(0, 0, 0, .65);
    background-color: #fff;
    border-color: #d9d9d9;
    left:48%;
}

.container .example-btn:hover {
    color: #4AB7BD;
    background-color: #fff;
    border-color: #4AB7BD;
}

.container .example-item {
    margin-bottom: 40px;
}

.container .example1 {
    font-size: 40px;
    color: #30B08F;
    display: block;
    margin: 10px 0;
    text-align: center;
}

.container .example2 {
    font-size: 40px;
    color: #E65D6E;
    display: block;
    margin: 10px 0;
    text-align: center;
}

.container .example3 {
    font-size: 50px;
    color: #F6416C;
    display: block;
    margin: 10px 0;
    text-align: center;
    font-size: 80px;
    font-weight: 500;
}

.container .label {
    color: #2f4f4f;
    font-size: 16px;
    display: inline-block;
    margin: 15px 30px 15px 0;
}

.container input {
    position: relative;
    display: inline-block;
    padding: 4px 7px;
    width: 50px;
    height: 28px;
    cursor: text;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(0, 0, 0, .65);
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    -webkit-transition: all .3s;
    transition: all .3s;
}

.container .startBtn {
    margin-left: 20px;
    font-size: 20px;
    color: #30B08F;
    background-color: #fff;
}

.container .startBtn:hover {
    background-color: #30B08F;
    color: #fff;
    border-color: #30B08F;
}

.container .pause-resume-btn {
    font-size: 20px;
    color: #E65D6E;
    background-color: #fff;
}
.container .canshu{
	width: 800px;
	margin: 0 auto;
}
.container .pause-resume-btn:hover {
    background-color: #E65D6E;
    color: #fff;
    border-color: #E65D6E;
}
</style>