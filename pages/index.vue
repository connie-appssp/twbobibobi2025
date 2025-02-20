<template>
  <main>
    <div>
      <div>
        <h1 v-for="n in 50" :key="'item'+ n" >Welcome to the Home Page</h1>
        <div>
          <NuxtLink to="/Member">會員登入</NuxtLink>
          <NuxtLink to="/Member/profile">會員資料</NuxtLink>
        </div>
      </div>

    </div>
  </main>
</template>

<script setup>
useHead({
    meta: [
        { name: 'description', content: '' }
    ]
})

definePageMeta({
  layout: 'home',
  // middleware: 'auth'
});

</script>

<style>
@import "/assets/css/pages/index.css";
</style>