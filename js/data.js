var app = new Vue({

    el: '#app',

    data: {

        lang: 'en',

        project: {
        	menu: {
                home:{ cn:'首頁', en:'Home', jp:'ホームページ', ko:'홈' },  
    		    services:{ cn:'產品', en:'Product', jp:'製品', ko:'제품' },
    		    solution:{ cn:'架構', en:'Architecture', jp:'建築', ko:'건축' },
    		    timeline:{ cn:'里程碑', en:'Roadmap', jp:'マイルストーン', ko:'이정표' },
    		    team:{ cn:'團隊', en:'Team', jp:'チーム', ko:'팀' },
    		    clients:{ cn:'顧問', en:'Consultants', jp:'コンサルタント', ko:'컨설턴트' },
    		    portfolio:{ cn:'機構', en:'Institutions', jp:'機関', ko:'기관' },
    		    media:{ cn:'媒体', en:'Media', jp:'メディア', ko:'미디어' },
    		    contact:{ cn:'聯繫', en:'Contact', jp:'連絡先', ko:'연락처' }
    	    },
            name: { en:'Blockchain Digital Asset <br>Management Service Engine', cn:'區塊鏈數字資產管理服務引擎', jp:'ブロックチェーンデジタル<br>資産管理サービスエンジン', ko:'블록체인디지털자산관리서비스엔진' },
            whitepaper: {
                btn: { en:'Download White Paper', cn:'下載白皮書', jp:'白書のダウンロード', ko:'백서 다운로드' },
                doc: { en:'doc/bitcv_whitepaper_en.pdf', cn:'doc/bitcv_whitepaper_tr.pdf', jp:'doc/bitcv_whitepaper_jp.pdf', ko:'doc/bitcv_whitepaper_ko.pdf' }
            },
            ppt: {
                btn: { en:'Download Project Presentation', cn:'下載PPT', jp:'PPTをダウンロード', ko:'PPT 다운로드' },
                doc: { en:'doc/bitcv_project_en.pdf', cn:'doc/bitcv_project_tr.pdf', jp:'doc/bitcv_project_jp.pdf', ko:'doc/bitcv_project_ko.pdf' }
            }
        },

        news: {
            bigtitle: {en: 'BCV News', cn: 'BCV 動態', jp: '通貨魏動向', ko: 'BCV 동향'},
            list: [
                {
                    mediumtitle: {en: 'BCV launched on Huobi Autonomous Digital Asset Exchange (HADAX)', cn: 'BCV 登錄火幣', jp: 'BCV ログイン火災のコイン', ko: 'BCV 로그인 화재 동전'},
                    link: {en: 'https://www.hadax.com/zh-cn/', cn: 'https://www.hadax.com/zh-cn/', jp: 'https://www.hadax.com/zh-cn/', ko: 'https://www.hadax.com/zh-cn/'},
                    content: {
                        en: 'Deposits for BCV will be available from 14:30 June 26, 2018(GMT+8)<br><a style="text-decoration:underline;color: #c2a362;" target="_blank" href="https://www.hadax.com/zh-cn/">BCV/BTC</a>, <a style="text-decoration:underline;color: #c2a362;" target="_blank" href="https://www.hadax.com/zh-cn/">BCV/ETH</a> trading will be available on HADAX from 15:00 June 27, 2018(GMT+8)<br>Withdrawals will be available from 14:30 June 28, 2018 (GMT+8)',
                        cn: '開放交易區：<a style="text-decoration:underline;color: #c2a362;" target="_blank" href="https://www.hadax.com/zh-cn/">BTC</a>、<a style="text-decoration:underline;color: #c2a362;" target="_blank" href="https://www.hadax.com/zh-cn/">ETH</a><br>開放充值時間：2018 年 6 月 26 日 14:30<br>開放交易時間：2018 年 6 月 27 日 15:00<br>開放提現時間：2018 年 6 月 28 日 14:30',
                        jp: 'オープン取引エリア： <a style="text-decoration:underline;color: #c2a362;" target="_blank" href="https://www.hadax.com/zh-cn/">BTC</a>、<a style="text-decoration:underline;color: #c2a362;" target="_blank" href="https://www.hadax.com/zh-cn/">ETH</a><br>オープン充電時間：2018 年 6 月 26 日 14:30<br>営業時間：2018 年 6 月 27 日 15:00<br>開かれた離脱時間：2018 年 6 月 28 日 14:30',
                        ko: '공개 거래 지역： <a style="text-decoration:underline;color: #c2a362;" target="_blank" href="https://www.hadax.com/zh-cn/">BTC</a>、<a style="text-decoration:underline;color: #c2a362;" target="_blank" href="https://www.hadax.com/zh-cn/">ETH</a><br>개방 충전 시간 : 2018 년 6 월 26 일 14:30<br>영업 시간 : 2018 년 6 월 27 일 15시<br>공개 철수 기간 : 2018 년 6 월 28 일 14:30'
                    }
                },
                {
                    mediumtitle: {en: 'BCV Landing on Bibox', cn: 'BCV 登錄 Bibox', jp: 'BCV Landing on Bibox', ko: 'BCV Landing on Bibox'},
                    link: {en: 'https://www.bibox.com/', cn: 'https://www.bibox.com/', jp: 'https://www.bibox.com/', ko: 'https://www.bibox.com/'},
                    content: {
                        en: 'Trading Pairs: <a style="text-decoration:underline;color: #c2a362;" target="_blank" href="https://www.bibox.com/">BTC</a>、<a style="text-decoration:underline;color: #c2a362;" target="_blank" href="https://www.bibox.com/">ETH</a>、<a style="text-decoration:underline;color: #c2a362;" target="_blank" href="https://www.bibox.com/">BIX</a><br>Open Trade Time: June 5, 2018 11:00<br>Open Trade Time: June 5, 2018 16:00',
                        cn: '開放交易區：<a style="text-decoration:underline;color: #c2a362;" target="_blank" href="https://www.bibox.com/">BTC</a>、<a style="text-decoration:underline;color: #c2a362;" target="_blank" href="https://www.bibox.com/">ETH</a>、<a style="text-decoration:underline;color: #c2a362;" target="_blank" href="https://www.bibox.com/">BIX</a><br>開放充值時間：2018 年 6 月 5 日 11:00<br>開放交易時間：2018 年 6 月 5 日 16:00',
                        jp: 'Trading Pairs: <a style="text-decoration:underline;color: #c2a362;" target="_blank" href="https://www.bibox.com/">BTC</a>、<a style="text-decoration:underline;color: #c2a362;" target="_blank" href="https://www.bibox.com/">ETH</a>、<a style="text-decoration:underline;color: #c2a362;" target="_blank" href="https://www.bibox.com/">BIX</a><br>Open Trade Time: June 5, 2018 11:00<br>Open Trade Time: June 5, 2018 16:00',
                        ko: 'Trading Pairs: <a style="text-decoration:underline;color: #c2a362;" target="_blank" href="https://www.bibox.com/">BTC</a>、<a style="text-decoration:underline;color: #c2a362;" target="_blank" href="https://www.bibox.com/">ETH</a>、<a style="text-decoration:underline;color: #c2a362;" target="_blank" href="https://www.bibox.com/">BIX</a><br>Open Trade Time: June 5, 2018 11:00<br>Open Trade Time: June 5, 2018 16:00'
                    }
                },
                {
                    mediumtitle: {en: 'BCV * Bit-Z', cn: 'BCV * Bit-Z', jp: 'BCV * Bit-Z', ko: 'BCV * Bit-Z'},
                    link: {en: 'https://www.bit-z.pro/user/signup?pid=1422735', cn: 'https://www.bit-z.pro/user/signup?pid=1422735', jp: 'https://www.bit-z.pro/user/signup?pid=1422735', ko: 'https://www.bit-z.pro/user/signup?pid=1422735'},
                    content: {
                        en: 'Trading Pairs: <a style="text-decoration:underline;color: #c2a362;" target="_blank" href="https://www.bit-z.com/">BTC</a><br>Open Trade Time: May 31, 2018 15:00<br>Welfare Activities：<br/>May 31 15:00 - June 2 15:00 No fee<br/>June 6th 15:00 - June 9th 15:00 Trading breaks up 300,000 BCV',
                        cn: '開放交易區：<a style="text-decoration:underline;color: #c2a362;" target="_blank" href="https://www.bit-z.com/">BTC</a><br>開放時間：2018 年 5 月 31 日 15:00<br>福利活動：<br/>5月31日 15 :00-6月2日 15:00 免手續費<br/>6月6日 15:00 - 6月9日 15:00 交易瓜分 30 萬BCV',
                        jp: 'オープントレーディングエリア：<a style="text-decoration:underline;color: #c2a362;" target="_blank" href="https://www.bit-z.com/">BTC</a><br>取引開始時間：2018 年 3 月 16 日 18:00<br>福祉活動：<br/>5月31日15 : 00 - 6月2日15 : 00免除手数料<br/>6月6日15 : 00 - 6月9日15 : 00交易関系30万BCV',
                        ko: '거래개시 지역 :<a style="text-decoration:underline;color: #c2a362;" target="_blank" href="https://www.bit-z.com/">BTC</a><br>거래개시 시각 : 2018 년 5 월 31 일 15:00<br>복지 활동：<br/>5 월 31 일 15: 00 - 6 월 2 월 2 일 오전 15: 00 면수료 면제<br/>6 월 6 일 - 00 - 6 월 9 일 00: 00 거래 30 만 BCV'
                    }
                },
                {
                    mediumtitle: {en: 'BCV Trading Now On BTB', cn: 'BCV 登錄 BTB', jp: '通貨魏BCVのBTB進出', ko: 'BTB에 BCV진출'},
                    link: {en: 'https://www.btb.com', cn: 'https://www.btb.com', jp: 'https://www.btb.com', ko: 'https://www.btb.com'},
                    content: {
                        en: 'Open Deposit Time: April 28, 2018<br>Open Trade Time: April 28, 2018<br>Trading Pairs: <a style="text-decoration:underline;color: #c2a362;" target="_blank" href="https://www.btb.com/#/trade/btc/bcv">BTC</a>、<a style="text-decoration:underline;color: #c2a362;" target="_blank" href="https://www.btb.com/#/trade/eth/bcv">ETH</a>、<a style="text-decoration:underline;color: #c2a362;" target="_blank" href="https://www.btb.com/#/trade/usdt/bcv">USDT</a>',
                        cn: '開放充值時間：2018 年 4 月 28 日<br>開放交易時間：2018 年 4 月 28 日<br>開放交易區：<a style="text-decoration:underline;color: #c2a362;" target="_blank" href="https://www.btb.com/#/trade/btc/bcv">BTC</a>、<a style="text-decoration:underline;color: #c2a362;" target="_blank" href="https://www.btb.com/#/trade/eth/bcv">ETH</a>、<a style="text-decoration:underline;color: #c2a362;" target="_blank" href="https://www.btb.com/#/trade/usdt/bcv">USDT</a>',
                        jp: 'オープンチャージ時間：2018 年 4 月 28 日<br>取引開始時間：2018 年 4 月 28 日<br>オープントレーディングエリア：<a style="text-decoration:underline;color: #c2a362;" target="_blank" href="https://www.btb.com/#/trade/btc/bcv">BTC</a>、<a style="text-decoration:underline;color: #c2a362;" target="_blank" href="https://www.btb.com/#/trade/eth/bcv">ETH</a>、<a style="text-decoration:underline;color: #c2a362;" target="_blank" href="https://www.btb.com/#/trade/usdt/bcv">USDT</a>',
                        ko: '충전개시 시각  : 2018 년 4 월 28 일<br>거래개시 시각 : 2018 년 4 월 28 일<br>거래개시 지역 :<a style="text-decoration:underline;color: #c2a362;" target="_blank" href="https://www.btb.com/#/trade/btc/bcv">BTC</a>、<a style="text-decoration:underline;color: #c2a362;" target="_blank" href="https://www.btb.com/#/trade/eth/bcv">ETH</a>、<a style="text-decoration:underline;color: #c2a362;" target="_blank" href="https://www.btb.com/#/trade/usdt/bcv">USDT</a>'
                    }
                },
                {
                    mediumtitle: {en: 'BCV Trading OTC Exchange Now On ETHOTC', cn: 'BCV 登錄場外交易所 ETHOTC', jp: 'BCV OTCへのログインETH OTC', ko: 'BCV OTC ETHOTC에 로그인하십시오'},
                    link: {en: 'https://www.ethotc.io', cn: 'https://www.ethotc.io', jp: 'https://www.ethotc.io', ko: 'https://www.ethotc.io'},
                    content: {
                        en: 'Open Trade Time: April 17, 2018<br>',
                        cn: '開放交易時間：2018 年 4 月 17 日<br>',
                        jp: '取引開始時間：2018 年 4 月 17 日<br>',
                        ko: '거래개시 시각 : 2018 년 4 월 17 일<br>'
                    }
                },
                {
                    mediumtitle: {en: 'BCV Trading Now On Bit-Z', cn: 'BCV 登錄 Bit-Z', jp: '通貨魏BCVのBit-z進出', ko: 'Bit－z에 BCV진출'},
                    link: {en: 'https://www.bit-z.com', cn: 'https://www.bit-z.com', jp: 'https://www.bit-z.com', ko: 'https://www.bit-z.com'},
                    content: {
                        en: 'Open Deposit Time: March 14, 2018 18:00<br>Open Trade Time: March 16, 2018 18:00<br>Trading Pairs: <a style="text-decoration:underline;color: #c2a362;" target="_blank" href="https://www.bit-z.com/exchange/bcv_eth">ETH</a><br>',
                        cn: '開放充值時間：2018 年 3 月 14 日 18:00<br>開放交易時間：2018 年 3 月 16 日 12:00<br>開放交易區：<a style="text-decoration:underline;color: #c2a362;" target="_blank" href="https://www.bit-z.com/exchange/bcv_eth">ETH</a><br>',
                        jp: 'オープンチャージ時間：2018 年 3 月 14 日 18:00<br>取引開始時間：2018 年 3 月 16 日 18:00<br>オープントレーディングエリア：<a style="text-decoration:underline;color: #c2a362;" target="_blank" href="https://www.bit-z.com/exchange/bcv_eth">ETH</a><br>',
                        ko: '충전개시 시각  : 2018 년 3 월 14 일 18:00<br>거래개시 시각 : 2018 년 3 월 16 일 18:00<br>거래개시 지역 :<a style="text-decoration:underline;color: #c2a362;" target="_blank" href="https://www.bit-z.com/exchange/bcv_eth">ETH</a><br>'
                    }
                },
                {
                    mediumtitle: {en: 'BCV Trading Now On AEX', cn: 'BCV 登錄 AEX', jp: '通貨魏ダイナミック着陸AEX', ko: 'BCV진출AEX'},
                    link: {en: 'https://www.aex.com', cn: 'https://www.aex.com', jp: 'https://www.aex.com', ko: 'https://www.aex.com'},
                    content: {
                        en: 'Open Deposit Time: March 7, 2018 20:00<br>Open Trade Time: March 9, 2018 12:00<br>Trading Pairs: <a style="text-decoration:underline;color: #c2a362;" target="_blank" href="https://www.aex.com/page/trade.html?mk_type=USDT&trade_coin_name=BCV">USDT</a> 、 <a style="text-decoration:underline;color: #c2a362;" target="_blank" href="https://www.aex.com/page/trade.html?mk_type=BitCNY&trade_coin_name=BCV">BitCNY</a> 、 <a style="text-decoration:underline;color: #c2a362;" target="_blank" href="https://www.aex.com/page/trade.html?mk_type=BTC&trade_coin_name=BCV">BTC</a>、<a style="text-decoration:underline;color: #c2a362;" target="_blank" href="https://www.aex.com/page/trade.html?mk_type=CNC&trade_coin_name=BCV">CNC</a><br>In order to celebrate AEX listing BCV, users trade and deposit BCV in Beijing time  March 7th 18:00 - March 16th 18:00, will receive millions of BCV airdrop. <br>In March 9-11, In the Super Welfare Day event, we are airdroping additional 206664BCV!',
                        cn: '充值開放時間： 2018 年 3 月 7 日 20:00<br>交易開放時間： 2018 年 3 月 9 日 12:00<br>開放交易區： <a style="text-decoration:underline;color: #c2a362;" target="_blank" href="https://www.aex.com/page/trade.html?mk_type=USDT&trade_coin_name=BCV">USDT</a> 、 <a style="text-decoration:underline;color: #c2a362;" target="_blank" href="https://www.aex.com/page/trade.html?mk_type=BitCNY&trade_coin_name=BCV">BitCNY</a> 、 <a style="text-decoration:underline;color: #c2a362;" target="_blank" href="https://www.aex.com/page/trade.html?mk_type=BTC&trade_coin_name=BCV">BTC</a>、 <a style="text-decoration:underline;color: #c2a362;" target="_blank" href="https://www.aex.com/page/trade.html?mk_type=CNC&trade_coin_name=BCV">CNC</a><br>為慶祝 BCV 上線 AEX ，北京時間 3 月 7 日 18:00 至 3 月 16 日 18:00，對交易 BCV 和充值 BCV 的用戶壕送百萬 BCV 。<br>此外，3 月 9 日至 11 日，超級福利將會送出 206664 BCV !',
                        jp: 'オープンチャージ時間：2018 年 3 月 7 日 20:00<br>取引開始時間：：2018 年 3 月 9 日 12:00<br>オープントレーディングエリア：<a style="text-decoration:underline;color: #c2a362;" target="_blank" href="https://www.aex.com/page/trade.html?mk_type=USDT&trade_coin_name=BCV">USDT</a> 、 <a style="text-decoration:underline;color: #c2a362;" target="_blank" href="https://www.aex.com/page/trade.html?mk_type=BitCNY&trade_coin_name=BCV">BitCNY</a> 、 <a style="text-decoration:underline;color: #c2a362;" target="_blank" href="https://www.aex.com/page/trade.html?mk_type=BTC&trade_coin_name=BCV">BTC</a>、 <a style="text-decoration:underline;color: #c2a362;" target="_blank" href="https://www.aex.com/page/trade.html?mk_type=CNC&trade_coin_name=BCV">CNC</a><br>ラインBCVでAEXを祝うために，北京時間 3 月 7 日 18:00  -  3 月 16 日 18:00，BCV取引とチャージBCVユーザーに数百万BCVに報酬を与える<br>また、3 月 9 日 から11日には206664BCVがSuper Welfare Dayに送られます',
                        ko: '충전개시 시각  :  2018 년 3 월 7 일 20:00<br>거래개시 시각 : 2018 년 3 월 9 일 12:00<br>거래개시 지역 :<a style="text-decoration:underline;color: #c2a362;" target="_blank" href="https://www.aex.com/page/trade.html?mk_type=USDT&trade_coin_name=BCV">USDT</a> 、 <a style="text-decoration:underline;color: #c2a362;" target="_blank" href="https://www.aex.com/page/trade.html?mk_type=BitCNY&trade_coin_name=BCV">BitCNY</a> 、 <a style="text-decoration:underline;color: #c2a362;" target="_blank" href="https://www.aex.com/page/trade.html?mk_type=BTC&trade_coin_name=BCV">BTC</a>、 <a style="text-decoration:underline;color: #c2a362;" target="_blank" href="https://www.aex.com/page/trade.html?mk_type=CNC&trade_coin_name=BCV">CNC</a><br>BCV의 AEX 진출을 축하하기 위해，베이징 시간 3 월 7 일 18:00 - 3 월 16 일 18:00，BCV 거래&충전 사용자를 위해 수백만 BCV 증정<br>또한 3 월 9-11 일의 수퍼 복지의 날에 206664 BCV 제공'
                    }
                }
            ]
        },

        download: {
            name: { en:'BCV Wallet App Download', cn:'幣威錢包下載' ,jp:'BCV Wallet App Download', ko:'BCV Wallet App Download' }
        },

        product: {
            name: { en:'Digital Asset Management Platform', cn:'數字資産管理平台' ,jp:'デジタル資産管理の方策', ko:'디저털자산관리해결방안' },
            list: [
                {
                    icon: 'icon ti-money',
                    title: { en:'Digital Asset Management Application – BCV Wallet', cn:'數字資産管理應用 — 幣威錢包', jp:'Digital Asset Management Application – BCV Wallet', ko:'Digital Asset Management Application – BCV Wallet' },
                    content: {
                        en:'Digital asset wallet application with leading encryption and security technologies based on blockchain technology, providing users with secure, easy-to-use and fast digital asset management services.',
                        cn:'基于區塊鏈技術的數字錢包應用，具有領先的加密和安全技術，為用戶提供安全、易用、快捷的數字資産管理服務。',
                        jp:'Digital asset wallet application with leading encryption and security technologies based on blockchain technology, providing users with secure, easy-to-use and fast digital asset management services.',
                        ko:'Digital asset wallet application with leading encryption and security technologies based on blockchain technology, providing users with secure, easy-to-use and fast digital asset management services.'
                    },
                    link: { en:'Enter', 'cn':'进入',jp:'入力',ko:'들어가기' },
                    address: 'https://bitcv.app/'
                },
                {
                    icon: 'icon ti-gift',
                    title: { en:'Digital Asset Red Pocket - Candy Lot', cn:'數字資産紅包産品 — 糖包兒', jp:'Digital Asset Red Pocket - Candy Lot', ko:'Digital Asset Red Pocket - Candy Lot' },
                    content: {
                        en:'Quickly issue digital asset red pocket,  support common blockchain project communities such as WeChat, QQ, and Telegram.',
                        cn:'能夠方便快速的發放數字資産紅包，可以支持微信、QQ、Telegram等常用的區塊鏈項目社群場景。',
                        jp:'Quickly issue digital asset red pocket,  support common blockchain project communities such as WeChat, QQ, and Telegram.',
                        ko:'Quickly issue digital asset red pocket,  support common blockchain project communities such as WeChat, QQ, and Telegram.'
                    },
                    link: { en:'Enter', 'cn':'进入',jp:'入力',ko:'들어가기' },
                    address: 'https://candy.ucai.net/'
                },
                {
                    icon: 'icon ti-crown',
                    title: { en:'Behavior mining - Spinach Manor', cn:'經濟系統 — 菠菜莊園', jp:'Behavior mining - Spinach Manor', ko:'Behavior mining - Spinach Manor' },
                    content: {
                        en:'Blockchain technology-based behavior mining and reward system, a total of 120 million BCVs are used to reward the daily activities of the users. The total amount is constant, halved during time, and never increased.',
                        cn:'基于区块链技术的行为挖矿奖励体系，共投放 1.2 亿 BCV 用于奖励币威用户的日常行为，总量恒定、逐渐减半、永不增发。',
                        jp:'Blockchain technology-based behavior mining and reward system, a total of 120 million BCVs are used to reward the daily activities of the users. The total amount is constant, halved during time, and never increased.',
                        ko:'Blockchain technology-based behavior mining and reward system, a total of 120 million BCVs are used to reward the daily activities of the users. The total amount is constant, halved during time, and never increased.'
                    },
                    link: { en:'Enter', 'cn':'进入',jp:'入力',ko:'들어가기' },
                    address: 'https://bitcv.app/'
                },
                {
                    icon: 'icon ti-server',
                    title: { en:'Digital Asset Management Platform - EncryptoMore', cn:'數字資產理财平台 — 餘幣寶', jp:'デジタルアセットウェルスマネジメントプラットフォーム - 余幣宝', ko:'디지털 자산 관리 재테크 플랫폼 - Yu-Bi Bao' },
                    content: {
                        en:'Purchasing EncryptoMore Plan locks in future earnings in advance, collect your profit at the end of the locking period and enjoy the growth of your personal assets',
                        cn:'購買餘幣寶計劃提前鎖定未來收益，鎖定期結束收回本金並獲得額外收益實現個人資產的滾動增長',
                        jp:'貨幣バオ購入計画は、将来の収益を事前にロックし、ロック期の終わりにプリンシパルを回収し、追加収入を得ることで個人資産の伸びを実現する',
                        ko:'Yu-Bi Bao 구매계획 이전 미래의 수입을 Lock하고, Lock시기 종료 후 원금 회수 및 추가 수익을 얻어 개인자산을 지속적으로 증가시킵니다'
                    },
                    link: { en:'Enter', 'cn':'进入',jp:'入力',ko:'들어가기' },
                    address:'https://bitcv.com/candyRoom/candyList'
                },
                {
                    icon: 'icon ti-package',
                    title: { en:'One-Click tool for efficient multi-address token transfer — TransferQuick', cn:'一鍵派發Token的高效利器 — 代發寶', jp:'ワンキー配布トークン効率的なツール — 代発宝', ko:'원 클릭 token 분배의 고효율적 도구 — Dai-fa Bao' },
                    content: {
                        en:'One-click upload all addresses, support multiple tokens, copy-and-paste no more, power up your efficiency.',
                        cn:'一鍵上傳用戶地址，支持多種Token自動發放，工具解放雙手。讓時間更有價值，助力企業提升服務價值',
                        jp:'ワンクリックでユーザーアドレスをアップロードし、自動的に発行される複数のトークンをサポートし、時間を節約するツールフリーハンド、企業のサービス価値向上に役立つ',
                        ko:'원 클릭으로 사용자 주소를 업로드하고, 자동으로 발행되는 여러 토큰을 지원하며, 툴을 사용해 사용자의 시간을 더욱 활용하고, 기업이 서비스 가치를 향상시키는 데 도움을줍니다.'
                    },
                    link: { en:'Enter', 'cn':'进入',jp:'入力',ko:'들어가기' },
                    address: 'https://bitcv.com/acting/home'
                },
                {
                    icon: 'icon ti-signal',
                    title: { en:'Digital Asset Database — Chain Radar', cn:'數字資産資料庫 — 鏈雷達', jp:'Digital Asset Database — Chain Radar', ko:'Digital Asset Database — Chain Radar' },
                    content: {
                        en:'Blockchain project information database and information provider.',
                        cn:'区块链行业项目信息数据库及信息服务提供。',
                        jp:'Blockchain project information database and information provider.',
                        ko:'Blockchain project information database and information provider.'
                    },
                    link: { en:'Enter', 'cn':'进入',jp:'入力',ko:'들어가기' },
                    address: 'https://bitcv.com/discover'
                }
                // {
                //     icon: 'icon ti-desktop',
                //     title: { en:'Project Investment and Financing SaaS System - SaaS', cn:'項目投融SaaS系統——投融SaaS', jp:'プロジェクト投資･融資 SAAS システム――投融資 SAAS', ko:'프로젝트융자 SaaS 시스템—융자 SaaS' },
                //     content: {
                //         en:'For every independent project, its information and data are independent and isolated from other projects. For the project party, from domain name to display, they are independent and unique, and create exclusive and professional images.',
                //         cn:'每一個獨立的項目，資訊與數據與别的項目隔離，從域名到展示，都有獨立性和唯一性，造就專屬、專業的形象。',
                //         jp:'それぞれの独立したプロジェクト、情報、データは、ドメイン名からディスプレイまで、他のプロジェクトとは独立している。',
                //         ko:'각각의 독립적인 프로젝트, 정보 및 데이터는 도메인 이름에서 디스플레이에 이르기까지 다른 프로젝트와 분리되어 독립적이고 유니크하며, 그로 인해 전속적이고 전문적인 이미지를 만듭니다.'
                //     }
                // },
                // {
                //     icon: 'icon ti-user',
                //     title: { en:'Deep Mining and Investigation of Digital Asset – Finance and Economy Master', cn:'數字資產深度挖掘與調研——財經通', jp:'デジタル資産の深堀と調査研究――財金通', ko:'디저털자산 심도적탐색과 조사연구——재경통' },
                //     content: {
                //         en:'The BitCV team consists of experienced investors, blockchain technical experts, senior media professionals, who, with all the experience in the fields of investment, media and technology, can scrutinize every aspect of a project.',
                //         cn:'資深投資人、區塊鏈技術專家、資深媒體人士，全面挖掘項目團隊背景、項目技術實力評估、項目投資人訪談等，讓公眾投資人全面、公正、客觀地瞭解項目的方方面面',
                //         jp:'シニア投資家、ブロックチェーン技術の専門家、シニアメディア関係者、総合的な採掘プロジェクトチームの背景、技術力とプロジェクト評価、プロジェクト投資家のインタビューなど、公共投資プロジェクトの全てを包括的、公正かつ客観的に理解',
                //         ko:'베테랑 투자자, 블록 체인 기술 전문가 및 숙련 된 미디어 전문가는 프로젝트 팀의 배경을 완전히 탐색하고 프로젝트의 기술력을 평가하고 프로젝트 투자자와 면담을 함으로써 모든 공공 투자자가 포괄적이고 공정하며 객관적인 방식으로 프로젝트의 모든 측면을 이해할 수 있도록합니다'
                //     }
                // },
                // {
                //     icon: 'icon ti-ruler-alt',
                //     title: { en:'Digital Asset Management Evaluation Platform – Evaluation Chain', cn:'數字資管評測平臺——鏈評測', jp:'デジタル資産管理の評価･測定プラットホーム——チェーン評価･測定', ko:'디지털자산관리평가플랫폼——체인 평가&추산' },
                //     content: {
                //         en:'Besides the assessment of each dimension, there are analyses based on historical models and data, including the artificial intelligence assessment and the prediction of the prospects with machine learning model. All these rely heavily on analyzing and data processing, of which the BitCV team has accumulated considerable experience.',
                //         cn:'基於大數據與人工智能技術，做好項目價值發現與投資者評估，結合傳統金融行業大量的從業經驗，研發風險評估與風控模型。',
                //         jp:'ビッグデータや人工知能技術により、プロジェクトの価値の発見と投資家の評価が行われ、従来の金融業界の多くの経験が結合し、リスクアセスメントやリスクコントロールモデルが開発される。',
                //         ko:'빅 데이터 및 인공 지능 기술을 기반으로 프로젝트 가치 발견 및 투자자 평가가 이루어지며 전통적인 금융 업계의 수많은 실무자와 결합되어 위험 평가 및 위험 관리 모델을 개발합니다.'
                //     }
                // },
                // {
                //     icon: 'icon ti-heart',
                //     title: { en:'Digital Asset OMO Service – Service Chain', cn:'數字資產OMO服務——鏈服務', jp:'デジタル資産 OMO(ONLINE-MOBILE-OFFLINE)サービス——ブロックチェーンサービス', ko:'디저털자산 OMO 서비스——체인서비스' },
                //     content: {
                //         en:'Apart from technical services, BitCV, as a digital asset management engine, has the responsibility and obligation to serve the industry ecology as well, as to provide convenience for the project party and investors.',
                //         cn:'不僅僅是為數字資產項目的初始發佈助跑，更希望從技術到人才，構建起真正的落地能力支撑，這樣才是真正有助於這個生態。',
                //         jp:'デジタル資産プロジェクトの最初のリリースを支援するだけでなく、技術から才能へと真の支援能力を構築することで、生態を助けることを期待する。',
                //         ko:'디지털 자산 프로젝트의 초기 출시를 돕는 것뿐만 아니라 기술에서 인재에 이르기까지 실제 지원 능력을 구축하여 진정으로 업계환경에 도움에 되기를 바랍니다.'
                //     }
                // },
            ]
        },

        arch: {
            name: { en:'Project Technical Architecture', cn:'項目技術架構與產品實現', jp:'プロジェクト技術の構造と製品の実現', ko:'프로젝트기술구조와 제품실현' },
            list: [
                {
                    img: './img/layer-1.png',
                    title: { en:'Design of BitCV Digital Asset Management Chain', cn:'BitCV 數字資管鏈的設計', jp:'BitCV デジタル資産管理チェーンの設計', ko:'BitCV 디지털자산관리체인 설계' },
                    content: {
                        en: 'BitCV is an application-based blockchain product, so we are using the blockchain and existing technologies to serve the field of digital asset management. In principle, we do not conduct our own research and development of the underlying chain design on a large scale, but according to the current preliminary research and development, we use and enhance the use of the following technologies.<p>1 Blockchain distributed ledger technology</p><p>2 Sidechain cross-chain trading technology</p><p>3 DPOS consensus algorithm</p><p>4 Intelligent contract technology</p>',
                        cn: 'BitCV使用區塊鏈技術，記錄所有涉及資金的交易行為，先在側鏈上或者鏈外記錄與交易，最終寫入BitCV資產管理鏈主鏈上去，保證資產管理主鏈是一個隨着交易記錄增長的，無法篡改和偽造的區塊鏈。在未來，區塊鏈分布式存儲的成熟，BitCV資產管理鏈主鏈也將轉移或者存儲在區塊鏈分布式存儲上。真正做到了去中心化。',
                        jp: 'BitCVはブロックチェーン技術を用い、全ての資金の取引行為を記録する。まずサイドチェーン、もしくはチェーンの記録と取引を切り離し、最後にBitCV資産管理チェーンのメインチェーンで行い、資産管理メインチェーン保証は取引記録の増加に伴い、改ざんと偽造ができないようになっている。将来、ブロックチェーンに成熟した分散ストレージがあれば、BitCV資産管理チェーンのメインチェーンもまたブロックチェーン分散ストレージに転送、格納される。これにより分散化が行われる。',
                        ko: 'BitCV는 블록체인 기술을 사용하여	 자금과 관련된 모든 거래를 기록하며, 먼저 측체인 또는 체인외부에 기록되고 최종적으로 BitCV자산관리 메인체인에 입력됩니다. 이로 인해 자산관리 메인체인은 거래 기록 증가에 따라 위조와 훼손이 불가능한 블록체인이 되는 것을 보장합니다. 앞으로 블록체인 분포식 메모리가 성숙해 짐에 따라, BitCV자산관리체인의 메인체인은 블록체인 분포식 데이터베이스에 이전되거나 저장됩니다. 이를 통해 진정한 탈중개화를 실현합니다.'
                    },
                },
                {
                    img: './img/layer-2.png',
                    title: { en:'Reliable and scalable microservices architecture design', cn:'高可靠可擴展的的微服務架構設計', jp:'信頼と展開できるマイクロサービスの構造設計', ko:'고신뢰및확장의 마이크로서비스구조설계' },
                    content: {
                        en:'As the digital asset service engine platform at the bottom of the blockchain, SaaS cloud service needs to be provided first. Because every project is intended for global clients and provides multi-end support, it is necessary to ensure that the service is reliable and easy to expand and maintain. The goal of reliability should be 99.99%.<br>Second, as a digital asset management service platform, a large number of digital asset exchange data of the clients are involved. Although after the clients purchase the digital assets, the corresponding tokens or the digital assets themselves will be sent into the official crowdfunding wallet, the statistics, as well as the middle storage, are still stored inside the platform, therefore the security, encryption and isolation of the data are strictly required.',
                        cn:'作為區塊鏈底層的數字資產服務引擎平臺，首先需要提供的是SaaS雲服務，由於任意一個項目，面向全球用戶使用，多端支持，因此需保證服務高可靠，應該目標是99.99%的可靠性，以及方便擴容、維護。<br>其次作為數字資產管理服務平臺，有涉及到大量的用戶代幣兑換數據，儘管用戶在購買了代幣之後，幣本身會打入官方眾籌錢包，但是統計數據，以及中間存儲，都在平臺内部，所以對數據的安全性、加密存儲與隔離等有較高的要求。',
                        jp:'ブロックチェーンの最下部にあるデジタル資産サービスエンジンプラットフォームとして、まずSaaSクラウドサービスを提供する必要があり、任意のプロジェクトに関して、グローバルユーザーに対して使用し、マルチエンドサポートを行う。これにより信頼性の高いサービスを確保する必要があ理、99.99％の信頼性、拡張及びメンテナンスの容易が目標である。第二に、デジタル資産管理サービスプラットフォームとして、ユーザーはトークンを購入したにもかかわらず、多数のユーザートークンがデータ交換に関与し、通貨自体を公式のクラウドファンディングウォレットで購入。統計情報と中間ストレージはプラットフォームに従って、データのセキュリティ、暗号化、ストレージ及び、アイソレーション要件が高くなる。',
                        ko: '블록체인 Bottom의 디지털자산서비스플랫폼엔진으로써 먼저 필요한 것은 SaaS 크라우드서비스 제공이며, 어느 프로젝트간에 전 세계를 대상으로 사용하며, 많은 대상을 지원합니다. 그로인해 서비스의 고신뢰성이 필요하며, 저희이 목표는 99.9%의 신뢰성과 확장편리성, 유지관리입니다.<br>다음으로는, 디지털자산관리서비스플랫폼으로써 많은 사용자의 디지털화폐환전에 관련되어 있고, 사용자가 디지털화폐 구매 후, 공식 크라우드펀딩 지갑에 입금되지만, 통계데이터와 중간저장데이터는 플랫폼 내부에 저장되어 있습니다.이로 인해 데이터의 보안과 암호화저장, 그리고 격리등의 비교적 높은 요구사항이 있습니다.'
                    }
                },
                {
                    img: './img/layer-3.png',
                    title: { en:'Simple and friendly platform of project and investment', cn:'簡潔好用的項目與投資平臺', jp:'簡潔で使いやすいプロジェクトと投資プラットフォーム', ko:'간단&편리한 프로젝트투자플랫폼' },
                    content: {
                        en:'Fill in the basic information to generate the main site by one touch<br>Provide investors with project management services and clear results<br>Provide the project party with stage progress<br>Provide financiers with project data planning',
                        cn:'需要融資的項目，透過申請獨立的發佈站，經過審核之後即可以開通SaaS平臺，開通成功，獲得該系統的管理員用戶名和密碼，完成項目資料登記、完善與獨立發佈站的建設。在建設的過程中，需要提供的基本資料，包括但不限於市場分析、項目亮點、媒體報道、代幣額度、價格設定、項目團隊、合作夥伴、路徑圖等等。<br><br>填寫基本資料，一鍵生成項目主站<br>項目管理服務，讓投資人清晰放心<br>項目階段進度，讓項目方瞭然於胸<br>項目數據規劃，讓融資方運籌帷幄',
                        jp:'簡潔で使いやすいプロジェクトと投資プラットフォーム\n' +
                        '融資が必要なプロジェクトは独立の申請を通過した後、審査が終わればすぐにSaaSプラットフォームを開くことができる。オープンに成功するとシステム管理者のユーザー名、パスワードを得られ、プロジェクトデータの登録と改善、独立したページの開設が行われる。開設の過程で、市場分析だけではなく、プロジェクトのハイライト、メディア報道、トークン金額、価格設定、プロジェクトチーム、パートナー、ロードマップなどの基本情報が必要である。\n' +
                        '基本情報を記入すること、ワンクリックでプロジェクトメインページが作成される。\n' +
                        'プロジェクト管理サービス、投資家に透明性と安心を。\n' +
                        'プロジェクト段階の進捗、プロジェクトに明瞭さを。\n' +
                        'プロジェクトデータ計画、融資調達側に戦略を。\n',
                        ko: '투융자를 필요로하는 프로젝트는 독립적인 Publishing Station을 통한 신청과 심사를 거친 후즉시 SaaS플랫폼을 개설가능하고, 개설완료 후, 해당 시스템의 관리자 아이디와 패스워드 취득 및 프로젝트 자료등록 후 완전하고 독립적인 Publishing Station을 개설 할수 있습니다.개설 과정에서 기본자료만 필요할 뿐만 아니라 시장분석, 프로젝트 브라이트 스폿, 대중매체의 보도, 디지텔화폐한도, 가격설정, 프로젝트 팀, 합작 파트너, 로드맵 등도 필요합니다.<br><br>기본자료작성, 원클릭 프로젝트 Main Station 개설<br>프로젝트관리서비스, 투자자에게 명확한 안심 제공<br>프로젝트단계진도, 프로젝트측에게 완벽한 이해<br>프로젝트데이터기획, 투융자측에게 후방전략수립'
                    }
                },
                {
                    img: './img/layer-4.png',
                    title: { en:'Future product planning', cn:'未來的產品規劃', jp:'未来の製品への企画', ko:'미래 제품기획' },
                    content: {
                        en:'Use the multi-digital assets wallet system constructed by cross-chain payment to make it convenient for clients to deposit and invest.<br>Develop a fund-investment system and invest in the industry\'s well-known digital asset funds. Well-known digital asset funds generally have higher thresholds.<br>Provide the trading and auction platform for digital assets and real assets.<br>Provide the programmed and quantitative trading platform.',
                        cn:'除了做好基礎的項目和投資者服務之外，我們將逐步開發以下產品和底層基礎設施，以構建整個資管平臺底層技術服務體系。<br><br>使用跨鏈支付構建多幣種錢包系統<br>開發基金跟投系統參與知名數字資產基金的投資<br>數字資產、實物資產對標交易拍賣平臺<br>程序化量化交易平臺為投資者建立多元化投資手段',
                        jp:'将来の製品の計画\n' +
                        '基礎がしっかりとしたプロジェクトと投資家サービス以外に我々は以下の製品と基礎施設を開発していく。資産管理プラットフォーム全体の基礎技術サービスシステムを設ける。\n' +
                        'クロスチェーン支払いを使用し、多種のデジタル資産ウォレットシステムを構築する。\n' +
                        'ファンドと投資システムが参与できる著名なデジタル資産ファンドの投資を開発する\n' +
                        'デジタル資産、実物資産を取引できる競売プラットフォーム\n' +
                        '投資家の多元的な投資の手段となるためのプロジェクト的で量的な取引プラットフォーム\n',
                        ko:'기반이 튼튼한 프로젝트와 투자자 서비스 외에도, 저희는 모든 자산관리플랫폼Bottom기술서비스체계를 구축하기 위해 점진적으로 아래의 제품과 기본 인프라를 개발할 것입니다.<br><br>크로스체인지불을 사용하여 다양한 토큰지갑 시스템 구축<br>기금 추적투자시스템을 개발하여 유명한 디지털자산기금의 투자에 참여<br>디지털자산과 실물자산의 벤치마킹 거래 경매 플랫폼<br>프로그램화 및 양적 거래플랫폼으로 투자자에게 다각적인 투자수단 제공'
                    }
                },
            ]
        },

        team: {
            name: { en:'Our team', cn:'團隊', jp:'チーム', ko:'핵심 프로젝트팀' },
            list: [
                {   
                    img: 'user-wuxing.png',
                    name: { en:'Wu Xing', cn:'伍星', jp:'伍星', ko:'우성 연합창립인' },
                    intro: {
                        en: 'Member of Global Entrepreneur Leadership Program of Tsinghua University PBC School of Finance; core member of the sixth self-organizing board team of Hejun Business School; monitor of the third Sinovation Ventures Brotherhood. Member of the foundation team of Happy Net; advanced full stack architect. He founded UCAI, a domestic IT vocational education brand, and got many rounds of financing from funds such as Sinovation Ventures. He once managed the design and performance optimization of hundreds of millions of UV in Happy Net, and achieved more than 99.99% reliability services. Duties: Leading technology and the overall strategic planning of the foundation project.',
                        cn: '清華大學五道口金融學院全球創業領袖班學員。2004年畢業於北京工商大學，和君六屆自組織理事團隊核心成員、創新工場兄弟會3期班班長。開心網創始團隊成員，高級全棧架構師，創辦國内IT職業教育品牌優才學院，獲得創新工場等基金多輪融資，曾主導開心網數以億計UV的架構設計與性能優化，實現99.99%以上的可靠性服務。職責:基金會技術與項目整體戰略規劃。',
                        jp: '清華大学五道口金融学院グローバル創業リーダークラスのメンバー。2004 年に北京工商大学を卒業。和君第六回自組織管理チームの中心メンバー。創新工業兄弟会第三回クラスの級長。開心ウェブサイトの創始チームのメンバー。高級フルスタックエンジニア。国内における IT 職業教育優才学院を創業し、創新工場などから多数の融資を受け、開心ウェブサイトの数億ものUVのデザインやパフォーマンスの最適化を主導し、99.99％以上の信頼性のあるサービスを実現した。役割：基金の技術とプロジェクト総体の戦略企画。\n',
                        ko: '청화대학오다구금융학원 전세계창업리더쉽반 수강생。2004 년베이징경영대학졸업，허쥔 6 회 이사조직팀 핵심멤버、Sinovation 벤쳐 형제회 3 기반장。Happy net 창립멤버，고급풀스택구축사，국내 IT 직업교육브랜드우수학원창립，Sinovation 벤쳐 등의 기금 복수기금 획득,이전 1 억대의 UV 의 Happy Net 구조설계와 성능우수화를 주도99.99%이상의 신뢰가는 서비스 실현。직책：기금회기술 및 프로젝트전략기획。전체전략기획。'
                    }
                },
                {   
                    img: 'user-jiagui.png',
                    name: { en:'Xiong Jiagui', cn:'熊家貴', jp:'熊家貴', ko:'웅가귀 연합창립자' },
                    intro: {
                        en: 'Graduated from Tsinghua University; senior R & D engineer in Sina; python group leader in iAsk; chief architect in Happy Net. He is proficient in Linux, Unix infrastructure research and development, and provide independently storage, communications and other middleware services. He once managed the design of millions of concurrent online instant messaging system in Happy Net. Duties: Leading the design of the underlying protocol of the digital asset management chain and highly reliable underlying platform.',
                        cn: '畢業於清華大學，曾任新浪資深研發工程師，愛問爬蟲組組長，開心網首席架構師。精通Linux、Unix底層研發，獨立實現存儲、通信等多種中間件服務。曾主導開心網數百萬並發在線即時通信系統設計。職責:主導數字資管鏈的底層協議設計和高可靠底層平臺設計。',
                        jp: '清華大学を卒業。Sinaのベテランエンジニア。愛問爬虫グループリーダー、開心ウェブサイトの首席エンジニア。Linux、Unixのベース開発の専門家で、独立でストレージ、通信など様々な中間サービスを実現した。開心ウェブサイトの数百万ものインスタントメッセンジャーシステムの設計を主導したという経験を持つ。役割：デジタル資管システムのベーシックプロトコルと信頼性のあるベーシックプラットホームの設計などの主導。\n',
                        ko: '청화대학 공정물리학졸업，이전 Sina 경력직연구&개발엔지니어 이전 Sina 경력직연구&개발엔지니어,Iaskworm 팀장，Happy Net 첫 번째 구축사.정통 Linux、Unix Bottom 개발，독립적으로저장、통신 등의 중간 서비스 실현,이전 수 백만대의 Happy net 에서 Instant massage , 시스템 설계,직책：디지털자산관리체인의 Bottom 협약설계 및 고신뢰성 Bottom플랫폼설계.'
                    }
                },
                {   
                    img: 'user-zhihua.png',
                    name: { en:'Liu Zhihua', cn:'劉志華', jp:'劉志華', ko:'유지화 연합창립자' },
                    intro: {
                        en: 'Full stack architect, Beijing Technology and Business University Department of Computer Science graduated in 2004, once worked in Halliburton, serving CNPC, Sinopec and other giant oil service information system development, is an early Kaixin technical team members, has been responsible for sales operations support Management technical work. In 2013, he worked as a technology leader in developing a digital campus at Renmin University of China. In 2014, he joined the talent CTO. Proficient in Internet product architecture design, good before and after the end of a variety of technology development and management.',
                        cn: '全棧架構師，北京工商大學計算機系2004年畢業，曾經就職於哈里伯頓，服務於中石油、中石化等巨頭企業油服信息化系統的開發，是開心網早期技術團隊成員，曾負責銷售運營支持管理部門技術工作。2013年作為技術負責人開發了中國人民大學數字校園，2014年加入優才創智任CTO。精於互聯網產品架構設計，擅長前後端多種技術開發管理。',
                        jp: 'フルスタックエンジニア。2004に北京工商大学コンピューター学科を卒業。卒業後はハリバートンに就職。中国石油天然気集団公司、中国石油化工集団公司など大手会社の石油サービスデジタル化システムの開発に参加した。開心ウェブサイト初期の技術チームのメンバー。販売営業支持管理部の仕事を担当した。2013 年に技術責任者として中国人民大学デジタルスクールを開発し、2014年に優才創智に入社し、CTOを務める。インターネット製品のデザイン、Front-end とbackstage supporter 多種技術開発管理を得意とする。\n',
                        ko: '풀테크구축사，2004 년 북경경영대학컴퓨터과 졸업，이전 할리버튼에서 종사，중국 석유&화학등의 대기업에 석유서비스정보화시스템개발,Happy Net 초기 기술팀 멤버,이전 판매운영지불관리부서에서 기술부분 책임2013 년 기술책임자로 중국인민대학 디지털캠퍼스 개발2014 년 Excellent Powerise 에 가입 및 CTO 임명,인터넷제품구축설계진행,Frong/Back-End 의 다양한 기술개발&관리에 정통.'
                    }
                },
                {   
                    img: 'user-wenling.png',
                    name: { en:'Wen Ling', cn:'文玲', jp:'文玲', ko:'문령 연합창립자' },
                    intro: {
                        en: 'Received Master’s degree in Investment Management at Peking University; assistant of Apple’s Angel investor Mr. Li Zongnan in China; the China market leader of United States Shan Kwong Capital; former market director assistant of Sinovation Ventures; co-founder of Internet K12 online education. She is now the founder of PPTEAM Project, which provide magic performance technology service for the first-class Internet startups and first-class investment agencies senior executives, and cooperation companies include Tencent, Toutiao, the State Grid Cooperation of China and so on.',
                        cn: '北京大學投資管理碩士畢業;蘋果天使投資人華人創投之父李宗南先生中華區助理;美國山光資本中國市場負責人;曾任創新工場市場總監助理;互聯網K12在線教育公司聯合創始人;現PPTEAM項目創始人，為一流互聯網創業公司及一流投資機構高管提供幻演技術服務，合作公司包括騰訊、今日頭條、國家電網等。',
                        jp: '北京大学投資管理学の修士学位。アップルのエンジェル投資家「華人創投資の父」李宗南の中華区域の助役。アメリカShanKwong資本の中国市場の責任者。創新工場総監の助役。インターネット会社Ｋ12通信制教育会社の共同創業者。PPTEAMプロジェクトの創業者。一流のインターネット創業会社や投資会社の管理者に魔法的な表現技術サービスを提供している。パートナー企業にはテンセント、今日頭条、国家電網など大手企業がある。\n',
                        ko: '북경대학투자관리석사졸업;Apple Angel 투자자인 중국계 외국인이며, 창립 투자자인부종남선생님의 중화구역 비서;미국 삼광 Sunland Fund 중국시장 책임자;이전 Sinovation 벤쳐시장 CEO 비서;인터넷 K12 Online 교육회사연합창립자;현 PPTEAM 프로젝트 창립자;일류 인터넷창업회사와 일류투자기관 고위층에매직쇼기술서비스제공;합작회사는 Tecent 회사, 금일 톱뉴스 국가전력 등이다.'
                    }
                },
                {
                    img: 'user-ruanying2.png',
                    name: { en:'Ruan Ying', cn:'阮颖', jp:'阮穎', ko:'원영' },
                    intro: {
                        en: 'Graduated from Nankai University and then studied at the 33 phase of Exed, the Chinese enterprise operator of Guanghua School of Management, Peking University. She is an early founder team of Renren games, the earliest web game productor in China, and a pioneer of the earliest overseas operation model. Then join the Kaixin network management team, responsible for the overall product and operation of the Kaixin.',
                        cn: '本科畢業於南開大學，後在北京大學光華管理學院中國企業經營者33期Exed學習。曾是人人遊戲早期創始團隊，國內最早的網頁遊戲探路者，最早海外運營模式的參與者開創者。後加入開心網管理團隊，負責開心網整體產品和運營工作。',
                        jp: '南開大学の本科を卒業後、北京大学光華管理学院中国企業経営者33期Exedにて学ぶ。人人遊戯の早期創始チームで、国内で最初のインターネットゲームの開拓者で、最も早く海外運営モデルの参加者先駆者。その後、楽しい開心ネット管理チームに参加し、ネット全体の製品と運営を担当している。\n',
                        ko: '남개대학 본과 졸업 후, 북경대학 광화관리학부 중국기업경영자 33기 Exed이수.\n' +
                        '이전 Ren-Ren Games 초기 창립멤버였고, 또한 국내최초 웹게임의 선구자였이며, \n' +
                        '최초 해외 운영방식의 참여자이자 창시자였습니다.\n' +
                        '이후 Happy-Net 관리팀에 참여하여 Happy-Net의 전 제품&운영 업무를 맡고 있습니다.\n'
                    }
                },
                {
                    img: 'user-sicheng2.png',
                    name: { en:'Duan Sicheng', cn:'段思程', jp:'段思程', ko:'단사성\n' },
                    intro: {
                        en: 'Hongkong residents, major computer sicence, America\'s former Chicago futures exchange full stack engineer in Globex, SpanMargin, FedWatch and other core products research and development. He has a deep understanding of futures and options trading and maintains positive returns in the market for a long time. Chicago is the largest exchange in the world and has the right to price gold, crude oil and other commodities. Now join the BCV team for quantification, wind control, and market value management.',
                        cn: '香港居民，計算機科班出身，留美碩士，原芝加哥期貨交易所全棧工程師，參與過Globex，SpanMargin，FedWatch等核心產品的研發。對期貨與期權交易有深刻的認知，並在市場中長期保持正收益。芝商所是世界上最大的交易所，並擁有黃金，原油等大宗商品的定價權。現在加入 BCV 團隊，負責量化、風控以及市值管理。',
                        jp: '香港居民。コンピューター学科出身で、アメリカにて修士学位を取得。元シカゴ先物取引所全スタックエンジニア、Globexに参与したことがあり、SpanMargin、FedWatchなどコア製品を開発した。先物とオプション取引に深い知識があり、市場では長期的な収益を維持する。芝商所は世界最大の取引所で、黄金、原油などの大宗商品の定価権を有する。現在はBCVチームに参加し、量化、リスク制御や時価管理の責任者。\n',
                        ko: '홍콩 주민, 컴퓨터 과학 기술 출신, 미국 미술사, 원시카고 선물거래소 전문 엔지니어, Glovx, 스포츠마인, FadWater 등 핵심 제품 개발 참여.선물과 기권거래에 대해 깊은 인지를 갖고 있으며, 시장에서는 장기간 정수익을 유지한다.지상소는 세계에서 가장 큰 교역소이며, 황금, 원유 등 대량의 상품의 정가권을 보유하고 있다.현재 BCV 에 가입해 양적, 바람 컨트롤, 시중 관리 책임이다.'
                    }
                },
                {
                    img: 'user-yingying.png',
                    name: { en:'Zhang Yingying', cn:'張瀛瑩', jp:'張柳', ko:'장영옥' },
                    intro: {
                        en: 'In 2007, in the well-known Internet service interconnection company, the company created the first million singles, many times Topsales. Lead the team to create sales performance with annual revenue of 10 million. In 2013, the world\'s leading foreign financial big data company is responsible for the market of colleges and universities nationwide. In 2017, we established Shared Plus Company and established partnerships with many companies such as Didi, QuickTime, and the famous artificial intelligence company Haizhi Technology and the establishment of state-owned enterprises under the well-known Propaganda Department.',
                        cn: '2007 年，在知名網絡服務互聯通公司，創造第一個百萬大 單，連續多次 Topsales 。帶領團隊創造年收入千萬的銷售業 績。 2013 年在全球領先的金融大數據外企，負責全國高校及 政府的市場。 2017 年，創辦共享加公司，與滴滴、速途及知 名人工智能公司海知科技及知名中宣部下屬國企建立等多家公 司建立合作關係。',
                        jp: '2007年、著名なインターネットサービスの相互接続会社にて、何百万ものトップセールス出した。年間売上1,000万ドルで販売成果を創出するチームをリードした。2013年には、世界有数の外国金融大手データ会社にて、全国の大学と政府の市場を担当。2017年には、Shared Plus Companyを設立し、Didi、QuickTime、有名な人工知能会社Haizhi Technology、Central Propaganda Departmentの国営企業など多くの企業と提携した。\n',
                        ko: '2007년, 유명한 인터넷 서비스 CNLink 회사에서 \n' +
                        '최초 1회 거래 백만 위안화 및 연이어 수 차례 TopSales달성 \n' +
                        '프로젝트팀 이끌며 천만의 수익성 매출 창조.\n' +
                        '2013년 세계를 선두하는 금융 빅 데이터 외국기업에서 \n' +
                        '고등 교육기관 및 정부시장 담당.  \n' +
                        '2017년, Sharespace회사 창립, China Uber Taxi(Di-Di Taxi),\nSoo-Too 및 유명 인공지능 HAIZOL, 유명 중공중앙선전부\n' +
                        '아래의 국영기업과 파트너쉽 업무 진행。\n'
                    }
                },
                {
                    img: 'user-yanhe.png',
                    name: { en:'Zhao Yanhe', cn:'趙延鶴', jp:'趙延鶴', ko:'조연학' },
                    intro: {
                        en: 'Served as a business manager at TOPRAND. Service customers include deductions for Huawei, Beijing-based Real Estate, Hong Kong Arran Group, Yangmei Hong Education Group, and Hongdian Electric. In 2014, he joined Young Talent as a BD & Marketing Director responsible for marketing, business, and branding. The technical community is heavily involved in the formation and management of multiple full-stack and open source community technical communities. We are responsible for the currency market and community management.',
                        cn: '曾任職於 TOPRAND 擔任商務經理。服務客戶包扣華為、京 基地產、香港雅蘭集團、楊梅紅教育集團、宏電股份等。 2014 年加入優才創智擔任 BD&市場總監負責市場、商務、品牌。技術社群重度參與者，組建和管理多個全棧及開源社區技術社群。現負責幣威市場及社群管理工作。',
                        jp: 'TOPRANDのビジネスマネージャーを歴任。サービス顧客には、Huawei、北基地産、香港Arranグループ、Yangmei Hong教育グループ、Hongdian Electricなどがある。2014年には、マーケティング、ビジネス、ブランディングを担当するBD＆Marketing DirectorとしてYoung Talentsに入社。技術コミュニティは、複数のフルスタックおよびオープンソースコミュニティの技術コミュニティの形成と管理に深く関わっています。現在は通貨市場と地域社会管理を担当。\n',
                        ko: '이전 TOPRAND 상무부장 재직.\n' +
                        'Hua-Wei, King-Key 부동산, 홍콩 AIRLAND그룹, YMM 교육그룹, \n' +
                        'Hong-Dian Stock등의 고객에 서비스 제공. \n' +
                        '2014년 UCAI에 참가하여 BD&마케팅 이사로써 \n' +
                        '마케팅, 상무, 브랜드 담당.\n' +
                        '기술커뮤니티중요참여자로 다수의 Full-Stack 및 오픈소스 \n' +
                        '기술커뮤니티 조직 및 관리.\n' +
                        '현 화폐시장 및 커뮤니티 관리업무 담당. \n'
                    }
                }
            ]
        },

        roadmap: {
            name: { en:'Project Milestones and Roadmap', cn:'項目里程碑及路線圖', jp:'プロジェクトのマイルストーン及びロードマップ', ko:'프로젝트 이정표 및 노선도' },
            list: [
                {
                    date: { en:'Jan 2018', cn:'2018年1月', jp:'2018年1月', ko:'2018년1월' },
                    content: {
                        en:'Start up team formation completed',
                        cn:'團隊組建',
                        jp:'Start up team formation completed',
                        ko:'Start up team formation completed'
                    }
                },
                {
                    date: { en:'Feb 2018', cn:'2018年2月', jp:'2018年2月', ko:'2018년2월' },
                    content: {
                        en:' Service tools development, improve R & D team',
                        cn:'工具落地，完善研發團隊',
                        jp:' Service tools development, improve R & D team',
                        ko:' Service tools development, improve R & D team'
                    }
                },
                {
                    date: { en:'April 2018', cn:'2018年4月', jp:'2018年4月', ko:'2018년4월' },
                    content: {
                        en:'Fully promote of BCV wallet development',
                        cn:'全力推動錢包開發',
                        jp:'Fully promote of BCV wallet development',
                        ko:'Fully promote of BCV wallet development'
                    }
                },
                {
                    date: { en:'Mid of May 2018', cn:'2018年5月中旬', jp:'2018年5月中旬', ko:'2018 년 5 월 중순' },
                    content: {
                        en:'BCV Wallet 1.0 Online',
                        cn:'錢包1.0版本上線',
                        jp:'BCV Wallet 1.0 Online',
                        ko:'BCV Wallet 1.0 Online'
                    }
                },
                {
                    date: { en:'Beginning of June 2018', cn:'2018年6月初', jp:'2018年6月初め', ko:'2018 년 6 월 초' },
                    content: {
                        en:'BCV Wallet supports cross chain function',
                        cn:'跨鏈錢包實現',
                        jp:'BCV Wallet supports cross chain function',
                        ko:'BCV Wallet supports cross chain function'
                    }
                },
                {
                    date: { en:'Mid of June 2018', cn:'2018年6月中', jp:'2018年6月中旬', ko:'2018 년 6 월 중순' },
                    content: {
                        en:'BCV wallet 2.0 online with large amount of improvements',
                        cn:'錢包2.0發布，大幅度完善',
                        jp:'BCV wallet 2.0 online with large amount of improvements',
                        ko:'BCV wallet 2.0 online with large amount of improvements'
                    }
                },
                {
                    date: { en:'July to Aug 2018', cn:'2018年7-8月', jp:'2018年7月-8月', ko:'2018년7월-8월' },
                    content: {
                        en:'BCV Wallet 3.0 International Version and SDK',
                        cn:'國際化與開放SDK 3.0',
                        jp:'BCV Wallet 3.0 International Version and SDK',
                        ko:'BCV Wallet 3.0 International Version and SDK'
                    }
                },
                {
                    date: { en:'End of Sep 2018', cn:'2018年9月末', jp:'2018年9月末', ko:'2018 년 9 월 말' },
                    content: {
                        en:'Test Net of BCV Chain Online',
                        cn:'BCV Chain 內測，內部移植，搭建配套',
                        jp:'Test Net of BCV Chain Online',
                        ko:'Test Net of BCV Chain Online'
                    }
                },
                {
                    date: { en:'End of Dec 2018', cn:'2018年12月末', jp:'2018年12月末', ko:'2018 년 12 월 말' },
                    content: {
                        en:'Launch of BCV Chain and API',
                        cn:'主網上線，正式開放API',
                        jp:'Launch of BCV Chain and API',
                        ko:'Launch of BCV Chain and API'
                    }
                }
            ]
        },

        consultants: {
            name: { en:'Project consultants', cn:'項目顧問', jp:'プロジェクトの顧問', ko:'프로젝트 고문' },
            list: [
                {
                    img: './img/brand-fengxin.png',
                    name: { en:'Feng Xin', cn:'馮新', jp:'馮新', ko:'풍신' },
                    intro: {
                        en:'Founder of Carbon 9 Accelerator and MBA of Nankai Business School. He once worked for Legend Capital, leading to invest in iFLYTEK and worked for True Fund as a partner in investment. He once invested in well-known projects such as SZ.',
                        cn:'碳9加速器創始人，南開大學商學院MBA，曾就職於聯想投資，主導投資科大訊飛，就職於真格基金，任投資合夥人，曾投資找鋼網等知名項目。',
                        jp:'炭素 9 加速器の創業者',
                        ko:'탄소 9 가속기창립자'
                    }
                },
                {
                    img: './img/brand-qiaoshuai.png',
                    name: { en:'Qiao Shuai', cn:'喬帥', jp:'喬帥', ko:'교사' },
                    intro: {
                        en:'Partner of QKCG Capital',
                        cn:'清科晨光合夥人',
                        jp:'清科晨光のパートナー',
                        ko:'QKCG 캐피탈 파트너'
                    }
                },
                /*{
                    img: './img/brand-guohongcai.png',
                    name: { en:'Guo Hongcai', cn:'郭宏才', jp:'郭宏才', ko:'광굉재' },
                    intro: {
                        en:'The well-known figure of digital',
                        cn:'币圈知名大佬',
                        jp:'ビットコイン界の専門家',
                        ko:'디지털화폐업계의 형님'
                    }
                },*/
                {
                    img: './img/brand-liujiang.png',
                    name: { en:'Liu Jiang', cn:'劉江', jp:'劉江', ko:'유강' },
                    intro: {
                        en:'Founding partner of Sparkling Star Capital; founder of Xingheng Education; member of tagcash Foundation; co-founder of WuKang network.',
                        cn:'星耀資本創始合夥人，星恒教育創始人，tagcash基金會成員，五康成網聯合創始人。',
                        jp:'星輝資本創業パートナー',
                        ko:'Sparkling Star 캐피탈 창립자'
                    }
                },
                {
                    img: './img/brand-wushu.png',
                    name: { en:'Wu Shu', cn:'吳澍', jp:'吳澍', ko:'오주' },
                    intro: {
                        en:'MBA of Cheung Kong Graduate School of Business; Angel investor; Founding Team Member of Tiger Snooker Network; Former Chief Editor of Black Horse; Witness and Founding Member of China\'s New Media Industry. He used to be the Director of LeTV Group Investment and Financing and Vice President of LeTV cloud computing capital operation. He has been in charge of capital business of LeTV Zhixin, LeTV Mobile, LeTV Finance, LeTV Cloud computing, etc. The total number of the funds he set up, investment and financing is over 30 trillion yuan.',
                        cn:'長江商學院MBA，天使投資人，虎嗅網創始團隊成員，原i黑馬主編，中國新媒體產業的見證者及鑄建者。曾任樂視集團投融資總監，樂視雲端運算資本運營副總裁。先後分管樂視致新、樂視移動、樂視金融、樂視雲端運算等公司的資本業務。纍計設立基金，對外投資，融資金額超300億元。',
                        jp:'エンジェル投資家',
                        ko:'Angel 투자자'
                    }
                },
                {
                    img: './img/brand-xujizhe.png',
                    name: { en:'Xu Jizhe', cn:'徐繼哲', jp:'徐繼哲', ko:'서계철' },
                    intro: {
                        en:'Co-founder of the Smartweb Elastos driven by the blockchain; founder of philosophy community; pioneer and advocate of free software movement; blockchain expert.',
                        cn:'區塊鏈驅動的智能萬維網「亦來雲」聯合創始人，哲思社區創始人，自由軟體運動先鋒，倡導者，區塊鏈專家。',
                        jp:'亦来云の共同創業者、ブロックチェーンの専門家',
                        ko:'Elastos“ 연합창립자，블록체인전문가”'
                    }
                },
                {
                    img: './img/brand-luofei.png',
                    name: { en:'Luo Fei', cn:'羅飛', jp:'羅飛', ko:'라비' },
                    intro: {
                        en:'Domestic AI R & D pioneer; he has developed Moorobot, smart speakers and other smart products, and served as SAE in Sina; he is the earliest cloud computing development experts, and core developer of ThinkPHP; he is active in the open source community, and the open source projects he develops have been used by 2 million developers; he is also skilled in technical community operations, and operating a technology community comprised of technical directors from major companies.',
                        cn:'國内AI研發先行者，研發過小墨機器人、智能音箱等多款智能產品，曾任職新浪SAE，是國内最早的雲端運算開發專家，也是ThinkPHP核心開發者，活躍於開源社區，所開發的開源項目擁有200萬開發者使用，擅長技術社群運營，運營着各大公司技術總監組成的技術社群。',
                        jp:'国内 AI 開発の先駆者',
                        ko:'국내 AI 개발 전문가'
                    }
                },
                {
                    img: './img/brand-liyuechun.png',
                    name: { en:'Li Yuechun', cn:'黎躍春', jp:'黎躍春', ko:'려약춘' },
                    intro: {
                        en:'Founder & CEO of Kongyi College',
                        cn:'孔壹學院創始人',
                        jp:'孔壱学院の創業者と CEO',
                        ko:'Kong Yi 학원 창립인&CEO'
                    }
                },
                {
                    img: './img/brand-chengbinghao.png',
                    name: { en:'Cheng Binghao', cn:'程炳皓', jp:'程炳皓', ko:'정병호' },
                    intro: {
                        en:'CEO of Happy Net; investor.',
                        cn:'開心網CEO，投資人。',
                        jp:'開心ウェブサイトの CEO、投資人',
                        ko:'Happy Net CEO, 투자자'
                    }
                },
                {
                    img: './img/brand-zhubo.png',
                    name: { en:'Zhu Bo', cn:'朱波', jp:'朱波', ko:'주파' },
                    intro: {
                        en:'Founder of InnoValley',
                        cn:'創新穀基金創始人',
                        jp:'創新谷基金の創業者',
                        ko:'Inno Valley 창립자'
                    }
                },
                {
                    img: './img/brand-huangtianwei.png',
                    name: { en:'Huang Tianwei', cn:'黄天威', jp:'黄天威', ko:'황천위' },
                    intro: {
                        en:'Founder of btc38.com',
                        cn:'比特時代創始人',
                        jp:'ビットコイン時代の先駆者',
                        ko:'비트시대창립자'
                    }
                },
                {
                    img: './img/brand-jiangen.png',
                    name: { en:'Jiang En', cn:'江恩', jp:'江恩', ko:'강은' },
                    intro: {
                        en:'Commander of Dogecoin',
                        cn:'狗狗幣會長',
                        jp:'ドージコインの会長',
                        ko:'Dogcoin 회장'
                    }
                },
                {
                    img: './img/brand-wangzhaowei.png',
                    name: { en:'Wang Zhaowei', cn:'王朝薇', jp:'王朝薇', ko:'왕조위' },
                    intro: {
                        en:'Founder of Wei Ling Wealth',
                        cn:'維瓴財富創始人',
                        jp:'維瓴財富の創業者',
                        ko:'Wei Ling 자산 창립자'
                    }
                },
                {
                    img: './img/brand-chencaigen.png',
                    name: { en:'Chen Caigen', cn:'陳菜根', jp:'陳菜根', ko:'진채근' },
                    intro: {
                        en:'Partenr of Weiyou Capital',
                        cn:'區塊鏈知名自媒體，為友資本合夥人',
                        jp:'為友資本のパートナー',
                        ko:'Weiyou 캐피탈 파트너'
                    }
                },
                {
                    img: './img/brand-xuxinquan.png',
                    name: { en:'Xu Xinquan', cn:'徐昕泉', jp:'徐昕泉', ko:'서명한 샘' },
                    intro: {
                        en:'Levision Group President, Russia and Eastern Europe',
                        cn:'樂視集團俄羅斯及東歐地區總裁',
                        jp:'乐视グループロシアや東欧総裁',
                        ko:'락시 러시아 및 동유럽 지역 총재'
                    }
                }
                /*{
                    img: './img/brand-bosheng.jpeg',
                    name: { en:'Bo Sheng', cn:'薄胜', jp:'薄勝', ko:'보승' },
                    intro: {
                        en:'Lezhi Technology Founder',
                        cn:'樂智科技 創始人',
                        jp:'Lezhi Technology創設者',
                        ko:'Lezhi Technology 설립자'
                    }
                },
                {
                    img: './img/brand-zhaodawei.jpeg',
                    name: { en:'Zhao Dawei', cn:'趙大偉', jp:'趙大偉', ko:'자오 다 웨이' },
                    intro: {
                        en:'The author of "The thought of thinking in the internet"',
                        cn:'《互聯思維獨孤九劍》作者',
                        jp:'「インターネット上で考える思考」の著者は、',
                        ko:'"인터넷에서 생각하는 생각"의 저자'
                    }
                }*/

            ]
        },

        institutions: {
            name: { en:'Institutions', cn:'機構', jp:'機関', ko:'기관' },
            list: [
                //'./img/project-linkvc.jpg', //Link VC
                './img/project-genesis.jpg',
                './img/project-xingyue.jpg', //星耀资本
                './img/project-tan9.jpg', //碳 9 加速器
                //'./img/project-chuangxin.jpg', //创新工场(曾投资 YeeCall、极路 由等)
                //'./img/project-guotai.jpg', //国泰创投(曾投资 比特大陆)
                //'./img/project-ceyuan.jpg', //策源创投(曾投资 OKCoin)
                './img/project-guanghe.jpg', //广禾资本
                //'./img/project-huozhong.jpg', //火种资本
                './img/project-bdfund.jpg', //梦工场基金
                './img/project-innovalley.jpg', //创新谷基金
                //'./img/project-yuming.jpg', //域名资本
            ]
        },

        media: {
            name: { en:'Media report', cn:'媒体报道', jp:'メディアカバレッジ', ko:'언론 보도' },
            list: [
                {
                    img: './img/media-huoxingcj.png', // 火星财经
                    url: './img/media-detail-huoxingcj.jpg',
                    name: { en:'火星财经', cn:'火星财经', jp:'火星财经', ko:'火星财经' },
                    intro: {
                        en:'幣威獲柳誌偉先生數千萬融資',
                        cn:'幣威獲柳誌偉先生數千萬融資',
                        jp:'幣威獲柳誌偉先生數千萬融資',
                        ko:'幣威獲柳誌偉先生數千萬融資'
                    }
                },
                {
                    img: './img/media-yahu.png',// 雅虎
                    url: 'https://finance.yahoo.com/news/look-bit-capital-vendor-intelligent-060400180.html',
                    name: { en:'Yahoo', cn:'雅虎', jp:'Yahoo', ko:'야후' },
                    intro: {
                        en:'Wasteland Toolbox Digital Asset Management Platform',
                        cn:'開荒工具箱 數字資產智能資管平台幣威全測評',
                        jp:'Wasteland Toolboxデジタル資産管理プラットフォーム',
                        ko:'Wasteland Toolbox 디지털 자산 관리 플랫폼'
                    }
                },
                {
                    img: './img/media-hunxucj.png', // 混序财经
                    url: './img/media-detail-hunxucj.jpg',
                    name: { en:'混序财经', cn:'混序财经', jp:'混序财经', ko:'混序财经' },
                    intro: {
                        en:'幣威獲數千萬融資，錢包用護突破10萬人',
                        cn:'幣威獲數千萬融資，錢包用護突破10萬人',
                        jp:'幣威獲數千萬融資，錢包用護突破10萬人',
                        ko:'幣威獲數千萬融資，錢包用護突破10萬人'
                    }
                },
                {
                    img: './img/media-jinsecaijing.png',// 金色财经
                    url: 'https://www.jinse.com/news/blockchain/178033.html',
                    name: { en:'Golden Finance', cn:'金色財經', jp:'ゴールデンファイナンス', ko:'황금 금융' },
                    intro: {
                        en:'In the future, 10% of the global population should configure digital assets',
                        cn:'未來全球 10% 的人群都應配置數字資產',
                        jp:'将来的には、世界人口の10％がデジタル資産を設定すべきです',
                        ko:' 미래에는 전세계 인구의 10 %가 디지털 자산을 구성해야합니다.'
                    }
                },
                {
                    img: './img/media-xicaijing.png',// 烯財經
                    url: 'http://mp.weixin.qq.com/s/2SYYWp6aXDOrt_7nyweHxA',
                    name: { en:'Hennessy Finance', cn:'烯財經', jp:'ヘネシーファイナンス', ko:'헤네시 금융' },
                    intro: {
                        en:'Wasteland Toolbox Digital Asset Management Platform',
                        cn:'開荒工具箱 數字資產智能資管平台幣威全測評',
                        jp:'Wasteland Toolboxデジタル資産管理プラットフォーム',
                        ko:'Wasteland Toolbox 디지털 자산 관리 플랫폼'
                    }
                },
                {
                    img: './img/media-marketwatch.png',// marketwatch
                    url: 'https://www.marketwatch.com/story/a-look-at-bit-capital-vendor-the-intelligent-digital-asset-management-platform-2018-03-29',
                    name: { en:'MarketWatch', cn:'MarketWatch', jp:'MarketWatch', ko:'MarketWatch' },
                    intro: {
                        en:'A Look at Bit Capital Vendor, the Intelligent Digital Asset Management Platform',
                        cn:'A Look at Bit Capital Vendor, the Intelligent Digital Asset Management Platform',
                        jp:'A Look at Bit Capital Vendor, the Intelligent Digital Asset Management Platform',
                        ko:'A Look at Bit Capital Vendor, the Intelligent Digital Asset Management Platform'
                    }
                },
                {
                    img: './img/media-coinspectator.png',// coinspectator
                    url: 'https://coinspectator.com/news/345279/a-look-at-bit-capital-vendor-the-intelligent-digital-asset-management-platform',
                    name: { en:'CoinSpectator', cn:'CoinSpectator', jp:'CoinSpectator', ko:'CoinSpectator' },
                    intro: {
                        en:'A Look at Bit Capital Vendor, the Intelligent Digital Asset Management Platform benzinga.com',
                        cn:'A Look at Bit Capital Vendor, the Intelligent Digital Asset Management Platform benzinga.com',
                        jp:'A Look at Bit Capital Vendor, the Intelligent Digital Asset Management Platform benzinga.com',
                        ko:'A Look at Bit Capital Vendor, the Intelligent Digital Asset Management Platform benzinga.com'
                    }
                },
                {
                    img: './img/media-36kr.png',
                    url: 'http://36kr.com/p/5116931.html',
                    name: { en:'36kr', cn:'36kr', jp:'36kr', ko:'36kr' },
                    intro: {
                        en:'Block chain application | digital asset management platform "BitCV" won ten million angel financing',
                        cn:'區塊鏈應用|數字資產管理平台「BitCV」獲千萬級天使融資',
                        jp:'区割り| 数字情報管理平台「BitCV」浦千万级天使融資',
                        ko:'区分子 链 应用 | 숫자 정보 관리 平台 「BitCV」鉛 千万 级 天使 融資'
                    }
                },
                {
                    img: './img/media-heima.png',
                    url: 'http://www.iheima.com/zixun/2018/0130/167135.shtml',
                    name: { en:'iheima', cn:'黑馬網', jp:'ブラックホースネットワーク', ko:'검은 말 네트워크' },
                    intro: {
                        en:'Blockchain cutting-edge BitCV gets 10 million angel financing：Or digital asset management platform creator',
                        cn:'區塊鏈新銳BitCV獲千萬級天使融資：或成數字資產管理平台開創者',
                        jp:'区切り記号BitCV：ある数字の数を管理する平台开发者',
                        ko:'구획 链锐 锐 BitCV 천사 级 天使 融资：또는 成數 资产 管理 平台 开发 者'
                    }
                },
                {
                    img: './img/media-yiou.png',
                    url: 'https://www.iyiou.com/p/65488',
                    name: { en:'Yiou', cn:'億歐', jp:'10億ユーロ', ko:'10 억 유로' },
                    intro: {
                        en:'Blockchain cutting-edge BitCV gets 10 million angel financing——Or digital asset management platform creator',
                        cn:'區塊鏈新銳BitCV獲千萬級天使融資——或成數字資產管理平台開創者',
                        jp:'区切り記号BitCV——ある数字の数を管理する平台开发者',
                        ko:'구획 链锐 锐 BitCV 천사 级 天使 融资——또는 成數 资产 管理 平台 开发 者'
                    }
                },
                {
                    img: './img/media-tencent.png',
                    url: 'http://new.qq.com/omn/20180130/20180130A0EC6M.html',
                    name: { en:'Tencent', cn:'騰訊網', jp:'Tencent', ko:'Tencent' },
                    intro: {
                        en:'Blockchain cutting-edge BitCV gets 10 million angel financing：Or digital asset management platform creator',
                        cn:'區塊鏈新銳BitCV獲千萬級天使融資：或成数字资产管理平台开创者',
                        jp:'区切り記号BitCV：ある数字の数を管理する平台开发者',
                        ko:'구획 链锐 锐 BitCV 천사 级 天使 融资：또는 成數 资产 管理 平台 开发 者'
                    }
                },
                {
                    img: './img/media-souhu.png',
                    url: 'http://www.sohu.com/a/219786398_439726',
                    name: { en:'Sohu', cn:'搜狐', jp:'捜狐', ko:'소후' },
                    intro: {
                        en:'Digital Asset Management Platform BitCV Gets Thousands of Angel Funds',
                        cn:'數字資產管理平台BitCV獲千萬級天使融資',
                        jp:'デジタル資産管理プラットフォームBitCVが何千ものエンジェルファンドを獲得',
                        ko:'디지털 자산 관리 플랫폼 BitCV, 천사 펀드 인수'
                    }
                },
                {
                    img: './img/media-jinrongjie.png',
                    url: 'http://biz.jrj.com.cn/2018/01/30141124030848.shtml',
                    name: { en:'Financial', cn:'金融界', jp:'金融業界', ko:'금융 산업' },
                    intro: {
                        en:'Blockchain cutting-edge BitCV gets 10 million angel financing',
                        cn:'區塊鏈新銳BitCV獲千萬級天使融資',
                        jp:'BlockChain最先端のBitCV、1000万円のエンジェルファイナンスを実現',
                        ko:'블록 체인 최첨단 BitCV, 1,000 만 엔의 파이낸싱 제공'
                    }
                },
                {
                    img: './img/media-guangming.png',
                    url: 'http://it.gmw.cn/2018-01/30/content_27515552.htm',
                    name: { en:'Bright Network', cn:'光明網', jp:'明るいネットワーク', ko:'밝은 네트워크' },
                    intro: {
                        en:'Digital Asset Management Platform BitCV Gets Thousands of Angel Funds',
                        cn:'數字資產管理平台BitCV獲千萬級天使融資',
                        jp:'デジタル資産管理プラットフォームBitCVが何千ものエンジェルファンドを獲得',
                        ko:'디지털 자산 관리 플랫폼 BitCV, 천사 펀드 인수'
                    }
                },
                {
                    img: './img/media-china.png',
                    url: 'http://tech.china.com.cn/entrepreneur/20180130/334710.shtml',
                    name: { en:'china.com.cn', cn:'中国网', jp:'中国ネット', ko:'차이나 넷' },
                    intro: {
                        en:'Digital Asset Management Platform BitCV Gets Thousands of Angel Funds',
                        cn:'數字資產管理平台BitCV獲千萬級天使融資',
                        jp:'デジタル資産管理プラットフォームBitCVが何千ものエンジェルファンドを獲得',
                        ko:'디지털 자산 관리 플랫폼 BitCV, 천사 펀드 인수'
                    }
                },
                {
                    img: './img/media-yahu.png',
                    url: 'https://finance.yahoo.com/news/bcv-creating-model-digital-asset-145200200.html?from=groupmessage&isappinstalled=0',
                    name: { en:'Yahoo Finance', cn:'雅虎财经', jp:'Yahoo Finance', ko:'Yahoo Finance' },
                    intro: {
                        en:'Digital Asset Management Platform BitCV Gets Thousands of Angel Funds',
                        cn:'數字資產管理平台BitCV獲千萬級天使融資',
                        jp:'デジタル資産管理プラットフォームBitCVが何千ものエンジェルファンドを獲得',
                        ko:'디지털 자산 관리 플랫폼 BitCV, 천사 펀드 인수'
                    }
                },
                {
                    img: './img/media-chuangtoutiao.png',// 创头条
                    url: 'http://www.ctoutiao.com/543527.html',
                    name: { en:'Headlinee', cn:'創頭條', jp:'見出し', ko:'제목' },
                    intro: {
                        en:'Blockchain is not a panacea, solving the performance problem is the key',
                        cn:'區塊鏈並非萬能，解決性能問題是關鍵',
                        jp:'ブロックチェインは万能薬ではなく、性能問題を解決することが重要です',
                        ko:' Blockchain은 성능 문제를 해결하는 만병 통치약이 아닙니다.'
                    }
                },
            ]
        },

        footer: {
            wechat: { en:'WeChat scan code attention', cn:'微信扫码关注', jp:'WeChat scan code attention', ko:'WeChat scan code attention' },
        }

    },
    mounted() {
    },
    methods: {
    }
});
