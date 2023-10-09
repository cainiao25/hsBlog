<template>
  <div class="widget-container">
    <div class="widget-header">
      博客简介
    </div>
    <div class="widget-body">
      <template v-if="intro">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="intro-content" v-html="intro" />
      </template>
      <a-empty v-else>
        <span slot="description">暂无内容</span>
      </a-empty>
      <!--<img src="/images/2.jpg" alt="">-->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineComponent } from 'vue';
// import { settings as storeSettings, setSettings, nuxtServerInit } from '@/store';
import MarkdownIt from 'markdown-it';

const intro = ref('');

onMounted(() => {
  const md = new MarkdownIt({
    html: true,
    breaks: false
  });
  // intro.value = md.render(storeSettings.value.blogIntro);
});

defineComponent({
  setup() {
    return {
      intro
    };
  }
});
</script>

<style scoped>
.intro-content {
  white-space: pre-wrap;
}
</style>