<template>
  <div class="home">
    <div class="nav-bg">
      <div class="nav-wrap">
        <a-row class="nav-1">
          <a-col :span="12"> 只学有用的</a-col>
          <a-col :span="12" class="search">
            <a-input-search placeholder="input search text" style="width: 200px" @search="onSearch" />
          </a-col>
        </a-row>
        <a-row class="nav-2">
          <span class="nav-title">方向：</span>
          <div class="category-wrap">
            <span
              :class="{ active: categoryActive === index }"
              v-for="(item, index) in categoryList"
              :key="index"
              @click="changeCategory(index)"
            >
              {{ item }}
            </span>
          </div>
        </a-row>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TopHeader from '@/components/TopHeader.vue';

export default {
  name: 'Home',
  components: { TopHeader },
  props: {},
  data() {
    return {
      categoryList: [
        '前端',
        'JAVA',
        'Python',
        'Android',
        'Go',
        'PHP',
        '测试',
        '大数据',
        '人工智能',
        '数据结构和算法',
        '数据库',
        '微信小程序',
        '运维'
      ],
      categoryActive: 0,
      myList: [1, 2]
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    onSearch() {},
    changeCategory(index) {
      this.categoryActive = index;
    }
  }
};
</script>

<style lang="less" scoped>
.home {
  min-height: 500px;
  font-size: 20px;
  background: #f9f9f9;
  .nav-bg {
    background: #fff;
    .nav-wrap {
      margin: 0 auto;
      width: 1200px;
      .nav-1 {
        height: 100px;
        display: flex;
        align-items: center;
        .search {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
        }
      }
      .nav-2 {
        display: flex;
        flex-direction: row;
        align-items: center;
        .nav-title {
          color: #222;
          font-weight: bold;
          margin-right: 20px;
          font-size: 15px;
        }
        .category-wrap {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: center;
          span {
            font-size: 15px;
            color: #333;
            margin-right: 20px;
            cursor: pointer;
            padding: 3px 10px;
            &:hover {
              color: @primary-color;
            }
            &.active {
              background: rgba(233, 173, 7, 0.2);
              color: @primary-color;
            }
          }
        }
      }
    }
  }
}
</style>
