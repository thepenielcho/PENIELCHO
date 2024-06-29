<template>
<div class="w-full googlelightgrey section-outline">
    <div class="pb-6 pt-8 md:pb-10 md:pt-12 max-w-3xl mx-auto px-4 md:px-3">
    <div class="px-3 pb-10 pt-5 space-y-5">
        <!-- <div v-if="$fetchState.pending">잠시만 기다려주세요...</div> 굳이 필요 없을 듯. 살려야 할 경우 v-else-if로 살릴 것-->
        <div v-if="$fetchState.error">Error: {{ $fetchState.error.message }}</div>
        <template v-else>
        <div class="group" v-for="article in articles" :key="article.slug">
            <nuxt-link :to="{path: `/articles/${article.slug}`}">
            <div class="block md:flex rounded-lg bg-white border-item shadow-md group">
                <div class="w-full md:w-1/2">
                    <div class="hidden md:inline-block cardborder bg-img w-full h-40 md:h-full">
                        <div v-if="article.img" 
                            :style="{backgroundImage: `url(${getImageSrc(article.img, article.slug)})`}"
                            :alt="article.title"
                            @error="handleImageError"
                            class="w-full h-full object-cover cardborderimg bg-img">
                        </div>
                        <div v-else 
                            :style="{backgroundImage: 'url(/article.png)'}" 
                            :alt="article.title"
                            class="w-full h-full object-cover cardborderimg bg-img">
                        </div>
                    </div>
                    <div class="block md:hidden cardborder">
                        <div v-if="article.img" 
                            :style="{backgroundImage: `url(${getImageSrc(article.img, article.slug)})`}"
                            :alt="article.title"
                            @error="handleImageError"
                            class="w-full h-40 object-cover cardborderimg bg-img">
                        </div>
                        <div v-else 
                        :style="{backgroundImage: 'url(/article.png)'}" 
                            :alt="article.title"
                            class="w-full h-40 object-cover cardborderimg bg-img">
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
        
        <!-- 페이지네이션 컨트롤 -->
        <div class="flex justify-center space-x-2 mt-6 pt-4">
            <button 
            v-for="pageNum in totalPages" 
            :key="pageNum" 
            @click="changePage(pageNum)"
            :class="[
                'px-3 py-1 rounded googletextblack border-item',
                currentPage === pageNum ? 'googleyellow' : 'bg-white hover:bg-yellow-200'
            ]"
            >
            {{ pageNum }}
            </button>
        </div>
        </template>
    </div>
    </div>
</div>
</template>

