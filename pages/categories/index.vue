<template>
    <div>
        <div class="section-border py-16 md:py-24 googleyellow">
            <div class="max-w-3xl mx-auto px-6">
                <div class="text-2xl md:text-4xl font-semibold googletextblack text-center custom-text">
                    카테고리
                </div>
                <div class="text-base md:text-lg googletextblack text-center mt-5 md:mt-6 opacity-50">
                    블로그의 모든 카테고리 목록입니다.
                </div>
            </div>
        </div>

        <div class="googlelightgrey section-border">
            <div class="pb-6 pt-8 md:pb-10 md:pt-12 max-w-3xl mx-auto px-4 md:px-3">
                <div class="px-3 pb-10 pt-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div v-for="category in categories" :key="category.name" class="group">
                        <nuxt-link :to="`/categories/${category.name}`">
                            <div class="block rounded-lg bg-white border-item shadow-md group p-6 hover:shadow-lg transition duration-200">
                                <h3 class="googletextblack text-xl font-medium mb-2 keep-all">{{ category.name }}</h3>
                                <p class="googletextblack text-sm opacity-75 mb-3">{{ category.count }}개의 포스트</p>
                                <p class="text-xs text-right googletextblack">
                                    <span class="group-hover:underline transition duration-100">카테고리로 이동 →</span>
                                </p>
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
    async asyncData({ $content }) {
        const articles = await $content('articles')
            .where({ route: 'articles' })
            .only(['category'])
            .fetch()

        // 카테고리별 게시물 수 계산
        const categoryCount = articles.reduce((acc, article) => {
            if (article.category) {
                acc[article.category] = (acc[article.category] || 0) + 1
            }
            return acc
        }, {})

        // 카테고리 배열 생성
        const categories = Object.entries(categoryCount).map(([name, count]) => ({
            name,
            count
        })).sort((a, b) => b.count - a.count) // 게시물 수 기준 내림차순 정렬

        return { categories }
    },

    head() {
        return {
            title: '카테고리 - Peniel Cho',
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: '블로그의 모든 카테고리 목록'
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

.border-item {
    border-width: 2px;
    border-color: rgba(17, 24, 39);
    border-radius: 0.5rem;
}

.keep-all {
    word-break: keep-all;
}
</style> 