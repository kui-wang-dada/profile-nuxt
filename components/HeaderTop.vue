<template>
  <div class="wrap">
    <a-row>
      <a-col :span="6"> dadafastrun </a-col>
      <a-col :span="18">
        <ul>
          <router-link
            v-for="(item, index) in myRoute"
            :key="index"
            :to="item.route"
          >
            {{ item.name }}
          </router-link>
        </ul>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      myRoute: [
        {
          name: '首页',
          route: '/',
        },
        {
          name: '某客网',
          route: 'imooc',
        },
        {
          name: '某客时间',
          route: 'jike',
        },
      ],
    }
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
  margin: 0 auto;
  width: 1200px;
  font-size: 20px;
  color: #fff;
  ul {
    display: flex;
    justify-content: flex-end;
    a {
      list-style: none;
      font-size: 20px;
      margin-left: 30px;
      color: #fff;
      cursor: pointer;
      &.router-link-exact-active {
        color: @primary-color;
      }
    }
  }
}
</style>
