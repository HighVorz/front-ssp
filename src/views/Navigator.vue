


<template>
    <nav class="navbar">
        <router-link to="/home" class="navbar-item">Home</router-link>
        <router-link to="/login" class="navbar-item">Login</router-link>
        <router-link to="/main" class="navbar-item">Main</router-link>
        <router-link to="/monitor" class="navbar-item">Monitor</router-link>
    </nav>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style>
.navbar {
    display: flex;
    justify-content: left;
    background-color: #333;
    padding: 1rem;
}

.navbar-item {
    margin-right: 1rem;
    text-decoration: none;
    color: white;
}

/* 添加鼠标悬浮效果 */
.navbar-item:hover {
    color: #ddd;
}
</style>
