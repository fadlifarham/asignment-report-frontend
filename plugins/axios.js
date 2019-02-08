export default function ({ $axios }) {
    $axios.onRequest(config => {
        config.headers.common['Authorization'] = this.$auth.$storage.getCookie('_token.local');
        config.headers.common['Content-Type'] = 'multipart/form-data';
    })
}