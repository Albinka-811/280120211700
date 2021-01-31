<template>
    <div class="service-item">
        <div class="service-item__filler" :style="fillerWidth"></div>

        <span class="service-item__text">
            <slot />
        </span>
    </div>
</template>

<script src="./user-service-item.js" lang="js"></script>
<style src="./user-service-item.scss" lang="scss" scoped></style>
