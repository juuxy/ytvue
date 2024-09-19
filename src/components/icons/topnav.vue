<template>
    <div id="navBox" class="header-nav menu" data-type="index">
        <div class="container nav-content">
           
            <!-- <div class="lang">
                <a href="javascript:;" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                    <i class="fa fa-language"></i> 简体中文                    <i class="fa fa-angle-down"></i>
                </a>
                <ul class="dropdown-menu" style="width: 90px;min-width: 90px">
                    <li class="active">
                        <a href="https://www.ynhrs.com/ldcms/?lg=zh-cn">简体中文</a>
                    </li>
                    <li>
                        <a href="https://www.ynhrs.com/ldcms/?lg=en">English</a>
                    </li>
               </ul>
            </div> -->


            <!-- <div class="sbtn"><i class="fa fa-search"></i></div> -->

            <ul class="navbar">
                <li><a href="https://www.ynhrs.com/">首页</a>
                </li>
                                <li class="">
                    <a href="https://www.ynhrs.com/ldcms/lianxiwomen">关于云投人力</a>
                    <ul>
                                                <li><a href="https://www.ynhrs.com/ldcms/lianxiwomen">企业介绍</a></li>
                                                <li><a href="https://www.ynhrs.com/ldcms/dangjianyinling.html">党建引领</a></li>
                                                <li><a href="https://www.ynhrs.com/ldcms/zhigongzhijia.html">职工之家</a></li>
                                            </ul>
                </li>
                                <li class="">
                    <a href="https://www.ynhrs.com/ldcms/zaixianliuyan.html">公告</a>
                    <ul>
                                            </ul>
                </li>
                                <li class="">
                    <a href="https://www.ynhrs.com/ldcms/xinwenzhongxin.html">人力资源产业园服务</a>
                    <ul>
                                                <li><a href="https://www.ynhrs.com/ldcms/gongsixinwen.html">园区概况</a></li>
                                                <li><a href="https://www.ynhrs.com/ldcms/hangyezixun.html">招商</a></li>
                                                <li><a href="https://www.ynhrs.com/ldcms/shengtaihuoban.html">生态伙伴</a></li>
                                                <li><a href="https://www.ynhrs.com/ldcms/yuanqudongtai.html">园区动态</a></li>
                                                <li><a href="https://www.ynhrs.com/ldcms/lianxiwomen">建言献策</a></li>
                                            </ul>
                </li>
                                <li class="">
                    <a href="https://www.ynhrs.com/ldcms/chanpinzhongxin.html">云才出山</a>
                    <ul>
                                                <li><a href="https://www.ynhrs.com/ldcms/chanpinxilie1.html">人才派遣</a></li>
                                                <li><a href="https://www.ynhrs.com/ldcms/chanpinxilie2.html">外包服务</a></li>
                                                <li><a href="https://www.ynhrs.com/ldcms/guojirencai.html">国际人才</a></li>
                                                <li><a href="https://www.ynhrs.com/ldcms/renshidaili.html">人事代理</a></li>
                                                <li><a href="https://www.ynhrs.com/ldcms/zhaopinfuwu.html">招聘服务</a></li>
                                                <li><a href="https://www.ynhrs.com/ldcms/linggongshichang.html">零工市场</a></li>
                                                <li><a href="https://www.ynhrs.com/ldcms/kaoshifuwu.html">考试服务</a></li>
                                                <li><a href="https://www.ynhrs.com/ldcms/peixunfuwu.html">培训服务</a></li>
                                                <li><a href="https://www.ynhrs.com/ldcms/renshidangan.html">人事档案</a></li>
                                                <li><a href="https://www.ynhrs.com/ldcms/jinengrending.html">技能认定</a></li>
                                            </ul>
                </li>
                                <li class="">
                    <a href="https://www.ynhrs.com/ldcms/anlizhanshi.html">云品出滇</a>
                    <ul>
                                                <li><a href="https://www.ynhrs.com/ldcms/huacesheji.html">直播云南</a></li>
                                                <li><a href="https://www.ynhrs.com/ldcms/pinpaisheji.html">文旅介绍</a></li>
                                                <li><a href="https://www.ynhrs.com/ldcms/feiyichuancheng.html">非遗传承</a></li>
                                            </ul>
                </li>
                                <li class="">
                    <a href="https://www.ynhrs.com/ldcms/lianxiwomen.html">联系我们</a>
                    <ul>
                                            </ul>
                </li>
                                <li class="">
                    <a href="https://www.ynhrs.com/ldcms/fuwutuandui.html">服务团队</a>
                </li>
                   
                  <li class="login">
                    <a>注册/登陆</a>
                    <ul>
                         <li><RouterLink to="/Register" >用户注册</RouterLink></li>
                         <li><RouterLink to="/login" >用户登陆</RouterLink></li>
                     </ul>
                    
                </li>
            
            </ul>
        </div>
    </div>
    <!-- <div class="searchBox">
        <div class="search-pup">
            <form method="get" name="searchform" class="dropdown search-form" action="/ldcms/search.html">
                <input class="search-input" name="search" style="color: #333" placeholder="请输入关键词" type="text">
                <button><i class="fa fa-search"></i></button>
            </form>
        </div>
    </div> -->
    <div class="moble">
        <a class="moble-bars" id="btn-bars"><i class="fa fa-bars nav-btn"></i></a><nav id="nav" class="inner" style="display: none;"><ul class="navbar">
            <li class="active"><a href="/src/components/Container.vue">首页</a>
                </li>
                                <li class="">
                    <a href="https://www.ynhrs.com/ldcms/lianxiwomen">关于云投人力</a>
                    <ul>
                         <li><a href="https://www.ynhrs.com/ldcms/lianxiwomen">企业介绍</a></li>
                         <li><a href="https://www.ynhrs.com/ldcms/dangjianyinling.html">党建引领</a></li>
                         <li><a href="https://www.ynhrs.com/ldcms/zhigongzhijia.html">职工之家</a></li>
                    </ul>
                </li>
                                <li class="">
                    <a href="https://www.ynhrs.com/ldcms/zaixianliuyan.html">公告</a>
                    <ul>
                                            </ul>
                </li>
                                <li class="">
                    <a href="https://www.ynhrs.com/ldcms/xinwenzhongxin.html">人力资源产业园服务</a>
                    <ul>
                         <li><a href="https://www.ynhrs.com/ldcms/gongsixinwen.html">园区概况</a></li>
                         <li><a href="https://www.ynhrs.com/ldcms/hangyezixun.html">招商</a></li>
                         <li><a href="https://www.ynhrs.com/ldcms/shengtaihuoban.html">生态伙伴</a></li>
                         <li><a href="https://www.ynhrs.com/ldcms/yuanqudongtai.html">园区动态</a></li>
                         <li><a href="https://www.ynhrs.com/ldcms/lianxiwomen">建言献策</a></li>
                    </ul>
                </li>
                                <li class="">
                    <a href="https://www.ynhrs.com/ldcms/chanpinzhongxin.html">云才出山</a>
                    <ul>
                         <li><a href="https://www.ynhrs.com/ldcms/chanpinxilie1.html">人才派遣</a></li>
                         <li><a href="https://www.ynhrs.com/ldcms/chanpinxilie2.html">外包服务</a></li>
                         <li><a href="https://www.ynhrs.com/ldcms/guojirencai.html">国际人才</a></li>
                         <li><a href="https://www.ynhrs.com/ldcms/renshidaili.html">人事代理</a></li>
                         <li><a href="https://www.ynhrs.com/ldcms/zhaopinfuwu.html">招聘服务</a></li>
                         <li><a href="https://www.ynhrs.com/ldcms/linggongshichang.html">零工市场</a></li>
                         <li><a href="https://www.ynhrs.com/ldcms/kaoshifuwu.html">考试服务</a></li>
                         <li><a href="https://www.ynhrs.com/ldcms/peixunfuwu.html">培训服务</a></li>
                         <li><a href="https://www.ynhrs.com/ldcms/renshidangan.html">人事档案</a></li>
                         <li><a href="https://www.ynhrs.com/ldcms/jinengrending.html">技能认定</a></li>
                    </ul>
                </li>
                                <li class="">
                    <a href="https://www.ynhrs.com/ldcms/anlizhanshi.html">云品出滇</a>
                    <ul>
                         <li><a href="https://www.ynhrs.com/ldcms/huacesheji.html">直播云南</a></li>
                         <li><a href="https://www.ynhrs.com/ldcms/pinpaisheji.html">文旅介绍</a></li>
                         <li><a href="https://www.ynhrs.com/ldcms/feiyichuancheng.html">非遗传承</a></li>
                     </ul>
                </li>
                                <li class="">
                    <a href="https://www.ynhrs.com/ldcms/lianxiwomen.html">联系我们</a>
                    
                </li>
                                <li class="">
                    <a href="https://www.ynhrs.com/ldcms/fuwutuandui.html">服务团队</a>
                    
                </li>
                <li class="">
                    <a><router-link to="/login">注册/登陆</router-link></a>
                    
                </li>

            </ul>
        </nav>
      
    </div>
        


