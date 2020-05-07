module.exports={
    // configureWebpack:{
    //     resolve:{
    //         alias:{
    //             'assets':'@/assets',
    //             'common':'@/common',
    //             'components':'@/components',
    //             'network':'@/network',
    //             'views':'@/views',
    //         }
    //     }
    // },
  devServer:{
      disableHostCheck:true,
      open:true
  },
  // entry:'./src/main.js',
  // output:{
  //   path:path.resolve(__dirname,'./dist'),
  //   publiPath:'./dist',
  //   filename:'build.js'
  // }

}
module.exports = {
  publicPath: './'
}
