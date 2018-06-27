<?php
/*
    include_once('ChinaIP/class.chinaip.php');
    $chinaip = new chinaip();
    if ($chinaip->inChina()) {
        echo $chinaip->getIp().'<br>';
        die('此网站不对中国大陆地区提供服务。');
    }
*/
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title>BitCV - Blockchain Digital Asset Management Service Engine</title>
<link rel="icon" type="image/png" href="favicon.png">
<link type="text/css" rel="stylesheet" href="./css/fontset.css">
<link href="./css/fonts.css" rel="stylesheet">
<link rel="stylesheet" href="./css/bootstrap-dark.css">
<link rel="stylesheet" href="./css/theme-dark.css">
<link rel="stylesheet" href="./fonts/font-awesome/css/font-awesome.min.css">
<script src="./js/wow.js"></script>
<style type="text/css">
    .portfolio-title2 {
        color: #fff;
        margin: 10px 0;
        font-weight: 700;
        display: block;
        position: relative;
    }
    .home-buttons a {
        margin-bottom: 26px;
        width: 300px;
    }
    .home-buttons a:hover {
        background: #000;
        color: #c2a362;
    }
    .home-buttons a:visited {
        background: #c2a362;
        color: #fff;
    }
    .lilang {
        width: 80px;
    }
    .lilang div {
        position:absolute;
        top:20px;
        width: 100%;
        text-align: center;
    }
    .lilang div a {
        color:#fff;
        cursor:pointer;
        padding:0 15px;
    }
    .btn-default:link {
        color: #c2a362;
        border-color:#c2a362;
    }
    .btn-default:visited {
        border-color:#c2a362;
    }
    .btn-default:hover {
        color: #fff;
        background-color: #c2a362;
        border-color:#c2a362;
    }
    .btn-default:focus {
        border-color: #c2a362;
    }
    
    #download {
        padding: 40px 0 50px;
    }
    #download .download-img {
        display: block;
        margin: 50px auto 70px;
        width: 80%;
    }
    #download .download-img img {
        width: 100%;
    }
    @media (max-width: 1199px) and (min-width: 480px) {
        .lilang {
            width: 100%;
        }
    }
</style>
</head>

