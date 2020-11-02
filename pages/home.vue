<template>
  <div class="container-home">
    <Header />
    <div class="banner">
      <!-- <div class="line1">热门文章</div>
      <hr> -->
      <img :src="require('@/assets/images/timg.jpg')" alt="">
    </div>
    <div class="list-data">
      <el-card class="box-card" v-for="(item, key) in list" :key="key" :body-style="{padding: 0}">
            <div slot="header" class="clearfix title">
              <nuxt-link :to="'/detail/'+item.articleId">
                <el-button class="goto-detail" type="text">{{item.title}}</el-button>
              </nuxt-link>
            </div>
          <div class="content">
            <div v-html="item.desc" class="detail"></div>
          </div>
          <div class="bottom clearfix">
            <div class="text item">
              <span>创建日期：</span>
              <span>{{ $dayjs(item.createdAt).format('YYYY-MM-DD HH:mm') }}</span>
            </div>
            <nuxt-link :to="'/detail/'+item.articleId">
              <el-button class="goto-detail" type="text">详情</el-button>
            </nuxt-link>
          </div>
      </el-card>
      <!-- <el-table
        :data="list"
        style="width: 100%">
        <el-table-column
          label="创建日期"
          width="180">
          <template slot-scope="scope">
            <span>{{ $dayjs(scope.row.createdAt).format('YYYY-MM-DD HH:mm') }}</span>
          </template>
        </el-table-column>
        <el-table-column
          prop="title"
          label="文章标题"
          width="180">
        </el-table-column>
        <el-table-column
          prop="desc"
          label="文章描述">
        </el-table-column>
        <el-table-column align="center" label="Actions" width="240">
          <template slot-scope="scope">
            <router-link :to="'/detail/'+scope.row.articleId">
              <el-button type="primary" size="small" icon="el-icon-edit">
                查看
              </el-button>
            </router-link>
          </template>
        </el-table-column>
      </el-table> -->
    </div>
    <div>
    </div>
  </div>
</template>

<script>
import { fetchArticle } from '@/api/article'
export default {
  data(){
    return {
    }
  },
  async asyncData(context){
    let data = {}
    await fetchArticle(0).then(response => {
        data.list = response.data
        data.total = response.data.length
      }).catch(err=>{
        console.warn('获取列表失败')
      })
    return data
  },
  created(){
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.container-home {
  padding: 0 12px 12px;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 100vh;
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  text-align: center;
  img{
    width: 100%;
  }
  .banner{
    margin-top: 16px;
  }
}

// .title {
//   font-family:
//     'Quicksand',
//     'Source Sans Pro',
//     -apple-system,
//     BlinkMacSystemFont,
//     'Segoe UI',
//     Roboto,
//     'Helvetica Neue',
//     Arial,
//     sans-serif;
//   display: block;
//   font-weight: 300;
//   font-size: 100px;
//   color: #35495e;
//   letter-spacing: 1px;
// }

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.list-data{
  a{
    display: block;
  }
}
.el-card{
  text-align: left;
  width: 100%;
  &.el-card{
    margin-top: 20px;
  }
  .title{
  }
  .content{
    padding: 20px;
    .detail{
      text-align: 40px;
    }
  }
  .bottom{
    padding: 0 20px;
    .goto-detail{
      float: right;
    }
  }
}
</style>
