<template>
  <div></div>
    
</template>

<script setup>
const route = useRoute()
const routeId = route.params.id

useHead({
    meta: [
        { name: 'description', content: '' }
    ]
})

definePageMeta({
  layout: 'home',
  // middleware: 'auth'
});

onMounted(()=>{

})

</script>

<style>
@import "/assets/css/pages/index.css";
</style>