<body data-spy="scroll" data-target=".navbar" data-offset="50" class="dark-theme">
<div id="app">

    <nav class="navbar navbar-fixed-top shadow">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#"><img src="./img/logo-white.png" alt="logo"></a>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
                <ul class="nav navbar-nav">
                    <li class="active"><a href="#home">{{project.menu.home[lang]}}</a></li>
                    <li><a href="#services">{{project.menu.services[lang]}}</a></li>
                    <li><a href="#solution">{{project.menu.solution[lang]}}</a></li>
                    <li><a href="#team">{{project.menu.team[lang]}}</a></li>
                    <li><a href="#timeline">{{project.menu.timeline[lang]}}</a></li>
                    <li><a href="#clients">{{project.menu.clients[lang]}}</a></li>
                    <li><a href="#portfolio">{{project.menu.portfolio[lang]}}</a></li>
                    <li><a href="#media">{{project.menu.media[lang]}}</a></li>
                    <li><a href="#contact">{{project.menu.contact[lang]}}</a></li>
                        
                    <li class="lilang">
                        <a></a>
                        <div>
                            <a v-if="lang!='cn'" @click="lang='cn'">中文</a>
                            <a v-if="lang!='en'" @click="lang='en'">English</a>
                            <a v-if="lang!='jp'" @click="lang='jp'">日本語</a>
                            <a v-if="lang!='ko'" @click="lang='ko'">한국어</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <section class="home home-isometric section" id="home">
        <div class="home-isometric-wrapper">
            <img class="wow home-isometric-1 fadeInDown" src="./img/layer-01-5.jpg" data-wow-delay="0.1s" alt="image slide" style="visibility: visible; animation-delay: 0.1s; animation-name: fadeInDown;">
            <!--img class="layer fadeInUp wow home-isometric-2" src="./img/layer-01-2.png" data-wow-delay="0.3s" alt="image slide" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;">
            <img class="layer fadeInLeft wow home-isometric-3" src="./img/layer-01-3.png" data-wow-delay="0.5s" alt="image slide" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInLeft;">
            <img class="layer fadeInUp wow home-isometric-4" src="./img/layer-01-4.png" data-wow-delay="0.7s" alt="image slide" style="visibility: visible; animation-delay: 0.7s; animation-name: fadeInUp;"-->
        </div>
        <div class="home-slider text-center swiper-container-horizontal">
            <div class="swiper-wrapper">
                <div class="swiper-slide swiper-slide-active" style="width: 1253px; margin-top: 100px;">
                    <h2 class="home-slider-title-main" style="max-width:100%" v-html="project.name[lang]"></h2>
                    <!--div class="home-slider-title-small">BitCV</div-->
                </div>
            </div>

            <!--div class="home-pagination swiper-pagination-clickable swiper-pagination-bullets"><span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span><span class="swiper-pagination-bullet"></span></div>
            <div class="home-slider-next right-arrow-negative">
                <span class="ti-arrow-right"></span>
            </div>

            <div class="home-slider-prev left-arrow-negative swiper-button-disabled">
                <span class="ti-arrow-left"></span>
            </div-->
        </div>
        <div class="home-buttons text-center">
            <a target="_blank" :href="project.whitepaper.doc[lang]" class="btn btn-margin btn-lg  btn-primary">{{project.whitepaper.btn[lang]}}</a>
            <a target="_blank" :href="project.ppt.doc[lang]" class="btn btn-margin btn-lg  btn-primary">{{project.ppt.btn[lang]}}</a>
        </div>
    </section>
    
    <!-- app download -->
    <section id="download" style="background: #000;">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h2 class="text-center">{{ download.name[lang] }}</h2>
                    <a class="download-img" href="https://bitcv.app/"><img src="img/app_download.png" alt=""></a>
                </div>
            </div>
        </div>
    </section>
    <section style="min-height: 0px;"></section>

    <section id="testimonials" class="testimonials section" style="background: #262626;">
        <div class="container">
            <div class="row">
                <div class="col-md-12 testimonials-introduction">
                    <h2 class="text-center">{{ news.bigtitle[lang] }}</h2>
                    <!--<p class="text-center inverse">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>-->
                </div>

                <div class="testimonials-slider text-center">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(label,index ) in news.list">
                            <div style="max-width: 1000px;" class="testimonials-container shadow">
                                <!--<img class="wow fadeInUp" src="img/user.png" alt="user avatar">-->
                                <h3 style="color: #c2a362;font-size: 24px;" class="wow fadeInUp" data-wow-delay=".4s">{{ label.mediumtitle[lang] }}
                                    <a :href="label.link[lang]" target="_blank" style="text-decoration:underline;color: #c2a362;"><span style="color: #c2a362;font-size:14px;text-transform:lowercase">{{ label.link[lang] }}</span></a>
                                </h3>
                                <p style="text-align: left;font-size: 16px;line-height: 40px;" class="wow fadeInUp" data-wow-delay=".6s" v-html="label.content[lang]">
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="testimonials-pagination"></div>
                    <div class="testimonials-slider-next right-arrow-negative">
                        <span class="ti-arrow-right"></span>
                    </div>

                    <div class="testimonials-slider-prev left-arrow-negative">
                        <span class="ti-arrow-left"></span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section style="min-height: 0px;"></section>

    <section id="services" class="services section">
        <div class="container">
            <div class="row">
                <div class="col-md-12 services-introduction">
                    <h2 class="text-center">{{product.name[lang]}}</h2>
                </div>
                <!--<img src="img/new.svg" style="max-width: 50px;"/>-->
                <div v-for="(p, index) in product.list" class="col-md-6 wow fadeInLeft" style="visibility: visible; animation-name: fadeInLeft;">
                    <div class="services-box text-center shadow" :style="index < 2 ? 'background-image:url(img/new.svg);background-size:50px 50px;background-repeat: no-repeat;background-position: 100% 0%;' : ''" >
                        <span :class="p.icon"></span>
                        <h4>{{p.title[lang]}}</h4>
                        <p class="fixed-height">{{p.content[lang]}}
                        </p>
                        <a v-if="p.link" :href="p.address" target="_blank" class="btn btn-margin btn-default btn-lg">{{ p.link[lang] }}</a>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <section class="about section" id="solution">
        <div class="col-md-12 about-introduction">
            <h2 class="text-center">{{arch.name[lang]}}</h2>
        </div>

        <div class="container overflow-hidden">
            <div class="row">
                <div class="about-slider swiper-container-horizontal">
                    <div class="swiper-wrapper">

                        <div v-for="a in arch.list" class="swiper-slide swiper-slide-active" style="width: 1170px;">
                            <div class="about-slider-half">
                                <div class="about-image">
                                    <img style="z-index: 1; visibility: visible; animation-delay: 0.4s; animation-name: fadeInDown;" :src="a.img" alt="mockup" class="wow fadeInDown" data-wow-delay=".4s">

                                    <!--img style="z-index: 2; visibility: visible; animation-delay: 0.8s; animation-name: fadeInRight;" class="wow fadeInRight about-image-layer" src="./img/layer-2.png" data-wow-delay=".8s" alt="mockup layer"-->
                                </div>
                            </div>

                            <div class="about-slider-half about-slider-half-padding">
                                <h3 class="wow fadeInRight" style="visibility: visible; animation-name: fadeInRight;">{{a.title[lang]}}</h3>
                                <p class="wow fadeInRight" data-wow-delay=".4s" style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInRight;" v-html="a.content[lang]">
                                    
                                </p>
                            </div>
                        </div>

                    </div>

                    <div class="about-pagination text-center swiper-pagination-clickable swiper-pagination-bullets"><span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span><span class="swiper-pagination-bullet"></span></div>
                    <div class="about-slider-next right-arrow-negative">
                        <span class="ti-arrow-right"></span>
                    </div>

                    <div class="about-slider-prev left-arrow-negative swiper-button-disabled">
                        <span class="ti-arrow-left"></span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="team" class="team section">
        <div class="container">
            <div class="row">
                <div class="col-md-12 team-introduction">
                    <h2 class="text-center">{{team.name[lang]}}</h2>
                </div>
                <ul>
                    <li v-for="(u,index) in team.list" class="col-md-3 col-xs-6">
                        <a href="#" data-toggle="modal" :data-target="'#team-member-0'+index" class="team-member wow fadeInUp" data-wow-delay=".2s" style="visibility: hidden; animation-delay: 0.2s; animation-name: none;">
                            <span class="team-member-photo">
                            <img :src="'./img/'+u.img" alt="team member">
                        </span>

                            <span class="team-member-name h4">{{u.name[lang]}}</span>
                            <span class="team-member-role">Co-founder</span>
                        </a>
                    </li>

                </ul>

                <!-- TEAM MODAL -->
                <div v-for="(u,index) in team.list" :id="'team-member-0'+index" class="modal fade" role="dialog">
                    <div class="modal-dialog modal-lg">
                        <!-- Modal content-->
                        <div class="modal-content shadow">
                            <a class="close" data-dismiss="modal"><span class="ti-close"></span></a>
                            <div class="modal-body modal-lg">
                                <div class="team-member-detail">
                                    <div class="col-md-12">
                                        <div class="team-member-description">
                                            <h4 class="">Experiences</h4>
                                            <ul>
                                                <li class="">
                                                <span class="team-member-description-info">
                                                    <span class="team-member-description-details">
                                                    {{u.intro[lang]}}
                                                    </span>
                                                </span>
                                                </li>                                            
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- / TEAM MODAL -->
            </div>
        </div>
    </section>

    <section id="timeline" class="timeline section">
        <div class="container">
            <div class="row">
                <div class="col-md-12 timeline-introduction">
                    <h2 class="text-center">{{roadmap.name[lang]}}</h2>
                </div>

                <div class="col-md-12">
                    <ul class="timeline-list">

                        <li v-for="(r,index) in roadmap.list" :class="index%2==0 ? 'timeline-inverted' : ''">
                            <div class="timeline-badge wow pulse" data-wow-delay=".3s" data-wow-iteration="2" style="visibility: hidden; animation-delay: 0.3s; animation-iteration-count: 2; animation-name: none;">
                                <span class="ti-time"></span>
                            </div>
                            <div class="timeline-item shadow wow fadeInLeft" style="visibility: hidden; animation-name: none;">
                                <span class="timeline-date h4">{{r.date[lang]}}</span>
                                <h4 class="timeline-title" style="line-height:18px;" v-html="r.content[lang]"></h4>

                                <!--div class="timeline-content">
                                    <p>Initial planning of the project starts</p>
                                </div-->
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section class="clients section" id="clients">
        <div class="container overflow-hidden">
            <div class="row">
                <div class="col-md-12 clients-introduction">
                    <h2 class="text-center">{{consultants.name[lang]}}</h2>
                </div>

                <div class="clients-slider swiper-container-horizontal swiper-container-multirow">
                    <div class="swiper-wrapper" style="width: 1755px;">
                        
                        <div v-for="u in consultants.list" class="swiper-slide shadow wow bounceIn swiper-slide-active" data-wow-delay=".1s" data-swiper-column="0" data-swiper-row="0" style="order: 0; width: 262.5px; visibility: hidden; animation-delay: 0.1s; animation-name: none; margin-right: 30px;position:relative;overflow:hidden;">
                            <img :src="u.img" alt="brand logo">
                            <li class="filtr-item" data-category="1, 3" style="top:0;width:100%;height:100%;opacity: 1; transform: scale(1) translate3d(0px, 0px, 0px); backface-visibility: hidden; perspective: 1000px; transform-style: preserve-3d; position: absolute; transition: all 0.5s ease-out 0ms; pointer-events: auto;">
                            <a href="" class="portfolio-thumbnail" :style="'background-image: url('+u.img+')'" data-toggle="modal" data-target="#portfolio-01">
                                <span class="portfolio-description text-center">  
                                <span class="text-center portfolio-title2">{{u.name[lang]}}</span>
                                <span>{{u.intro[lang]}}</span>
                                </span>
                            </a>
                            </li>
                        </div>

                    </div>
                    <div class="clients-pagination text-center swiper-pagination-clickable swiper-pagination-bullets"><span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span></div>
                    <div class="clients-slider-next right-arrow-negative">
                        <span class="ti-arrow-right"></span>
                    </div>

                    <div class="clients-slider-prev left-arrow-negative swiper-button-disabled">
                        <span class="ti-arrow-left"></span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="portfolio" class="portfolio section">
        <div class="container">
            <div class="row">
                <div class="col-md-12 portfolio-introduction">
                    <h2 class="text-center">{{institutions.name[lang]}}</h2>
                </div>
                <!--ul class="simplefilter portfolio-filter-label">
                    <li class="active wow fadeInDown" data-wow-delay=".2s" data-filter="all" style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInDown;">All</li>
                    <li class="wow fadeInDown" data-wow-delay=".3s" data-filter="1" style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInDown;">option filter 1</li>
                    <li class="wow fadeInDown" data-wow-delay=".4s" data-filter="2" style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInDown;">option filter 2</li>
                    <li class="wow fadeInDown" data-wow-delay=".5s" data-filter="3" style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInDown;">option filter 3</li>
                    <li class="wow fadeInDown" data-wow-delay=".6s" data-filter="4" style="visibility: visible; animation-delay: 0.6s; animation-name: fadeInDown;">option filter 4</li>
                    <li class="wow fadeInDown" data-wow-delay=".7s" data-filter="5" style="visibility: visible; animation-delay: 0.7s; animation-name: fadeInDown;">option filter 5</li>
                </ul-->
                <div class="filtr-container" style="padding: 0px; position: relative; height: 520px;">
                    <ul class="portfolio-list">

                        <li v-for="img in institutions.list" class="filtr-item" data-category="4 , 2" style="opacity: 1; transform: scale(1) translate3d(390px, 0px, 0px); backface-visibility: hidden; perspective: 1000px; transform-style: preserve-3d; position: absolute; transition: all 0.5s ease-out 0ms; pointer-events: auto;">
                            <a href="" class="portfolio-thumbnail" :style="'background-image: url('+img+')'" data-toggle="modal" data-target="#portfolio-01">
                                
                            </a>
                        </li>

                    </ul>
                </div>
                
            </div>
        </div>
    </section>

    <section class="clients section" id="media">
        <div class="container overflow-hidden">
            <div class="row">
                <div class="col-md-12 clients-introduction">
                    <h2 class="text-center">{{media.name[lang]}}</h2>
                </div>

                <div class="clients-slider swiper-container-horizontal swiper-container-multirow">
                    <div class="swiper-wrapper" style="width: 1755px;">
                        
                        <div v-for="u in media.list" class="swiper-slide shadow wow bounceIn swiper-slide-active" data-wow-delay=".1s" data-swiper-column="0" data-swiper-row="0" style="order: 0; width: 262.5px; visibility: hidden; animation-delay: 0.1s; animation-name: none; margin-right: 30px;position:relative;overflow:hidden;">
                            <img :src="u.img" alt="brand logo">
                            <li class="filtr-item" data-category="1, 3" style="top:0;width:100%;height:100%;opacity: 1; transform: scale(1) translate3d(0px, 0px, 0px); backface-visibility: hidden; perspective: 1000px; transform-style: preserve-3d; position: absolute; transition: all 0.5s ease-out 0ms; pointer-events: auto;">
                            <a :href="u.url" target="_blank" class="portfolio-thumbnail" :style="'background-image: url('+u.img+')'">
                                <span class="portfolio-description text-center">  
                                <span class="text-center portfolio-title2">{{u.name[lang]}}</span>
                                <span>{{u.intro[lang]}}</span>
                                <span><br>{{lang=='en'?'>>Detail':'>>详情'}}</span>
                                </span>
                            </a>
                            </li>
                        </div>

                    </div>
                    <div class="clients-pagination text-center swiper-pagination-clickable swiper-pagination-bullets"><span class="swiper-pagination-bullet swiper-pagination-bullet-active"></span><span class="swiper-pagination-bullet"></span><span class="swiper-pagination-bullet"></span></div>
                    <div class="clients-slider-next right-arrow-negative">
                        <span class="ti-arrow-right"></span>
                    </div>

                    <div class="clients-slider-prev left-arrow-negative swiper-button-disabled">
                        <span class="ti-arrow-left"></span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="contact" class="section section-min">
        <div class="social">
            <ul>
                <li><a href="https://github.com/bitcv" target="_blank"><span class="fa fa-github"></span></a></li>
                <li><a href="https://www.facebook.com/BitCapitalVendor" target="_blank"><span class="ti-facebook"></span></a></li>
                <li><a href="https://twitter.com/BCVofficial" target="_blank"><span class="ti-twitter-alt"></span></a></li>
                <li><a href="https://t.me/bcvtoken" target="_blank"><span class="fa fa-telegram"></span></a></li>
                <li><a href="https://weibo.com/bitcv" target="_blank"><span class="fa fa-weibo"></span></a></li>
            </ul>
        </div>
    </section>

    <div class="section section-min">
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 text-center">
                        <img style="display: block; width: 200px; margin: 0 auto 20px;" src="./img/wechat-qrC.jpg" alt="wechat-qrcode">
                        <p>{{ footer.wechat[lang] }}</p>
                        <img class="footer-logo" src="./img/logo-white.png" alt="footer-logo">
                        <p>Singapore BitCV Foundation LTD. No: 201803900M</p>
                        <p>Address: 100 TRAS STREET #16-01 100 AM SINGAPORE (079027)</p>
                        <p>&nbsp;</p>
                        <p>Copyright © 2018 BitCV. All Rights Reserved</p>
                        <p v-if="lang=='cn'">此網站不針對中國大陸地區</p>
                    </div>
                </div>
            </div>
        </footer>
    </div>

</div>

    <script src="./js/vue.js"></script>
    <script src="./js/data.js?v=20180627"></script>

    <script data-cfasync="false" src="./js/email-decode.min.js"></script>
    <script src="./js/jquery-1.11.2.min.js"></script>
    <script src="./js/swiper.min.js"></script>
    <script src="./js/bootstrap.min.js"></script>
    <script src="./js/jquery.countTo.js"></script>
    <script src="./js/jquery.inview.js"></script>
    <script src="./js/jquery.filterizr.js"></script>
    <script src="./js/controls.js"></script>
    <script src="./js/main.js"></script>
    <script type="text/javascript">
// Portfolio filters  
$(document).ready(function() {
//Initialize filterizr with default options
$('.filtr-container').filterizr();
});
</script>


</body></html>

