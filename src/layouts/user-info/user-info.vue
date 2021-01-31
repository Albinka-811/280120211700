<template>
    <div class="user">
        <div class="user-avatar">
            <img class="user-avatar__photo" :src="user.photo" alt="Аватарка">
        </div>

        <div class="user-info">
            <h1 class="user-info__name">{{ user.name }}</h1>
            <h3 class="user-info__speciality"> {{ user.speciality }} </h3>

            <p class="user-info__message"> {{ user.message }} </p>
        </div>
    </div>
</template>

<script src="./user-info.js" lang="js"></script>
<style src="./user-info.scss" lang="scss" scoped></style>
