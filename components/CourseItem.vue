<template>
  <div class="course-item">
    <img :src="item.originImg[0].url | checkImg" alt="" />
    <h4>{{ item.name }}</h4>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    item: {
      defalut: () => {},
      type: Object
    }
  },
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {}
};
</script>

<style scoped lang="less">
.course-item {
  width: 220px;
  margin-bottom: 20px;
  img {
    width: 220px;
    height: 120px;
    border-radius: 10px;
  }
  h4 {
    margin: 0;
    font-size: 14px;
    margin-top: 20px;
  }
}
</style>
