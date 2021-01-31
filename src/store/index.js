import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {
            name: 'Albina Holovach',
        },
        comments: [
            {
                name: 'Самуил',
                date: '13 октября 2011',
                message: 'Привет, Верунь! ниче себе ты крутая. фотка класс!!!!',
            },
            {
                name: 'Лилия Семёновна',
                date: '14 октября 2011',
                message: `
                    Вероника, здравствуйте! 
                    Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, 
                    это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?
                `,
            },
            {
                name: 'Лилия Семёновна',
                date: '14 октября 2011',
                message: `
                    Вероника, здравствуйте! Есть такой вопрос: 
                    Особый вид куниц жизненно стабилизирует кинетический момент?
                `,
            },
        ],
    },
    getters: {
        user: (state) => state.user,
        comments: (state) => state.comments,
        commentsCount: (state) => state.comments.length + 11, // Плюс 11, чтобы соответствовать макету
    },
    mutations: {
        addComment (state, comment) {
            state.comments.push(comment);
        },
    },
})
