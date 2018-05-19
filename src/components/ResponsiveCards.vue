<template>
  <main>
    <article>
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/Paleo_food.jpg">
      <h3>1) All of These Headlines Are Not Exactly The Same</h3>
      <p>In the real world, you don't know how long the content will be. Writers will write what they need. Photos will be cropped to the shape that they should be. That's good. Make a system that allows this. You want it to be flexible and robust.</p>
    </article>
    <article>
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/Ravenna_food.jpg">
      <h3>12) Size, Isn't That Magical!</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris tindunt.</p> 
    </article>
    <article>
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/Restaurant_food_Kunming_Yunnan.jpg">
      <h3>7) The New CSS Will Fix Things</h3>
      <p>Finally we get some real hammers.</p>
    </article>
    <article>    
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/Bunter_Teller.jpg">
      <h3>8) Several Kinds of Hammers</h3>
      <p>Grid, Flexbox, Alignment, Shapes.</p> 
    </article>
    <article>
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/P3-Egyptian_food_Koshary.jpg">
      <h3>9) Size, Isn't That Magical!</h3>
      <p>Lorem ipsum dolor sit amet.</p> 
    </article>
    <article>
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/Mexican_food.jpg">
      <h3>10) All of These Headlines</h3>
      <p>Always three lines of text, which fits exactly in the available space. Describing where you will go when you click.</p>
    </article>
    <article>    
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/P2-Arepitas_Food_Macro.jpg">
      <h3>11) Are Exactly the Same</h3>
      <p>Vivamus fermentum semper porta. Nunc diam velit, adipiscing ut tristique vitae, sagittis vel odio. Maecenas convallis ullamcorper ultricies. Curabitur ornare, ligula semper consectetur sagittis, nisi diam iaculis velit, id fringilla sem nunc vel mi. </p>     
    </article>
    <article>
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/Ravenna_food.jpg">
      <h3>12) Size, Isn't That Magical!</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris tindunt.</p> 
    </article>

    <article>
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/Paleo_food.jpg">
      <h3>1) All of These Headlines Are Not Exactly The Same</h3>
      <p>In the real world, you don't know how long the content will be. Writers will write what they need. Photos will be cropped to the shape that they should be. That's good. Make a system that allows this. You want it to be flexible and robust.</p>
    </article>
    <article>    
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/Indian_bengali_food.jpg">
      <h3>2) Some Are Short</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus.</p> 
    </article>
    <article>
      <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/Food_in_Miyajima.jpg">
      <h3>3) Some Headlines Can Sometimes Be Quite Long, Because It Takes Time to Make A Point</h3>
      <p>Vivamus fermentum semper porta. Nunc diam velit, adipiscing ut tristique vitae, sagittis vel odio. Maecenas convallis ullamcorper ultricies. Curabitur ornare, ligula semper consectetur sagittis, nisi diam iaculis velit, id fringilla sem nunc vel mi. Nam dictum, odio nec pretium volutpat, arcu ante placerat erat, non tristique elit urna et turpis.</p> 
    </article>        
  </main>

</template>

<script>
export default {
  name: "ResponsiveCards",
  data() {
    return {
      msg: "ResponsiveCards"
    };
  }
};
</script>

<style>
main {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;
}

article {
  margin: 0.2rem;
  padding: 1rem;
  border: 1px solid black;
  border-radius: 5px;
}

img {
  width: 100%;
}
</style>

