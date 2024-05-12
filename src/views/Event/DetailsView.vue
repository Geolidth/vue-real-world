<script setup>
import { ref, onMounted } from 'vue';
import EventService from '@/services/EventService.js'
import { RouterLink } from 'vue-router';
const event = ref(null)
const props = defineProps({
    id: { required: true }
})
onMounted(() => {
    EventService.getEvent(props.id)
        .then((res) => {
            event.value = res.data
        })
        .catch((err) => {
            console.error(err)
        })
})
</script>

<template>
    <div v-if="event">
        <h1>{{ event.title }}</h1>
        <div id="nav">
            <RouterLink :to="{ name: 'event-details', params: { id } }">Details</RouterLink> |
            <RouterLink :to="{ name: 'EventRegister', params: { id } }">Register</RouterLink> |
            <RouterLink :to="{ name: 'EventEdit', params: { id } }">Edit</RouterLink>
        </div>
        <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
        <p>{{ event.description }}</p>
    </div>
</template>



<style scoped></style>