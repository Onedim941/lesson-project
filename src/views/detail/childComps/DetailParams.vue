<template>
  <div class="datail-params">
    <div class="params-rule" v-for="rule in paramsRule" :key="rule[0]">
      <span v-for="item,index in rule" :key="index">{{item}}</span>
    </div>
    <div class="params-info params-rule" v-for="info,index in paramsInfo" :key="index">
      <span>{{info.key}}</span>
      <span>{{info.value}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    paramsRule:{
      type:Array,
      default:() => {
        return []
      }
    },
    paramsInfo:{
      type:Array,
      default:() => {
        return []
      }
    }
  }
}
</script>

<style>
.datail-params{
  padding: 1rem .8rem;
  border-bottom: 5px solid #eee;
}
.params-rule{
  display: flex;
  padding: .6rem 0rem;
  border-bottom: 1px solid rgb(243, 243, 243);
}
.params-rule span:nth-child(1){
  width: 30%;
}
.params-rule span:nth-child(n+2){
  width: 17%;
}

.params-info span:nth-child(1){
  width: 30%;
}
.params-info span:nth-child(2){
  width: 70%;
  color: var(--color-tint);
}
</style>