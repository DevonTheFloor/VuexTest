<template>
  <div >
    <p> {{ this.$store.state.name }} </p>
    <p> {{ this.$store.state.price }} </p>
    <button @click="getteddies"> Voir Teddies</button>
  </div>
</template>


<script>
//import { mapActions } from 'vuex'

export default {
  name: 'Getteddy',
  methods:{
    //...mapActions(['GET_TEDDIES'])
    getteddies(){
      this.$store.dispatch('getteddies')
      //mapActions(['getteddies'])
    }
    //this.$store.dispatch('gettteddy')
  }
}
</script>
