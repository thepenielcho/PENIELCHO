<template>
    <div class="related">

    <div class="section-border py-16 md:py-24 googleyellow" >
        <div class="max-w-3xl mx-auto px-6">
            <div>
                <div class="text-base md:text-base font-medium googletextblack text-center mb-2 md:mb-3">{{article.category}} · {{formatDate(article.datetime || article.createdAt)}}</div>
                <div class="text-2xl md:text-4xl font-semibold googletextblack text-center custom-text article-title">{{article.title}}</div>
                <div class="text-base md:text-lg googletextblack text-center mt-5 md:mt-6 mb-6 md:mb-8 opacity-50">{{article.description}}</div>
                <div class="flex justify-center">
                    <div class="flex itmes-center space-x-3 md:space-x-6">
                        <div class="flex items-center">
                            <div class="lead-box w-16 h-16 md:w-20 md:h-20 profileborder">
                                <img src="~/static/Peniel.jpg" class="profile" alt="">
                            </div>
                        </div>

                        <div class="flex items-center">
                            <div>
                                <div class="font-medium text-lg md:text-xl">Peniel Cho</div>
                                <div class="text-xs md:text-sm pt-1 opacity-50"> 2년만에 블로깅 다시 시작 </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>


    <div class="googlelightgrey section-border">
        <nuxt-content :document="article" class="prose max-w-4xl custom-text px-6 pt-10 md:pt-16 pb-4 md:pb-6 mx-auto fadeinupcom"/>
        <!-- <div class="px-6 space-x-2 mx-auto max-w-4xl text-center pb-10 md:pb-16">
            <div v-for="tag of article.tags" :key="tag" class="inline">
                <span class="text-zinc-700 px-3 md:px-4 py-2 md:py-2.5 bg-white point-border rounded-full inline-block mt-3 text-sm md:text-base">
                    {{tag}}
                </span>
            </div>
        </div> -->
        <div class="px-6 space-x-2 mx-auto max-w-4xl text-center pb-10 md:pb-16">
            <div v-for="tag of article.tags" :key="tag" class="inline">
                <NuxtLink 
                    :to="`/tags/${tag}`" 
                    class="text-zinc-700 px-3 md:px-4 py-2 md:py-2.5 bg-white point-border rounded-full inline-block mt-3 text-sm md:text-base hover:cursor-pointer">
                    {{tag}}
                </NuxtLink>
            </div>
        </div>
    </div>

    <div class="bg-white section-border pt-10 pb-9">
        <div class="max-w-4xl mx-auto googletextblack px-5 pb-2.5">
            <div class="text-2xl font-medium pb-1.5">comments</div>
            <div class="text-base opacity-75 pb-5">made with <a href="https://giscus.app/ko" target="_blank" class="underline">giscus</a> 🔮</div>
            <script src="https://giscus.app/client.js"
                data-repo="thepenielcho/PENIELCHO"
                data-repo-id="R_kgDOHStdJg"
                data-category="Announcements"
                data-category-id="DIC_kwDOHStdJs4CggP5"
                data-mapping="title"
                data-strict="0"
                data-reactions-enabled="0"
                data-emit-metadata="0"
                data-input-position="bottom"
                data-theme="light_high_contrast"
                data-lang="ko"
                crossorigin="anonymous"
                async>
            </script>
        </div>
    </div>

    <div class="googlelightgrey py-14">
        <componentPrevNext class="max-w-4xl px-5 mx-auto" :prev="prev" :next="next" />

    </div>




    </div>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        const article = await $content('articles', params.slug)
            .where({route: "articles"})
            .fetch();

        const allArticles = await $content('articles')
            .where({ route: "articles" })
            .only(['title', 'slug', 'datetime', 'createdAt'])
            .fetch();

    // Custom sorting
    allArticles.sort((a, b) => {
            const dateA = new Date(a.datetime || a.createdAt);
            const dateB = new Date(b.datetime || b.createdAt);
            return dateB - dateA;  // Descending order
        });

        // Find the index of the current article
        const currentIndex = allArticles.findIndex(a => a.slug === params.slug);

        // Get prev and next
        const next = currentIndex > 0 ? allArticles[currentIndex - 1] : null;
        const prev = currentIndex < allArticles.length - 1 ? allArticles[currentIndex + 1] : null;

        return { article, prev, next }
    },

    data() {
        return {
            processedContent: ''
        }
    },    

    methods: {
        formatDate(date) {
        if (!date) return 'Date not available';
        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(date).toLocaleDateString('ko', options)
        },
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

    jsonld() {
            return {
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            mainEntityOfPage: {
                '@type': 'WebPage',
                '@id': `https://penielcho.com/articles/${this.$route.params.slug}`,
            },
            headline: this.article.title,
            description: this.article.description,
            image: `https://raw.githubusercontent.com/thepenielcho/PENIELCHO/main/static/${this.article.slug}/${this.article.img}`,
            author: {
                '@type': 'Person',
                name: 'Peniel Cho',
                email: 'mail@penielcho.com',
                url: 'https://penielcho.com',
                nationality: {
                '@type': 'Country',
                name: 'South Korea'
                }
            },
            datePublished: this.article.datetime || this.article.createdAt,
            inLanguage: 'ko',
            keywords: this.article.tags
            }
        },
}
</script>

<style>
pre {
    background-color: #FFF !important;
    border-width: 2px;
    border-color: rgba(17, 24, 39);
    font-family: ui-monospace, "SF Mono", SFMono-Regular, Menlo, Consolas, monospace !important;
}
.custom-text{
    word-break: keep-all;
}
pre, code, pre *, code * {
    font-family: ui-monospace, "SF Mono", SFMono-Regular, Menlo, Consolas, monospace !important;
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
.point-border {
    border-width: 0.13rem;
    border-color: #202124;
}
.point-border:hover {
    background-color: #F1F3F4;
    border-width: 0.13rem;
    border-color: #202124;
}
</style>