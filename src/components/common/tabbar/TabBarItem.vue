<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default{
    name:'TabBarItem',
    props:{
      path: String,
      activateColor:{
        type:String,
        default:'red'

      }
    },
    data() {
      return {
        // isActive:false
      }
    },
    computed:{
      isActive(){
        // /home -> item1(/home) = true 动态判断当前路径/动态决定当前activa
        // indexOf 没找到 =-1 ；找到了则不等于 -1
        // $route是活跃路由，$router路由
        return this.$route.path.indexOf(this.path) !== -1;
      },
      activeStyle(){
        return this.isActive?{color: this.activateColor}:{}
      }
    },
    methods:{
      itemClick(){
        this.$router.replace(this.path).catch(err=>{
          // console.log(err)
        });
        // console.log('itemClick');
      }
    }
  }
</script>

<style>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 3.0625rem;
    font-size: 14px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }

</style>


<!-- 当某个样式过于复杂，可以放在一个method或者computed中
 <h2 class="title" :class="classes">hello world<h2>
 -->
