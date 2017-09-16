<template>
  <div id="photo">
    <div class="zzc2" v-show="showF"></div>
    <div class="zzc" v-show="showF">
      <div class="zzc_photo">
        <img :src="srcphoto" />
        <a id="photoa" href="javascript:;" @click="aclick" @mouseover="amouseover" @mouseout="amouseout"></a>
      </div>
    </div>
    <div class="photodiv">
      <ul>
        <li v-for="(image,i) in images">
          <img :src='image' @click="imgclick(i)" class="cancelselect">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default{
    data () {
      return {
        images:[
          'static/imgs/1.jpg',
          'static/imgs/2.jpg',
          'static/imgs/3.jpg',
          'static/imgs/4.jpg',
          'static/imgs/5.jpg',
          'static/imgs/6.jpg',
          'static/imgs/7.jpg',
          'static/imgs/8.jpg',
          'static/imgs/9.jpg',
          'static/imgs/10.jpg',
          'static/imgs/11.jpg',
          'static/imgs/12.jpg',
          'static/imgs/13.jpg',
          'static/imgs/14.jpg',
          'static/imgs/15.jpg',
          'static/imgs/16.jpg'
        ],
        showF:false,
        srcphoto:''
      }
    },
    mounted(){
      document.ondragstart = document.onselectstart = function(){return false;};
    },
    beforeDestroy(){
      window.onmousewheel = function(){}
    },
    methods:{
      imgclick(i){
        document.body.scrollTop=0
        var _this = this;
        this.showF = true;
        this.srcphoto = this.images[i];
        window.onmousewheel = function(){
          return false;
        }
        var zzc = document.getElementsByClassName('zzc')[0];
        zzc.ondblclick = function(){
          _this.showF = false;
          window.onmousewheel = function(){}
        }
      },
      aclick(){
        this.showF = false;
        window.onmousewheel = function(){}
      },
      amouseover(){
        document.getElementById('photoa').style.transform = 'rotateZ(720deg)'
      },
      amouseout(){
        document.getElementById('photoa').style.transform = 'rotateZ(0)'
      }
    }
}

</script>


<style>
#photo{
  margin-left: 180px;
}
.photodiv{
  padding: 40px;
}
.cancelselect{
  -moz-user-select: none; /*火狐*/
  -webkit-user-select: none; /*webkit浏览器*/
  -ms-user-select: none; /*IE10*/
  -khtml-user-select: none; /*早期浏览器*/
  user-select: none;
}
.zzc2{
  position: absolute;
  left: 0;
  top: 50px;
  height: 100%;
  width:100%;
  background: #000;
  opacity: 0.5;
}
.zzc{
  position: absolute;
  left: 0;
  top: 50px;
  height: 100%;
  width:100%;
}
.zzc .zzc_photo{
  width:800px;
  height: 600px;
  position: absolute;
  left:50%;
  top:50%;
  margin-left: -300px;
  margin-top: -330px;
  border: 5px solid #fff;
  border-radius: 10px;
  transition: 1s;
}
.zzc .zzc_photo a{
  width:38px;
  height: 38px;
  position: absolute;
  right: 0;
  top:0;
  background: url(fancybox_sprite.png) no-repeat;
  transition: 1s;
}
.zzc .zzc_photo img{
  width:100%;
  height: 100%;
  opacity: 1;
  border-radius: 10px;
}
#photo ul{
  overflow: hidden;
  height: 100%;
  width:100%;
}
#photo ul li{
  float:left;
  width:24%;
  margin: 0.5%;
  height:300px;
  box-shadow:5px 5px 10px #000;
  border-radius: 10px;
}
#photo ul li img{
  border-radius: 10px;
  height: 100%;
  width:100%;
}
</style>