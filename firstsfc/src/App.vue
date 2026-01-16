<template>
  <div id="app">
    <h1>My Personal Profile, Fruits, and Vegetables</h1>
    
    <div class="food-container">
      <food-item/>
      <food-item2/>
    </div>

    <hr> <PersonalProfile/>
  </div>
</template>

<script>
</script>

<style>

@font-face {
    font-family: 'Shantell Sans'; 
    src: url('https://cdn.jsdelivr.net/gh/elijahnollen/web-programming-practice@main/home/fonts/ShantellSans%5BBNCE%2CINFM%2CSPAC%2Cital%2Cwght%5D.woff2') format('woff2-variations'),
         url('https://cdn.jsdelivr.net/gh/elijahnollen/web-programming-practice@main/home/fonts/ShantellSans%5BBNCE%2CINFM%2CSPAC%2Cital%2Cwght%5D.woff2') format('woff2');
    font-weight: 300 800;
}

.food-container {
  display: flex;
  flex-wrap: wrap;
}


</style>