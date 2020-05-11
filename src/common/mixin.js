import DetailbuttomBar from "../views/detail/childCompents/DetailbuttomBar";

export const Backtopadd={
  data(){
    return{
      isshow:false
    }
  },
  components:{
    DetailbuttomBar
  },
  methods:{
    backtop(){
      this.$refs.scroll.scrollTo1(0,0)
    },
    demo(position){
      this.isshow=position.y<-1000
    }
  },
}
