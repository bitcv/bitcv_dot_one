var app = new Vue({

    el: '#app',

    data: {

        lang: 'en',

        project: {
            name: { en:'Blockchain Digital Asset <br>Management Service Engine', cn:'区块链数字资产管理服务引擎' },
            whitepaper: {
                btn: { en:'Download White Paper', cn:'下载白皮书' },
                doc: { en:'doc/bitcv_whitepaper_en.pdf', cn:'doc/bitcv_whitepaper_cn.pdf' }
            },
            ppt: {
                btn: { en:'Download Project Presentation', cn:'下载PPT' },
                doc: { en:'doc/bitcv_project_en.pdf', cn:'doc/bitcv_project_cn.pdf' }
            }
        },

        product: {
            name: { en:'Digital Asset Management Solutions', cn:'数字资产管理解决方案' },
            list: [
                {
                    icon: 'icon ti-desktop',
                    title: { en:'Project Investment and Financing SaaS System - SaaS', cn:'项目投融 SaaS 系统——投融 SaaS' },
                    content: {
                        en:'For every independent project, its information and data are independent and isolated from other projects. For the project party, from domain name to display, they are independent and unique, and create exclusive and professional images.',
                        cn:'每一个独立的项目，信息与数据与别的项目隔离，从域名到展示，都有独立性和唯一性，造就专属、专业的形象。'
                    }
                },
                {
                    icon: 'icon ti-user',
                    title: { en:'Deep Mining and Investigation of Digital Asset – Finance and Economy Master', cn:'数字资产深度挖掘与调研 —— 财经通' },
                    content: {
                        en:'The BitCV team consists of experienced investors, blockchain technical experts, senior media professionals, who, with all the experience in the fields of investment, media and technology, can scrutinize every aspect of a project.',
                        cn:'资深投资人、区块链技术专家、资深媒体人士，全面挖掘项目团队背景、项目技术实力评估、项目投资人访谈等， 让公众投资人全面、公正、客观地了解项目的方方面面'
                    }
                },
                {
                    icon: 'icon ti-ruler-alt',
                    title: { en:'Digital Asset Management Evaluation Platform – Evaluation Chain', cn:'数字资管评测平台 —— 链评测' },
                    content: {
                        en:'Besides the assessment of each dimension, there are analyses based on historical models and data, including the artificial intelligence assessment and the prediction of the prospects with machine learning model. All these rely heavily on analyzing and data processing, of which the BitCV team has accumulated considerable experience.',
                        cn:'基于大数据与人工智能技术，做好项目价值发现与投资者评估，结合传统金融行业大量的从业经验，研发风险评估与风控模型。'
                    }
                },
                {
                    icon: 'icon ti-heart',
                    title: { en:'Digital Asset OMO Service – Service Chain', cn:'数字资产OMO服务 —— 链服务' },
                    content: {
                        en:'Apart from technical services, BitCV, as a digital asset management engine, has the responsibility and obligation to serve the industry ecology as well, as to provide convenience for the project party and investors.',
                        cn:'不仅仅是为数字资产项目的初始发布助跑，更希望从技术到人才，构建起真正的落地能力支撑，这样才是真正有助于这个生态。'
                    }
                },
            ]
        },

        arch: {
            name: { en:'Project Technical Architecture and Product Realization', cn:'项目技术架构与产品实现' },
            list: [
                {
                    img: './img/layer-1.png',
                    title: { en:'Design of BitCV Digital Asset Management Chain', cn:'BitCV 数字资管链的设计' },
                    content: {
                        en: 'BitCV is an application-based blockchain product, so we are using the blockchain and existing technologies to serve the field of digital asset management. In principle, we do not conduct our own research and development of the underlying chain design on a large scale, but according to the current preliminary research and development, we use and enhance the use of the following technologies.<p>1 Blockchain distributed ledger technology</p><p>2 Sidechain cross-chain trading technology</p><p>3 DPOS consensus algorithm</p><p>4 Intelligent contract technology</p>',
                        cn: 'BitCV使用区块链技术，记录所有涉及资金的交易行为，先在侧链上或者链外记录与交易，最终写入 BitCV 资产管理链主链上去，保证资产管理主 链是一个随着交易记录增长的，无法篡改和伪造的区块链。在未来，区块链 分布式存储的成熟，BitCV 资产管理链主链也将转移或者存储在区块链分布 式存储上。真正做到了去中心化。<br><br>'
                    },
                },
                {
                    img: './img/layer-2.png',
                    title: { en:'Reliable and scalable microservices architecture design', cn:'高可靠可扩展的的微服务架构设计' },
                    content: {
                        en:'As the digital asset service engine platform at the bottom of the blockchain, SaaS cloud service needs to be provided first. Because every project is intended for global clients and provides multi-end support, it is necessary to ensure that the service is reliable and easy to expand and maintain. The goal of reliability should be 99.99%.<br>Second, as a digital asset management service platform, a large number of digital asset exchange data of the clients are involved. Although after the clients purchase the digital assets, the corresponding tokens or the digital assets themselves will be sent into the official crowdfunding wallet, the statistics, as well as the middle storage, are still stored inside the platform, therefore the security, encryption and isolation of the data are strictly required.',
                        cn:'作为区块链底层的数字资产服务引擎平台，首先需要提供的是 SaaS 云服务， 由于任意一个项目，面向全球用户使用，多端支持，因此需保证服务高可靠，应 该目标是 99.99%的可靠性，以及方便扩容、维护。<br>其次作为数字资产管理服务平台，有涉及到大量的用户代币兑换数据，尽管 用户在购买了代币之后，币本身会打入官方众筹钱包，但是统计数据，以及中间 存储，都在平台内部，所以对数据的安全性、加密存储与隔离等有较高的要求。'
                    }
                },
                {
                    img: './img/layer-3.png',
                    title: { en:'Simple and friendly platform of project and investment', cn:'简洁好用的项目与投资平台' },
                    content: {
                        en:'Fill in the basic information to generate the main site by one touch<br>Provide investors with project management services and clear results<br>Provide the project party with stage progress<br>Provide financiers with project data planning',
                        cn:'需要融资的项目，通过申请独立的发布站，经过审核之后即可以开通SaaS平台，开通成功，获得该系统的管理员用户名和密码，完成项目资料登记、完善与独立 发布站的建设。在建设的过程中，需要提供的基本资料，包括但不限于市场分析、项目亮点、 媒体报道、代币额度、价格设定、项目团队、合作伙伴、路径图等等。<br><br>填写基本资料，一键生成项目主站<br>项目管理服务，让投资人清晰放心<br>项目阶段进度，让项目方了然于胸<br>项目数据规划，让融资方运筹帷幄'
                    }
                },
                {
                    img: './img/layer-4.png',
                    title: { en:'Future product planning', cn:'未来的产品规划' },
                    content: {
                        en:'Use the multi-digital assets wallet system constructed by cross-chain payment to make it convenient for clients to deposit and invest.<br>Develop a fund-investment system and invest in the industry\'s well-known digital asset funds. Well-known digital asset funds generally have higher thresholds.<br>Provide the trading and auction platform for digital assets and real assets.<br>Provide the programmed and quantitative trading platform.',
                        cn:'除了做好基础的项目和投资者服务之外，我们将逐步开发以下产品和底层基础设施，以构建整个资管平台底层技术服务体系。<br><br>使用跨链支付构建多币种钱包系统<br>开发基金跟投系统参与知名数字资产基金的投资<br>数字资产、实物资产对标交易拍卖平台<br>程序化量化交易平台为投资者建立多元化投资手段'
                    }
                },
            ]
        },

        team: {
            name: { en:'Our team', cn:'团队' },
            list: [
                {   
                    img: 'user-wuxing.png',
                    name: { en:'Wu Xing', cn:'伍星' },
                    intro: {
                        en: 'Member of Global Entrepreneur Leadership Program of Tsinghua University PBC School of Finance; core member of the sixth self-organizing board team of Hejun Business School; monitor of the third Sinovation Ventures Brotherhood. Member of the foundation team of Happy Net; advanced full stack architect. He founded UCAI, a domestic IT vocational education brand, and got many rounds of financing from funds such as Sinovation Ventures. He once managed the design and performance optimization of hundreds of millions of UV in Happy Net, and achieved more than 99.99% reliability services. Duties: Leading technology and the overall strategic planning of the foundation project.',
                        cn: '清华大学五道口金融学院全球创业领袖班学员。2004 年毕业于北京工商大学，和君六届自组织理事团队核心成员、创新工场兄弟会 3 期班班长。开心网创始团队成员，高级全栈架构师，创办国内 IT 职业教育品牌优才学院，获得创新工场等基金多轮融资，曾主导开心网数以亿计 UV 的架构设计与性能优化，实现 99.99%以上的可靠性服务。职责:基金会技术与项目整体战略规划。'
                    }
                },
                {   
                    img: 'user-jiagui.png',
                    name: { en:'Xiong Jiagui', cn:'熊家贵' },
                    intro: {
                        en: 'Graduated from Tsinghua University; senior R & D engineer in Sina; python group leader in iAsk; chief architect in Happy Net. He is proficient in Linux, Unix infrastructure research and development, and provide independently storage, communications and other middleware services. He once managed the design of millions of concurrent online instant messaging system in Happy Net. Duties: Leading the design of the underlying protocol of the digital asset management chain and highly reliable underlying platform.',
                        cn: '毕业于清华大学，曾任新浪资深研发工程师，爱问爬虫组组长， 开心网首席架构师。精通 Linux、Unix 底层研发，独立实现存 储、通信等多种中间件服务。曾主导开心网数百万并发在线即时 通信系统设计。职责:主导数字资管链的底层协议设计和高可靠 底层平台设计。'
                    }
                },
                {   
                    img: 'user-zhihua.png',
                    name: { en:'Liu Zhihua', cn:'刘志华' },
                    intro: {
                        en: 'Full stack architect, Beijing Technology and Business University Department of Computer Science graduated in 2004, once worked in Halliburton, serving CNPC, Sinopec and other giant oil service information system development, is an early Kaixin technical team members, has been responsible for sales operations support Management technical work. In 2013, he worked as a technology leader in developing a digital campus at Renmin University of China. In 2014, he joined the talent CTO. Proficient in Internet product architecture design, good before and after the end of a variety of technology development and management.',
                        cn: '全栈架构师，北京工商大学计算机系 2004 年毕业，曾经就职于哈里伯顿，服务于中石油、中石化等巨头企业油服信息化系统的开发，是开心网早期技术团队成员，曾负责销售运营支持管理部门技术工作。2013 年作为技术负责人开发了中国人民大学数字校园，2014 年加入优才创智任 CTO。精于互联网产品架构设计，擅长前后端多种技术开发管理。'
                    }
                },
                {   
                    img: 'user-wenling.png',
                    name: { en:'Wen Ling', cn:'文玲' },
                    intro: {
                        en: 'Received Master’s degree in Investment Management at Peking University; assistant of Apple’s Angel investor Mr. Li Zongnan in China; the China market leader of United States Shan Kwong Capital; former market director assistant of Sinovation Ventures; co-founder of Internet K12 online education. She is now the founder of PPTEAM Project, which provide magic performance technology service for the first-class Internet startups and first-class investment agencies senior executives, and cooperation companies include Tencent, Toutiao, the State Grid Cooperation of China and so on.',
                        cn: '北京大学投资管理硕士毕业;苹果天使投资人华人创投之父李宗南先生中华区助理;美国山光资本中国市场负责人;曾任创 新工场市场总监助理;互联网 K12 在线教育公司联合创始人; 现 PPTEAM 项目创始人，为一流互联网创业公司及一流投资 机构高管提供幻演技术服务，合作公司包括腾讯、今日头条、 国家电网等。'
                    }
                }
            ]
        },

        roadmap: {
            name: { en:'Project Milestones and Roadmap', cn:'项目里程碑及路线图' },
            list: [
                {
                    date: { en:'Sep. 2017', cn:'2017年9月' },
                    content: {
                        en:'Initial planning of the project starts',
                        cn:'项目初始规划启动'
                    }
                },
                {
                    date: { en:'Nov. 2017', cn:'2017年11月' },
                    content: {
                        en:'Project prototype and the design and planning of project architecture is completed<br>The construction of the initial team is completed',
                        cn:'项目初始原型与产品架构设计与规划完成<br>初始团队构建完成'
                    }
                },
                {
                    date: { en:'Dec. 2017', cn:'2017年12月' },
                    content: {
                        en:'The first version of the project white paper is completed, Project development officially starts',
                        cn:'项目白皮书第一版完成，正式启动项目开发'
                    }
                },
                {
                    date: { en:'Jan. 15, 2018', cn:'2018年1月15日' },
                    content: {
                        en:'The first prototype product Demo is completed, white paper V1.1 is completed',
                        cn:'第一版产品原型 Demo 完成，白皮书 V1.1 版完成'
                    }
                },
                {
                    date: { en:'Jan. 2018', cn:'2018年1月' },
                    content: {
                        en:'Angel Investment starts<br>The Finance and Economy Master is put into use<br>The issue and exchange of BCV, Chain project is put into use initially',
                        cn:'启动天使轮融资<br>币头条开始运营<br>BCV发行与兑换,链项目初步投入应用'
                    }
                },
                {
                    date: { en:'Late Feb. 2018', cn:'2018年2月底' },
                    content: {
                        en:'SaaS project starts officially, BCV enters the exchange',
                        cn:'币SaaS项目正式运行,BCV上交易所'
                    }
                },
                {
                    date: { en:'Mar. 2018', cn:'2018年3月' },
                    content: {
                        en:'Chain service is put into use<br>Chain evaluation is put into use',
                        cn:'链服务投入运营<br>链评测投入运营'
                    }
                },
                {
                    date: { en:'Aug. 2018', cn:'2018年8月' },
                    content: {
                        en:'Asset management business arrangement',
                        cn:'资管业务整理'
                    }
                },
                {
                    date: { en:'Mar. 2019', cn:'2019年3月' },
                    content: {
                        en:'The construction of asset management ecology is completed',
                        cn:'资管生态建立完成'
                    }
                },
            ]
        },

        consultants: {
            name: { en:'Project consultants', cn:'项目顾问' },
            list: [
                {
                    img: './img/brand-fengxin.png',
                    name: { en:'Feng Xin', cn:'冯新' },
                    intro: {
                        en:'Founder of Carbon 9 Accelerator and MBA of Nankai Business School. He once worked for Legend Capital, leading to invest in iFLYTEK and worked for True Fund as a partner in investment. He once invested in well-known projects such as SZ.',
                        cn:'碳9加速器创始人，南开大学商学院 MBA，曾就职于联想投资，主导投资科大讯飞，就职于真格基金，任投资合伙人，曾投资找钢网等知名项目。'
                    }
                },
                {
                    img: './img/brand-qiaoshuai.png',
                    name: { en:'Qiao Shuai', cn:'乔帅' },
                    intro: {
                        en:'',
                        cn:'清科晨光合伙人'
                    }
                },
                {
                    img: './img/brand-liujiang.png',
                    name: { en:'Liu Jiang', cn:'刘江' },
                    intro: {
                        en:'Founding partner of Sparkling Star Capital; founder of Xingheng Education; member of tagcash Foundation; co-founder of WuKang network.',
                        cn:'星耀资本创始合伙人，星恒教育创始人，tagcash 基金会成员，五康成网联合创始人。'
                    }
                },
                {
                    img: './img/brand-jiangjie.png',
                    name: { en:'Jiang Jie', cn:'蒋杰' },
                    intro: {
                        en:'Founding partner of R-Coin Foundation partner of QinYi Capital Former COO of China Investment Center, involved in the operation of billions of funds',
                        cn:'R-Coin 基金会创始合伙人，钦一资本合伙人，曾任中国投资人中心 COO，参与运作基金数十亿'
                    }
                },
                {
                    img: './img/brand-wushu.png',
                    name: { en:'Wu Shu', cn:'吴澍' },
                    intro: {
                        en:'MBA of Cheung Kong Graduate School of Business; Angel investor; Founding Team Member of Tiger Snooker Network; Former Chief Editor of Black Horse; Witness and Founding Member of China\'s New Media Industry. He used to be the Director of LeTV Group Investment and Financing and Vice President of LeTV cloud computing capital operation. He has been in charge of capital business of LeTV Zhixin, LeTV Mobile, LeTV Finance, LeTV Cloud computing, etc. The total number of the funds he set up, investment and financing is over 30 trillion yuan.',
                        cn:'长江商学院 MBA，天使投资人，虎嗅网创始团队成员，原 i 黑马主编，中国新媒体产业的见证者及铸建者。曾任乐视集团 投融资总监，乐视云计算资本运营副总裁。先后分管乐视致 新、乐视移动、乐视金融、乐视云计算等公司的资本业务。累 计设立基金，对外投资，融资金额超 300 亿元。'
                    }
                },
                {
                    img: './img/brand-xujizhe.png',
                    name: { en:'Xu Jizhe', cn:'徐继哲' },
                    intro: {
                        en:'Co-founder of the Smartweb Elastos driven by the blockchain; founder of philosophy community; pioneer and advocate of free software movement; blockchain expert.',
                        cn:'区块链驱动的智能万维网“亦来云“ 联合创始人，哲思社区创 始人，自由软件运动先锋，倡导者，区块链专家。'
                    }
                },
                {
                    img: './img/brand-luofei.png',
                    name: { en:'Luo Fei', cn:'罗飞' },
                    intro: {
                        en:'Domestic AI R & D pioneer; he has developed Moorobot, smart speakers and other smart products, and served as SAE in Sina; he is the earliest cloud computing development experts, and core developer of ThinkPHP; he is active in the open source community, and the open source projects he develops have been used by 2 million developers; he is also skilled in technical community operations, and operating a technology community comprised of technical directors from major companies.',
                        cn:'国内 AI 研发先行者，研发过小墨机器人、智能音箱等多款智能 产品，曾任职新浪 SAE，是国内最早的云计算开发专家，也是 ThinkPHP 核心开发者，活跃于开源社区，所开发的开源项目 拥有 200 万开发者使用，擅长技术社群运营，运营着各大公司 技术总监组成的技术社群。'
                    }
                },
                {
                    img: './img/brand-chengbinghao.png',
                    name: { en:'Cheng Binghao', cn:'程炳皓' },
                    intro: {
                        en:'CEO of Happy Net; investor.',
                        cn:'开心网 CEO，投资人。'
                    }
                },
                {
                    img: './img/brand-yushui.png',
                    name: { en:'Yu Shui', cn:'余水' },
                    intro: {
                        en:'Co-founder of KCash; graduated from Nankai University; he has 7 years of management consulting experience, and used to serve as consultant partner for Hejun. He has provided strategic planning, business model design, organizational change and design, personnel training and service for a number of A-share listed companies.',
                        cn:'KCash 联合创始人、毕业于南开大学，7 年管理咨询经验， 曾任和君咨询业务合伙人，为多家 A 股上市公司提供战略规 划及商业模式设计、组织变革与设计、人才培养与服务。'
                    }
                },
                {
                    img: './img/brand-chengmingxia.png',
                    name: { en:'Cheng Mingxia', cn:'程明霞' },
                    intro: {
                        en:'Assistant Dean of Tencent Research; former deputy editor of Harvard Business Review China.',
                        cn:'腾讯研究院助理院长，曾任《哈佛商业评论》中文版副主编。'
                    }
                },
                {
                    img: './img/brand-zhanglijun.png',
                    name: { en:'Zhang Lijun', cn:'张丽君' },
                    intro: {
                        en:'Executive director of Sinovation Ventures; graduated from Renmin University of China, with a master degree in technical economics and management. She joined Sinovation Ventures in 2011 and focused on investment in education. Successful investments include projects such as VIPKID, Box Fish, TheOne Smart Piano, among which VIPKID has gained hundreds of times of valuation growth and has grown into a unicorn in the industry.',
                        cn:'创新工场执行董事，毕业于中国人民大学，拥有技术经济与管 理硕士学位。2011 年加入创新工场，专注于教育领域投资， 曾成功主导投资 VIPKID、盒子鱼、TheOne 智能钢琴等项 目，其中 VIPKID 获得数百倍估值增长，成长为行业独角兽。'
                    }
                },
                {
                    img: './img/brand-liutao.png',
                    name: { en:'Liu Tao', cn:'刘弢' },
                    intro: {
                        en:'Undergraduate of Renmin University of China; MBA of National University of Singapore. She used to be chief risk control officer of Head Office of the Agricultural Bank of China; Chief Marketing Officer of Asia Pacific of Interactive Brokers; Director of International Financial Investment and Operation of CRH; Director and Investment Director of Hong Kong Asian Culture Enterprise Company; Chairman of CITIC Huifu Investment Co., Ltd. ; since March 2017, she has been the partner of Beijing Cathay Venture Capital Fund Management Co., Ltd.',
                        cn:'毕业于新加坡国立大学，工商管理硕士。中国内地、香港、新 加坡 17 年金融领域投资经验。北京国泰创业投资基金管理有 限公司管理合伙人。'
                    }
                },
                {
                    img: './img/brand-yuanye.png',
                    name: { en:'Yuan Ye', cn:'元野' },
                    intro: {
                        en:'Graduated from the University of International Business and Economics and Windsor University in Canada. He joined KPMG Huazhen in September 2003 and joined Latitude Capital Group in 2004. He joined Ce Yuan Ventures in 2005 and has been the managing partner since then.',
                        cn:'毕业于对外经济贸易大学，加拿大温莎大学，2003 年 9 月加 入毕马威华振会计师事务所，2004 年加入乐通投资集团， 2005 年加入策源创投，至今任主管合伙人。'
                    }
                },
                {
                    img: './img/brand-zhubo.png',
                    name: { en:'Zhu Bo', cn:'朱波' },
                    intro: {
                        en:'',
                        cn:'创新谷基金创始人'
                    }
                },
                {
                    img: './img/brand-huangtianwei.png',
                    name: { en:'Huang Tianwei', cn:'黄天威' },
                    intro: {
                        en:'',
                        cn:'比特时代创始人'
                    }
                },
                {
                    img: './img/brand-jiangen.png',
                    name: { en:'Jiang En', cn:'江恩' },
                    intro: {
                        en:'',
                        cn:'狗狗币会长'
                    }
                },
                {
                    img: './img/brand-wangzhaowei.png',
                    name: { en:'Wang Zhaowei', cn:'王朝薇' },
                    intro: {
                        en:'',
                        cn:'维瓴财富创始人'
                    }
                },
                {
                    img: './img/brand-chencaigen.png',
                    name: { en:'Chen Caigen', cn:'陈菜根' },
                    intro: {
                        en:'',
                        cn:'区块链知名自媒体，为友资本合伙人'
                    }
                },
                {
                    img: './img/brand-xuxinquan.png',
                    name: { en:'Xu Xinquan', cn:'徐昕泉' },
                    intro: {
                        en:'',
                        cn:'中国乐视集团俄罗斯及东欧地区总裁'
                    }
                },
                /*
                孙泽宇 库神钱包联合创始人
                高胜利 三角形主机创始人
*/

            ]
        },

        institutions: {
            name: { en:'Institutions', cn:'项目顾问' },
            list: [
                './img/project-linkvc.jpg', //Link VC
                './img/project-xingyue.jpg', //星耀资本
                './img/project-tan9.jpg', //碳 9 加速器
                './img/project-chuangxin.jpg', //创新工场(曾投资 YeeCall、极路 由等)
                './img/project-guotai.jpg', //国泰创投(曾投资 比特大陆)
                './img/project-ceyuan.jpg', //策源创投(曾投资 OKCoin)
                './img/project-guanghe.jpg', //广禾资本
                './img/project-huozhong.jpg', //火种资本
                './img/project-bdfund.jpg', //梦工场基金
                './img/project-innovalley.jpg', //创新谷基金
                //'./img/project-yuming.jpg', //域名资本
            ]
        }


    },
    mounted() {
    },
    methods: {
    }
});
