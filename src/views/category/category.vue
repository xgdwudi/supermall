<template>
  <div class="ull" ref="aaa">
    <ul>
      <li>这是数据1</li>
      <li>这是数据2</li>
      <li>这是数据3</li>
      <li>这是数据4</li>
      <li>这是数据5</li>
      <li>这是数据6</li>
      <li>这是数据7</li>
      <li>这是数据8</li>
      <li>这是数据9</li>
      <li>这是数据10</li>
      <li>这是数据11</li>
      <li>这是数据12</li>
      <li>这是数据13</li>
      <li>这是数据14</li>
      <li>这是数据15</li>
      <li>这是数据16</li>
      <li>这是数据17</li>
      <li>这是数据18</li>
      <li>这是数据19</li>
      <li>这是数据20</li>
      <li>这是数据21</li>
      <li>这是数据22</li>
      <li>这是数据23</li>
      <li>这是数据24</li>
      <li>这是数据25</li>
      <li>这是数据26</li>
      <li>这是数据27</li>
      <li>这是数据28</li>
      <li>这是数据29</li>
      <li>这是数据30</li>
      <li>这是数据31</li>
      <li>这是数据32</li>
      <li>这是数据33</li>
      <li>这是数据34</li>
      <li>这是数据35</li>
      <li>这是数据36</li>
      <li>这是数据37</li>
      <li>这是数据38</li>
      <li>这是数据39</li>
      <li>这是数据40</li>
      <li>这是数据41</li>
      <li>这是数据42</li>
      <li>这是数据43</li>
      <li>这是数据44</li>
      <li>这是数据45</li>
      <li>这是数据46</li>
      <li>这是数据47</li>
      <li>这是数据48</li>
      <li>这是数据49</li>
      <li>这是数据50</li>
      <li>这是数据51</li>
      <li>这是数据52</li>
      <li>这是数据53</li>
      <li>这是数据54</li>
      <li>这是数据55</li>
      <li>这是数据56</li>
      <li>这是数据57</li>
      <li>这是数据58</li>
      <li>这是数据59</li>
      <li>这是数据60</li>
      <li>这是数据61</li>
      <li>这是数据62</li>
      <li>这是数据63</li>
      <li>这是数据64</li>
      <li>这是数据65</li>
      <li>这是数据66</li>
      <li>这是数据67</li>
      <li>这是数据68</li>
      <li>这是数据69</li>
      <li>这是数据70</li>
      <li>这是数据71</li>
      <li>这是数据72</li>
      <li>这是数据73</li>
      <li>这是数据74</li>
      <li>这是数据75</li>
      <li>这是数据76</li>
      <li>这是数据77</li>
      <li>这是数据78</li>
      <li>这是数据79</li>
      <li>这是数据80</li>
      <li>这是数据81</li>
      <li>这是数据82</li>
      <li>这是数据83</li>
      <li>这是数据84</li>
      <li>这是数据85</li>
      <li>这是数据86</li>
      <li>这是数据87</li>
      <li>这是数据88</li>
      <li>这是数据89</li>
      <li>这是数据90</li>
      <li>这是数据91</li>
      <li>这是数据92</li>
      <li>这是数据93</li>
      <li>这是数据94</li>
      <li>这是数据95</li>
      <li>这是数据96</li>
      <li>这是数据97</li>
      <li>这是数据98</li>
      <li>这是数据99</li>
      <li>这是数据100</li>
    </ul>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
    export default {
        name: "category",
      data(){
          return{
            bscroll:null,
          }
      },
     mounted() {
       // this.bscroll=new BScroll('.ull',{})
       this.bscroll=new BScroll(this.$refs.aaa,{

       })

     }
    }
</script>

<style scoped>
.ull{
  height: 150px;
  background: #00FF00;
  overflow: hidden;

  /*overflow-y: scroll;*/
}
</style>
