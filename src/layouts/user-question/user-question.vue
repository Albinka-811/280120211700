<template>
    <div class="user-question">
        <form class="user-question-form" @submit.prevent>
            <textarea
                id="user-message"
                class="user-question-form__message"
                v-model="message"
                @keydown.ctrl.enter="saveComment"
                title="Field for user comment"
            ></textarea>
            <input class="user-question-form__button" type="button" @click="saveComment" value="Написать консультанту">
        </form>
    </div>

</template>

<script src="./user-question.js" lang="js"></script>
<style src="./user-question.scss" lang="scss" scoped></style>
