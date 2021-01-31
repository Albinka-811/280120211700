//@vue/component
export default {
    name: 'user-question',
    data () {
        return {
            message: '',
        };
    },
    methods: {
        saveComment () {
            this.$store.commit('addComment', {
                name: this.$store.getters.user.name,
                message: this.message,
                date: new Date().toLocaleDateString(),
            });

            this.message = '';
        },
    },
}
