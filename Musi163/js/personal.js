window.onscroll = function(){
    console.log('滚动');
    let domuser = document.querySelector('.User');
    console.log(domuser)
    console.log(domuser.getBoundingClientRect().y<parseInt( `-${domuser.clientHeight}`))
    if(domuser.getBoundingClientRect().y< parseInt( `-${domuser.clientHeight}`)){
        // alert('ol')
        document.querySelector('.usermin').setAttribute('style','display:block;');
    }else{
        document.querySelector('.usermin').setAttribute('style','display:none;');
    }
    let tabheater =document.querySelector('#tabheater').getBoundingClientRect().y;
    let domcreate = document.querySelector('#sscreate').getBoundingClientRect().y;
    let domss = document.querySelector('#song_sheet').getBoundingClientRect().y;
    let dompo = document.querySelector('#po').getBoundingClientRect().y;
    // console.log(`标签头:${tabheater}个人:${domcreate};收藏${domss};助手${dompo}`)
    if(tabheater<50&&domcreate<90){
        document.querySelector('#tabsinfo').setAttribute('style','position: fixed;top: 37px;left: 0;background: #FFF;z-index: 1000;padding:10px 4vw;width:94vw;')
    }else{
        document.querySelector('#tabsinfo').setAttribute('style','');
    }
    if(domss>50&&domcreate<50){
        console.log('我的歌单');
        document.querySelector('#tabcreate').setAttribute('class','tabs-nav active');
        document.querySelector('#tabsong_sheet').setAttribute('class','tabs-nav');
        document.querySelector('#tabpo').setAttribute('class','tabs-nav');
        // document.querySelector('#tabheater').setAttribute('style','position: fixed;top: 0px;left: 0;background: #FFF;z-index: 1000;padding:10px 40px;')
    }else if(dompo>50&& domss<50){
        // console.log('无')
        console.log('收藏歌单')
        document.querySelector('#tabcreate').setAttribute('class','tabs-nav ');
        document.querySelector('#tabsong_sheet').setAttribute('class','tabs-nav active');
        document.querySelector('#tabpo').setAttribute('class','tabs-nav ');
        // document.querySelector('#tabheater').setAttribute('style','position: fixed;top: 0px;left: 0;background: #FFF;z-index: 1000;padding:10px 40px;')
    }else if(domss<0 &&dompo<50){
        console.log('歌单助手')
        document.querySelector('#tabcreate').setAttribute('class','tabs-nav ');
        document.querySelector('#tabsong_sheet').setAttribute('class','tabs-nav ');
        document.querySelector('#tabpo').setAttribute('class','tabs-nav active');
        // document.querySelector('#tabheater').setAttribute('style','position: fixed;top: 0px;left: 0;background: #FFF;z-index: 1000;padding:10px 40px;')
    }else{
        // document.querySelector('#tabheater').setAttribute('style','');
    }
}





window.onload=function(){
    document.querySelector('#tabcreate').addEventListener('click',function(){
        window.scrollTo(0,document.querySelector('#sscreate').offsetTop-50);
        document.querySelector('#tabcreate').setAttribute('class','tabs-nav active');
        document.querySelector('#tabsong_sheet').setAttribute('class','tabs-nav');
        document.querySelector('#tabpo').setAttribute('class','tabs-nav');
    })
    document.querySelector('#tabsong_sheet').addEventListener('click',function(){
        window.scrollTo(0,document.querySelector('#song_sheet').offsetTop-50);
        document.querySelector('#tabcreate').setAttribute('class','tabs-nav ');
        document.querySelector('#tabsong_sheet').setAttribute('class','tabs-nav active');
        document.querySelector('#tabpo').setAttribute('class','tabs-nav ');
   })
    document.querySelector('#tabpo').addEventListener('click',function(){
        window.scrollTo(0,document.querySelector('#po').offsetTop-45);
        document.querySelector('#tabcreate').setAttribute('class','tabs-nav ');
        document.querySelector('#tabsong_sheet').setAttribute('class','tabs-nav ');
        document.querySelector('#tabpo').setAttribute('class','tabs-nav active');
    })

   
}
let tabaddchild=function(th){
    console.log(th)
    th.innerHTML+=`<div class="song_sheet">
    <div class="ssimg music"><img src="./img/musicdefault.jpg" alt=""></div>
    <div class="ssinfo">
        <h4 class="ssname">点我可以添加新歌单,快点我.</h4>
        <p class="sscount"><span>0</span>&nbsp;首</p>
    </div>
</div>`
}







