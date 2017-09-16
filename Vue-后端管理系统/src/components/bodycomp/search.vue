<template>
	<div id="search">
        <el-input  placeholder="请输入搜索内容" id='txt'></el-input>
	    <ul id="ul">
            <li class="liold">
                <span>请</span>
                <span>输</span>
                <span>入</span>
                <span>您</span>
                <span>的</span>
                <span>搜</span>
                <span>索</span>
                <span>内</span>
                <span>容</span>
            </li>
        </ul>
	</div>
</template>

<script>
export default {
	data () {
		return {

        }
    },
    mounted(){
        let txt1 = document.getElementById('txt');
        var txt = txt1.getElementsByClassName('el-input__inner')[0];
        let ul = document.getElementById('ul');
        var _this = this;
        txt.onkeyup = function(){
            _this.jsonp({
                url:'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',
                data:{
                    wd:txt.value
                },
                cb:'cb',
                success:function(data){
                    ul.innerHTML = '';
                    let html = '';
                    data.s.forEach((e,i)=>{
                        if(i <= 10){
                            html += `<li><a target ="_blank" href="https://www.so.com/s?ie=utf-8&fr=none&src=home_suggst_3.2.2&q=${e}&eci=3630d43d534fdb80&nlpv=suggest_3.2.2">${e}</li>`;
                        }
                    });
                    if(txt.value==''){
                        ul.innerHTML = '<li class="liold">请输入您的搜索内容</li>'
                    }
                    else{
                        ul.innerHTML = html;
                    }
                }
            });
            
        }
    },
    methods : {
        jsonp(json){
            let settings = {
                url:'',
                data:{},
                success:function(){},
                cb:'callback'
            }
            let fnName = 'jQuery'+Math.random()+(+new Date);
            fnName = fnName.replace('0.','_');
            window[fnName] = function (data){
                settings.success(data);
            }
            Object.assign(settings,json);
            settings.data[settings.cb] = fnName;
            let arr = [];
            for(let attr in settings.data){
                arr.push(attr + '=' + settings.data[attr]);
            }
            let str = arr.join('&');
            let oS = document.createElement('script');
            oS.src = settings.url + '?' + str;
            document.getElementsByTagName('head')[0].appendChild(oS);
            oS.remove();
        }
    }
}
</script>

<style>
#search{
    height: 100%;
    width:100%;
    position: relative;
    overflow: hidden;
}
#search .el-input__inner{
    text-indent: 8%;
}
#search li{
    text-indent: 10%;
}
#search  .liold{
    text-indent: 0;
    margin-top: 20%;
    text-align: center;
    font-size: 30px;
    cursor: pointer;
}
#search .liold:hover{
  color:#ccc; 
  animation: neon2 1.5s ease-in-out infinite alternate;
}
#search li a{
    width:100%;
    line-height: 24px;
    font-size: 14px;
    font-family: '微软雅黑';
    color:#000;
    text-shadow:4px 2px 2px #999;
    transition: all 0.5s;
}
#search li a:hover{
  color:#ffffff; 
  animation: neon2 1.5s ease-in-out infinite alternate;
}
@-webkit-keyframes neon2 {
  from {
    text-shadow: 0 0 10px #fff,
               0 0 20px  #fff,
               0 0 30px  #fff,
               0 0 40px  #228DFF,
               0 0 70px  #228DFF,
               0 0 80px  #228DFF,
  }
  to {
    text-shadow: 0 0 5px #fff,
               0 0 10px #fff,
               0 0 15px #fff,
               0 0 20px #228DFF,
               0 0 35px #228DFF,
               0 0 40px #228DFF,
               0 0 50px #228DFF,
               0 0 75px #228DFF;
  }
}
</style>