<template>
<!-- <div class="googleyellow section-border py-16 md:py-24"> -->
    <!-- <div class="items-center justify-center">
        <div>
            <div class="flex justify-center">
            <div class="flex items-center">
                <div class="text-2xl md:text-4xl font-medium googletextblack text-center">allArticles</div>
            </div>
            </div>
        </div>
    </div> -->
    <!-- <div class="w-full googleyellow">
        <div class="pt-8 md:pt-12 max-w-3xl mx-auto">
        <componentSearch class="px-6 md:px-3" />
        </div>
    </div>    
</div> -->
<div class="googleyellow section-border py-16 md:py-24">
    <div class="w-full googleyellow">
        <div class="pt-8 md:pt-12 max-w-3xl mx-auto">
            <componentSearch class="px-6 md:px-3" />
            <!-- 인기 태그 섹션 추가 -->
            <div class="px-6 md:px-3 mt-8">
                <div class="flex flex-wrap gap-2 justify-center">
                    <NuxtLink
                        v-for="tag in topTags"
                        :key="tag.name"
                        :to="`/tags/${tag.name}`"
                        class="googlelightgrey px-3 py-1 rounded-full text-sm border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-colors duration-200"
                    >
                        {{ tag.name }} ({{ tag.count }})
                    </NuxtLink>
                    <NuxtLink 
                        to="/tags"
                        class="googlelightgrey px-4 py-1 rounded-full text-sm border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-colors duration-200 font-medium"
                    >
                        모든 태그 보기
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>    
</div>
</template>

<!-- <script>
export default {
}
</script> -->

<script>
export default {
    data() {
        return {
            topTags: []
        }
    },
    async fetch() {
        // content 디렉토리의 모든 글을 가져옵니다
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

        // 태그를 카운트 기준으로 정렬하고 상위 10개를 선택합니다
        this.topTags = Object.entries(tagCount)
            .map(([name, count]) => ({ name, count }))
            .sort((a, b) => b.count - a.count)
            .slice(0, 10)
    }
}
</script>

<style>
.bg-img {
        background-position: center;
        background-repeat:  no-repeat;
        /* background-attachment: fixed; */
        background-size:  cover;
        background-color: #000000;
 }
.section {
  position: relative;
}
.inner {
  box-sizing: border-box;
  position: relative;
}
.keep-all {
  word-break: keep-all;
}
.lead-box {
    border-radius: 70%;
    overflow: hidden;
}
.square-box {
    overflow: hidden;
}
.profile {
    object-fit: cover;
    /* overflow: hidden; */
}

.ticker-wrapper {
    display: flex;
    position: relative;
    overflow: hidden
}

.ticker-item {
    border-top-width: 2px;
    border-bottom-width: 2px;
    border-left-width: 2px;
    border-color: rgba(17, 24, 39)
}

.featured-item:hover {
    outline: 2px solid rgba(17, 24, 39);
}

.outline-item {
    outline: 2px solid rgba(17, 24, 39);
}

.section-border {
    border-bottom-width: 2px;
    border-color: rgba(17, 24, 39)
}

.full-border {
    border-width: 2px;
    border-color: rgba(17, 24, 39)
}

.section-outline {
    outline: 0 0 2 0px;
    outline-color: rgba(17, 24, 39)
}

.dark .ticker-item {
    border-color: rgba(243, 244, 246)
}

.ticker-item {
    padding: .5rem;
    font-weight: 500
}

@media (min-width:768px) {
    .ticker-item {
        padding: 1rem
    }
}

@media (min-width:880px) {
    .featured-item:hover {
        padding: 1rem
    }
}

.ticker-item {
    white-space: nowrap
}

.bordergoogleblack{
    border-bottom-width: 2px;
    border-color: rgba(17, 24, 39)
}

.googleblue{
  background-color: #538FF7;
}
.googleyellow{
  background-color: #F6BD41;
}
.googlered{
  background-color: #EC5E4F;
}
.googlegreen{
  background-color: #65B867;
}
.googlegrey{
  background-color: #D2D5DB;
}
.googlelightgrey{
  background-color: #F1F3F4;
}
.googleblack{
  background-color: #202124;
}
.googletextblack{
  color: #202124;
}
.googletextblue{
  color: #1A73E8;
}
.nametext {
    color: #79c0ff;
    background: linear-gradient(92.7deg,#56d364 -1.37%,#79c0ff 78.71%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
.outline-btm {
    border-bottom: 2px solid rgba(17, 24, 39);
    margin-bottom: -2px;
}
</style>