//@vue/component
export default {
    name: 'user-comments',
    data () {
        return {};
    },
    computed: {
        comments () {
            return this.$store.getters.comments;
        },
    },
}
