<template>
  <div class="jianjie2">
    <x-particles id="myParticles" class="particles-background" :config="config">
    </x-particles>
  </div>
</template>

<script>
import Vue from 'vue'
import XParticles from 'x-particles'
import defConfig from './config.js'
import snow from './snow.js'
import bubble from './bubble.js'
import nasa from './nasa.js'
const arr = [defConfig,snow,bubble,nasa]
Vue.use(XParticles)
export default {
  name: 'jianshu',
  data () {
    return {
    	config:{}
    }
  },
  created () {
		this.config = arr[Math.round(Math.random()*4)];
	}
}
</script>
<style>
.jianjie2{
	height: 88vh;
  margin-left: 180px;
  background: #f3f3f4;
  position: relative;
  min-width: 800px;
  position: relative;
}
.particles-background {
    background: #383838;
    height: 100%;
    width: 100%;
  }
</style>
