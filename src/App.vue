<template>
    <div class="app">
        <div class="container">
            <UserInfo></UserInfo>
            <UserServices></UserServices>
            <UserReviews></UserReviews>
            <UserComments></UserComments>
        </div>

        <UserQuestion class="form"></UserQuestion>
    </div>
</template>

<script>
import UserInfo from '@layouts/user-info/user-info.vue';
import UserServices from '@layouts/user-services/user-services.vue';
import UserReviews from '@layouts/user-comments/user-comments-head/user-comments-head.vue';
import UserComments from '@layouts/user-comments/user-comments.vue';
import UserQuestion from '@layouts/user-question/user-question.vue';

export default {
    name: 'App',
    components: {
        UserInfo,
        UserServices,
        UserReviews,
        UserComments,
        UserQuestion,
    },
}
</script>

<style lang="scss">
.app {
    height: 100%;
    font-family: Arial, Avenir, Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    display: flex;
    flex-flow: column;
    justify-content: stretch;
    align-items: stretch;
}

.container {
    padding: 20px 20px 0 20px;
    flex: 1 1 auto;
}

.form {
    flex: 0 0 auto;
}
</style>
