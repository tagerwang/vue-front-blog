import { fetchArticle } from '@/api/article'
export const state = () => ({
  list: [],
  total: 0
})
export const mutations = {
  updateValue(state, obj){
    for(var key in obj) {
      if(obj.hasOwnProperty(key)){
        state[key] = obj[key]
      }
    }
  }
}
export const actions = {
  async getList ({ commit, state }, value) {
    await fetchArticle(value).then(response => {
        commit('updateValue', { 
          list: response.data, 
          total: response.data.length
        })
      }).catch(err=>{
        console.warn('获取列表失败')
      })
  }
}