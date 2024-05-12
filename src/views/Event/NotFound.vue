<script setup>

defineProps({
    resource: {
        type: String,
        required: true,
        default: 'page'
    }
})
</script>

<template>
    <h1>Oops!</h1>
    <h3>The {{ resource }} you're looking for is not here.</h3>
    <router-link :to="{ name: 'event-list' }">Back to the Home page</router-link>
</template>
<style scoped>
a {
    font-weight: bold;
    color: #42b983;
}
</style>