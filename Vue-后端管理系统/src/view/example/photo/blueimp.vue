<template>
    <div id='blueimp' style="height:93vh">
        <waterfall
        :align="align"
        :line-gap="200"
        :min-line-gap="100"
        :max-line-gap="220"
        :single-max-width="300"
        :watch="items"
        @reflowed="reflowed"
        ref="waterfall">
            <waterfall-slot
                v-for="(item, index) in items"
                :width="item.width"
                :height="item.height"
                :order="index"  
                :key="item.index"
                move-class="item-move"
            >
                <div class="item" :style="item.style" :index="item.index"></div>
            </waterfall-slot>
        </waterfall>
    </div>
</template>

<script>
    import Waterfall from 'vue-waterfall/lib/waterfall'
    import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'
    var ItemFactory = (function () {
        var lastIndex = 0
        function generateRandomItems (count) {
            var items = [], i
            for (i = 0; i < count; i++) {
            items[i] = {
                index: lastIndex++,
                style: {
                background: 'url('+ getRandomColor() +') no-repeat',
                backgroundSize:'100% 100%'
                },
                width: 100 + ~~(Math.random() * 50),
                height: 100 + ~~(Math.random() * 50)
            }
            }
            return items
        }
        function getRandomColor () {
            var colors = [
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
            ]
            return colors[~~(Math.random() * colors.length)]
        }
        return {
            get: generateRandomItems
        }
    })()
    export default{
        components: {
            Waterfall,
            WaterfallSlot
        },
        data () {
            return {
                align: 'center',
                items: ItemFactory.get(100),
                isBusy: false
            }
        },
        mounted(){
            var _this = this;
            document.body.addEventListener('click', function () {
                app.shuffle()
                // app.$refs.waterfall.$emit('reflow') // manually trigger reflow action
            }, false)
            window.addEventListener('scroll', function () {
                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
                if (scrollTop + window.innerHeight >= document.body.clientHeight) {
                _this.addItems()
                }
            })
        },
        methods: {
          addItems: function () {
            if (!this.isBusy && this.items.length < 500) {
              this.isBusy = true
              this.items.push.apply(this.items, ItemFactory.get(50))
            }
          },
          shuffle: function () {
            this.items.sort(function () {
              return Math.random() - 0.5
            })
          },
          reflowed: function () {
            this.isBusy = false
          }
        }
    }
</script>

<style>
#blueimp{
    margin-left: 180px;
    background: #f3f3f4;
}
#blueimp .item-move {
    transition: all .5s cubic-bezier(.55,0,.1,1);
    -webkit-transition: all .5s cubic-bezier(.55,0,.1,1);
}
#blueimp .item {
  position: absolute;
  top: 5px;
  left: 5px;
  right: 5px;
  bottom: 5px;
  font-size: 1.2em;
  border: 5px solid #fff;
  box-shadow: 2px 2px 10px #000;
  color: rgb(0,158,107);
}
#blueimp .item:after {
  content: attr(index);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}
#blueimp .wf-transition {
  transition: opacity .3s ease;
  -webkit-transition: opacity .3s ease;
}
#blueimp .wf-enter {
  opacity: 0;
}
</style>

