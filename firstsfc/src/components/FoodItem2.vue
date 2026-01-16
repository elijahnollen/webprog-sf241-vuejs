<template>
  <div>
    <h2>{{ name }}</h2>
    <p>{{ message }}</p>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      name: 'Strawberry and Carrots',
      message: 'I like Strawberry and Carrots'
    }
  }
};
</script>
 
<style>
  .strawberry {
    border: dashed black 1px;
    display: inline-block;
    margin: 10px;
    padding: 10px;
    background-color: lightgreen;
  }
</style>