<template>
    <div>
        <Header />
         <main>
            <slot name="content" />
         </main>
        <Footer />
    </div>
</template>

<script setup>
import Header from './Header.vue';
import Footer from './Footer.vue';




</script>
