<template>
  <div class="wrap">
    <img class="img" src="@/assets/logo.png" alt />
    <h1 class="title">{{ error.statusCode }}</h1>
    <h2 class="info">{{ error.message }}</h2>
    <nuxt-link class="button" to="/" v-if="error.statusCode === 404">
      <a-button type="primary">返回首页</a-button>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  components: {},
  props: ['error'],
  data() {
    return {}
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
}
</script>

<style scoped lang="less">
.wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
  img {
    width: 60px;
    height: 60px;
  }
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
