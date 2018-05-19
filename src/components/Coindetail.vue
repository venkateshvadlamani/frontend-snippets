<template>
  <div class="coindetail">
    <pre>{{coin}}</pre>
  </div>

</template>

<script>
  import axios from 'axios'

  export default {
    name: 'Coindetail',
    data () {
      return {
        msg: "Coindetail",
        coin: {}
      }
    },
    created(){
        this.fetchData()
        console.log("param id is "+this.$route.params.id)
    },
    methods: {
        fetchData(){
                axios.get('https://api.coinmarketcap.com/v2/ticker/'+this.$route.params.id+'/')
                .then((resp) => {
                this.coin = resp.data.data
                console.log(resp)
                })
            .catch((err) => {
                console.log(err)
                })            
        }
    }
  }
</script>

<style>

</style>