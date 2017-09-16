<template>
    <div id="carousel3">
        <div class="btns">
            <el-button type="primary" @click="addSlide">添加一张图片</el-button>
            <el-button type="primary" @click="removeSlide">删除一张图片</el-button>
        </div>
        <carousel-3d :autoplay="true" :autoplay-timeout="5000" :width="286" :height="246">
            <slide v-for="(slide, i) in slides" :index="i">
                <img :src= "slide.src" >
            </slide>
        </carousel-3d>
    </div>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d'
export default {
  components: {
    Carousel3d,
    Slide
  },
    data () {
        return {
            slides: [{
                src: require('./img1.jpg')
            }, {
                src: require('./img2.jpg')
            }, {
                src: require('./img3.jpg')
            }, {
                src: require('./img4.jpg')
            }, {
                src: require('./img5.jpg')
            }, {
                src: require('./img6.jpg')
            }, {
                src: require('./img7.jpg')
            }]
        }
    },
    methods: {
    addSlide() {
        this.slides.push({
          src: require('./img1.jpg')
        })
    },
    removeSlide() {
        this.slides.pop()
    }
  }
}
</script>

<style>
#carousel3{
    height: 300px;
    padding-top: 1%;
    margin: 0 auto;
}
#carousel3 .carousel-3d-container{
    margin: 0 auto;
}
#carousel3 .carousel-3d-container img{
    height: 240px;
    width:280px;
    border: 3px solid #fff;
}
#carousel3 .btns{
    text-align: center;
    margin-bottom:1%;
}
</style>
