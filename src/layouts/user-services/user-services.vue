<template>
    <div class="user-services">
        <p class="user-services__title"> {{ title }} </p>

        <div class="user-services__separators"></div>

        <div class="user-services-body">
            <div class="user-services-body-items">
                <ServiceItem
                    v-for="(service, index) in services"
                    :key="index"
                    class="user-services-body-items__item"
                    :services-count="service.count"
                >
                    {{ service.title }}
                </ServiceItem>
            </div>

            <div class="user-services-body-count">
                <p
                    class="user-services-body__number"
                    v-for="(service, index) in services"
                    :key="index"
                > {{ service.count }} </p>
            </div>
        </div>

        <div class="user-services__separators"></div>

        <div class="user-services-all">
            Всего <span> {{ allServicesCount }} </span>
        </div>

    </div>

</template>

<script src="./user-services.js" lang="js"></script>
<style src="./user-services.scss" lang="scss" scoped></style>