<script>
export default {
data() {
    return {
    currentPage: 1,
    perPage: 5,
    articles: [],
    totalArticles: 0
    };
},

// async fetch() {
//     console.log('Fetching data...');
//     try {
//     const totalArticles = await this.$content('articles')
//         .only(['slug'])
//         .fetch()

//     this.totalArticles = totalArticles.length
//     console.log('Total articles:', this.totalArticles);

//     this.articles = await this.$content('articles')
//         .sortBy('datetime', 'desc')
//         .sortBy('createdAt', 'desc')
//         .limit(this.perPage)
//         .skip((this.currentPage - 1) * this.perPage)
//         .fetch()

//     console.log('Fetched articles:', this.articles);
//     } catch (error) {
//     console.error('Error fetching data:', error);
//     }
// }, 기존 fetch 메서드 주석 처리(datetime만 정렬할 때의 코드)

async fetch() {
    try {
        const allArticles = await this.$content('articles')
        .fetch()

        this.totalArticles = allArticles.length

        // Custom sorting function
        allArticles.sort((a, b) => {
        const dateA = new Date(a.datetime || a.createdAt);
        const dateB = new Date(b.datetime || b.createdAt);
        return dateB - dateA;  // Descending order
        });

        // Paginate the sorted articles
        const startIndex = (this.currentPage - 1) * this.perPage;
        const endIndex = startIndex + this.perPage;
        this.articles = allArticles.slice(startIndex, endIndex);

        console.log('Fetched articles:', this.articles);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
},

computed: {
    totalPages() {
    return Math.ceil(this.totalArticles / this.perPage)
    }
},

methods: {
    formatDate(date) {
    if (!date) return 'Date not available';
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(date).toLocaleDateString('ko', options)
    },
    async changePage(pageNum) {
    console.log('Changing to page:', pageNum);
    this.currentPage = pageNum
    await this.$fetch()
    },
    getImageSrc(img, slug) {
    console.log('Image path:', img);
    console.log('Article slug:', slug);
    
    if (!img) {
        console.log('No image specified, using default');
        return '/article.png';
    }
    if (img.startsWith('/')) {
        console.log('Using absolute path:', img);
        return img;
    } else {
        const path = `/${slug}/${img}`;
        console.log('Using relative path:', path);
        return path;
    }
    },
    handleImageError(e) {
    console.error('Image failed to load:', e.target.src);
    e.target.src = '/article.png';  // 이미지 로드 실패시 기본 이미지로 대체
    }
},

watchQuery: ['page']
}
</script>

<style>
.bg-img {
        background-position: center;
        background-repeat:  no-repeat;
        /* background-attachment: fixed; */
        background-size:  cover;
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
.fadeinupcom {
    animation: fadeinup 0.8s ease-out forwards;
}

@keyframes fadeinup {
    0% {
    opacity: 0;
    -webkit-transform: translateY(100px);
    transform: translateY(100px);
    }
    100% {
        opacity: 1;
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }
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
.border-item {
    border-width: 2px;
    border-color: rgba(17, 24, 39);
    border-radius: 0.5rem;
}

.section-border {
    border-bottom-width: 2px;
    border-color: rgba(17, 24, 39)
}

.full-border {
    border-width: 2px;
    border-color: rgba(17, 24, 39)
}

.top-border {
    border-left-width: 2px;
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

.border-top {
    border-top-width: 2px;
    border-color: rgba(17, 24, 39)
}

.left-border {
    border-left-width: 0px;
    border-color: rgba(17, 24, 39)
}

@media (min-width:768px) {
    .ticker-item {
        padding: 1rem
    }
    .left-border {
        border-left-width: 2px;
        border-color: rgba(17, 24, 39)
    }
    .border-top {
        border-top-width: 0px;
        border-color: rgba(17, 24, 39)
    }
    .cardborder{
        border-top-left-radius: 0.5rem;
        border-bottom-left-radius: 0.5rem;
        border-top-right-radius: 0rem;
    }
    .cardborderimg {
    border-top-left-radius: 0.3rem;
    border-bottom-left-radius: 0.3rem;
    border-top-right-radius: 0rem;
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

/* 기존 스타일 유지 */
.bg-img {
background-position: center;
background-repeat: no-repeat;
background-size: cover;
}
.section-outline {
outline: 0 0 2 0px;
outline-color: rgba(17, 24, 39)
}
.border-top {
border-top-width: 2px;
border-color: rgba(17, 24, 39)
}
.left-border {
border-left-width: 0px;
border-color: rgba(17, 24, 39)
}
.googlelightgrey {
background-color: #F1F3F4;
}
.googletextblack {
color: #202124;
}
.keep-all {
word-break: keep-all;
}
.fadeinupcom {
animation: fadeinup 0.8s ease-out forwards;
}
/* @keyframes fadeinup {
0% {
    opacity: 0;
    -webkit-transform: translateY(100px);
    transform: translateY(100px);
}
100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
}
} */
@media (min-width:768px) {
.left-border {
    border-left-width: 2px;
    border-color: rgba(17, 24, 39)
}
.border-top {
    border-top-width: 0px;
    border-color: rgba(17, 24, 39)
}
.cardborder {
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    border-top-right-radius: 0rem;
}
.cardborderimg {
    border-top-left-radius: 0.34rem;
    border-bottom-left-radius: 0.34rem;
    border-top-right-radius: 0rem;
}
}
</style>