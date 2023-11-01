import axios from 'axios';

const axiosRes = axios.interceptors.response.use(
    // res => {

    //     console.log('res')
    // },
    // err => {

    //     if (err.response.status == '400') {
    //         alert("400");

    //     }
    //     if (err.response.status == '500') {
    //         alert("500");

    //     }

    //     if (err.response.status == '401') {
    //         alert("401");
    //     }

    //     throw new Error(err.response.data.message);
    // }
)

export default axiosRes;