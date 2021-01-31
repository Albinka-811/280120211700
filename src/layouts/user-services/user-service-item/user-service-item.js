// @vue/component
export default {
    name: 'user-service-item',
    props: {
        servicesCount: {
            type: Number,
            required: true,
        },
    },
    computed: {
        fillerWidth () {
            return {
                width: this.servicesCount <= 10 ? (this.servicesCount * 10) + '%' : '100%',
                backgroundColor: this.servicesCount > 10 ? '#b1e19b' : '#ace2f8',
            };
        },
    },
}
