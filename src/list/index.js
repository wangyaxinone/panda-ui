import list from "./list.vue"

list.install = function(Vue){
  Vue.component(list.name,list)
}
export default list