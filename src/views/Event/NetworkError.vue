<template>
    <div class="networkError">
        <h1>Uh-oh!</h1>
        <h3>It's a bad day, you have some network issues. Please take a breath and <a href="#"
                @click="$router.go(-1)">Click here</a> to try again.</h3>
    </div>
</template>

<style scoped>
a {
    font-weight: bold;
    color: #42b983;
}
</style>