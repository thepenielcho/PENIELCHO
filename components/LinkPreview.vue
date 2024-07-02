<template>
<div class="link-preview flex justify-center px-2 md:px-0 py-1" ref="container">
    <div class="w-full md:w-3/5 point-border-preview">
        <div class="text-base px-2" v-if="loading && isVisible">OpenGraph 정보를 불러오는 중입니다...</div>
        <div v-else-if="error && isVisible">Error: {{ error }}</div>
        <a v-else-if="preview && isVisible" :href="url" target="_blank" rel="noopener noreferrer">
        <div 
            v-if="preview.image" 
            class="w-full h-52 bg-cover bg-center cardborder-top"
            :style="{ backgroundImage: `url(${preview.image})` }"
            :aria-label="preview.title"
            @error="handleImageError"
        ></div>
        <div class="px-4 pb-3 pt-2 w-full border-top-preview bg-white cardborder-bttm">
            <h3 class="text-lg googletextblack font-medium mb-2 keep-all">{{ preview.title }}</h3>
            <p class="text-sm font-normal googletextblack mb-4 keep-all">{{ preview.description }}</p>
        </div>
        </a>
    </div>

</div>
</template>

<script>
export default {
props: ['url'],
data() {
    return {
    preview: null,
    loading: false,
    error: null,
    isVisible: false
    }
},
mounted() {
    this.setupIntersectionObserver()
},
methods: {
    setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
        this.isVisible = true
        this.fetchPreview()
        observer.unobserve(this.$refs.container)
        }
    }, { threshold: 0.1 })
    observer.observe(this.$refs.container)
    },
    async fetchPreview() {
    if (this.preview) return
    this.loading = true
    try {
        this.preview = await this.$getLinkPreview(this.url)
    } catch (error) {
        this.error = error.message
    } finally {
        this.loading = false
    }
    },
    handleImageError() {
      // 이미지 로딩 실패 시 처리
      this.preview.image = null // 또는 기본 이미지 URL로 설정
    }
}
}
</script>

<style scoped>
.link-preview img {
max-width: 100%;
height: auto;
/* max-height: 200px; 이미지 높이 제한 */
object-fit: cover;
}
.link-preview h3 {
    margin: 10px 0;
    font-size: 1.1em;
}

.link-preview p {
    margin: 5px 0;
    font-size: 0.9em;
}

.link-preview a {
    text-decoration: none;
}

.link-preview a:hover h3 {
    text-decoration: underline;
}

.border-top-preview {
        border-top-width: 0.13rem;
        border-color: rgba(17, 24, 39)
    }

.all-border {
    border-width: 2px;
    border-color: rgba(17, 24, 39)
}
.point-border-preview {
    border-width: 0.13rem;
    border-color: #202124;
    border-radius: 0.5rem;
}
.cardborder-top {
    border-top-left-radius: 0.3rem;
    border-top-right-radius: 0.3rem;
}
.cardborder-bttm {
    border-bottom-left-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
}
.cardborder-bttm:hover {
    background-color: #F1F3F4;
}
</style>