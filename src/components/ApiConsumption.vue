<template>
    <div>
        <p>Example of received data:</p>
        <pre>{{ received }}</pre>
        <!-- <LocalComponant1></LocalComponant1> -->
    </div>
</template>

<script>
import $log from 'logger'
// import LocalComponant1 from './localComponent1.vue';

export default {
    name: 'ApiConsumption',
    data: () => ({
        received: null,
    }),
    // components: {
    //     LocalComponant1,
    // }
    created: function () {
        $log.info('ApiConsumption.created');

        this.$api.get('/get')
        .then(response => {
            $log.info('ApiConsumption.created.then');
            $log.debug('ApiConsumption.created.then.response: ', response);
            this.received = response.data;
        })
        .catch(error => {
            $log.info('ApiConsumption.created.catch');
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                $log.debug('ApiConsumption.created.catch.error.response: ', error.response);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                $log.debug('ApiConsumption.created.catch.error.request: ', error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                $log.debug('ApiConsumption.created.catch.error.message: ', error.message);
            }
        });
    }
}
</script>

<style lang="scss" scoped>
p {
    margin: 0;
}
</style>
