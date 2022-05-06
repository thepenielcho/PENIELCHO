<template>
      <div class="bg-transparent">
        <div class="bg-white shadow-sm md:shadow w-full rounded-lg bordergoogleblack flex items-center mb-4 py-3 md:py-3.5 pr-4">
            <SearchIcon />
            <input placeholder="Articles, Projects, Tips ... All by Peniel!" v-model="query" type="search" autocomplete="off" 
            class="flex-auto text-sm md:text-base googletextblack pr-3.5 md:pr-6 flex items-center placeholder-text-gray-400" />
        </div>

        <ul v-if="articles.length" class="bg-white shadow-sm md:shadow rounded-lg bordergoogleblack px-4">
          <li class="googletextblack py-2.5 md:py-3.5 border-b text-sm md:text-base lastborder" v-for="article of articles" :key="article.slug">
            <nuxt-link :to='`/articles/${article.slug}`' class="px-2">{{ article.title }}</nuxt-link>
          </li>
        </ul>
      </div>
</template>

<script>
export default {
  data () {
    return {
      query: '',
      articles: []
    }
  },
  watch: {
    async query (query) {
      if (!query) {
        this.articles = []
        return
      }

      this.articles = await this.$content('articles')
        .only(['title', 'slug'])
        .sortBy('createdAt', 'asc')
        .search(query)
        .fetch()
    }
  }
}
</script>

<style scoped>
.lastborder:last-child{
    border-bottom: none;
}
input:focus, textarea:focus, select:focus{
        outline: none;
    }
input::-ms-clear,
input::-ms-reveal{
	display:none;width:0;height:0;
}
input::-webkit-search-decoration,
input::-webkit-search-cancel-button,
input::-webkit-search-results-button,
input::-webkit-search-results-decoration{
	display:none;
}
.bordergoogleblack{
    border-width: 2px;
    border-color: rgba(17, 24, 39)
}
</style>