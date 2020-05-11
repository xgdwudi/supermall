<template>
  <div class="cart-list">
   <scroll class="scroll">
<!--     <ul>-->
<!--       <li>zheshi1</li>-->
<!--       <li>zheshi2</li>-->
<!--       <li>zheshi3</li>-->
<!--       <li>zheshi4</li>-->
<!--       <li>zheshi5</li>-->
<!--       <li>zheshi6</li>-->
<!--       <li>zheshi7</li>-->
<!--       <li>zheshi8</li>-->
<!--       <li>zheshi9</li>-->
<!--       <li>zheshi10</li>-->
<!--       <li>zheshi11</li>-->
<!--       <li>zheshi12</li>-->
<!--       <li>zheshi13</li>-->
<!--       <li>zheshi14</li>-->
<!--       <li>zheshi15</li>-->
<!--       <li>zheshi16</li>-->
<!--       <li>zheshi17</li>-->
<!--       <li>zheshi18</li>-->
<!--       <li>zheshi19</li>-->
<!--       <li>zheshi20</li>-->
<!--       <li>zheshi21</li>-->
<!--       <li>zheshi22</li>-->
<!--       <li>zheshi23</li>-->
<!--       <li>zheshi24</li>-->
<!--       <li>zheshi25</li>-->
<!--       <li>zheshi26</li>-->
<!--       <li>zheshi27</li>-->
<!--       <li>zheshi28</li>-->
<!--       <li>zheshi29</li>-->
<!--       <li>zheshi30</li>-->
<!--       <li>zheshi31</li>-->
<!--       <li>zheshi32</li>-->
<!--       <li>zheshi33</li>-->
<!--       <li>zheshi34</li>-->
<!--       <li>zheshi35</li>-->
<!--       <li>zheshi36</li>-->
<!--       <li>zheshi37</li>-->
<!--       <li>zheshi38</li>-->
<!--       <li>zheshi39</li>-->
<!--       <li>zheshi40</li>-->
<!--       <li>zheshi41</li>-->
<!--       <li>zheshi42</li>-->
<!--       <li>zheshi43</li>-->
<!--       <li>zheshi44</li>-->
<!--       <li>zheshi45</li>-->
<!--       <li>zheshi46</li>-->
<!--       <li>zheshi47</li>-->
<!--       <li>zheshi48</li>-->
<!--       <li>zheshi49</li>-->
<!--       <li>zheshi50</li>-->
<!--       <li>zheshi51</li>-->
<!--       <li>zheshi52</li>-->
<!--       <li>zheshi53</li>-->
<!--       <li>zheshi54</li>-->
<!--       <li>zheshi55</li>-->
<!--       <li>zheshi56</li>-->
<!--       <li>zheshi57</li>-->
<!--       <li>zheshi58</li>-->
<!--       <li>zheshi59</li>-->
<!--       <li>zheshi60</li>-->
<!--       <li>zheshi61</li>-->
<!--       <li>zheshi62</li>-->
<!--       <li>zheshi63</li>-->
<!--       <li>zheshi64</li>-->
<!--       <li>zheshi65</li>-->
<!--       <li>zheshi66</li>-->
<!--       <li>zheshi67</li>-->
<!--       <li>zheshi68</li>-->
<!--       <li>zheshi69</li>-->
<!--       <li>zheshi70</li>-->
<!--       <li>zheshi71</li>-->
<!--       <li>zheshi72</li>-->
<!--       <li>zheshi73</li>-->
<!--       <li>zheshi74</li>-->
<!--       <li>zheshi75</li>-->
<!--       <li>zheshi76</li>-->
<!--       <li>zheshi77</li>-->
<!--       <li>zheshi78</li>-->
<!--       <li>zheshi79</li>-->
<!--       <li>zheshi80</li>-->
<!--       <li>zheshi81</li>-->
<!--       <li>zheshi82</li>-->
<!--       <li>zheshi83</li>-->
<!--       <li>zheshi84</li>-->
<!--       <li>zheshi85</li>-->
<!--       <li>zheshi86</li>-->
<!--       <li>zheshi87</li>-->
<!--       <li>zheshi88</li>-->
<!--       <li>zheshi89</li>-->
<!--       <li>zheshi90</li>-->
<!--       <li>zheshi91</li>-->
<!--       <li>zheshi92</li>-->
<!--       <li>zheshi93</li>-->
<!--       <li>zheshi94</li>-->
<!--       <li>zheshi95</li>-->
<!--       <li>zheshi96</li>-->
<!--       <li>zheshi97</li>-->
<!--       <li>zheshi98</li>-->
<!--       <li>zheshi99</li>-->
<!--       <li>zheshi100</li>-->
<!--     </ul>-->
     <ul>
       <li v-for="item in cartList">{{item}}</li>
     </ul>
   </scroll>
  </div>

</template>

<script>
  import scroll from "../../../components/common/scroll/scroll";
  import {mapGetters} from 'vuex'

  export default {
    name: "CartList",
    components: {
      scroll
    },
    computed: {
      ...mapGetters([
        'cartList'
      ])
    }
  }
</script>

<style scoped>
  .cart-list{
    height: 100vh;
  }
 .scroll{
   /*position: absolute;*/
   /*top: 0px;*/
   /*right: 0;*/
   /*left: 0;*/
   /*bottom: 49px;*/
   height: calc(100% - 44px - 49px);
   overflow: hidden;
 }
</style>
