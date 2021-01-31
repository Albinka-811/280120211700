<template>
    <div class="user-reviews">
        <p class="user-reviews-title"> Последние отзывы <a href="#" class="user-reviews-title__link" title="Все отзывы">
            Все отзывы </a></p>

        <div class="user-reviews-counters">
            <p class="user-reviews-counters__item user-reviews__like"><img
                class="user-reviews__image"
                src="@assets/like.png"
                alt=""
            > 131 </p>
            <p class="user-reviews-counters__item user-reviews__comment"><img
                class="user-reviews__image"
                src="@assets/comment.png"
                alt=""
            > {{ commentsCount }} </p>
        </div>
    </div>
</template>

<script src="./user-comments-head.js" lang="js"></script>
<style src="./user-comments-head.scss" lang="scss" scoped></style>

