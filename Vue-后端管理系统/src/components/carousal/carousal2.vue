<template>
    <div id="carousel2">
        <carousel-3d :autoplay="true" :autoplay-timeout="5000" :width="286" :height="246">
            <slide v-for="(slide, i) in slides" :index="i">
                <img :src= "slide.src" >
                <div class="title">{{slide.title}}</div>
                <div class="message">{{slide.message}}</div>
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
                src: require('./img1.jpg'),
                title:'这是一张图片',
                message:'这张图片只是一张静静地风景图'
            }, {
                src: require('./img2.jpg'),
                title:'这是一张图片',
                message:'这张图片只是一张静静地风景图'
            }, {
                src: require('./img3.jpg'),
                title:'这是一张图片',
                message:'这张图片只是一张静静地风景图'
            }, {
                src: require('./img4.jpg'),
                title:'这是一张图片',
                message:'这张图片只是一张静静地风景图'
            }, {
                src: require('./img5.jpg'),
                title:'这是一张图片',
                message:'这张图片只是一张静静地风景图'
            }, {
                src: require('./img6.jpg'),
                title:'这是一张图片',
                message:'这张图片只是一张静静地风景图'
            }, {
                src: require('./img7.jpg'),
                title:'这是一张图片',
                message:'这张图片只是一张静静地风景图'
            }]
        }
    }
}
</script>

<style>
#carousel2{
    height: 300px;
    padding-top: 1%;
    margin: 0 auto;
}
#carousel2 .carousel-3d-container{
    margin: 0 auto;
    position: relative;
}
#carousel2 .carousel-3d-container img{
    height: 240px;
    width:280px;
    border: 3px solid #fff;
}
#carousel2 .title { 
    position: absolute;
    bottom: 30px;
    font-size: 22px;
    line-height: 30px;
    width:100%;
    color:#fff;
    background: #000;
    opacity: 0.5;
    text-align: center;
}
#carousel2 .message { 
    display: block;
    position: absolute;
    width:100%;
    bottom: 0;
    text-align: center;
    background: #000;
    opacity: 0.5;
    color:#fff;
    font-size: 15px;
    line-height: 30px;
}
</style>
