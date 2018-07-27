document.addEventListener("DOMContentLoaded", function() {
    // we configure our axios instance to target our currency converter backend
    const axiosInstance = axios.create({
        baseURL: 'http://localhost:8080',
        timeout: 1000,
    });
});
