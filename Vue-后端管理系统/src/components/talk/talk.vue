<template>
    <div id='talk' style="height:80vh">
        <div id='talkcontent'>
            <h1>留言板</h1>
            <div id="content">
                <div id="post">
                    <textarea class="transition"></textarea>
                    <el-button type="primary" id="postBt">发表评论</el-button>
                    <el-button type="primary" id="clearBt">清空所有数据</el-button>
                </div>
                <div id="comment"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    mounted(){
        var _this = this;
        var Storage =
                {
                    saveData:function()//保存数据
                    {
                        var data = document.querySelector("#post textarea");
                        if(data.value != "")
                        {
                            var time = new Date().getTime() + Math.random() * 5;//getTime是Date对象中的方法，作用是返回 1970年01月01日至今的毫秒数
                            sessionStorage .setItem(time, data.value + "|" + this.getDateTime());//将毫秒数存入Key值中，可以降低Key值重复率
                            _this.$store.state.dataMessage.unshift(data.value);
                            data.value = "";
                            this.writeData();
                        }
                        else
                        {
                            _this.$alert('请填写你的留言哦', '警告', {
                                confirmButtonText: '确定',
                                callback: action => {
                                    _this.$message({
                                    type: 'info',
                                    message: `留言失败`
                                    });
                                }
                            });
                        }
                    },
                    writeData:function()//输出数据
                    {
                        var dataHtml = "", data = "";

                        for(var i = sessionStorage .length-1; i >= 0; i--)//效率更高的循环方法
                        {
                            data = sessionStorage .getItem(sessionStorage .key(i)).split("|");
                            console.log(data[1].split('-')[0])
                            if(data[1].split('-')[0]=='2017'){
                                dataHtml += "<p><span class=\"msg\">" + data[0] + "</span><span class=\"datetime\">" + data[1] + "</span></p>";
                            }
                        }
                        document.getElementById("comment").innerHTML = dataHtml;
                    },
                    clearData:function()//清空数据
                    {
                        if(sessionStorage .length > 0)
                        {
                            _this.$confirm('此操作将永久删除留言, 是否继续?', '提示', {
                                confirmButtonText: '确定',
                                cancelButtonText: '取消',
                                type: 'warning'
                            }).then(() => {
                                sessionStorage .clear();
                                this.writeData();
                                _this.$message({
                                    type: 'success',
                                    message: '删除成功!'
                                });
                            }).catch(() => {
                                _this.$message({
                                    type: 'info',
                                    message: '已取消删除'
                                });          
                            });
                        }
                        else
                        {
                            _this.$alert('没有要清空的数据', '警告', {
                                confirmButtonText: '确定',
                                callback: action => {
                                    _this.$message({
                                    type: 'info',
                                    message: `清空失败`
                                    });
                                }
                            });
                        }
                    },
                    getDateTime:function()//获取日期时间，例如 2012-03-08 12:58:58
                    {
                        var isZero = function(num)//私有方法，自动补零
                        {
                            if(num < 10)
                            {
                                num = "0" + num;
                            }
                            return num;
                        }
                        
                        var d = new Date();
                        return d.getFullYear() + "-" + isZero(d.getMonth() + 1) + "-" + isZero(d.getDate()) + " " + isZero(d.getHours()) + ":" + isZero(d.getMinutes()) + ":" + isZero(d.getSeconds());
                    }            
                }
//              console.log(Storage)
//              Storage.writeData();//当打开页面的时候，先将sessionStorage 中的数据输出一边，如果没有数据，则输出空
                document.getElementById("postBt").onclick = function(){Storage.saveData();}//发表评论按钮添加点击事件，作用是将sessionStorage 中的数据输出
                document.getElementById("clearBt").onclick = function(){Storage.clearData();}//清空所有已保存的数据
            }
        }
</script>

<style>
#talk{
    margin-left: 180px;
    background-size: 100% 100%;
    padding-top: 50px;
}
#talkcontent{
    width:1000px;
    margin: 0 auto;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.12),0 0 6px 0 rgba(0,0,0,.04);
}
#talk input{
    font-size:14px; 
    line-height:24px; 
    color:#333; 
    font-family:Microsoft yahei, Song, Arial, Helvetica, Tahoma, Geneva;
}
#talk h1{
    margin-bottom:15px; 
    height:50px; 
    line-height:50px; 
    text-align:center; 
    font-size:24px; 
    color:#000; 
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
}
#talk #content #post,#comment p{
    zoom:1;
}
#talk #content #post:after,#comment p:after{
    display:block; 
    height:0; 
    clear:both; 
    visibility:hidden; 
    overflow:hidden; 
    content:'.';
}
.transition{
    transition:all 0.5s linear;
}
#talk #content{
    margin:0 auto; 
    width:960px; 
    overflow:hidden;
}
#talk #content #post{
    margin-bottom:15px; 
    padding-bottom:15px; 
    border-bottom:1px 
    #d4d4d4 dashed;
}
#talk #content #post textarea{
    display:block; 
    margin-bottom:10px; 
    font-size: 24px;
    padding:5px; 
    width:948px; 
    height:290px; 
    border:1px #d1d1d1 solid; 
    border-radius:5px; 
    resize:none; outline:none;
}
#talk #content #post textarea:hover{
    border:1px #d9d6c3 solid; 
    background:#fffef9;
}
#talk #content #post #postBt,#content #post #clearBt{
    margin-left:5px; 
    padding:3px; 
    float:right;
    height: 30px;
}
#talk #comment{
    overflow:hidden;
}
#talk #comment p{
    margin-bottom:10px; 
    padding:10px; 
    border-radius:5px;
}
#talk #comment p:nth-child(odd){
    border:1px solid #e3e197; 
    background:#afdfe4;
}
#talk #comment p:nth-child(even){
    border:1px solid #adcd3c; 
    background:#cde6c7;
}
#talk #comment p span{
    display:inline; 
    float:left;
}
#talk #comment p .msg{
    width:738px;
}
#talk #comment p .datetime{
    width:200px; 
    color:#999; 
    text-align:right;
}
</style>