<template>
	<div id="calendar">
        <full-calendar class="test-fc" v-bind:events="fcEvents" 
            first-day='1' lang="zh"
            @changeMonth="changeMonth"
            @eventClick="eventClick"
            @dayClick="dayClick"
            @moreClick="moreClick">
        </full-calendar>
	</div>
</template>

<script>
import fullCalendar from 'vue-fullcalendar'
var demoEvents = [
    {
      title    : '毕业啦',
      start    : '2017-09-8',
      end      : '2017-09-8',
      cssClass : 'family'
    },
    {
      title : '周末出去玩',
      start : '2017-07-29',
      end : '2017-07-30',
      cssClass : ['home', 'work']
    },
    {
      title : '又一个周末',
      start : '2017-08-5',
      end : '2017-08-6'
    },
    {
        title : 'AJAX',
        start : '2017-08-7',
        end : '2017-08-11'
    },
    {
        title : '又一个周末',
        start : '2017-08-12',
        end : '2017-08-13'
    },
    {
        title : 'Vue框架',
        start : '2017-08-14',
        end : '2017-08-18'
    },
    {
        title : '又一个周末',
        start : '2017-08-19',
        end : '2017-08-20'
    },
    {
        title : 'React框架',
        start : '2017-08-21',
        end : '2017-08-25'
    },
    {
        title : '又一个周末',
        start : '2017-08-26',
        end : '2017-08-27'
    },
    {
        title : '兼容性,收尾',
        start : '2017-08-28',
        end : '2017-09-1'
    },
    
  ];
export default {
  components: {
      fullCalendar
  },
	data () {
		return {
            name:'Sunny!',
            fcEvents : demoEvents
        }
	},
  methods : {
    'changeMonth' (start, end, current) {
    },
    'eventClick' (event, jsEvent, pos) {
    },
    'dayClick' (day, jsEvent) {
      console.log('dayClick', day, jsEvent)
    },
    'moreClick' (day, events, jsEvent) {
    }
  }
}
</script>

<style>
  #calendar{
  	margin-left: 180px;
  	min-width: 800px;
  }
  #calendar .app{
    color:green;
  }
  #calendar .events-day{
  	text-align: center;
  	position: relative;
  }
  #calendar .day-number{
  	text-align: center;
  	font-size: 24px;
  	margin-top: 30%;
  	height: 65%;
  }
  #calendar .event-box{
  	position: absolute;
  	width: 100%;
  	height: 40px;
  	left: 0;
  	top: 0;
  }
  #calendar .event-item{
  	line-height: 40px;
  	height: 100%;
  }
</style>