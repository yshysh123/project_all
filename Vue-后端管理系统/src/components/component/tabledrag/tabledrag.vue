<template>
  <div id="tabledrag" style="height:90vh">
      <div class="fluid container">
        <div class="form-group form-group-lg panel panel-default">
        	<div class="panel-body">
            <button type="button" class="btn btn-default" @click="orderList">排序</button>
	        </div>
        </div>

        <div class="col-md-3">
            <draggable class="list-group" element="ul" v-model="list" :options="dragOptions" :move="onMove" @start="isDragging=true" @end="isDragging=false"> 
            <transition-group type="transition" :name="'flip-list'">
                <li class="list-group-item" v-for="element in list" :key="element.order"> 
                    <i :class="element.fixed? 'fa fa-anchor' : 'glyphicon glyphicon-pushpin'" @click=" element.fixed=! element.fixed" aria-hidden="true"></i>
                    {{element.name}}&nbsp;&nbsp;&nbsp;&nbsp;id：{{element.order}}
                </li>
            </transition-group>
        </draggable>
        </div>
      </div>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
const message = [ 
	'姓名:小鸿', 
	'年龄：28', 
	'工作：web前端', 
	'性别：男', 
	'爱好：旅游', 
	'居住地：北京' , 
	'毕业：中国矿业大学', 
	'属性：鸽子王',
	'框架：vue'
]
export default {
  name: 'tabledrag',
  components: {
　　draggable
  },
  data() {
    return {
      list: message.map( (name,index) => {return {name, order: index+1, fixed: false}; }),
      editable:true,
      isDragging: false,
      delayedDragging:false
    }
  },
  methods:{
        orderList () {
            this.list = this.list.sort((one,two) =>{return one.order-two.order; })
        },
        onMove ({relatedContext, draggedContext}) {
            const relatedElement = relatedContext.element;
            const draggedElement = draggedContext.element;
            return (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
        }
    },
    computed: {
        dragOptions () {
            return  {
                animation: 0,
                group: 'description',
                disabled: !this.editable,
                ghostClass: 'ghost'
            };
        },
        listString(){
            return JSON.stringify(this.list, null, 2);  
        },
        list2String(){
            return JSON.stringify(this.list2, null, 2);  
        }
    },
    watch: {
        isDragging (newValue) {
            if (newValue){
                this.delayedDragging= true
                return
            }
            this.$nextTick( () =>{
                this.delayedDragging =false
            })
        }
    }
}
</script>
<style>
#tabledrag{
  margin-left: 180px;
  background: #fafafa;
}
#tabledrag .container{
  margin-left: 10%;
  padding-top: 10px;
}
#tabledrag .flip-list-move {
  transition: transform 0.5s;
}
#tabledrag .form-group{
	overflow: hidden;
}
#tabledrag .panel-body{
    float: left;
    width: 20%;
    margin-right: 20px;
    height: 55px;
}
#tabledrag .panel-body .btn-default{
		height: 50px;
		width: 50%;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    font-weight: 900;
    background: #fff;
    color:#000;
    box-shadow: 3px 3px 3px #ccc;
    border-radius: 10px;
}
#tabledrag .list-group{
	overflow: hidden;
}
#tabledrag .panel-body{
    float: left;
    width: 20%;
    margin-right: 20px;
    height: 55px;
}
#tabledrag .col-md-3{
	margin-top: 20px;
	float:left;
	width:90%;
	margin-right: 20px;
}
#tabledrag .col-md-3 li{
	font-size: 22px;
	background: #fff;
	height: 200px;
	line-height: 200px;
	border: 1px solid #000;
	width: 30%;
	border-radius: 10px;
	margin: 1%;
	box-shadow: 3px 3px 3px #ccc;
	text-align: center;
	cursor: move;
	float: left;
}
#tabledrag .no-move {
  transition: transform 0s;
}
#tabledrag .ghost {
  opacity: .5;
  background: #C8EBFB;
}
#tabledrag .list-group {
  min-height: 20px;
}
</style>