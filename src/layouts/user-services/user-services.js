import ServiceItem from './user-service-item/user-service-item.vue';

// @vue/component
export default {
    name: 'user-services',
    components: {
        ServiceItem,
    },
    data () {
        return {
            title: 'Услуг',
            services: [
                {
                    title: 'Ручное бронирование',
                    count: 11,
                },
                {
                    title: 'Пакетные туры',
                    count: 3,
                },
                {
                    title: 'Отели',
                    count: 1,
                },
            ],
        }
    },
    computed: {
        allServicesCount () {
            let count = 0;

            for (let service of this.services) {
                count += service.count;
            }

            return count;
        },
    },
    methods: {},
}
