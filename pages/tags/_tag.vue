<template>
    <div>
        <div class="section-border py-16 md:py-24 googleyellow">
            <div class="max-w-3xl mx-auto px-6">
                <div class="text-2xl md:text-4xl font-semibold googletextblack text-center"># {{$route.params.tag}}</div>
            </div>
        </div>

        <div class="googlelightgrey section-border">
            <div class="max-w-4xl mx-auto px-6 py-16">
                <div v-for="article in articles" :key="article.slug" class="mb-8">
                    <NuxtLink :to="`/articles/${article.slug}`">
                        <div class="bg-white p-6 point-border rounded-lg hover:bg-gray-50">
                            <div class="text-sm opacity-50 mb-2">{{formatDate(article.datetime || article.createdAt)}}</div>
                            <div class="text-xl font-medium mb-2">{{article.title}}</div>
                            <div class="text-base opacity-75">{{article.description}}</div>
                        </div>
                    </NuxtLink>
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
                tags: { $contains: params.tag }
            })
            .sortBy('datetime', 'desc')
            .fetch();

        return { articles }
    },

    methods: {
        formatDate(date) {
            if (!date) return 'Date not available';
            const options = { year: 'numeric', month: 'long', day: 'numeric' }
            return new Date(date).toLocaleDateString('ko', options)
        }
    },

    head() {
        return {
            title: `#${this.$route.params.tag} - Peniel Cho`,
        }
    }
}
</script> 