<template>
  <div>
    <componentHeader />
    <Nuxt />
    <componentFooter />
    
  </div>
</template>

<style>
  /* @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css'); */
  /* * { font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;; } */
  @import url(~/assets/css/pretendard-subset.css);
  * { 
    /* font-family: 'Inter', 'Spoqa Han Sans Neo', 'sans-serif'; */
    font-family: Pretendard, 'Pretendard', -apple-system, 'sans-serif';
    word-wrap: break-word;
    word-break: keep-all;
    }
  body {
    background-color: #F1F3F4;
  }
</style>

<script>
export default {
}
</script>