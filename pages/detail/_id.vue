<template>
  <div class="wrap-detail">
    <Header :isBack="true" />
    <div class="article-detail">
      <div class="title">
        {{list[0].title}}
      </div>
      <div class="desc">
        <span>创建日期：<i>{{$dayjs(list[0].createdAt).format('YYYY-MM-DD HH:mm')}}</i></span>
      </div>
      <div class="content" v-html="list[0].content">
      </div>
    </div>
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
      goBack() {
        this.$router.push('/home')
      }
  }
}
</script>

<style lang="scss" scoped>
.wrap-detail{
  padding: 0 0 20px;
  margin: 0 auto;
  min-height: 100vh;
  /* display: flex; */
  justify-content: center;
  align-items: center;
  /deep/ img{
    width: 100%;
  }
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
  /deep/ pre, .language-text{
    line-height: 1.4;
    padding: 1.25rem 1.5rem;
    margin: .85rem 0;
    background-color: #282c34;
    border-radius: 6px;
    overflow: auto;
    code{
      color: #fff;
      padding: 0;
      background-color: transparent;
      border-radius: 0;
    }
  }
.article-detail{
  max-width: 1200px;
  margin: 20px auto;
  background: #fff;
  box-shadow: 0 8px 16px 0 rgba(7,17,27,.05);
  border-radius: 12px;
  box-sizing: border-box;
  padding: 10px 36px 24px;
  position: relative;
  .title {
    display: block;
    font-weight: 700;
    font-size: 24px;
    color: #35495e;
    height: 40px;
    line-height: 40px;
    margin: 16px 0;
  }
  .desc{
    font-size: 12px;
    color: #9199a1;
    line-height: 24px;
    margin-bottom: 24px;
  }
  .content{
    /deep/ {
      h2{
        color: #35495e;
        font-size: 18px;
      }
    }
  }
}

// 详情页通用
p, /deep/ p{
  font-size: 16px;
  text-indent: 0;
  line-height: 32px;
  color: #1c1f21;
  overflow-x: auto;
  text-align: justify;
}
ul, ol, /deep/ ul, /deep/ ol{
  margin: 16px 0;
}
</style>
