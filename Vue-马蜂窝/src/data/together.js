//结伴
var together = [
	{
		destination:'缅甸',
		days:'7-15天',
		setout:'09月30日',
		id:1,
		pic:'https://n1-q.mafengwo.net/s6/M00/36/75/wKgB4lNwf7-AWht0AAKSMXmxIKg43.jpeg?imageMogr2%2Fthumbnail%2F%21200x130r%2Fgravity%2FCenter%2Fcrop%2F%21200x130%2Fquality%2F100',
		Headportrait:'https://c4-q.mafengwo.net/s8/M00/74/68/wKgBpVYY_3WAKqHXAAgrkKegXuY80.jpeg?imageMogr2%2Fthumbnail%2F%21120x120r%2Fgravity%2FCenter%2Fcrop%2F%21120x120%2Fquality%2F90',
		Gender:'女',
		name:'stella',
		level:15,
		place:'成都',
		content:'机票已出，9.30-10.1 成都-曼德勒 10.7-10.8曼德勒-成都...'
	},{
		destination:'新疆',
		days:'15-30天',
		setout:'09月16日',
		id:2,
		pic:'https://a1-q.mafengwo.net/s7/M00/CC/88/wKgB6lSZFWiAdGBiAAY5mrhbK18959.png?imageMogr2%2Fthumbnail%2F%21200x130r%2Fgravity%2FCenter%2Fcrop%2F%21200x130%2Fquality%2F100',
		Headportrait:'https://b2-q.mafengwo.net/s9/M00/9E/AE/wKgBs1aVB5OABR-TAAgNM3O0Xik02.jpeg?imageMogr2%2Fthumbnail%2F%21120x120r%2Fgravity%2FCenter%2Fcrop%2F%21120x120%2Fquality%2F90',
		Gender:'女',
		name:'MILA广州',
		level:14,
		place:'广州',
		content:'九月出行，寻找秋色；新疆，中国行的最后一站，这趟想带上...'
	},{
		destination:'越南',
		days:'3-7天',
		setout:'10月08日',
		id:3,
		pic:'https://b1-q.mafengwo.net/s7/M00/F7/58/wKgB6lSSTuOAEagiAAnWhL0LC9M874.png?imageMogr2%2Fthumbnail%2F%21200x130r%2Fgravity%2FCenter%2Fcrop%2F%21200x130%2Fquality%2F100',
		Headportrait:'https://b2-q.mafengwo.net/s9/M00/F6/B3/wKgBs1c3ZeSAX9j5AAYFSNqhyU888.jpeg?imageMogr2%2Fthumbnail%2F%21120x120r%2Fgravity%2FCenter%2Fcrop%2F%21120x120%2Fquality%2F90',
		Gender:'男',
		name:'Cochin_gu',
		level:9,
		place:'上海',
		content:'抢到了南方航空的特价机票，10月国庆出发，一探美丽的越南...'
	},{
		destination:'新加坡',
		days:'3-7天',
		setout:'10月01日',
		id:4,
		pic:'https://c2-q.mafengwo.net/s7/M00/96/BC/wKgB6lSXiOWAPXEtAAdPfdu1t14711.png?imageMogr2%2Fthumbnail%2F%21200x130r%2Fgravity%2FCenter%2Fcrop%2F%21200x130%2Fquality%2F100',
		Headportrait:'https://b1-q.mafengwo.net/s7/M00/06/01/wKgB6lT8CxGAQAORAAKTau8pSvQ60.jpeg?imageMogr2%2Fthumbnail%2F%21120x120r%2Fgravity%2FCenter%2Fcrop%2F%21120x120%2Fquality%2F90',
		Gender:'女',
		name:'lvy',
		level:7,
		place:'重庆',
		content:'我想旅行的意义，就是让你一次次发现美好的风景都带不走，而牵...'
	},{
		destination:'拉萨',
		days:'7-15天',
		setout:'09月30日',
		id:5,
		pic:'https://n3-q.mafengwo.net/s7/M00/9D/13/wKgB6lSosqaAWed_AAYcHZfMZD0122.png?imageMogr2%2Fthumbnail%2F%21200x130r%2Fgravity%2FCenter%2Fcrop%2F%21200x130%2Fquality%2F100',
		Headportrait:'https://n4-q.mafengwo.net/s5/M00/15/11/wKgB3FFKekeAbYfpAAHGdty52z471.jpeg?imageMogr2%2Fthumbnail%2F%21120x120r%2Fgravity%2FCenter%2Fcrop%2F%21120x120%2Fquality%2F90',
		Gender:'男',
		name:'中华',
		level:10,
		place:'北京',
		content:'西藏，一个多少人向往的天堂，一个能听见神说话的神秘地方...'
	},{
		destination:'伊朗',
		days:'7-15天',
		setout:'10月01日',
		id:6,
		pic:'https://p2-q.mafengwo.net/s7/M00/E3/33/wKgB6lTPTAeAAvP4AAMu_Od9_Is89.jpeg?imageMogr2%2Fthumbnail%2F%21200x130r%2Fgravity%2FCenter%2Fcrop%2F%21200x130%2Fquality%2F100',
		Headportrait:'https://n1-q.mafengwo.net/s10/M00/33/36/wKgBZ1khl7iAT0ypACd_eBfIBTQ799.png?imageMogr2%2Fthumbnail%2F%21120x120r%2Fgravity%2FCenter%2Fcrop%2F%21120x120%2Fquality%2F90',
		Gender:'男',
		name:'snowswansagasolo',
		level:14,
		place:'北京',
		content:'2017年‘十一’国庆小长假，一共8天时间，北京/上海直飞德黑...'
	},{
		destination:'台湾',
		days:'3-7天',
		setout:'09月30日',
		id:7,
		pic:'https://a4-q.mafengwo.net/s9/M00/3C/CE/wKgBs1e2fn2APHx8AAsH-anXLUU29.jpeg?imageMogr2%2Fthumbnail%2F%21200x130r%2Fgravity%2FCenter%2Fcrop%2F%21200x130%2Fquality%2F100',
		Headportrait:'https://n3-q.mafengwo.net/s9/M00/B8/9E/wKgBs1gEpKqAXNK_AABwl0L37CQ08.jpeg?imageMogr2%2Fthumbnail%2F%21120x120r%2Fgravity%2FCenter%2Fcrop%2F%21120x120%2Fquality%2F90',
		Gender:'男',
		name:'摇曳的小舟',
		level:6,
		place:'湖南永州',
		content:'旅行的目的很简单1、自由的逛，悠闲的吃2、看看自然，体验...~...'
	},{
		destination:'普吉岛',
		days:'3-7天',
		setout:'08月17日',
		id:8,
		pic:'https://b3-q.mafengwo.net/s8/M00/3D/B0/wKgBpVU5sFKADn9ZAAU2Y9xlTRg773.png?imageMogr2%2Fthumbnail%2F%21200x130r%2Fgravity%2FCenter%2Fcrop%2F%21200x130%2Fquality%2F100',
		Headportrait:'https://c1-q.mafengwo.net/s9/M00/74/44/wKgBs1fE6BSAU9jNAACm57826ZQ63.jpeg?imageMogr2%2Fthumbnail%2F%21120x120r%2Fgravity%2FCenter%2Fcrop%2F%21120x120%2Fquality%2F90',
		Gender:'男',
		name:'海澜杭州',
		level:7,
		place:'杭州',
		content:'两个好基友，打算89月份去普吉岛度度假，主要想去海边玩...'
	},{
		destination:'青海湖',
		days:'3-7天',
		setout:'09月02日',
		id:9,
		pic:'https://b1-q.mafengwo.net/s5/M00/1E/90/wKgB3FHidXyANqGdAAGnJkUrDpE16.jpeg?imageMogr2%2Fthumbnail%2F%21200x130r%2Fgravity%2FCenter%2Fcrop%2F%21200x130%2Fquality%2F100',
		Headportrait:'https://b4-q.mafengwo.net/s7/M00/0C/ED/wKgB6lTez9yAGQVHAAIXxlk6bfg95.jpeg?imageMogr2%2Fthumbnail%2F%21120x120r%2Fgravity%2FCenter%2Fcrop%2F%21120x120%2Fquality%2F90',
		Gender:'女',
		name:'kfjdf',
		level:6,
		place:'昆明',
		content:'年假8天，欲走兰州 敦煌 张掖 青海湖一线，租车包车都可以...'
	},{
		destination:'甘孜|亚丁|色达|稻城',
		days:'7-15天',
		setout:'09月24日',
		id:10,
		pic:'https://c3-q.mafengwo.net/s8/M00/73/69/wKgBpVW_Mt6AFr9PAAyHoZrkblM24.jpeg?imageMogr2%2Fthumbnail%2F%21200x130r%2Fgravity%2FCenter%2Fcrop%2F%21200x130%2Fquality%2F100',
		Headportrait:'https://c1-q.mafengwo.net/s10/M00/E7/7A/wKgBZ1mAqGyASoooAABgVpKYgLo64.jpeg?imageMogr2%2Fthumbnail%2F%21120x120r%2Fgravity%2FCenter%2Fcrop%2F%21120x120%2Fquality%2F90',
		Gender:'女',
		name:'藍藍',
		level:11,
		place:'广州',
		content:'想在国庆假期前一个星期，去川西走一走，主要想去色达和稻城...'
	},{
		destination:'沙姆沙伊赫|埃及|开罗|卢克索',
		days:'7-15天',
		setout:'12月22日',
		id:11,
		pic:'https://c2-q.mafengwo.net/s6/M00/2C/65/wKgB4lOf_Y6AQEXDAAgMvhIxKkY447.png?imageMogr2%2Fthumbnail%2F%21200x130r%2Fgravity%2FCenter%2Fcrop%2F%21200x130%2Fquality%2F100',
		Headportrait:'https://n1-q.mafengwo.net/s10/M00/02/6B/wKgBZ1jYjg6AbusxAADR5LKNAk824.jpeg?imageMogr2%2Fthumbnail%2F%21120x120r%2Fgravity%2FCenter%2Fcrop%2F%21120x120%2Fquality%2F90',
		Gender:'男',
		name:'SiauHwa',
		level:26,
		place:'雪邦',
		content:'2017年在埃及过圣诞过元旦！自己一个人，希望可以有志同道合...'
	},{
		destination:'澳大利亚|大洋路|墨尔本|悉尼',
		days:'7-15天',
		setout:'10月01日',
		id:12,
		pic:'https://n4-q.mafengwo.net/s9/M00/BC/91/wKgBs1b7e9SANgXsADNR-a5p1tw97.jpeg?imageMogr2%2Fthumbnail%2F%21200x130r%2Fgravity%2FCenter%2Fcrop%2F%21200x130%2Fquality%2F100',
		Headportrait:'https://b4-q.mafengwo.net/s9/M00/03/1D/wKgBs1ecRf2AGKCLAAhF3m5N84I76.jpeg?imageMogr2%2Fthumbnail%2F%21120x120r%2Fgravity%2FCenter%2Fcrop%2F%21120x120%2Fquality%2F90',
		Gender:'女',
		name:'樂寶',
		level:23,
		place:'桂林',
		content:'【项目时长】2017年10月1日-2017年10月9日（共9天）【参与人...'
	},{
		destination:'墨脱|林芝|拉萨|西藏',
		days:'7-15天',
		setout:'09月15日',
		id:13,
		pic:'https://c4-q.mafengwo.net/s7/M00/A5/1B/wKgB6lSovNCAL-4MAAcIxJYDC2Q177.png?imageMogr2%2Fthumbnail%2F%21200x130r%2Fgravity%2FCenter%2Fcrop%2F%21200x130%2Fquality%2F100',
		Headportrait:'https://n2-q.mafengwo.net/s5/M00/D4/24/wKgB3FB_zz3h_6WaAAKw1dw_yig29.jpeg?imageMogr2%2Fthumbnail%2F%21120x120r%2Fgravity%2FCenter%2Fcrop%2F%21120x120%2Fquality%2F90',
		Gender:'女',
		name:'梦游坦克',
		level:26,
		place:'长沙',
		content:'去西藏的人，总是有各种各样的理由和动机。为山，为水，为情...'
	},{
		destination:'斯洛伐克|匈牙利|捷克|波兰',
		days:'3-7天',
		setout:'10月12日',
		id:14,
		pic:'https://c1-q.mafengwo.net/s7/M00/68/9F/wKgB6lTQONKAURWnAASfIgD3rHI83.jpeg?imageMogr2%2Fthumbnail%2F%21200x130r%2Fgravity%2FCenter%2Fcrop%2F%21200x130%2Fquality%2F100',
		Headportrait:'https://b3-q.mafengwo.net/s5/M00/4A/43/wKgB3FIRrJmABZWDAACXBmmu4ZU67.jpeg?imageMogr2%2Fthumbnail%2F%21120x120r%2Fgravity%2FCenter%2Fcrop%2F%21120x120%2Fquality%2F90',
		Gender:'女',
		name:'cally',
		level:16,
		place:'广州',
		content:'本人广州80后女生一名，很喜欢旅游，性格温和好相处，现希望...'
	},{
		destination:'冲绳|那霸',
		days:'3-7天',
		setout:'10月09日',
		id:15,
		pic:'https://b4-q.mafengwo.net/s7/M00/23/9D/wKgB6lP0VhKAWe8wAAPJ4R3N9Zc89.jpeg?imageMogr2%2Fthumbnail%2F%21200x130r%2Fgravity%2FCenter%2Fcrop%2F%21200x130%2Fquality%2F100',
		Headportrait:'https://a2-q.mafengwo.net/s8/M00/51/C2/wKgBpVU_RsWASEjqAAG5MItCNfY37.jpeg?imageMogr2%2Fthumbnail%2F%21120x120r%2Fgravity%2FCenter%2Fcrop%2F%21120x120%2Fquality%2F90',
		Gender:'女',
		name:'永远在减肥的胖子',
		level:16,
		place:'北京朝阳',
		content:'今年过得很是艰难，希望可以有一段悠闲假期。大阪加冲绳7、8...'
	},{
		destination:'呼伦贝尔',
		days:'7-15天',
		setout:'09月08日',
		id:16,
		pic:'https://a2-q.mafengwo.net/s8/M00/F0/40/wKgBpVWuJguAd-u6AAIwebwohKU99.jpeg?imageMogr2%2Fthumbnail%2F%21200x130r%2Fgravity%2FCenter%2Fcrop%2F%21200x130%2Fquality%2F100',
		Headportrait:'https://p4-q.mafengwo.net/s9/M00/9C/B7/wKgBs1cDOreAKSSeAAwcT2LeOPY09.jpeg?imageMogr2%2Fthumbnail%2F%21120x120r%2Fgravity%2FCenter%2Fcrop%2F%21120x120%2Fquality%2F90',
		Gender:'男',
		name:'Zen',
		level:8,
		place:'广州',
		content:'在当地租车之后全程自驾深度游基本上概括了呼伦贝尔的所有景...'
	}
]

export{
	together
}
