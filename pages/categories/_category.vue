<template>
    <div>
        <div class="section-border py-16 md:py-24 googleyellow">
            <div class="max-w-3xl mx-auto px-6">
                <div class="text-2xl md:text-4xl font-semibold googletextblack text-center custom-text">
                    {{ $route.params.category }}
                </div>
                <div class="text-base md:text-lg googletextblack text-center mt-5 md:mt-6 opacity-50">
                    카테고리 관련 포스팅은 아래와 같습니다.
                </div>
            </div>
        </div>

        <div class="googlelightgrey section-border">
            <div class="pb-6 pt-8 md:pb-10 md:pt-12 max-w-3xl mx-auto px-4 md:px-3">
                <div class="px-3 pb-10 pt-5 space-y-5">
                    <div class="group" v-for="article in articles" :key="article.slug">
                        <nuxt-link :to="`/articles/${article.slug}`">
                            <div class="block md:flex rounded-lg bg-white border-item shadow-md group">
                                <div class="w-full md:w-1/2">
                                    <div class="hidden md:inline-block cardborder bg-img w-full h-40 md:h-full">
                                        <div v-if="article.img" 
                                            :style="{backgroundImage: `url(${getImageSrc(article.img, article.slug)})`}"
                                            :alt="article.title"
                                            @error="handleImageError"
                                            class="w-full h-full cardborderimg bg-img">
                                        </div>
                                        <div v-else
                                            :style="{backgroundImage: 'url(/article.png)'}" 
                                            :alt="article.title"
                                            class="w-full h-full cardborderimg bg-img">
                                        </div>
                                    </div>
                                    <div class="block md:hidden cardborder">
                                        <div v-if="article.img" 
                                            :style="{backgroundImage: `url(${getImageSrc(article.img, article.slug)})`}"
                                            :alt="article.title"
                                            @error="handleImageError"
                                            class="w-full h-40 cardborderimg bg-img">
                                        </div>
                                        <div v-else 
                                            :style="{backgroundImage: 'url(/article.png)'}" 
                                            :alt="article.title"
                                            class="w-full h-40 cardborderimg bg-img">
                                        </div>
                                    </div>
                                </div>
                                <div class="p-5 md:p-6 w-full md:w-1/2 border-top left-border">
                                    <h5 class="googletextblack text-base md:text-lg font-medium mb-1 md:mb-2 keep-all">{{article.title}}</h5>
                                    <p class="googletextblack text-sm md:text-base mb-1.5 md:mb-2.5 keep-all">
                                        {{article.description}}
                                    </p>
                                    <p class="googletextblack text-xs md:text-sm">
                                        {{formatDate(article.datetime || article.createdAt)}} · {{article.readingStats.text}}
                                        <span class="pl-1 hidden group-hover:inline transition duration-100 googletextblack">Read More</span>
                                    </p>
                                </div>
                            </div>
                        </nuxt-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        const articles = await $content('articles')
            .where({ 
                route: "articles",
                category: params.category 
            })
            .sortBy('datetime' || 'createdAt', 'desc')
            .fetch();

        return { articles }
    },

    methods: {
        formatDate(date) {
            if (!date) return 'Date not available';
            const options = { year: 'numeric', month: 'long', day: 'numeric' }
            return new Date(date).toLocaleDateString('ko', options)
        },
        
        getImageSrc(img, slug) {
            if (!img) return '/article.png';
            return img.startsWith('/') ? img : `/${slug}/${img}`;
        },
        
        handleImageError(e) {
            e.target.src = '/article.png';
        }
    },

    head() {
        return {
            title: `${this.$route.params.category} - Peniel Cho`,
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: `Articles in category: ${this.$route.params.category}`
                }
            ]
        }
    }
}
</script>

<style scoped>
.custom-text {
    word-break: keep-all;
}

.bg-img {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.border-item {
    border-width: 2px;
    border-color: rgba(17, 24, 39);
    border-radius: 0.5rem;
}

.border-top {
    border-top-width: 2px;
    border-color: rgba(17, 24, 39);
}

.left-border {
    border-left-width: 0px;
    border-color: rgba(17, 24, 39);
}

.cardborder {
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
}

.cardborderimg {
    border-top-left-radius: 0.38rem;
    border-bottom-left-radius: 0rem;
    border-top-right-radius: 0.38rem;
}

@media (min-width:768px) {
    .left-border {
        border-left-width: 2px;
        border-color: rgba(17, 24, 39);
    }
    .border-top {
        border-top-width: 0px;
        border-color: rgba(17, 24, 39);
    }
    .cardborderimg {
        border-top-left-radius: 0.3rem;
        border-bottom-left-radius: 0.3rem;
        border-top-right-radius: 0rem;
    }
}
</style> 