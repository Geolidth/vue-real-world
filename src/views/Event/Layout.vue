<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, onMounted } from 'vue';
import EventService from '@/services/EventService.js'
import { RouterLink, useRouter } from 'vue-router';

const router = useRouter()
const event = ref(null)
const props = defineProps({
    id: { required: true }
})
onMounted(() => {
    EventService.getEvent(props.id)
        .then((response) => {
            event.value = response.data
        })
        .catch((error) => {
            if (error.response && error.response.status == 404) {
                router.push({
                    name: '404Resource',
                    params: { resource: 'event' }
                })
                console.err(error)
            } else {
                router.push({ name: 'NetworkError' })
            }
        })
})
</script>

<template>
    <div v-if="event">
        <h1>{{ event.title }}</h1>
        <nav>
            <RouterLink :to="{ name: 'event-details' }">Details</RouterLink> |
            <RouterLink :to="{ name: 'EventRegister' }">Register</RouterLink> |
            <RouterLink :to="{ name: 'EventEdit' }">Edit</RouterLink>
        </nav>
        <router-view :event="event" />
    </div>
</template>



<style scoped></style>