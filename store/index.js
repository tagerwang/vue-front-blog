export const strict = false
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