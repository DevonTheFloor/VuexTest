<template>
  <div>
    <p>{{ this.$store.state.count }}</p>
    <button @click='increment'>Increase!</button>
    <button @click='decrement'>! Decrease </button>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  methods:{
    increment(){
      this.$store.commit('INCREMENT')

    },
    decrement(){
      this.$store.commit('DECREMENT')
    }
  }
}
</script>