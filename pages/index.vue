<template>
  <div class="home">
    <a-carousel autoplay>
      <div v-for="item in myList" :key="item">
        <h3>{{ item }}</h3>
      </div>
    </a-carousel>
    <div class="pro-wrap">
      <div class="pro-item" v-for="item in conList" :key="item.title">
        <TopHeader :title="item.title"></TopHeader>
        <div class="pro-list">
          <a-card
            hoverable
            class="card"
            v-for="pro in item.list"
            :key="pro.title"
          >
            <img
              slot="cover"
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
            />
            <a-card-meta :title="pro.title">
              <template slot="description">
                {{ pro.des }}
              </template>
            </a-card-meta>
          </a-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TopHeader from '@/components/TopHeader.vue'
export default {
  name: 'Home',
  components: { TopHeader },
  data() {
    return {
      myList: [1, 2],
      conList: [
        {
          title: 'vue',
          list: [
            {
              title: 'vue教师管理系',
              des: '使用vue+element实现教师管理',
              img: require('@/assets/logo.png'),
            },
            {
              title: 'vue教师管理',
              des: '使用vue+element实现教师管理',
              img: require('@/assets/logo.png'),
            },
            {
              title: 'vue教师管理系统3',
              des: '使用vue+element实现教师管理',
              img: require('@/assets/logo.png'),
            },
            {
              title: 'vue教师系统4',
              des: '使用vue+element实现教师管理',
              img: require('@/assets/logo.png'),
            },
            {
              title: 'vue教师系统4',
              des: '使用vue+element实现教师管理',
              img: require('@/assets/logo.png'),
            },
          ],
        },
        {
          title: 'react',
          list: [
            {
              title: 'vue教师管理系',
              des: '使用vue+element实现教师管理',
              img: require('@/assets/logo.png'),
            },
            {
              title: 'vue教师管理',
              des: '使用vue+element实现教师管理',
              img: require('@/assets/logo.png'),
            },
            {
              title: 'vue教师管理系统3',
              des: '使用vue+element实现教师管理',
              img: require('@/assets/logo.png'),
            },
            {
              title: 'vue教师系统4',
              des: '使用vue+element实现教师管理',
              img: require('@/assets/logo.png'),
            },
            {
              title: 'vue教师系统4',
              des: '使用vue+element实现教师管理',
              img: require('@/assets/logo.png'),
            },
          ],
        },
        {
          title: 'Node',
          list: [
            {
              title: 'vue教师管理系',
              des: '使用vue+element实现教师管理',
              img: require('@/assets/logo.png'),
            },
            {
              title: 'vue教师管理',
              des: '使用vue+element实现教师管理',
              img: require('@/assets/logo.png'),
            },
            {
              title: 'vue教师管理系统3',
              des: '使用vue+element实现教师管理',
              img: require('@/assets/logo.png'),
            },
            {
              title: 'vue教师系统4',
              des: '使用vue+element实现教师管理',
              img: require('@/assets/logo.png'),
            },
            {
              title: 'vue教师系统4',
              des: '使用vue+element实现教师管理',
              img: require('@/assets/logo.png'),
            },
          ],
        },
      ],
    }
  },
}
</script>

<style lang="less" scoped>
.home {
  width: 1200px;
  margin: 0 auto;
  /deep/ .ant-carousel {
    margin-top: 30px;
    .slick-slide {
      text-align: center;
      height: 320px;
      line-height: 160px;
      background: #364d79;
      overflow: hidden;
    }
  }
  .pro-wrap {
    .pro-item {
      .pro-list {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        .card {
          // width: 220px;
          flex: 1;
          padding: 20px;
          margin-right: 20px;
          &:nth-child(5) {
            margin-right: 0;
          }
        }
      }
    }
  }
}
</style>
