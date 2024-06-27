<template>
<div class="w-full googlelightgrey section-outline">
    <div class="pb-6 pt-8 md:pb-10 md:pt-12 max-w-3xl mx-auto px-4 md:px-3 fadeinupcom">

            <div class="px-3 pb-10 pt-5 space-y-5">

                <div class="group fadeinupcom" v-for="article of articles" :key="article">
                    <nuxt-link :to="{path: `/articles/${article.slug}`}">
                        <div class="block md:flex rounded-lg bg-white border-item shadow-md group">

                            <div class="w-full md:w-1/2">
                                <div class="hidden md:inline-block cardborder bg-img w-full h-40 md:h-full">
                                    <div v-if="`${article.img}` == undefined || `${article.img}` == null || `${article.img}` == 'null' || `${article.img}` == 'undefined'" class="cardborder inline-block bg-img w-full h-40 md:h-full" 
                                    :style="{ backgroundImage: 'url(/tech-article.png)' }" alt=""></div>
                                    <div v-else class="cardborder bg-img w-full h-40 md:h-full" 
                                    :style="{ backgroundImage: `url(/${article.slug}/${article.img})` }" alt=""></div>
                                </div>
                                <div class="block md:hidden">
                                    <img v-if="`${article.img}` == undefined || `${article.img}` == null || `${article.img}` == 'null' || `${article.img}` == 'undefined'" class="inline-block cardborder bg-img profile min-h-content" 
                                    src="~/static/tech-article.png" alt="">
                                    <img v-else class="cardborder bg-img profile min-h-content" 
                                    :src="require(`~/static/${article.slug}/${article.img}`)" alt="">
                                </div>
                            </div>
                            <div class="p-5 md:p-6 w-full md:w-1/2 border-top left-border">
                                <h5 class="googletextblack text-base md:text-lg font-medium mb-1 md:mb-2 keep-all">{{article.title}}</h5>
                                <p class="googletextblack text-sm md:text-base mb-1.5 md:mb-2.5 keep-all">
                                    {{article.description}}
                                </p>
                                <p class="googletextblack text-xs md:text-sm">{{formatDate(article.datetime)}} · {{article.readingStats.text}} <span class="pl-1 hidden group-hover:inline transition duration-100 googletextblack">Read More</span> </p>
                            </div>
                        </div>
                    </nuxt-link>
                </div>
                
                <infinite-loading class=" pt-6" @infinite="infiniteHandler" spinner="spiral">
                                <div slot="no-more" class="mx-auto">
                                <div class="googletextblack font-medium text-lg md:text-xl pb-1 pb:pb-2"> 더 쓴 글이 없어요. </div>
                                <div class="text-zinc-500 font-medium text-sm md:text-lg"> <a class="underline" href="https://cherrypickreminder.substack.com/">뉴스레터</a>도 읽어보세요! </div>
                                </div>
                                <div slot="no-results" class="">
                                <div class="text-gray-600 font-medium text-base md:text-lg pb-1 pb:pb-2">There's no matching results for your request 😭</div>
                                <div class="text-gray-600 font-medium text-sm md:text-base">You can email me about this via <a href="mailto:penielcho@gmail.com" class="underline">this link</a> </div>
                                </div>
                                <div slot="error" slot-scope="{ trigger }" class="text-gray-600 font-medium text-base md:text-lg">
                                뭔가 문제가 있나봐요.
                                <a href="javascript:;" @click="trigger">여기</a> 를 눌러주세요.
                                </div>
                </infinite-loading>
            </div>
    </div>
</div>
</template>

<script>
export default {

data() {
return {
    page: 0,
    limit: 3,
    articles: [],
};
},


async fetch() {
this.articles = await this.fetchData();
},
fetchOnServer: true,
methods: {
    formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return new Date(date).toLocaleDateString('ko', options)
    },
    fetchData() {
        return this.$content("articles")
        .where({route: "articles"})
        .limit(this.limit)
        .skip(this.limit * this.page)
        .sortBy('datetime', 'desc')
        .fetch();
    },
    infiniteHandler($state) {
        setTimeout(async () => {
        this.page += 1;
        let additionalItems = await this.fetchData();
        if (additionalItems.length > 0) {
            this.articles.push(...additionalItems);
            $state.loaded();
        } else {
            $state.complete();
        }
        }, 500);
    },
},

}
</script>

<style>
/* .nav-item:hover,
.nav-item:active,
.nav-item.nuxt-link-active {
    color: #3b82f6;
} */
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


.cardborder{
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    border-bottom-left-radius: 0rem;
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