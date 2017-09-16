<template>
    <div id="css_aimi" style="height:88vh">
        <div class="css_content">
            <!--<div class='left_img'>
                <img :src='srctiele'>
            </div>-->
            <div class="btnSF">
            	<span>点击选择是否全部运动</span>
            	<el-switch
				  v-model="value1"
				  on-text=""
				  off-text=""
				>
				</el-switch>
            </div>
            <div class='right_css'>
                <el-button  v-for='(arr,index) of arr' @click="anmi_move(index,$event)">{{arr}}</el-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                arr:['bounce','flash','pulse','rubberBand','shake','headShake','swing','tada','wobble','jello','bounceIn','bounceInDown','bounceInLeft','bounceInRight','bounceInUp','bounceOut','bounceOutDown','bounceOutLeft','bounceOutRight','bounceOutUp','fadeIn','fadeInDown','fadeInDownBig','fadeInLeft','fadeInLeftBig','fadeInRight','fadeInRightBig','fadeInUp','fadeInUpBig','fadeOut','fadeOutDown','fadeOutDownBig','fadeOutLeft','fadeOutLeftBig','fadeOutRight','fadeOutRightBig','fadeOutUp','fadeOutUpBig','flipInX','flipInY','flipOutX','flipOutY','lightSpeedIn','lightSpeedOut','rotateIn','rotateInDownLeft','rotateInDownRight','rotateInUpLeft','rotateInUpRight','rotateOut','rotateOutDownLeft','rotateOutDownRight','rotateOutUpLeft','rotateOutUpRight','hinge','jackInTheBox','rollIn','rollOut','zoomIn','zoomInDown','zoomInLeft','zoomInRight','zoomInUp','zoomOut','zoomOutDown','zoomOutLeft','zoomOutRight','zoomOutUp','slideInDown','slideInLeft','slideInRight','slideInUp','slideOutDown','slideOutLeft','slideOutRight','slideOutUp'],
                value1:false
            }
        },
        methods: {
            anmi_move(index,ev){
            	let right_css = document.getElementsByClassName('right_css')[0];
        		let span = right_css.getElementsByTagName('span');
            	for(var i=0;i<span.length;i++){
            		span[i].className = '';
            	}
                ev.target.className = 'left_img animated infinite '+this.arr[index];
            }
        },
        watch:{
        	value1(val){
        		let right_css = document.getElementsByClassName('right_css')[0];
	        	let span = right_css.getElementsByTagName('span');
　　　　　　		if(val){
	            	for(var i=0;i<span.length;i++){
	            		span[i].className = 'left_img animated infinite '+this.arr[i];
	            	}
				}else{
					for(var i=0;i<span.length;i++){
	            		span[i].className = '';
	            	}
				}
　　　　　　	},
        }
    }
</script>

<style>
#css_aimi{
    margin-left: 180px;
    position: relative;
    min-width: 800px;
}
#css_aimi .css_content{
    height: 100%;
    width:100%;
}
#css_aimi .btnSF{
	margin-left: 5%;
	line-height: 50px;
	height: 50px;
}
/*#css_aimi .left_img{
    float:left;
    height:60%;
    width:30%;
    margin-top: 10%;
    margin-left: 5%;
}
#css_aimi .left_img img{
    height:100%;
    width:100%;
}*/
#css_aimi .right_css{
    margin-left: 5%;
    margin-top: 20px;
    width:100%;
    /*padding:20px;*/
}
#css_aimi .right_css .el-button{
	margin-left: 0;
	margin-right: 1%;
	width: 30%;
	height: 120px;
    margin-bottom: 5px;
    text-align: center;
    padding: 0;
    border: 0;
}
#css_aimi .right_css .el-button span{
	display: inline-block;
	height: 100%;
	width: 100%;
	line-height: 120px;
	font-size: 30px;
	background: #fff;
	border: 1px solid #000;
	box-shadow: 3px 3px 3px #ccc;
	border-radius: 10px;
}
</style>