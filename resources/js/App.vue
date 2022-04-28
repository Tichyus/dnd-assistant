<template>
    <div class="h-screen w-full bg-white relative flex overflow-hidden">
        <Navbar></Navbar>
        <main class="p-8">
            <router-view />
        </main>
    </div>
</template>

<script>
import Navbar from "@/Components/Navbar.vue";

export default {
    name: "App",
    components: {
        Navbar,
    },
};
</script>
