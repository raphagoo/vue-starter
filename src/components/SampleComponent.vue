<template>
    <p>{{ greeting }} World!</p>
    <!-- <LocalComponant1></LocalComponant1> -->
</template>

<script>
// import LocalComponant1 from './localComponent1.vue';

export default {
    name: 'SampleComponent',
    data: () => ({
        greeting: 'Hello'
    }),
    // components: {
    //     LocalComponant1,
    // }
}
</script>

<style lang="scss" scoped>
p {
    margin: 0;
}
</style>
