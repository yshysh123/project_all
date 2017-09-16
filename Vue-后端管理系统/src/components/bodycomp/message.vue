<template>
	<div id="message">
        <div class="message_header">
            <div class="message_header_nr">最近留言</div>
        </div>
        <ul class="message_body">
        </ul>
        <el-input placeholder="请输入内容" id='messageinput'></el-input>
        <el-button type="primary" id="messagebtn" @click="pushmessage">留言</el-button>
	</div>
</template>

<script>
export default {
	data () {
		return {
            name:'Sunny!',
            items:null,
            srcarr:null
        }
    },
    mounted(){
        this.xr();
    },
    computed:{
        srctiele () {
            return this.$store.state.src
        }
    },
    methods : {
        xr(){
            this.items = this.$store.state.dataMessage;
            this.srcarr = this.$store.state.srcarr;
            var messagestr = '';
            for(var i=0;i<this.items.length;i++){
                messagestr += `<li><img src=${this.srcarr.pic[i%this.srcarr.pic.length]}><span>${this.srcarr.name[i%this.srcarr.pic.length]} : <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;${this.items[i]}</span></li>`
            }
            document.getElementsByClassName('message_body')[0].innerHTML = messagestr;
        },
        pushmessage(){
            if(document.getElementById('messageinput').children[0].value){
                this.$store.state.dataMessage.unshift(document.getElementById('messageinput').children[0].value);
                this.xr();
            }
        }
    }
}
</script>

<style>
#message{
    height: 100%;
    width:100%;
    position: relative;
    overflow: hidden;
}
#message .message_header{
    height:15%;
    width:100%;
    border-bottom:1px solid #ccc;
    position: relative;
}
#message .message_header .message_header_nr{
    width:80px;
    height:20px;
    position:absolute;
    left:50%;
    top:50%;
    margin-top:-10px;
    margin-left: -40px;
}
.message_body li{
    height: 6%;
    padding: 2%;
    line-height: 16px;
    border-bottom: 1px solid #ccc;
}
.message_body li span{
    font-size: 12px;
    text-indent: 3%;
    display: inline-block;
}
.message_body img{
    height: 40px;
    width:40px;
    border-radius: 50%;
    display: inline-block;
    vertical-align:top;
}
#messageinput{
    position: absolute;
    bottom: 0;
    left:0;
    width:80%;
}
#messagebtn{
    position: absolute;
    bottom: 0;
    right:0;
    width:20%;
}
</style>