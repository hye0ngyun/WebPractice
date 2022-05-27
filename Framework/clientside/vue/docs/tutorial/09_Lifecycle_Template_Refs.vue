<script>
export default {
  // ...
  mounted() {
    this.$refs.p.style.color = 'red';
    this.$refs.p.innerText = 'red text!';
  }
}
</script>

<template>
  <p ref="p">hello</p>
</template>