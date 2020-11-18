<template>
  <div class="top-header">
    <div class="info-left" @click="goToPage">
      <span class="area-title">{{ title }}</span>
    </div>
    <div class="info-right">
      <span class="info-more">更多</span>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  data() {
    return {}
  },
  computed: {
    showView() {
      return !!this.headerData.view
    },
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    goToPage() {
      let { router, params } = this.headerData
      if (!router) {
        this.$emit('clickTopHeader')
        return
      }
      this.$router.push({
        name: router,
        params,
      })
    },
  },
}
</script>

<style scoped lang="less">
.top-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  margin-top: 10px;
  .info-left {
    cursor: pointer;
    display: flex;
    align-items: center;
    .area-title {
      font-size: 24px;
      font-weight: bold;
      color: #333;
      margin-left: 10px;
    }
  }
  .info-right {
    display: flex;
    flex-direction: row;
    align-items: center;
    .info-more {
      font-size: 14px;
      color: #222;
    }
  }
}
</style>