</template>
<style>
.navbar {  
    list-style-type: none;  
    height: 100%;
    padding: 0;  
    overflow: hidden;  
    background-color: #d8515100;  
    color: #333;
    margin-right: 2vw;
}  
  
.navbar li {  
    float: left;  
}  
  
.navbar li a {  
    display: block;  
    color: #333;  
    text-align: center;  
    padding: 14px 16px;  
    text-decoration: none;  
}  
  
/* 当鼠标悬停在链接上时改变背景颜色 */  
.navbar li a:hover {  
    background-color: #ddd;  
    color: black;  
}  
  
/* 激活/当前链接的样式 */  
.navbar li.active a {  
}  
  
/* 下拉菜单容器（隐藏默认） */  
.navbar li ul {  
    display:none;  
    position: absolute;  
    background-color: #f9f9f9;  
    width:15vh; 
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);  
    z-index: 1;  
    list-style-type: none; 
    list-style: none;
}  
  
/* 下拉菜单链接 */  
.navbar li ul li a {  
    color: black;  
    padding: 12px 0px;  
    text-decoration: none;  
    display: block;  
    text-align: left;  
}  
  
/* 鼠标悬停在下拉菜单链接上 */  
.navbar li ul li a:hover {  
    background-color: #f1f1f1;  
}  
  
/* 显示下拉菜单 */  
.navbar li:hover ul {  
    display: block;  
}

</style>
