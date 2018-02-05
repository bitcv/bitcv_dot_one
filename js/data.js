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
                btn: { en:'Download White Paper', cn:'下載白皮書', jp:'ホワイトペーパーのダウンロード', ko:'백서 다운로드' },
                doc: { en:'doc/bitcv_whitepaper_en.pdf', cn:'doc/bitcv_whitepaper_tr.pdf', jp:'doc/bitcv_whitepaper_jp.pdf', ko:'doc/bitcv_whitepaper_ko.pdf' }
            },
            ppt: {
                btn: { en:'Download Project Presentation', cn:'下載PPT', jp:'PPTをダウンロード', ko:'PPT 다운로드' },
                doc: { en:'doc/bitcv_project_en.pdf', cn:'doc/bitcv_project_tr.pdf', jp:'doc/bitcv_project_jp.pdf', ko:'doc/bitcv_project_ko.pdf' }
            }
        },

        product: {
            name: { en:'Digital Asset Management Solutions', cn:'數字資產管理解決方案' ,jp:'デジタル資産管理の方策', ko:'디저털자산관리해결방안' },
            list: [
                {
                    icon: 'icon ti-desktop',
                    title: { en:'Project Investment and Financing SaaS System - SaaS', cn:'項目投融SaaS系統——投融SaaS', jp:'プロジェクト投資･融資 SaaS システム――投融資 SaaS', ko:'프로젝트융자 SaaS 시스템—융자 SaaS' },
                    content: {
                        en:'For every independent project, its information and data are independent and isolated from other projects. For the project party, from domain name to display, they are independent and unique, and create exclusive and professional images.',
                        cn:'每一個獨立的項目，資訊與數據與别的項目隔離，從域名到展示，都有獨立性和唯一性，造就專屬、專業的形象。',
                        jp:'それぞれの独立したプロジェクト、情報、データは、ドメイン名からディスプレイまで、他のプロジェクトとは独立しています。',
                        ko:'각각의 독립적 인 프로젝트, 정보 및 데이터는 도메인 이름에서 디스플레이에 이르기까지 다른 프로젝트와 분리되어 독 립적이고 전문적인 이미지를 만들어 내며 독립적이며 독창적입니다.'
                    }
                },
                {
                    icon: 'icon ti-user',
                    title: { en:'Deep Mining and Investigation of Digital Asset – Finance and Economy Master', cn:'數字資產深度挖掘與調研——財經通', jp:'デジタル資産の深堀りと調査研究――財金通', ko:'디저털자산 심도적탐색과 조사연구——재경통' },
                    content: {
                        en:'The BitCV team consists of experienced investors, blockchain technical experts, senior media professionals, who, with all the experience in the fields of investment, media and technology, can scrutinize every aspect of a project.',
                        cn:'資深投資人、區塊鏈技術專家、資深媒體人士，全面挖掘項目團隊背景、項目技術實力評估、項目投資人訪談等，讓公眾投資人全面、公正、客觀地瞭解項目的方方面面',
                        jp:'シニア投資家、ブロック鎖技術の専門家、シニアメディアの人々、総合的な採掘プロジェクトチームの背景、技術力とプロジェクト評価、プロジェクト投資家のインタビュー、公共投資プロジェクトのすべての側面を包括的、公正かつ客観的理解',
                        ko:'고위 투자자, 블록 체인 기술 전문가 및 숙련 된 미디어 전문가는 프로젝트 팀의 배경을 완전히 활용하고 프로젝트의 기술력을 평가하며 프로젝트 투자자와 면담을함으로써 모든 공공 투자자가 포괄적이고 공정하며 객관적인 방식으로 프로젝트의 모든 측면을 이해할 수 있도록합니다'
                    }
                },
                {
                    icon: 'icon ti-ruler-alt',
                    title: { en:'Digital Asset Management Evaluation Platform – Evaluation Chain', cn:'數字資管評測平臺——鏈評測', jp:'デジタル資産管理の評価･測定プラットホーム——チェン評価･測定', ko:'디지털자산관리평가플랫폼——체인 평가&추산' },
                    content: {
                        en:'Besides the assessment of each dimension, there are analyses based on historical models and data, including the artificial intelligence assessment and the prediction of the prospects with machine learning model. All these rely heavily on analyzing and data processing, of which the BitCV team has accumulated considerable experience.',
                        cn:'基於大數據與人工智能技術，做好項目價值發現與投資者評估，結合傳統金融行業大量的從業經驗，研發風險評估與風控模型。',
                        jp:'大きなデータデータや人工知能技術に基づいて、プロジェクト価値の発見と投資家の評価が行われ、従来の金融業界の多くの実務家が組み合わされて、リスクアセスメントやリスクコントロールモデルが開発されています。',
                        ko:'빅 데이터 및 인공 지능 기술을 기반으로 프로젝트 가치 발견 및 투자자 평가가 이루어지며 전통적인 금융 업계의 수많은 실무자가 결합되어 위험 평가 및 위험 관리 모델을 개발합니다.'
                    }
                },
                {
                    icon: 'icon ti-heart',
                    title: { en:'Digital Asset OMO Service – Service Chain', cn:'數字資產OMO服務——鏈服務', jp:'デジタル資産 OMO(Online-Mobile-Offline)サービス——ブロックチェンサービス', ko:'디저털자산 OMO 서비스——체인서비스' },
                    content: {
                        en:'Apart from technical services, BitCV, as a digital asset management engine, has the responsibility and obligation to serve the industry ecology as well, as to provide convenience for the project party and investors.',
                        cn:'不僅僅是為數字資產項目的初始發佈助跑，更希望從技術到人才，構建起真正的落地能力支撑，這樣才是真正有助於這個生態。',
                        jp:'デジタル資産プロジェクトの最初のリリースを支援するだけでなく、技術から才能に着陸するための本当の支援能力を構築し、エコロジーを本当に助けることを望んでいます。',
                        ko:'디지털 자산 프로젝트의 초기 출시를 돕는 것뿐만 아니라 기술에서 재능에 이르기까지 실제 지원 능력을 구축하여 실제 생태를 돕기를 희망합니다.'
                    }
                },
            ]
        },

        arch: {
            name: { en:'Project Technical Architecture and Product Realization', cn:'項目技術架構與產品實現', jp:'プロジェクト技術の構造と製品の実現', ko:'프로젝트기술구조와 제품실현' },
            list: [
                {
                    img: './img/layer-1.png',
                    title: { en:'Design of BitCV Digital Asset Management Chain', cn:'BitCV 數字資管鏈的設計', jp:'BitCV デジタル資産管理チェーンの設計', ko:'BitCV 디지털자산관리체인 설계' },
                    content: {
                        en: 'BitCV is an application-based blockchain product, so we are using the blockchain and existing technologies to serve the field of digital asset management. In principle, we do not conduct our own research and development of the underlying chain design on a large scale, but according to the current preliminary research and development, we use and enhance the use of the following technologies.<p>1 Blockchain distributed ledger technology</p><p>2 Sidechain cross-chain trading technology</p><p>3 DPOS consensus algorithm</p><p>4 Intelligent contract technology</p>',
                        cn: 'BitCV使用區塊鏈技術，記錄所有涉及資金的交易行為，先在側鏈上或者鏈外記錄與交易，最終寫入BitCV資產管理鏈主鏈上去，保證資產管理主鏈是一個隨着交易記錄增長的，無法篡改和偽造的區塊鏈。在未來，區塊鏈分布式存儲的成熟，BitCV資產管理鏈主鏈也將轉移或者存儲在區塊鏈分布式存儲上。真正做到了去中心化。',
                        jp: 'BitCVはブロックチェーン技術を使用して、資金を含むすべてのトランザクションを記録します。記録とトランザクションは、最初にサイドチェーンまたはチェーンから外し、最後にBitCV資産管理チェーンのメインチェーンで行い、資産管理バックボーンはトランザクション履歴 改ざんと偽造はできないブロックチェーン。 将来、ブロックチェーンに成熟した分散ストレージがあれば、BitCV資産管理チェーンの主なチェーンもブロックチェーン分散ストレージに転送または格納されます。 本当に分散されています。',
                        ko: 'BitCV는 블록 체인 기술을 사용하여 자금과 관련된 모든 거래를 기록합니다. 레코드 및 거래는 먼저 측 체인 또는 체인 외부에서 수행되고 마지막으로 BitCV 자산 관리 체인의 메인 체인에서 수행되어 자산 관리 백본이 트랜잭션 내역에 따라 증가하는 트랜잭션인지 확인합니다 훼손되거나 위조 될 수없는 블록 체인. 장래에는 블록 체인에 성숙한 분산 스토리지가 있으면 BitCV 자산 관리 체인의 주 체인도 블록 체인 분산 스토리지에 전송되거나 저장됩니다. 진정으로 분권화되었습니다.'
                    },
                },
                {
                    img: './img/layer-2.png',
                    title: { en:'Reliable and scalable microservices architecture design', cn:'高可靠可擴展的的微服務架構設計', jp:'信頼と展開できるマイクロサービスの構造設計', ko:'고신뢰및확장의 마이크로서비스구조설계' },
                    content: {
                        en:'As the digital asset service engine platform at the bottom of the blockchain, SaaS cloud service needs to be provided first. Because every project is intended for global clients and provides multi-end support, it is necessary to ensure that the service is reliable and easy to expand and maintain. The goal of reliability should be 99.99%.<br>Second, as a digital asset management service platform, a large number of digital asset exchange data of the clients are involved. Although after the clients purchase the digital assets, the corresponding tokens or the digital assets themselves will be sent into the official crowdfunding wallet, the statistics, as well as the middle storage, are still stored inside the platform, therefore the security, encryption and isolation of the data are strictly required.',
                        cn:'作為區塊鏈底層的數字資產服務引擎平臺，首先需要提供的是SaaS雲服務，由於任意一個項目，面向全球用戶使用，多端支持，因此需保證服務高可靠，應該目標是99.99%的可靠性，以及方便擴容、維護。<br>其次作為數字資產管理服務平臺，有涉及到大量的用戶代幣兑換數據，儘管用戶在購買了代幣之後，幣本身會打入官方眾籌錢包，但是統計數據，以及中間存儲，都在平臺内部，所以對數據的安全性、加密存儲與隔離等有較高的要求。',
                        jp:'ブロックチェーンデジタルアセットサービスエンジンプラットフォームの最下部にある、最初に提供する必要があるSaaSクラウドサービスは、いずれかのプロジェクトのために、グローバルユーザー、マルチエンドサポートのためには、信頼性の高いサービスを確保する必要があります。目標は、99.99％の信頼性と、拡張の容易さ、メンテナンスでなければなりません。<br>第二に、デジタル資産管理サービスプラットフォームとして、ユーザーがトークンを購入したにもかかわらず、多数のユーザートークンがデータ交換に関与していますが、通貨自体を公式のクラウドファンディングウォレットに購入しましたが、統計情報と中間ストレージはプラットフォーム したがって、データのセキュリティ、暗号化、ストレージおよびアイソレーションの要件が高くなります。',
                        ko:'블록체인 Bottom 의 디지털자산서비스엔진플랫폼으로써 먼저 필요한은 SaaS 크라우드서비스가 제공이며, 어느 프로젝트이던 간에 전 세계를대상으로 사용하며, 많은 대상을 지원합니다. 그로인해 서비스의 고신뢰성이 필요하며, 저희이 목표는 99.9%의 신뢰성과 확장편리성, 유지관리입니다.<br>둘째, 디지털 자산 관리 서비스 플랫폼으로 사용자가 토큰을 구입했지만 공식적인 크라우드 펀딩 지갑에 통화 자체를 구입했지만 통계 및 중간 저장 장치가 플랫폼에 있지만 데이터 교환에 관련된 많은 수의 사용자 토큰이 있습니다 따라서 데이터 보안, 암호화, 저장 및 격리에는 더 높은 요구 사항이 있습니다.'
                    }
                },
                {
                    img: './img/layer-3.png',
                    title: { en:'Simple and friendly platform of project and investment', cn:'簡潔好用的項目與投資平臺', jp:'簡潔で使いやすいプロジェクトと投資プラットフォーム', ko:'간단&편리한 프로젝트투자플랫폼' },
                    content: {
                        en:'Fill in the basic information to generate the main site by one touch<br>Provide investors with project management services and clear results<br>Provide the project party with stage progress<br>Provide financiers with project data planning',
                        cn:'需要融資的項目，透過申請獨立的發佈站，經過審核之後即可以開通SaaS平臺，開通成功，獲得該系統的管理員用戶名和密碼，完成項目資料登記、完善與獨立發佈站的建設。在建設的過程中，需要提供的基本資料，包括但不限於市場分析、項目亮點、媒體報道、代幣額度、價格設定、項目團隊、合作夥伴、路徑圖等等。<br><br>填寫基本資料，一鍵生成項目主站<br>項目管理服務，讓投資人清晰放心<br>項目階段進度，讓項目方瞭然於胸<br>項目數據規劃，讓融資方運籌帷幄',
                        jp:'SaaSプラットフォームのオープンに成功すると、システム管理者のユーザー名とパスワードの登録、プロジェクトデータの完全な登録と改善、独立した出版局の設置が行われます。 建設の過程では、市場分析、プロジェクトハイライト、メディアカバレッジ、トークン金額、価格設定、プロジェクトチーム、パートナー、ロードマップなど、基本的な情報を提供する必要があります。<br><br>プロジェクト管理サービス、投資家の明確かつ確実な<br>プロジェクトの段階の進行は、胸のプロジェクト側<br>プロジェクトデータの計画、資金調達側の戦略を立てる',
                        ko:'파이낸싱을 필요로하는 프로젝트는 독립적 인 포스트 스테이션의 승인을 거쳐 SaaS 플랫폼으로 개방 될 것이며, SaaS 플랫폼이 성공적으로 개설되면 시스템 관리자의 사용자 이름과 암호가 등록되고 프로젝트 데이터가 완전히 등록되고 개선되며 독립적 인 출판 스테이션이 설립 될 것입니다. 건설 과정에서 우리는 시장 분석, 프로젝트 하이라이트, 언론 보도, 토큰 금액, 가격 설정, 프로젝트 팀, 파트너, 로드맵 등을 포함하되 이에 국한되지 않는 기본 정보를 제공해야합니다.<br><br>주요 정보를 입력하십시오. 핵심 프로젝트 마스터입니다.<br>프로젝트 단계의 진행, 그래서 가슴의 프로젝트 측면'
                    }
                },
                {
                    img: './img/layer-4.png',
                    title: { en:'Future product planning', cn:'未來的產品規劃', jp:'未来の製品への企画', ko:'미래 제품기획' },
                    content: {
                        en:'Use the multi-digital assets wallet system constructed by cross-chain payment to make it convenient for clients to deposit and invest.<br>Develop a fund-investment system and invest in the industry\'s well-known digital asset funds. Well-known digital asset funds generally have higher thresholds.<br>Provide the trading and auction platform for digital assets and real assets.<br>Provide the programmed and quantitative trading platform.',
                        cn:'除了做好基礎的項目和投資者服務之外，我們將逐步開發以下產品和底層基礎設施，以構建整個資管平臺底層技術服務體系。<br><br>使用跨鏈支付構建多幣種錢包系統<br>開發基金跟投系統參與知名數字資產基金的投資<br>數字資產、實物資產對標交易拍賣平臺<br>程序化量化交易平臺為投資者建立多元化投資手段',
                        jp:'基礎的なプロジェクトと投資者へのサービス以外、我々は以下の製品と基礎施設を開発していく。このようにして、資産管理のプラットフォームの基礎技術サービスシステムを設ける<br><br>ユーザーが多種のデジタル資産を保存しやすいように、クロスチェーンの支払いで多種のデジタル資産ウオレットシステムを構築する。<br>大衆でも直接投資に参加できて、ファンド投資から利益を得るように、BitCV は小額から高額までのファンドを念入りに選んだ<br>デジタル資産と実物資産が交換できる競売プラットフォームを設ける<br>プロジェクト的で量的な取引プラットフォーム',
                        ko:'자금력이 좋은 프로젝트와 투자자 서비스 외에도 다음과 같은 제품과 인프라를 점진적으로 개발하여 전체 자산 관리 플랫폼을위한 기반 기술 서비스 플랫폼을 구축 할 것입니다.<br><br>상호 연결된 지불을 사용하여 다기능 지갑 시스템 구축<br>잘 알려진 디지털 자산 펀드 투자에 참여할 개발 기금 및 투자 시스템<br>디지털 자산, 물리적 자산 벤치마킹 경매 거래 플랫폼<br>프로그램 투자자를위한 양적 거래 플랫폼은 다양한 투자 도구를 설립'
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
                        jp: '清華大学五道口金融学院グローバル創業リーダークラスの成員。2004 年に北京工商大学を卒業した。和君第六回自組織管理チームの核心メンバー。創新工業兄弟会第三回クラスの級長。開心ウェブサイトの創始チームの成員。高級フルスタックエンジニア。国内における IT 職業教育優才学院を創業し、創新工場などから多様な融資を受け、開心ウェブサイトの数億もの UV のデザインやパフォーマンスの最適化を主導し、99.99％以上の信頼性のあるサービスを実現した。役割：基金の技術とプロジェクト総体の戦略企画。',
                        ko: '청화대학오다구금융학원 전세계창업리더쉽반 수강생。2004 년베이징경영대학졸업，허쥔 6 회 이사조직팀 핵심멤버、Sinovation 벤쳐 형제회 3 기반장。Happy net 창립멤버，고급풀스택구축사，국내 IT 직업교육브랜드우수학원창립，Sinovation 벤쳐 등의 기금 복수기금 획득,이전 1 억대의 UV 의 Happy Net 구조설계와 성능우수화를 주도99.99%이상의 신뢰가는 서비스 실현。직책：기금회기술 및 프로젝트전략기획。전체전략기획。'
                    }
                },
                {   
                    img: 'user-jiagui.png',
                    name: { en:'Xiong Jiagui', cn:'熊家貴', jp:'熊家貴', ko:'웅가귀 연합창립자' },
                    intro: {
                        en: 'Graduated from Tsinghua University; senior R & D engineer in Sina; python group leader in iAsk; chief architect in Happy Net. He is proficient in Linux, Unix infrastructure research and development, and provide independently storage, communications and other middleware services. He once managed the design of millions of concurrent online instant messaging system in Happy Net. Duties: Leading the design of the underlying protocol of the digital asset management chain and highly reliable underlying platform.',
                        cn: '畢業於清華大學，曾任新浪資深研發工程師，愛問爬蟲組組長，開心網首席架構師。精通Linux、Unix底層研發，獨立實現存儲、通信等多種中間件服務。曾主導開心網數百萬並發在線即時通信系統設計。職責:主導數字資管鏈的底層協議設計和高可靠底層平臺設計。',
                        jp: '清華大学を卒業した。Sina のプロのベテランエンジニアであった。愛問爬虫グループのリーダー、開心ウェブサイトの首席エンジニア。Linux、Unix のベース開発の専門家で、独立でストレージ、通信など様々な中間サービスを実現した。開心ウェブサイトの数百万ものインスタントメッセンジャーシステムの設計を主導したという経験を持つ。役割：デジタル資管システムのベーシックプロトコルと信頼性のあるベーシックプラットホームの設計などの主導者を務める。',
                        ko: '청화대학 공정물리학졸업，이전 Sina 경력직연구&개발엔지니어 이전 Sina 경력직연구&개발엔지니어,Iaskworm 팀장，Happy Net 첫 번째 구축사.정통 Linux、Unix Bottom 개발，독립적으로저장、통신 등의 중간 서비스 실현,이전 수 백만대의 Happy net 에서 Instant massage , 시스템 설계,직책：디지털자산관리체인의 Bottom 협약설계 및 고신뢰성 Bottom플랫폼설계.'
                    }
                },
                {   
                    img: 'user-zhihua.png',
                    name: { en:'Liu Zhihua', cn:'劉志華', jp:'劉志華', ko:'유지화 연합창립자' },
                    intro: {
                        en: 'Full stack architect, Beijing Technology and Business University Department of Computer Science graduated in 2004, once worked in Halliburton, serving CNPC, Sinopec and other giant oil service information system development, is an early Kaixin technical team members, has been responsible for sales operations support Management technical work. In 2013, he worked as a technology leader in developing a digital campus at Renmin University of China. In 2014, he joined the talent CTO. Proficient in Internet product architecture design, good before and after the end of a variety of technology development and management.',
                        cn: '全棧架構師，北京工商大學計算機系2004年畢業，曾經就職於哈里伯頓，服務於中石油、中石化等巨頭企業油服信息化系統的開發，是開心網早期技術團隊成員，曾負責銷售運營支持管理部門技術工作。2013年作為技術負責人開發了中國人民大學數字校園，2014年加入優才創智任CTO。精於互聯網產品架構設計，擅長前後端多種技術開發管理。',
                        jp: 'フルスタックエンジニア。2004 に北京工商大学コンピューター学科を卒業した。ハリバートンに就職した。中国石油天然気集団公司、中国石油化工集団公司など大手会社の石油サービスデジタル化システムの開発に参加した。開心ウェブサイト初期の技術チームのメンバー。販売営業支持管理部の仕事を担当した。2013 年に技術責任者として中国人民大学デジタルスクールを開発し、2014 年に優才創智に入社し、CTO を務める。インタネット製品のデザイン、Front-end とbackstage supporter 多種技術開発管理が得意である。',
                        ko: '풀테크구축사，2004 년 북경경영대학컴퓨터과 졸업，이전 할리버튼에서 종사，중국 석유&화학등의 대기업에 석유서비스정보화시스템개발,Happy Net 초기 기술팀 멤버,이전 판매운영지불관리부서에서 기술부분 책임2013 년 기술책임자로 중국인민대학 디지털캠퍼스 개발2014 년 Excellent Powerise 에 가입 및 CTO 임명,인터넷제품구축설계진행,Frong/Back-End 의 다양한 기술개발&관리에 정통.'
                    }
                },
                {   
                    img: 'user-wenling.png',
                    name: { en:'Wen Ling', cn:'文玲', jp:'文玲', ko:'문령 연합창립자' },
                    intro: {
                        en: 'Received Master’s degree in Investment Management at Peking University; assistant of Apple’s Angel investor Mr. Li Zongnan in China; the China market leader of United States Shan Kwong Capital; former market director assistant of Sinovation Ventures; co-founder of Internet K12 online education. She is now the founder of PPTEAM Project, which provide magic performance technology service for the first-class Internet startups and first-class investment agencies senior executives, and cooperation companies include Tencent, Toutiao, the State Grid Cooperation of China and so on.',
                        cn: '北京大學投資管理碩士畢業;蘋果天使投資人華人創投之父李宗南先生中華區助理;美國山光資本中國市場負責人;曾任創新工場市場總監助理;互聯網K12在線教育公司聯合創始人;現PPTEAM項目創始人，為一流互聯網創業公司及一流投資機構高管提供幻演技術服務，合作公司包括騰訊、今日頭條、國家電網等。',
                        jp: '北京大学投資管理学の修士。アップルのエンジェル投資家「華人創投資の父」李宗南の中華区域の助役。アメリカ ShanKwong 資本の中国市場の責任者。創新工場総監の助役。インタネット会社Ｋ１２通信制教育会社の共同創業者。今のPPTEAM プロジェクトの創業者。一流のインタネット創業会社や投資会社の管理者に魔法的な表現技術サービスを提供している。パートナー企業にはテンセント、今日頭条、国家電網など大手会社がある。',
                        ko: '북경대학투자관리석사졸업;Apple Angel 투자자인 중국계 외국인이며, 창립 투자자인부종남선생님의 중화구역 비서;미국 삼광 Sunland Fund 중국시장 책임자;이전 Sinovation 벤쳐시장 CEO 비서;인터넷 K12 Online 교육회사연합창립자;현 PPTEAM 프로젝트 창립자;일류 인터넷창업회사와 일류투자기관 고위층에매직쇼기술서비스제공;합작회사는 Tecent 회사, 금일 톱뉴스 국가전력 등이다.'
                    }
                }
            ]
        },

        roadmap: {
            name: { en:'Project Milestones and Roadmap', cn:'項目里程碑及路線圖', jp:'プロジェクトのマイルストーン及びロードマップ', ko:'프로젝트 이정표 및 노선도' },
            list: [
                {
                    date: { en:'Sep. 2017', cn:'2017年9月', jp:'2017年9月', ko:'2017년9월' },
                    content: {
                        en:'Initial planning of the project starts',
                        cn:'項目初始規劃啟動',
                        jp:'プロジェクト初期の企画を始める',
                        ko:'프로젝트기획시작'
                    }
                },
                {
                    date: { en:'Nov. 2017', cn:'2017年11月', jp:'2017年11月', ko:'2017년11월' },
                    content: {
                        en:'Project prototype and the design and planning of project architecture is completed<br>The construction of the initial team is completed',
                        cn:'項目初始原型與產品架構設計與規劃完成<br>初始團隊構建完成',
                        jp:'プロジェクトの原型、商品のデザインと企画を完成する<br>チームを初めて作る',
                        ko:'프로젝트초기원형과 제품구조설계&기획완성<br>초기프로젝트팀 구성완성'
                    }
                },
                {
                    date: { en:'Dec. 2017', cn:'2017年12月', jp:'2017年12月', ko:'2017년12월' },
                    content: {
                        en:'The first version of the project white paper is completed, Project development officially starts',
                        cn:'項目白皮書第一版完成，正式啟動項目開發',
                        jp:'プロジェクトの白書の第一版を作成し、公式にプロジェクトの開発を始める',
                        ko:'첫 번째 프로젝트백서 완성, 정식 프로젝트 개발시작'
                    }
                },
                {
                    date: { en:'Jan. 15, 2018', cn:'2018年1月15日', jp:'2018年1月15日', ko:'2018년1월15일' },
                    content: {
                        en:'The first prototype product Demo is completed, white paper V1.1 is completed',
                        cn:'第一版產品原型Demo完成，白皮書V1.1版完成',
                        jp:'第一版の商品原型 Demo を完成する。白書 V1.1 版の作成',
                        ko:'첫 버전 제품원형 Demo 완성, 백서 V1.1 버전 완성'
                    }
                },
                {
                    date: { en:'Jan. 2018', cn:'2018年1月', jp:'2018年1月', ko:'2018년1월' },
                    content: {
                        en:'Angel Investment starts<br>The Finance and Economy Master is put into use<br>The issue and exchange of BCV, Chain project is put into use initially',
                        cn:'啟動天使輪融資<br>幣頭條開始運營<br>BCV發行與兑換,鏈項目初步投入應用',
                        jp:'エンジェル投資家が始める<br>BCV の発行と両替、チェーンヘッドラインを応用しはじめる',
                        ko:'벤처캐피탈 융자시작<br>BCV 발행과 환전，투융자프로젝트초기응용투입'
                    }
                },
                {
                    date: { en:'Late Feb. 2018', cn:'2018年2月底', jp:'2018年2月下旬', ko:'2018년2월하순' },
                    content: {
                        en:'SaaS project starts officially, BCV enters the exchange',
                        cn:'幣SaaS項目正式運行,BCV上交易所',
                        jp:'SaaS を運営しはじめる。BCV は証券取引所に上場する',
                        ko:'재경통운용개시，BCV 거래소 상장'
                    }
                },
                {
                    date: { en:'Mar. 2018', cn:'2018年3月', jp:'2018年3月', ko:'2018년3월' },
                    content: {
                        en:'Chain service is put into use<br>Chain evaluation is put into use',
                        cn:'鏈服務投入運營<br>鏈評測投入運營',
                        jp:'チェーンサービスを運営しはじめる<br>チェーンイヴァリュゥエィシャンを運営しはじめる',
                        ko:'체인서비스운용투입<br>체인평가운용투입'
                    }
                },
                {
                    date: { en:'Aug. 2018', cn:'2018年8月', jp:'2018年8月', ko:'2018년8월' },
                    content: {
                        en:'Asset management business arrangement',
                        cn:'資管業務整理',
                        jp:'デジタル資管を運営しはじめる',
                        ko:'자산관리체인 전체 개봉 및 정식 운용'
                    }
                },
                {
                    date: { en:'Mar. 2019', cn:'2019年3月', jp:'2019年3月', ko:'2019년3월' },
                    content: {
                        en:'The construction of asset management ecology is completed',
                        cn:'資管生態建立完成',
                        jp:'デジタル資管の環境を整える',
                        ko:'자산관리환경건립완성'
                    }
                },
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
                {
                    img: './img/brand-guohongcai.png',
                    name: { en:'Guo Hongcai', cn:'郭宏才', jp:'郭宏才', ko:'광굉재' },
                    intro: {
                        en:'The well-known figure of digital',
                        cn:'币圈知名大佬',
                        jp:'ビットコイン界の専門家',
                        ko:'디지털화폐업계의 형님'
                    }
                },
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
                        cn:'區塊鏈驅動的智能萬維網「亦來雲「聯合創始人，哲思社區創始人，自由軟體運動先鋒，倡導者，區塊鏈專家。',
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
                    name: { en:'Xu Xinquan', cn:'徐昕泉', jp:'徐昕泉', ko:'서도천' },
                    intro: {
                        en:'Russia and eastern Europe President of Letv',
                        cn:'中國樂視集團俄羅斯及東歐地區總裁',
                        jp:'楽視集団ロシアと東ヨーロッパの総裁',
                        ko:'Letv 러시아 및 동유럽 지부장'
                    }
                },

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
                './img/project-huozhong.jpg', //火种资本
                './img/project-bdfund.jpg', //梦工场基金
                './img/project-innovalley.jpg', //创新谷基金
                //'./img/project-yuming.jpg', //域名资本
            ]
        },

        media: {
            name: { en:'Media report', cn:'媒体报道', jp:'メディアカバレッジ', ko:'언론 보도' },
            list: [

                {
                    img: './img/media-36kr.png',
                    url: 'http://36kr.com/p/5116931.html',
                    name: { en:'36kr', cn:'36kr', jp:'36kr', ko:'36kr' },
                    intro: {
                        en:'区块链应用 | 数字资产管理平台「BitCV」获千万级天使融资',
                        cn:'区块链应用 | 数字资产管理平台「BitCV」获千万级天使融资',
                        jp:'区块链应用 | 数字资产管理平台「BitCV」获千万级天使融资',
                        ko:'区块链应用 | 数字资产管理平台「BitCV」获千万级天使融资'
                    }
                },
                {
                    img: './img/media-heima.png',
                    url: 'http://www.iheima.com/zixun/2018/0130/167135.shtml',
                    name: { en:'iheima', cn:'黑马网', jp:'黑马网', ko:'黑马网' },
                    intro: {
                        en:'区块链新锐BitCV获千万级天使融资：或成数字资产管理平台开创者',
                        cn:'区块链新锐BitCV获千万级天使融资：或成数字资产管理平台开创者',
                        jp:'区块链新锐BitCV获千万级天使融资：或成数字资产管理平台开创者',
                        ko:'区块链新锐BitCV获千万级天使融资：或成数字资产管理平台开创者'
                    }
                },
                {
                    img: './img/media-yiou.png',
                    url: 'https://www.iyiou.com/p/65488',
                    name: { en:'亿欧', cn:'亿欧', jp:'亿欧', ko:'亿欧' },
                    intro: {
                        en:'区块链新锐BitCV获千万级天使融资——或成数字资产管理平台开创者',
                        cn:'区块链新锐BitCV获千万级天使融资——或成数字资产管理平台开创者',
                        jp:'区块链新锐BitCV获千万级天使融资——或成数字资产管理平台开创者',
                        ko:'区块链新锐BitCV获千万级天使融资——或成数字资产管理平台开创者'
                    }
                },
                {
                    img: './img/media-tencent.png',
                    url: 'http://new.qq.com/omn/20180130/20180130A0EC6M.html',
                    name: { en:'tencent', cn:'腾讯网', jp:'腾讯网', ko:'腾讯网' },
                    intro: {
                        en:'区块链BitCV获千万级天使融资：或成数字资产管理平台开创者',
                        cn:'区块链BitCV获千万级天使融资：或成数字资产管理平台开创者',
                        jp:'区块链BitCV获千万级天使融资：或成数字资产管理平台开创者',
                        ko:'区块链BitCV获千万级天使融资：或成数字资产管理平台开创者'
                    }
                },
                {
                    img: './img/media-souhu.png',
                    url: 'http://www.sohu.com/a/219786398_439726',
                    name: { en:'sohu', cn:'搜狐', jp:'搜狐', ko:'搜狐' },
                    intro: {
                        en:'数字资产管理平台BitCV获千万级天使融资',
                        cn:'数字资产管理平台BitCV获千万级天使融资',
                        jp:'数字资产管理平台BitCV获千万级天使融资',
                        ko:'数字资产管理平台BitCV获千万级天使融资'
                    }
                },
                {
                    img: './img/media-jinrongjie.png',
                    url: 'http://biz.jrj.com.cn/2018/01/30141124030848.shtml',
                    name: { en:'金融界', cn:'金融界', jp:'金融界', ko:'金融界' },
                    intro: {
                        en:'区块链新锐BitCV获千万级天使融资',
                        cn:'区块链新锐BitCV获千万级天使融资',
                        jp:'区块链新锐BitCV获千万级天使融资',
                        ko:'区块链新锐BitCV获千万级天使融资'
                    }
                },
                {
                    img: './img/media-guangming.png',
                    url: 'http://it.gmw.cn/2018-01/30/content_27515552.htm',
                    name: { en:'光明网', cn:'光明网', jp:'光明网', ko:'光明网' },
                    intro: {
                        en:'数字资产管理平台BitCV获千万级天使融资',
                        cn:'数字资产管理平台BitCV获千万级天使融资',
                        jp:'数字资产管理平台BitCV获千万级天使融资',
                        ko:'数字资产管理平台BitCV获千万级天使融资'
                    }
                },
                {
                    img: './img/media-china.png',
                    url: 'http://tech.china.com.cn/entrepreneur/20180130/334710.shtml',
                    name: { en:'china.com.cn', cn:'中国网', jp:'中国网', ko:'中国网' },
                    intro: {
                        en:'数字资产管理平台BitCV获千万级天使融资',
                        cn:'数字资产管理平台BitCV获千万级天使融资',
                        jp:'数字资产管理平台BitCV获千万级天使融资',
                        ko:'数字资产管理平台BitCV获千万级天使融资'
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
