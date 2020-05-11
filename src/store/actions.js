export default {
  addCart(context,pyload){
    let oldcount=null
    for(let shop of context.state.shops){
      if(shop.iid===pyload.iid){
        oldcount=shop
      }
    }
    if(oldcount){
      context.commit('addshops',oldcount)
    }else{
      context.state.shops.push(pyload)
    }


  }
}
