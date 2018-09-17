import list from "./list"

var components = {
  list
}

var install = function(Vue){
  Object.keys(components).forEach((key)=>{
    Vue.component(components[key])
  })
}

if (typeof window !== 'undefined' && window.Vue) install(window.Vue);
export {
  list
}
export default {
  install,
  ...components
}