<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable no-unused-vars -->

<script setup>
import { useRouter } from 'vue-router';
import { defineProps, inject } from 'vue';

const { event } = defineProps(["event"])
const router = useRouter()
const GStore = inject('GStore')

const register = () => {
    GStore.flashMessage = 'You are successfully registered for ' + event.title
    setTimeout(() => {
        GStore.flashMessage = ''
    }, 3000)
    router.push({
        name: 'event-details'
    })
}

</script>

<template>
    <p>Register for the Event</p>
    <button class="btn btn-outline-success" @click="register">Register Me!</button>
</template>



<style scoped></style>