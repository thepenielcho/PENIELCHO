<template>

<section ref="myRef" class="text-lg md:text-xl text-black flex min-w-max ticker ticker-wrapper googlelightgrey googletextblack">
  <div class="flex std">
    <section class="flex takes">
      <div class="px-3 py-2 googlered border-y-2 border-l-2 border-neutral-800 ticker-item">Turning 23 Feels Weird!</div>
      <div class="px-3 py-2 googleblue border-y-2 border-l-2 border-neutral-800 ticker-item underline">#DevRel</div>
      <div class="px-3 py-2 googleyellow border-y-2 border-l-2 border-neutral-800 ticker-item">🥑 Developer Advocate</div>
      <div class="px-3 py-2 googlegrey border-y-2 border-l-2 border-neutral-800 ticker-item">💻 Front-End Developer</div>
      <div class="px-3 py-2 googlegreen border-y-2 border-l-2 border-neutral-800 ticker-item">📊 Data Scientist</div>
      <div class="px-3 py-2 googlered border-y-2 border-l-2 border-neutral-800 ticker-item">PyCon KR Organizer</div>
      <div class="px-3 py-2 googleblue border-y-2 border-l-2 border-neutral-800 ticker-item">Google Developer Student Clubs KR Core</div>
      <div class="px-3 py-2 googleyellow border-y-2 border-l-2 border-neutral-800 ticker-item">Former COSADAMA Lead</div>
      <div class="px-3 py-2 googlegrey border-y-2 border-l-2 border-neutral-800 ticker-item">✊🏻 Feminist (Of Course)</div>
      <div class="px-3 py-2 googlegreen border-y-2 border-l-2 border-neutral-800 ticker-item">🏳️‍🌈 #PRIDE</div>
      <div class="px-3 py-2 googlered border-y-2 border-l-2 border-neutral-800 ticker-item">😍 Loving Nuxt.js</div>
      <div class="px-3 py-2 googleblue border-y-2 border-l-2 border-neutral-800 ticker-item">💪🏻 Believe in Community</div>
      <div class="px-3 py-2 googleyellow border-y-2 border-l-2 border-neutral-800 ticker-item underline">#K-POP</div>
      <div class="px-3 py-2 googlegrey border-y-2 border-l-2 border-neutral-800 ticker-item underline">Twitterian since 2014!</div>
      <div class="px-3 py-2 googlegreen border-y-2 border-l-2 border-neutral-800 ticker-item">#Haikyuu!</div>
    </section>
    <section class="flex takes">
      <div class="px-3 py-2 googlered border-y-2 border-l-2 border-neutral-800 ticker-item">Turning 23 Feels Weird!</div>
      <div class="px-3 py-2 googleblue border-y-2 border-l-2 border-neutral-800 ticker-item underline">#DevRel</div>
      <div class="px-3 py-2 googleyellow border-y-2 border-l-2 border-neutral-800 ticker-item">🥑 Developer Advocate</div>
      <div class="px-3 py-2 googlegrey border-y-2 border-l-2 border-neutral-800 ticker-item">💻 Front-End Developer</div>
      <div class="px-3 py-2 googlegreen border-y-2 border-l-2 border-neutral-800 ticker-item">📊 Data Scientist</div>
      <div class="px-3 py-2 googlered border-y-2 border-l-2 border-neutral-800 ticker-item">PyCon KR Organizer</div>
      <div class="px-3 py-2 googleblue border-y-2 border-l-2 border-neutral-800 ticker-item">Google Developer Student Clubs KR Core</div>
      <div class="px-3 py-2 googleyellow border-y-2 border-l-2 border-neutral-800 ticker-item">Former COSADAMA Lead</div>
      <div class="px-3 py-2 googlegrey border-y-2 border-l-2 border-neutral-800 ticker-item">✊🏻 Feminist (Of Course)</div>
      <div class="px-3 py-2 googlegreen border-y-2 border-l-2 border-neutral-800 ticker-item">🏳️‍🌈 #PRIDE</div>
      <div class="px-3 py-2 googlered border-y-2 border-l-2 border-neutral-800 ticker-item">😍 Loving Nuxt.js</div>
      <div class="px-3 py-2 googleblue border-y-2 border-l-2 border-neutral-800 ticker-item">💪🏻 Believe in Community</div>
      <div class="px-3 py-2 googleyellow border-y-2 border-l-2 border-neutral-800 ticker-item underline">#K-POP</div>
      <div class="px-3 py-2 googlegrey border-y-2 border-l-2 border-neutral-800 ticker-item underline">Twitterian since 2014!</div>
      <div class="px-3 py-2 googlegreen border-y-2 border-x-2 border-neutral-800 ticker-item">#Haikyuu!</div>
    </section>
  </div>

</section>

</template>

<script>
</script>

<style>
:root {
    --ticker-width: 0px
}
@-webkit-keyframes scrolling {
    0% {
        transform: translateX(0)
    }

    to {
        transform: translateX(calc(var(--ticker-width)*-1))
    }
}

@keyframes scrolling {
    0% {
        transform: translateX(0)
    }

    to {
        transform: translateX(calc(var(--ticker-width)*-1))
    }
}
/* Makes the animation pause on hover */
.ticker:hover{
    animation-play-state: paused;
}
@keyframes marquee{
    from {transform: translateX(0);}
    to {transform: translateX(-100%);}
}
/* media query to enable animation for only those who want it */

/* @media (prefers-reduced-motion: no-preference) {
    .ticker{
        animation: marquee 28s linear infinite;
    }
}

.ticker {
    display: flex;
    -webkit-animation: marquee 28s linear infinite;
    animation: marquee 28s linear infinite;
    overflow-x: hidden;
} */

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

.section-border {
    border-bottom-width: 2px;
    border-color: rgba(17, 24, 39)
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
section {
  overflow-x: hidden;
}
.std {
  flex-wrap: nowrap;
  white-space: nowrap;
  min-width: 100%;
}
.std section {
  flex-shrink: 0;
  align-items: center;
  animation: slide-left 30s linear infinite;
}
@keyframes slide-left {
  from {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  to {
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
  }
}
</style>