<template>
  <div class="coins">
    <h1>{{ msg }}</h1>
    <ul >      
        <li v-for="coin in coins">
          <router-link :to="{name:'Coindetail', params:{id:coin.id}}">
            {{coin.name}}
          </router-link>
        </li>
    </ul>

  </div>
</template>

<script>
import axios from 'axios'

  export default {
    name: 'Coins',
    data () {
      return {
        msg: "Coins",
        coins: {}
      }
    },
    created(){
        this.fetchData()
    },
    methods:{
        fetchData(){
            axios.get('https://api.coinmarketcap.com/v2/ticker/')
            .then((resp)=> {
                this.coins = resp.data.data
                console.log(resp)
            })
            .catch((err)=>{
                console.log(err)
            })
        }
    }
  }
</script>

