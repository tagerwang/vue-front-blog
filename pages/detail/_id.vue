<template>
  <div class="container">
    <div>
      <div class="header">
        <div class="line1"></div>
        
      </div>
    </div>
    <el-table
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
          <router-link :to="'/article/edit/'+scope.row.articleId">
            <el-button type="primary" size="small" icon="el-icon-edit">
              查看
            </el-button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { fetchArticle } from '@/api/article'
export default {
  data(){

  },
  async asyncData(context){
    const {params} = context
    let data = {}
    await fetchArticle(params.id).then(response => {
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

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

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
</style>
