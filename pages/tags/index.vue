<template>
    <div class="max-w-5xl mx-auto py-16 px-4">
        <h1 class="text-3xl font-bold text-center mb-12">전체 태그 목록</h1>
        <div class="flex flex-wrap gap-3 justify-center">
            <NuxtLink
                v-for="tag in allTags"
                :key="tag.name"
                :to="`/tags/${tag.name}`"
                class="googlelightgrey px-3 py-1 rounded-full text-sm border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-colors duration-200"
            >
                {{ tag.name }} ({{ tag.count }})
            </NuxtLink>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            allTags: []
        }
    },
    async fetch() {
        const articles = await this.$content('articles')
            .only(['tags'])
            .fetch()

        // 태그 카운트를 계산합니다
        const tagCount = {}
        articles.forEach(article => {
            if (article.tags) {
                article.tags.forEach(tag => {
                    tagCount[tag] = (tagCount[tag] || 0) + 1
                })
            }
        })

        // 태그를 카운트 기준으로 정렬합니다
        this.allTags = Object.entries(tagCount)
            .map(([name, count]) => ({ name, count }))
            .sort((a, b) => b.count - a.count)
    }
}
</script> 