import Toast from "./Toast";

const obj={


}
obj.install=function (Vue) {
  // console.log('这是一个demo')
  // 1，创建构造方法   2,拿到组件对象  并且将其挂载到一个元素    toast.$el 就是对应的div  创建全局组件
  const extend = Vue.extend(Toast);
  const toast = new extend()
  toast.$mount(document.createElement('div'));
  document.body.appendChild(toast.$el)
  Vue.prototype.$toast=toast
}

export default obj
