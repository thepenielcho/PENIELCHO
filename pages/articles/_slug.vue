<template>
    <div class="related">

    <div class="section-border py-16 md:py-24 googleyellow" >
        <div class="max-w-3xl mx-auto px-6">
            <div>
                <!-- <div class="flex justify-center">
                <div class="flex items-center">
                    <div class="text-xl md:text-4xl font-semibold googletextblack text-center custom-text">{{article.title}}</div>
                </div>
                </div> -->
                <div class="text-2xl md:text-4xl font-semibold googletextblack text-center custom-text article-title">{{article.title}}</div>
                <div class="text-base md:text-lg googletextblack text-center mt-5 md:mt-6 mb-6 md:mb-8 opacity-50"> 
                    {{article.description}}
                </div>
                <!-- <div class="text-lg md:text-xl googletextblack font-medium text-center"> 
                    <nuxt-link :to='`/category/${article.category}`' class="hover:underline text-base md:text-2xl text-center">{{article.category}}</nuxt-link>
                </div> -->
                <div class="flex justify-center">
                    <div class="flex itmes-center space-x-3 md:space-x-6">
                        <!-- <img class="w-10 md:w-12 mr-2.5" src="~/static/geek.png" alt=""> -->
                        <div class="flex items-center">
                            <div class="lead-box w-16 h-16 md:w-20 md:h-20 profileborder">
                                <img src="~/static/Peniel.jpg" class="profile" alt="">
                            </div>
                        </div>

                        <div class="flex items-center">
                            <div>
                                <div class="font-semibold text-lg md:text-xl">Peniel Cho</div>
                                <div class="text-xs md:text-sm pt-1 opacity-75"> <span class="hidden md:inline">Yout Nearest</span> Developer Advocate 🥑 <br/> 저를 더 자세히 알고 싶으시다면 <br class="md:hidden inline" /> <nuxt-link to="/about" class="underline">About</nuxt-link> 페이지를 살펴봐주세요!</div>
                            </div>
                            <!-- <nuxt-link :to='`/category/${article.category}`' class="hover:underline text-base">{{article.category}}</nuxt-link>
                            <div>{{formatDate(article.datetime)}} · {{article.readingStats.text}}</div> -->
                        </div>
                    </div>
                </div>
                <!-- <div class="text-lg md:text-xl googletextblack font-medium text-center"> 
                    <span class="opacity-50 pr-1">{{formatDate(article.datetime)}} · {{article.readingStats.text}} · by {{article.author}}</span>
                </div> -->
            </div>
        </div> 
    </div>


    <div class="googlelightgrey section-border">
        <nuxt-content :document="article" class="prose max-w-4xl custom-text px-6 py-16 mx-auto fadeinupcom"/>
    </div>

    <div class="bg-white section-border pt-8 pb-6">
        <div class="max-w-4xl mx-auto googletextblack px-5 pb-2.5">
            <div class="text-2xl font-medium pb-1.5">Comments 💬</div>
            <div class="text-base opacity-75">Please leave some comments here 🙌🏻 Questions, Suggestions, Cheers, Whatever!</div>
        </div>
        <Comments class="px-6 max-w-4xl mx-auto" />
    </div>

    <div class="googlelightgrey py-14">
        <Prevnext class="max-w-4xl px-5 mx-auto" :prev="prev" :next="next" />
        
        <!-- <div class="flex px-5 space-x-4 pt-8 grid grid-cols-3">
            <div class="group" v-for="article of featured" :key="article">
                <nuxt-link :to="{path: `/articles/${article.slug}`}">
                    <div class="block md:flex rounded-lg bg-white outline-item shadow-md">
                        <div class="w-full md:w-1/2">
                            <div class="hidden md:inline-block cardborder bg-img w-full h-40 md:h-full" :style="{ backgroundImage: `url(/${article.slug}/${article.img})` }"></div>
                            <img class="block md:hidden cardborder bg-img profile min-h-content" :src="require(`~/static/${article.slug}/${article.img}`)" alt=""/>
                        </div>
                        <div class="px-6 py-6 w-full md:w-1/2 border-top left-border">
                            <h5 class="googletextblack text-lg md:text-xl font-medium mb-2 keep-all">{{article.title}}</h5>
                            <p class="googletextblack text-base mb-3 keep-all">
                                {{article.description}}
                            </p>
                            <p class="googletextblack text-sm md:text-base">{{article.readingStats.text}}</p>
                        </div>
                    </div>
                </nuxt-link>
            </div>
        </div> -->

    </div>




    </div>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        const article = await $content('articles', params.slug)
        .fetch();

        const [prev, next] = await $content('articles')
        .only(['title', 'slug'])
        .sortBy('createdAt', 'asc')
        .surround(params.slug)
        .fetch()

        const featured = await $content('articles')
        .where({featured: 'on'})
        .sortBy('datetime', 'desc')
        .limit(3)
        .fetch();

        return { article, prev, next, featured }
    },
    methods: {
        formatDate(date) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(date).toLocaleDateString('ko', options)
        }
    },

    head() {
        return {
            title: this.article.title,
            htmlAttrs: {
            lang: 'ko'
            },
            meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 't-type',
                name: 'twitter:card',
                content: 'summary_large_image'
            },
            {
            hid: 'og-type',
            property: 'og:type',
            content: 'website'
            },
            {
            hid: 'og:title',
            property: 'og:title',
            content: this.article.title
            },
            {
            hid: 'og:description',
            property: 'og:description',
            content: this.article.description
            },
            {
            hid: 'og:image',
            property: 'og:image',
            // content: this.article.img
            content: `https://raw.githubusercontent.com/thepenielcho/PENIELCHO/main/static/${this.article.slug}/${this.article.img}`
            },
            {
            hid: 'og:image:secure_url',
            property: 'og:image:secure_url',
            content: `https://raw.githubusercontent.com/thepenielcho/PENIELCHO/main/static/${this.article.slug}/${this.article.img}`
            },
            {
            hid: 'og:image:alt',
            property: 'og:image:alt',
            content: 'article image'
            },
            {
            hid: 'og:url',
            name: 'og:url',
            content: `https://penielcho.com/articles/${this.$route.params.slug}`
            },
            ],
        }
    },
}
</script>

<style>
pre {
    background-color: #FFF !important;
    border-width: 2px;
    border-color: rgba(17, 24, 39)
}
.custom-text{
    word-break: keep-all;
}
code::before {
    content: none !important;
}
code::after {
    content: none !important;
}
img{
    margin: auto;
}
.lead-box {
    border-radius: 70%;
    overflow: hidden;
}
.profile {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.profileborder {
    border-width: 2px;
    border-color: rgba(17, 24, 39)
}
.outline-btm {
    border-bottom: 2px solid rgba(17, 24, 39);
    margin-bottom: -2px;
}
.section-border {
    border-bottom-width: 2px;
    border-color: rgba(17, 24, 39)
}
.article-title {
	line-height: 2.1rem;
}
@media (min-width:768px) {
.article-title {
	line-height: 3.1rem;
}
}
.article-indicator{
    background-color: #FFF;
}
.all-border {
    border-width: 2px;
    border-color: rgba(17, 24, 39)
}
</style>