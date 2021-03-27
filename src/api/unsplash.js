import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 7rJoVW8_v-iMq1d61wTOvcPVv_JEZOOiPMNRDi_jO4I',
    },
});
