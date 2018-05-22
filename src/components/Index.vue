<template>
    <div>
        <div class="title">Auto Insurance</div>
        <div class="demo">Demo</div>
        <b-button class="btn-start" size="sm" variant="primary" @click="nextPath">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="15px" height="25px" viewBox="0 0 50 80" xml:space="preserve">
                <polyline fill="none" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8"/>
            </svg>
        </b-button>
    </div>
</template>
<script>
export default {
    name: 'index',
    methods: {
        nextPath() {
            this.$router.push({ path: 'first' });
        },
    },
}
</script>

<style scoped>
.title {
    font-size: 30px;
}
.demo {
    font-size: 48px;
    margin-bottom: 10px;
}
.btn-start {
    width: 180px;
    height: 35px;
}
</style>