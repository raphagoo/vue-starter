import $config from 'config'
import axios from 'axios'

function _get(endpoint, config) {

    const url = $config.api.baseUrl + endpoint;

    return axios.get(url, config);
}

// TODO use Axios.create
// https://alligator.io/vuejs/rest-api-axios/
export default {
    get: (endpoint, config) => _get(endpoint, config),
}
