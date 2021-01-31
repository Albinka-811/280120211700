import { mapGetters } from 'vuex';

//@vue/component
export default {
    name: 'user-reviews',
    computed: {
        ...mapGetters([
            'commentsCount',
        ]),
    },
}

