// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { 
    enabled: true 
  },

  modules: [
    '@ant-design-vue/nuxt',
  ],

  antd:{
    // Options
  },
  css: [
    // '@ant-design-vue/nuxt/antd.less',
    '@fortawesome/fontawesome-svg-core/styles.css',
    '~/static/main.css'
  ],  // 全局样式
  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       less: {
  //         additionalData: '@import "@/assets/style/global.less";',  //全局引入变量
  //       },
  //     },
  //   },
  // },

  // 为了更好的类型提示
  // typescript: {
	// 	shim: false
	// },

})


