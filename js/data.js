var app = new Vue({

    el: '#app',

    data: {

        lang: 'en',

        project: {
            name: { en:'Blockchain Digital Asset <br>Management Service Engine', cn:'區塊鏈數字資產管理服務引擎', jp:'ブロックチェーンデジタル<br>資産管理サービスエンジン' },
            whitepaper: {
                btn: { en:'Download White Paper', cn:'下載白皮書', jp:'ホワイトペーパーのダウンロード' },
                doc: { en:'doc/bitcv_whitepaper_en.pdf', cn:'doc/bitcv_whitepaper_cn.pdf', jp:'doc/bitcv_whitepaper_jp.pdf' }
            },
            ppt: {
                btn: { en:'Download Project Presentation', cn:'下載PPT', jp:'PPTをダウンロード' },
                doc: { en:'doc/bitcv_project_en.pdf', cn:'doc/bitcv_project_cn.pdf', jp:'doc/bitcv_project_jp.pdf' }
            }
        },

        product: {
            name: { en:'Digital Asset Management Solutions', cn:'數字資產管理解決方案' ,jp:'デジタル資産管理の方策' },
            list: [
                {
                    icon: 'icon ti-desktop',
                    title: { en:'Project Investment and Financing SaaS System - SaaS', cn:'項目投融SaaS系統——投融SaaS', jp:'プロジェクト投資･融資 SaaS システム――投融資 SaaS' },
                    content: {
                        en:'For every independent project, its information and data are independent and isolated from other projects. For the project party, from domain name to display, they are independent and unique, and create exclusive and professional images.',
                        cn:'每一個獨立的項目，資訊與數據與别的項目隔離，從域名到展示，都有獨立性和唯一性，造就專屬、專業的形象。',
                        jp:'それぞれの独立したプロジェクト、情報、データは、ドメイン名からディスプレイまで、他のプロジェクトとは独立しています。'
                    }
                },
                {
                    icon: 'icon ti-user',
                    title: { en:'Deep Mining and Investigation of Digital Asset – Finance and Economy Master', cn:'數字資產深度挖掘與調研——財經通', jp:'デジタル資産の深堀りと調査研究――財金通' },
                    content: {
                        en:'The BitCV team consists of experienced investors, blockchain technical experts, senior media professionals, who, with all the experience in the fields of investment, media and technology, can scrutinize every aspect of a project.',
                        cn:'資深投資人、區塊鏈技術專家、資深媒體人士，全面挖掘項目團隊背景、項目技術實力評估、項目投資人訪談等，讓公眾投資人全面、公正、客觀地瞭解項目的方方面面',
                        jp:'シニア投資家、ブロック鎖技術の専門家、シニアメディアの人々、総合的な採掘プロジェクトチームの背景、技術力とプロジェクト評価、プロジェクト投資家のインタビュー、公共投資プロジェクトのすべての側面を包括的、公正かつ客観的理解'
                    }
                },
                {
                    icon: 'icon ti-ruler-alt',
                    title: { en:'Digital Asset Management Evaluation Platform – Evaluation Chain', cn:'數字資管評測平臺——鏈評測', jp:'デジタル資産管理の評価･測定プラットホーム——チェン評価･測定' },
                    content: {
                        en:'Besides the assessment of each dimension, there are analyses based on historical models and data, including the artificial intelligence assessment and the prediction of the prospects with machine learning model. All these rely heavily on analyzing and data processing, of which the BitCV team has accumulated considerable experience.',
                        cn:'基於大數據與人工智能技術，做好項目價值發現與投資者評估，結合傳統金融行業大量的從業經驗，研發風險評估與風控模型。',
                        jp:'大きなデータデータや人工知能技術に基づいて、プロジェクト価値の発見と投資家の評価が行われ、従来の金融業界の多くの実務家が組み合わされて、リスクアセスメントやリスクコントロールモデルが開発されています。'
                    }
                },
                {
                    icon: 'icon ti-heart',
                    title: { en:'Digital Asset OMO Service – Service Chain', cn:'數字資產OMO服務——鏈服務', jp:'デジタル資産 OMO(Online-Mobile-Offline)サービス——ブロックチェンサービス' },
                    content: {
                        en:'Apart from technical services, BitCV, as a digital asset management engine, has the responsibility and obligation to serve the industry ecology as well, as to provide convenience for the project party and investors.',
                        cn:'不僅僅是為數字資產項目的初始發佈助跑，更希望從技術到人才，構建起真正的落地能力支撑，這樣才是真正有助於這個生態。',
                        jp:'デジタル資産プロジェクトの最初のリリースを支援するだけでなく、技術から才能に着陸するための本当の支援能力を構築し、エコロジーを本当に助けることを望んでいます。'
                    }
                },
            ]
        },

        arch: {
            name: { en:'Project Technical Architecture and Product Realization', cn:'項目技術架構與產品實現', jp:'プロジェクト技術の構造と製品の実現' },
            list: [
                {
                    img: './img/layer-1.png',
                    title: { en:'Design of BitCV Digital Asset Management Chain', cn:'BitCV 數字資管鏈的設計', jp:'BitCV デジタル資産管理チェーンの設計' },
                    content: {
                        en: 'BitCV is an application-based blockchain product, so we are using the blockchain and existing technologies to serve the field of digital asset management. In principle, we do not conduct our own research and development of the underlying chain design on a large scale, but according to the current preliminary research and development, we use and enhance the use of the following technologies.<p>1 Blockchain distributed ledger technology</p><p>2 Sidechain cross-chain trading technology</p><p>3 DPOS consensus algorithm</p><p>4 Intelligent contract technology</p>',
                        cn: 'BitCV使用區塊鏈技術，記錄所有涉及資金的交易行為，先在側鏈上或者鏈外記錄與交易，最終寫入BitCV資產管理鏈主鏈上去，保證資產管理主鏈是一個隨着交易記錄增長的，無法篡改和偽造的區塊鏈。在未來，區塊鏈分布式存儲的成熟，BitCV資產管理鏈主鏈也將轉移或者存儲在區塊鏈分布式存儲上。真正做到了去中心化。',
                        jp: 'BitCVはブロックチェーン技術を使用して、資金を含むすべてのトランザクションを記録します。記録とトランザクションは、最初にサイドチェーンまたはチェーンから外し、最後にBitCV資産管理チェーンのメインチェーンで行い、資産管理バックボーンはトランザクション履歴 改ざんと偽造はできないブロックチェーン。 将来、ブロックチェーンに成熟した分散ストレージがあれば、BitCV資産管理チェーンの主なチェーンもブロックチェーン分散ストレージに転送または格納されます。 本当に分散されています。'
                    },
                },
                {
                    img: './img/layer-2.png',
                    title: { en:'Reliable and scalable microservices architecture design', cn:'高可靠可擴展的的微服務架構設計', jp:'信頼と展開できるマイクロサービスの構造設計' },
                    content: {
                        en:'As the digital asset service engine platform at the bottom of the blockchain, SaaS cloud service needs to be provided first. Because every project is intended for global clients and provides multi-end support, it is necessary to ensure that the service is reliable and easy to expand and maintain. The goal of reliability should be 99.99%.<br>Second, as a digital asset management service platform, a large number of digital asset exchange data of the clients are involved. Although after the clients purchase the digital assets, the corresponding tokens or the digital assets themselves will be sent into the official crowdfunding wallet, the statistics, as well as the middle storage, are still stored inside the platform, therefore the security, encryption and isolation of the data are strictly required.',
                        cn:'作為區塊鏈底層的數字資產服務引擎平臺，首先需要提供的是SaaS雲服務，由於任意一個項目，面向全球用戶使用，多端支持，因此需保證服務高可靠，應該目標是99.99%的可靠性，以及方便擴容、維護。<br>其次作為數字資產管理服務平臺，有涉及到大量的用戶代幣兑換數據，儘管用戶在購買了代幣之後，幣本身會打入官方眾籌錢包，但是統計數據，以及中間存儲，都在平臺内部，所以對數據的安全性、加密存儲與隔離等有較高的要求。',
                        jp:'ブロックチェーンデジタルアセットサービスエンジンプラットフォームの最下部にある、最初に提供する必要があるSaaSクラウドサービスは、いずれかのプロジェクトのために、グローバルユーザー、マルチエンドサポートのためには、信頼性の高いサービスを確保する必要があります。目標は、99.99％の信頼性と、拡張の容易さ、メンテナンスでなければなりません。<br>第二に、デジタル資産管理サービスプラットフォームとして、ユーザーがトークンを購入したにもかかわらず、多数のユーザートークンがデータ交換に関与していますが、通貨自体を公式のクラウドファンディングウォレットに購入しましたが、統計情報と中間ストレージはプラットフォーム したがって、データのセキュリティ、暗号化、ストレージおよびアイソレーションの要件が高くなります。'
                    }
                },
                {
                    img: './img/layer-3.png',
                    title: { en:'Simple and friendly platform of project and investment', cn:'簡潔好用的項目與投資平臺', jp:'簡潔で使いやすいプロジェクトと投資プラットフォーム' },
                    content: {
                        en:'Fill in the basic information to generate the main site by one touch<br>Provide investors with project management services and clear results<br>Provide the project party with stage progress<br>Provide financiers with project data planning',
                        cn:'需要融資的項目，透過申請獨立的發佈站，經過審核之後即可以開通SaaS平臺，開通成功，獲得該系統的管理員用戶名和密碼，完成項目資料登記、完善與獨立發佈站的建設。在建設的過程中，需要提供的基本資料，包括但不限於市場分析、項目亮點、媒體報道、代幣額度、價格設定、項目團隊、合作夥伴、路徑圖等等。<br><br>填寫基本資料，一鍵生成項目主站<br>項目管理服務，讓投資人清晰放心<br>項目階段進度，讓項目方瞭然於胸<br>項目數據規劃，讓融資方運籌帷幄',
                        jp:'SaaSプラットフォームのオープンに成功すると、システム管理者のユーザー名とパスワードの登録、プロジェクトデータの完全な登録と改善、独立した出版局の設置が行われます。 建設の過程では、市場分析、プロジェクトハイライト、メディアカバレッジ、トークン金額、価格設定、プロジェクトチーム、パートナー、ロードマップなど、基本的な情報を提供する必要があります。<br><br>プロジェクト管理サービス、投資家の明確かつ確実な<br>プロジェクトの段階の進行は、胸のプロジェクト側<br>プロジェクトデータの計画、資金調達側の戦略を立てる'
                    }
                },
                {
                    img: './img/layer-4.png',
                    title: { en:'Future product planning', cn:'未來的產品規劃', jp:'未来の製品への企画' },
                    content: {
                        en:'Use the multi-digital assets wallet system constructed by cross-chain payment to make it convenient for clients to deposit and invest.<br>Develop a fund-investment system and invest in the industry\'s well-known digital asset funds. Well-known digital asset funds generally have higher thresholds.<br>Provide the trading and auction platform for digital assets and real assets.<br>Provide the programmed and quantitative trading platform.',
                        cn:'除了做好基礎的項目和投資者服務之外，我們將逐步開發以下產品和底層基礎設施，以構建整個資管平臺底層技術服務體系。<br><br>使用跨鏈支付構建多幣種錢包系統<br>開發基金跟投系統參與知名數字資產基金的投資<br>數字資產、實物資產對標交易拍賣平臺<br>程序化量化交易平臺為投資者建立多元化投資手段',
                        jp:'基礎的なプロジェクトと投資者へのサービス以外、我々は以下の製品と基礎施設を開発していく。このようにして、資産管理のプラットフォームの基礎技術サービスシステムを設ける<br><br>ユーザーが多種のデジタル資産を保存しやすいように、クロスチェーンの支払いで多種のデジタル資産ウオレットシステムを構築する。<br>大衆でも直接投資に参加できて、ファンド投資から利益を得るように、BitCV は小額から高額までのファンドを念入りに選んだ<br>デジタル資産と実物資産が交換できる競売プラットフォームを設ける<br>プロジェクト的で量的な取引プラットフォーム'
                    }
                },
            ]
        },

        team: {
            name: { en:'Our team', cn:'團隊', jp:'チーム' },
            list: [
                {   
                    img: 'user-wuxing.png',
                    name: { en:'Wu Xing', cn:'伍星', jp:'伍星' },
                    intro: {
                        en: 'Member of Global Entrepreneur Leadership Program of Tsinghua University PBC School of Finance; core member of the sixth self-organizing board team of Hejun Business School; monitor of the third Sinovation Ventures Brotherhood. Member of the foundation team of Happy Net; advanced full stack architect. He founded UCAI, a domestic IT vocational education brand, and got many rounds of financing from funds such as Sinovation Ventures. He once managed the design and performance optimization of hundreds of millions of UV in Happy Net, and achieved more than 99.99% reliability services. Duties: Leading technology and the overall strategic planning of the foundation project.',
                        cn: '清華大學五道口金融學院全球創業領袖班學員。2004年畢業於北京工商大學，和君六屆自組織理事團隊核心成員、創新工場兄弟會3期班班長。開心網創始團隊成員，高級全棧架構師，創辦國内IT職業教育品牌優才學院，獲得創新工場等基金多輪融資，曾主導開心網數以億計UV的架構設計與性能優化，實現99.99%以上的可靠性服務。職責:基金會技術與項目整體戰略規劃。',
                        jp: '清華大学五道口金融学院グローバル創業リーダークラスの成員。2004 年に北京工商大学を卒業した。和君第六回自組織管理チームの核心メンバー。創新工業兄弟会第三回クラスの級長。開心ウェブサイトの創始チームの成員。高級フルスタックエンジニア。国内における IT 職業教育優才学院を創業し、創新工場などから多様な融資を受け、開心ウェブサイトの数億もの UV のデザインやパフォーマンスの最適化を主導し、99.99％以上の信頼性のあるサービスを実現した。役割：基金の技術とプロジェクト総体の戦略企画。'
                    }
                },
                {   
                    img: 'user-jiagui.png?1',
                    name: { en:'Xiong Jiagui', cn:'熊家貴', jp:'熊家貴' },
                    intro: {
                        en: 'Graduated from Tsinghua University; senior R & D engineer in Sina; python group leader in iAsk; chief architect in Happy Net. He is proficient in Linux, Unix infrastructure research and development, and provide independently storage, communications and other middleware services. He once managed the design of millions of concurrent online instant messaging system in Happy Net. Duties: Leading the design of the underlying protocol of the digital asset management chain and highly reliable underlying platform.',
                        cn: '畢業於清華大學，曾任新浪資深研發工程師，愛問爬蟲組組長，開心網首席架構師。精通Linux、Unix底層研發，獨立實現存儲、通信等多種中間件服務。曾主導開心網數百萬並發在線即時通信系統設計。職責:主導數字資管鏈的底層協議設計和高可靠底層平臺設計。',
                        jp: '清華大学を卒業した。Sina のプロのベテランエンジニアであった。愛問爬虫グループのリーダー、開心ウェブサイトの首席エンジニア。Linux、Unix のベース開発の専門家で、独立でストレージ、通信など様々な中間サービスを実現した。開心ウェブサイトの数百万ものインスタントメッセンジャーシステムの設計を主導したという経験を持つ。役割：デジタル資管システムのベーシックプロトコルと信頼性のあるベーシックプラットホームの設計などの主導者を務める。'
                    }
                },
                {   
                    img: 'user-zhihua.png',
                    name: { en:'Liu Zhihua', cn:'劉志華', jp:'劉志華' },
                    intro: {
                        en: 'Full stack architect, Beijing Technology and Business University Department of Computer Science graduated in 2004, once worked in Halliburton, serving CNPC, Sinopec and other giant oil service information system development, is an early Kaixin technical team members, has been responsible for sales operations support Management technical work. In 2013, he worked as a technology leader in developing a digital campus at Renmin University of China. In 2014, he joined the talent CTO. Proficient in Internet product architecture design, good before and after the end of a variety of technology development and management.',
                        cn: '全棧架構師，北京工商大學計算機系2004年畢業，曾經就職於哈里伯頓，服務於中石油、中石化等巨頭企業油服信息化系統的開發，是開心網早期技術團隊成員，曾負責銷售運營支持管理部門技術工作。2013年作為技術負責人開發了中國人民大學數字校園，2014年加入優才創智任CTO。精於互聯網產品架構設計，擅長前後端多種技術開發管理。',
                        jp: 'フルスタックエンジニア。2004 に北京工商大学コンピューター学科を卒業した。ハリバートンに就職した。中国石油天然気集団公司、中国石油化工集団公司など大手会社の石油サービスデジタル化システムの開発に参加した。開心ウェブサイト初期の技術チームのメンバー。販売営業支持管理部の仕事を担当した。2013 年に技術責任者として中国人民大学デジタルスクールを開発し、2014 年に優才創智に入社し、CTO を務める。インタネット製品のデザイン、Front-end とbackstage supporter 多種技術開発管理が得意である。'
                    }
                },
                {   
                    img: 'user-wenling.png?2',
                    name: { en:'Wen Ling', cn:'文玲', jp:'文玲' },
                    intro: {
                        en: 'Received Master’s degree in Investment Management at Peking University; assistant of Apple’s Angel investor Mr. Li Zongnan in China; the China market leader of United States Shan Kwong Capital; former market director assistant of Sinovation Ventures; co-founder of Internet K12 online education. She is now the founder of PPTEAM Project, which provide magic performance technology service for the first-class Internet startups and first-class investment agencies senior executives, and cooperation companies include Tencent, Toutiao, the State Grid Cooperation of China and so on.',
                        cn: '北京大學投資管理碩士畢業;蘋果天使投資人華人創投之父李宗南先生中華區助理;美國山光資本中國市場負責人;曾任創新工場市場總監助理;互聯網K12在線教育公司聯合創始人;現PPTEAM項目創始人，為一流互聯網創業公司及一流投資機構高管提供幻演技術服務，合作公司包括騰訊、今日頭條、國家電網等。',
                        jp: '北京大学投資管理学の修士。アップルのエンジェル投資家「華人創投資の父」李宗南の中華区域の助役。アメリカ ShanKwong 資本の中国市場の責任者。創新工場総監の助役。インタネット会社Ｋ１２通信制教育会社の共同創業者。今のPPTEAM プロジェクトの創業者。一流のインタネット創業会社や投資会社の管理者に魔法的な表現技術サービスを提供している。パートナー企業にはテンセント、今日頭条、国家電網など大手会社がある。'
                    }
                }
            ]
        },

        roadmap: {
            name: { en:'Project Milestones and Roadmap', cn:'項目里程碑及路線圖', jp:'プロジェクトのマイルストーン及びロードマップ' },
            list: [
                {
                    date: { en:'Sep. 2017', cn:'2017年9月', jp:'2017年9月' },
                    content: {
                        en:'Initial planning of the project starts',
                        cn:'項目初始規劃啟動',
                        jp:'プロジェクト初期の企画を始める'
                    }
                },
                {
                    date: { en:'Nov. 2017', cn:'2017年11月', jp:'2017年11月' },
                    content: {
                        en:'Project prototype and the design and planning of project architecture is completed<br>The construction of the initial team is completed',
                        cn:'項目初始原型與產品架構設計與規劃完成<br>初始團隊構建完成',
                        jp:'プロジェクトの原型、商品のデザインと企画を完成する<br>チームを初めて作る'
                    }
                },
                {
                    date: { en:'Dec. 2017', cn:'2017年12月', jp:'2017年12月' },
                    content: {
                        en:'The first version of the project white paper is completed, Project development officially starts',
                        cn:'項目白皮書第一版完成，正式啟動項目開發',
                        jp:'プロジェクトの白書の第一版を作成し、公式にプロジェクトの開発を始める'
                    }
                },
                {
                    date: { en:'Jan. 15, 2018', cn:'2018年1月15日', jp:'2018年1月15日' },
                    content: {
                        en:'The first prototype product Demo is completed, white paper V1.1 is completed',
                        cn:'第一版產品原型Demo完成，白皮書V1.1版完成',
                        jp:'第一版の商品原型 Demo を完成する。白書 V1.1 版の作成'
                    }
                },
                {
                    date: { en:'Jan. 2018', cn:'2018年1月', jp:'2018年1月' },
                    content: {
                        en:'Angel Investment starts<br>The Finance and Economy Master is put into use<br>The issue and exchange of BCV, Chain project is put into use initially',
                        cn:'啟動天使輪融資<br>幣頭條開始運營<br>BCV發行與兑換,鏈項目初步投入應用',
                        jp:'エンジェル投資家が始める<br>BCV の発行と両替、チェーンヘッドラインを応用しはじめる'
                    }
                },
                {
                    date: { en:'Late Feb. 2018', cn:'2018年2月底', jp:'2018年2月下旬' },
                    content: {
                        en:'SaaS project starts officially, BCV enters the exchange',
                        cn:'幣SaaS項目正式運行,BCV上交易所',
                        jp:'SaaS を運営しはじめる。BCV は証券取引所に上場する'
                    }
                },
                {
                    date: { en:'Mar. 2018', cn:'2018年3月', jp:'2018年3月' },
                    content: {
                        en:'Chain service is put into use<br>Chain evaluation is put into use',
                        cn:'鏈服務投入運營<br>鏈評測投入運營',
                        jp:'チェーンサービスを運営しはじめる<br>チェーンイヴァリュゥエィシャンを運営しはじめる'
                    }
                },
                {
                    date: { en:'Aug. 2018', cn:'2018年8月', jp:'2018年8月' },
                    content: {
                        en:'Asset management business arrangement',
                        cn:'資管業務整理',
                        jp:'デジタル資管を運営しはじめる'
                    }
                },
                {
                    date: { en:'Mar. 2019', cn:'2019年3月', jp:'2019年 3月' },
                    content: {
                        en:'The construction of asset management ecology is completed',
                        cn:'資管生態建立完成',
                        jp:'デジタル資管の環境を整える'
                    }
                },
            ]
        },

        consultants: {
            name: { en:'Project consultants', cn:'項目顧問', jp:'プロジェクトの顧問' },
            list: [
                {
                    img: './img/brand-fengxin.png',
                    name: { en:'Feng Xin', cn:'馮新', jp:'馮新' },
                    intro: {
                        en:'Founder of Carbon 9 Accelerator and MBA of Nankai Business School. He once worked for Legend Capital, leading to invest in iFLYTEK and worked for True Fund as a partner in investment. He once invested in well-known projects such as SZ.',
                        cn:'碳9加速器創始人，南開大學商學院MBA，曾就職於聯想投資，主導投資科大訊飛，就職於真格基金，任投資合夥人，曾投資找鋼網等知名項目。',
                        jp:'炭素 9 加速器の創業者'
                    }
                },
                {
                    img: './img/brand-qiaoshuai.png',
                    name: { en:'Qiao Shuai', cn:'喬帥', jp:'喬帥' },
                    intro: {
                        en:'Partner of QKCG Capital',
                        cn:'清科晨光合夥人',
                        jp:'清科晨光のパートナー'
                    }
                },
                {
                    img: './img/brand-liujiang.png',
                    name: { en:'Liu Jiang', cn:'劉江', jp:'劉江' },
                    intro: {
                        en:'Founding partner of Sparkling Star Capital; founder of Xingheng Education; member of tagcash Foundation; co-founder of WuKang network.',
                        cn:'星耀資本創始合夥人，星恒教育創始人，tagcash基金會成員，五康成網聯合創始人。',
                        jp:'星輝資本創業パートナー'
                    }
                },
                {
                    img: './img/brand-jiangjie.png',
                    name: { en:'Jiang Jie', cn:'蔣傑', jp:'蔣傑' },
                    intro: {
                        en:'Founding partner of R-Coin Foundation partner of QinYi Capital Former COO of China Investment Center, involved in the operation of billions of funds',
                        cn:'R-Coin 基金會創始合夥人，欽一資本合夥人，曾任中國投資人中心COO，參與運作基金數十億',
                        jp:'R-Coin 基金の創業パートナー'
                    }
                },
                {
                    img: './img/brand-wushu.png',
                    name: { en:'Wu Shu', cn:'吳澍', jp:'吳澍' },
                    intro: {
                        en:'MBA of Cheung Kong Graduate School of Business; Angel investor; Founding Team Member of Tiger Snooker Network; Former Chief Editor of Black Horse; Witness and Founding Member of China\'s New Media Industry. He used to be the Director of LeTV Group Investment and Financing and Vice President of LeTV cloud computing capital operation. He has been in charge of capital business of LeTV Zhixin, LeTV Mobile, LeTV Finance, LeTV Cloud computing, etc. The total number of the funds he set up, investment and financing is over 30 trillion yuan.',
                        cn:'長江商學院MBA，天使投資人，虎嗅網創始團隊成員，原i黑馬主編，中國新媒體產業的見證者及鑄建者。曾任樂視集團投融資總監，樂視雲端運算資本運營副總裁。先後分管樂視致新、樂視移動、樂視金融、樂視雲端運算等公司的資本業務。纍計設立基金，對外投資，融資金額超300億元。',
                        jp:'エンジェル投資家'
                    }
                },
                {
                    img: './img/brand-xujizhe.png',
                    name: { en:'Xu Jizhe', cn:'徐繼哲', jp:'徐繼哲' },
                    intro: {
                        en:'Co-founder of the Smartweb Elastos driven by the blockchain; founder of philosophy community; pioneer and advocate of free software movement; blockchain expert.',
                        cn:'區塊鏈驅動的智能萬維網「亦來雲「聯合創始人，哲思社區創始人，自由軟體運動先鋒，倡導者，區塊鏈專家。',
                        jp:'亦来云の共同創業者、ブロックチェーンの専門家'
                    }
                },
                {
                    img: './img/brand-luofei.png',
                    name: { en:'Luo Fei', cn:'羅飛', jp:'羅飛' },
                    intro: {
                        en:'Domestic AI R & D pioneer; he has developed Moorobot, smart speakers and other smart products, and served as SAE in Sina; he is the earliest cloud computing development experts, and core developer of ThinkPHP; he is active in the open source community, and the open source projects he develops have been used by 2 million developers; he is also skilled in technical community operations, and operating a technology community comprised of technical directors from major companies.',
                        cn:'國内AI研發先行者，研發過小墨機器人、智能音箱等多款智能產品，曾任職新浪SAE，是國内最早的雲端運算開發專家，也是ThinkPHP核心開發者，活躍於開源社區，所開發的開源項目擁有200萬開發者使用，擅長技術社群運營，運營着各大公司技術總監組成的技術社群。',
                        jp:'国内 AI 開発の先駆者'
                    }
                },
                {
                    img: './img/brand-liyuechun.png',
                    name: { en:'Li Yuechun', cn:'黎躍春', jp:'黎躍春' },
                    intro: {
                        en:'Founder & CEO of Kongyi College',
                        cn:'孔壹學院創始人',
                        jp:'孔壱学院の創業者と CEO'
                    }
                },
                {
                    img: './img/brand-chengbinghao.png',
                    name: { en:'Cheng Binghao', cn:'程炳皓', jp:'程炳皓' },
                    intro: {
                        en:'CEO of Happy Net; investor.',
                        cn:'開心網CEO，投資人。',
                        jp:'開心ウェブサイトの CEO、投資人'
                    }
                },
                {
                    img: './img/brand-yushui.png',
                    name: { en:'Yu Shui', cn:'餘水', jp:'餘水' },
                    intro: {
                        en:'Co-founder of KCash; graduated from Nankai University; he has 7 years of management consulting experience, and used to serve as consultant partner for Hejun. He has provided strategic planning, business model design, organizational change and design, personnel training and service for a number of A-share listed companies.',
                        cn:'KCash 聯合創始人、畢業於南開大學，7年管理咨詢經驗，曾任和君咨詢業務合夥人，為多家A股上市公司提供戰略規劃及商業模式設計、組織變革與設計、人才培養與服務。',
                        jp:'KCash の共同創業者'
                    }
                },
                /*
                {
                    img: './img/brand-chengmingxia.png',
                    name: { en:'Cheng Mingxia', cn:'程明霞', jp:'程明霞' },
                    intro: {
                        en:'Assistant Dean of Tencent Research; former deputy editor of Harvard Business Review China.',
                        cn:'騰訊研究院助理院長，曾任《哈佛商業評論》中文版副主編。',
                        jp:'テンセント研究院の助役院長'
                    }
                },
                {
                    img: './img/brand-zhanglijun.png',
                    name: { en:'Zhang Lijun', cn:'張麗君' },
                    intro: {
                        en:'Executive director of Sinovation Ventures; graduated from Renmin University of China, with a master degree in technical economics and management. She joined Sinovation Ventures in 2011 and focused on investment in education. Successful investments include projects such as VIPKID, Box Fish, TheOne Smart Piano, among which VIPKID has gained hundreds of times of valuation growth and has grown into a unicorn in the industry.',
                        cn:'創新工場執行董事，畢業於中國人民大學，擁有技術經濟與管理碩士學位。2011年加入創新工場，專註於教育領域投資，曾成功主導投資VIPKID、盒子魚、TheOne智能鋼琴等項目，其中VIPKID獲得數百倍估值增長，成長為行業獨角獸。'
                    }
                },
                {
                    img: './img/brand-liutao.png',
                    name: { en:'Liu Tao', cn:'劉弢' },
                    intro: {
                        en:'Undergraduate of Renmin University of China; MBA of National University of Singapore. She used to be chief risk control officer of Head Office of the Agricultural Bank of China; Chief Marketing Officer of Asia Pacific of Interactive Brokers; Director of International Financial Investment and Operation of CRH; Director and Investment Director of Hong Kong Asian Culture Enterprise Company; Chairman of CITIC Huifu Investment Co., Ltd. ; since March 2017, she has been the partner of Beijing Cathay Venture Capital Fund Management Co., Ltd.',
                        cn:'畢業於新加坡國立大學，工商管理碩士。中國内地、香港、新加坡17年金融領域投資經驗。北京國泰創業投資基金管理有限公司管理合夥人。'
                    }
                },
                {
                    img: './img/brand-yuanye.png',
                    name: { en:'Yuan Ye', cn:'元野', jp:'元野' },
                    intro: {
                        en:'Graduated from the University of International Business and Economics and Windsor University in Canada. He joined KPMG Huazhen in September 2003 and joined Latitude Capital Group in 2004. He joined Ce Yuan Ventures in 2005 and has been the managing partner since then.',
                        cn:'畢業於對外經濟貿易大學，加拿大溫莎大學，2003年9月加入畢馬威華振會計師事務所，2004年加入樂通投資集團，2005年加入策源創投，至今任主管合夥人。',
                        jp:'策源創投のパートナー'
                    }
                },
                */
                {
                    img: './img/brand-zhubo.png',
                    name: { en:'Zhu Bo', cn:'朱波', jp:'朱波' },
                    intro: {
                        en:'Founder of InnoValley',
                        cn:'創新穀基金創始人',
                        jp:'創新谷基金の創業者'
                    }
                },
                {
                    img: './img/brand-huangtianwei.png',
                    name: { en:'Huang Tianwei', cn:'黄天威', jp:'黄天威' },
                    intro: {
                        en:'Founder of btc38.com',
                        cn:'比特時代創始人',
                        jp:'ビットコイン時代の先駆者'
                    }
                },
                {
                    img: './img/brand-jiangen.png',
                    name: { en:'Jiang En', cn:'江恩', jp:'江恩' },
                    intro: {
                        en:'Commander of Dogecoin',
                        cn:'狗狗幣會長',
                        jp:'ドージコインの会長'
                    }
                },
                {
                    img: './img/brand-wangzhaowei.png',
                    name: { en:'Wang Zhaowei', cn:'王朝薇', jp:'王朝薇' },
                    intro: {
                        en:'Founder of Wei Ling Wealth',
                        cn:'維瓴財富創始人',
                        jp:'維瓴財富の創業者'
                    }
                },
                {
                    img: './img/brand-chencaigen.png',
                    name: { en:'Chen Caigen', cn:'陳菜根', jp:'陳菜根' },
                    intro: {
                        en:'Partenr of Weiyou Capital',
                        cn:'區塊鏈知名自媒體，為友資本合夥人',
                        jp:'為友資本のパートナー'
                    }
                },
                {
                    img: './img/brand-xuxinquan.png',
                    name: { en:'Xu Xinquan', cn:'徐昕泉', jp:'徐昕泉' },
                    intro: {
                        en:'Russia and eastern Europe President of Letv',
                        cn:'中國樂視集團俄羅斯及東歐地區總裁',
                        jp:'楽視集団ロシアと東ヨーロッパの総裁'
                    }
                },

            ]
        },

        institutions: {
            name: { en:'Institutions', cn:'機構', jp:'組織' },
            list: [
                //'./img/project-linkvc.jpg', //Link VC
                './img/project-genesis.jpg',
                './img/project-xingyue.jpg', //星耀资本
                './img/project-tan9.jpg', //碳 9 加速器
                //'./img/project-chuangxin.jpg', //创新工场(曾投资 YeeCall、极路 由等)
                //'./img/project-guotai.jpg', //国泰创投(曾投资 比特大陆)
                //'./img/project-ceyuan.jpg', //策源创投(曾投资 OKCoin)
                './img/project-guanghe.jpg', //广禾资本
                './img/project-huozhong.jpg', //火种资本
                './img/project-bdfund.jpg', //梦工场基金
                './img/project-innovalley.jpg', //创新谷基金
                //'./img/project-yuming.jpg', //域名资本
            ]
        },

        media: {
            name: { en:'Media report', cn:'媒体报道', jp:'メディアカバレッジ' },
            list: [

                {
                    img: './img/media-36kr.png',
                    url: 'http://36kr.com/p/5116931.html',
                    name: { en:'36kr', cn:'36kr', jp:'36kr' },
                    intro: {
                        en:'区块链应用 | 数字资产管理平台「BitCV」获千万级天使融资',
                        cn:'区块链应用 | 数字资产管理平台「BitCV」获千万级天使融资',
                        jp:'区块链应用 | 数字资产管理平台「BitCV」获千万级天使融资'
                    }
                },
                {
                    img: './img/media-heima.png',
                    url: 'http://www.iheima.com/zixun/2018/0130/167135.shtml',
                    name: { en:'iheima', cn:'黑马网', jp:'黑马网' },
                    intro: {
                        en:'区块链新锐BitCV获千万级天使融资：或成数字资产管理平台开创者',
                        cn:'区块链新锐BitCV获千万级天使融资：或成数字资产管理平台开创者',
                        jp:'区块链新锐BitCV获千万级天使融资：或成数字资产管理平台开创者'
                    }
                },
                {
                    img: './img/media-yiou.png',
                    url: 'https://www.iyiou.com/p/65488',
                    name: { en:'亿欧', cn:'亿欧', jp:'亿欧' },
                    intro: {
                        en:'区块链新锐BitCV获千万级天使融资——或成数字资产管理平台开创者',
                        cn:'区块链新锐BitCV获千万级天使融资——或成数字资产管理平台开创者',
                        jp:'区块链新锐BitCV获千万级天使融资——或成数字资产管理平台开创者'
                    }
                },
                {
                    img: './img/media-tencent.png',
                    url: 'http://new.qq.com/omn/20180130/20180130A0EC6M.html',
                    name: { en:'tencent', cn:'腾讯网', jp:'腾讯网' },
                    intro: {
                        en:'区块链BitCV获千万级天使融资：或成数字资产管理平台开创者',
                        cn:'区块链BitCV获千万级天使融资：或成数字资产管理平台开创者',
                        jp:'区块链BitCV获千万级天使融资：或成数字资产管理平台开创者'
                    }
                },
                {
                    img: './img/media-souhu.png',
                    url: 'http://www.sohu.com/a/219786398_439726',
                    name: { en:'sohu', cn:'搜狐', jp:'搜狐' },
                    intro: {
                        en:'数字资产管理平台BitCV获千万级天使融资',
                        cn:'数字资产管理平台BitCV获千万级天使融资',
                        jp:'数字资产管理平台BitCV获千万级天使融资'
                    }
                },
                {
                    img: './img/media-jinrongjie.png',
                    url: 'http://biz.jrj.com.cn/2018/01/30141124030848.shtml',
                    name: { en:'金融界', cn:'金融界', jp:'金融界' },
                    intro: {
                        en:'区块链新锐BitCV获千万级天使融资',
                        cn:'区块链新锐BitCV获千万级天使融资',
                        jp:'区块链新锐BitCV获千万级天使融资'
                    }
                },
                {
                    img: './img/media-guangming.png',
                    url: 'http://it.gmw.cn/2018-01/30/content_27515552.htm',
                    name: { en:'光明网', cn:'光明网', jp:'光明网' },
                    intro: {
                        en:'数字资产管理平台BitCV获千万级天使融资',
                        cn:'数字资产管理平台BitCV获千万级天使融资',
                        jp:'数字资产管理平台BitCV获千万级天使融资'
                    }
                },
                {
                    img: './img/media-china.png',
                    url: 'http://tech.china.com.cn/entrepreneur/20180130/334710.shtml',
                    name: { en:'china.com.cn', cn:'中国网', jp:'中国网' },
                    intro: {
                        en:'数字资产管理平台BitCV获千万级天使融资',
                        cn:'数字资产管理平台BitCV获千万级天使融资',
                        jp:'数字资产管理平台BitCV获千万级天使融资'
                    }
                },
                /*
                {
                    img: './img/media-touzijie.png',
                    url: 'http://pe.pedaily.cn/201801/426853.shtml',
                    name: { en:'投资界', cn:'投资界', jp:'投资界' },
                    intro: {
                        en:'数字资产管理平台BitCV获千万级天使融资',
                        cn:'数字资产管理平台BitCV获千万级天使融资',
                        jp:'数字资产管理平台BitCV获千万级天使融资'
                    }
                },
                */
            ]
        },


    },
    mounted() {
    },
    methods: {
    }
});
