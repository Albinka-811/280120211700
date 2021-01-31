<template>
    <div class="user-comment-wrapper">
        <div
            v-for="(comment, index) in comments"
            :key="index"
            class="user-comment"
        >
            <div class="user-comment-head">
                <p class="user-comment__name">{{ comment.name }}</p>
                <span class="user-comment__date">{{ comment.date }}</span>
            </div>
            <p class="user-comment__text">{{ comment.message }}</p>
        </div>
    </div>

</template>

<script src="./user-comments.js" lang="js"></script>
<style src="./user-comments.scss" lang="scss" scoped></style>
