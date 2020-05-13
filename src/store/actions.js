export default {
  addCart(context,pyload){
    return new Promise((resolve, reject) => {
      let oldcount=null
      for(let shop of context.state.shops){
        if(shop.iid===pyload.iid){
          oldcount=shop
        }
      }
      if(oldcount){
        context.commit('addshops',oldcount)
        resolve('当前商品数量+1')
      }else{
        context.state.shops.push(pyload)
        resolve('已添加当前商品')
      }
    })


  }
}
