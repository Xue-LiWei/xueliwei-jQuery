$('.nav_top li a,.fbtn li a').hover(function() {
	$(this).css('color', '#ed1e61');
}, function() {
	$(this).css('color', '');
});

$('.mj').parent().hover(function() {
	$('.mj').stop().slideDown(300);
	$('.mj').parent().css('background', '#fff');
	$('.nt_right span').eq(1).addClass('add');
}, function() {
	$('.mj').stop().slideUp(300);
	$('.mj').parent().css('background', '');
	$('.nt_right span').eq(1).removeClass('add');
});

$('.mre').parent().hover(function() {
	$('.mre').stop().slideDown(300);
	$('.mre').parent().css('background', '#fff');
	$('.nt_right span').eq(3).addClass('add');
}, function() {
	$('.mre').stop().slideUp(300);
	$('.mre').parent().css('background', '');
	$('.nt_right span').eq(3).removeClass('add');
});

var t;
$('.buycar').hover(function() {
	$('.buycar').css({'background':'#fff','border-bottom':' 2px solid transparent'});	
	$('.buycar a').css('color', '#ed1e61');
	$('.buycar s').addClass('add');
	t=setTimeout(function(){$('.cartips').stop().show()},300);
}, function() {
	$('.buycar').css({'background':'','border-bottom':''});
	$('.buycar a').css('color', '');
	$('.buycar s').removeClass('add');
	clearTimeout(t);
	$('.cartips').stop().hide();
});

$('.nav_l>li').hover(function() {
	$(this).children('a').stop().animate({'opacity': 0.6}, 200);
	$(this).children('span').stop().animate({'opacity': 0.6}, 200);
	if(($(this).index())==3){
		$('.nav_l>li>span').addClass('add');
		$('.mzsc').stop().slideDown(200);
	} 
}, function() {
	$(this).children('a').stop().animate({'opacity': 1}, 200);
	$(this).children('span').stop().animate({'opacity': 1}, 200);
	if(($(this).index())==3){
	 $('.nav_l>li>span').removeClass('add');
	 $('.mzsc').stop().slideUp(200);
	}
});

$('.mzsc a').hover(function() {
	$(this).css('color', '#ed1e61');
}, function() {
	$(this).css('color', '#999999');
});

$('.mzsc>li').eq(0).hover(function() {
	$('.mzsc>li').eq(0).css('opacity', '0.8');
}, function() {
	$('.mzsc>li').eq(0).css('opacity', '1');
});

$('.mzsc>li').eq(4).hover(function() {
	$('.mzsc>li').eq(4).css('opacity', '0.8');
}, function() {
	$('.mzsc>li').eq(4).css('opacity', '1');
});

$(window).scroll(function() {
	if($(window).scrollTop()>430){
		$('.rf_b li').eq(2).css('display', 'block');
		$('.rf_b span').eq(2).css('display', 'block');
	}else {
		$('.rf_b li').eq(2).css('display', 'none');
		$('.rf_b span').eq(2).css('display', 'none');
	}
	if($(window).scrollTop()>=$('.tips').offset().top){
		$('.tips3').stop().show();
	}else $('.tips3').stop().hide();

	if($(window).scrollTop()>=$('.tips').offset().top&&$(window).scrollTop()<$('.tips2').offset().top){
		$('.tp2').css('background', 'url("images/pc_new.jpg") no-repeat -176px 0px');
		$('.tp3').css('background', 'url("images/pc_new.jpg") no-repeat 0px -124px');
		$('.tp2 b').css('color', '#fff');
		$('.tp3 b').css('color', '#666');

	}else if($(window).scrollTop()>=$('.tips2').offset().top){
		$('.tp2').css('background', 'url("images/pc_new.jpg") no-repeat 0px 0px');
		$('.tp3').css('background', 'url("images/pc_new.jpg") no-repeat -176px -124px');
		$('.tp2 b').css('color', '#666');
		$('.tp3 b').css('color', '#fff');
	}
});

// 右边固定栏

$('.rf_b span').eq(2).click(function() {
	$(window).scrollTop(0);
});

$('.rf_t li').hover(function() {
	$(this).css('background','#ed1e61');
	if ($(this).index()==0) {
		$(this).children('div').stop().show();	
	};
	if($(this).index()>=2){
		$(this).children('div').stop().fadeIn(300, function() {
			$(this).stop().animate({'right':'38px'},200);
		});
	};
	if($(this).index()!=4)
		$(this).children('a').children('span').css('background-position-x','-33px');
	else $(this).children('a').children('span').css('background-position-x','-32px');
	if($(this).index()!=1){
		$(this).children('div').hover(function() {
			$(this).parent('li').css('background','');
			$(this).parent('li').children('a').children('span').css('background-position-x','');
		});
	}
}, function() {
	$(this).css('background','');
	$(this).children('a').children('span').css('background-position-x','');
	if($(this).index()==0){
		$(this).children('div').stop().hide();
	};

	if($(this).index()>=2){
		$(this).children('div').stop().animate({'right':'80px'},200);
		var th = $(this);
		setTimeout(function(){
			th.children('div').stop().fadeOut(200);
		},150);
	};
});

$('.grl_tr').click(function() {
	$('.gr').stop().hide();
});

$('.rf_b li').hover(function() {
	$(this).css('background','#ed1e61');
		$(this).children('div').stop().fadeIn(300, function() {
			$(this).stop().animate({'right':'38px'},200);	
		});	
	if($(this).index()!=0)
		$(this).children('a').children('span').css('background-position-x','-33px');	
	$(this).children('div').hover(function() {
			$(this).parent('li').css('background','');
			$(this).parent('li').children('a').children('span').css('background-position-x','');
		});
}, function() {
		$(this).css('background','');
		$(this).children('a').children('span').css('background-position-x','');
		$(this).children('div').stop().animate({'right':'80px'},200);
		var th = $(this);
		setTimeout(function(){th.children('div').stop().fadeOut(300);},150);
});

$('.tort_l').click(function() {
	$(this).addClass('addcl');
	$(this).parent('li').addClass('adtras');
	$('.tort_r').removeClass('addcl');
	$('.tort_r').parent('li').removeClass('adtras');
	$('.con_t').stop().show();
	$('.con_none').stop().hide();
	$(window).scrollTop(530);	
});

$('.tort_r').click(function() {
	$(this).addClass('addcl');
	$(this).parent('li').addClass('adtras');
	$('.tort_l').removeClass('addcl');
	$('.tort_l').parent('li').removeClass('adtras');
	$('.con_t').stop().hide();
	$('.con_none').stop().show();
	$(window).scrollTop(530);	
});


$('.tp2').hover(function() {
	if($(window).scrollTop()>=$('.tips2').offset().top){
		$('.tp2').css('background','url("images/pc_new.jpg") no-repeat -90px 0px');
		$('.tp2 b').css('color', '#fe6397');
	}
}, function() {
	if($(window).scrollTop()>=$('.tips2').offset().top){
		$('.tp2').css('background','url("images/pc_new.jpg") no-repeat 0px 0px');
		$('.tp2 b').css('color', '#666');
    }
});

$('.tp3').hover(function() {
	if($(window).scrollTop()<$('.tips2').offset().top){
		$('.tp3').css('background','url("images/pc_new.jpg") no-repeat -90px -125px');
		$('.tp3 b').css('color', '#fe6397');
	}
}, function() {
	if($(window).scrollTop()<$('.tips2').offset().top){
		$('.tp3').css('background','url("images/pc_new.jpg") no-repeat 0px -125px');
		$('.tp3 b').css('color', '#666');
    }
});

$('.tp2').click(function() {
	$('html,body').scrollTop($('.tips').offset().top);
});

$('.tp3').click(function() {
	$('html,body').scrollTop($('.tips2').offset().top);
});

$('.con_t li,.con_none li').hover(function() {
	$(this).css('opacity', '0.7');
}, function() {
	$(this).css('opacity', '1');
});

$('.fcon_l dd').hover(function() {
	$(this).stop().animate({'padding-left': '12px'}, 500);
	$(this).children('a').css('color', '#ed1e51');
}, function() {
	$(this).stop().animate({'padding-left': ''}, 500);
	$(this).children('a').css('color', '#666666');
});

$('.fm_ul a').hover(function() {
	$(this).css({'text-decoration-color':'#fff', 'text-decoration':'underline'});
}, function() {
	$(this).css({'text-decoration-color':'#fff', 'text-decoration':'none'});
});

$('.adver li').hover(function() {
	$(this).children('a').children('p').stop().toggle();
});




var list1=[
			{src:'images/adt1.jpg'},
			{src:'images/adt2.jpg'},
			{src:'images/adt3.jpg'},
			{src:'images/adt4.jpg'},
			{src:'images/adt5.jpg'},
			{src:'images/adt6.jpg'}	
			];

for(var i=0;i<list1.length;i++){
	var tag1=$('.con_t li').eq(0).clone(true);
	if(i==0) $('.con_t').html('');
	tag1.children('a').children('img').attr('src',list1[i].src);
	$('.con_t').append(tag1);
}

var list2=[
			{src:'images/adt001.jpg'},
			{src:'images/adt002.jpg'},
			{src:'images/adt003.jpg'},
			{src:'images/adt004.jpg'}
			];

for(var i=0;i<list2.length;i++){
	var tag2=$('.con_none li').eq(0).clone(true);
	if(i==0) $('.con_none').html('');
	tag2.children('a').children('img').attr('src',list2[i].src);
	$('.con_none').append(tag2);
}


var list3=[
			{
				src:'images/adm1.jpg',
				txt:'AHC 致美自然保湿防晒霜 50ml/支 SPF50+防水防汗防紫外线全身可用',
				oi:'￥',
				ob:'113',
				os:'￥200',
				logo:'images/adt11.jpg',
				op:'海外直采 海外价格 闪电发货'
			},
			{
				src:'images/adm2.jpg',
				txt:'Elta MD氨基酸泡沫洁面乳207ml 深层清洁 温和净肤',
				oi:'￥',
				ob:'113',
				os:'￥200',
				logo:'',
				op:'海外直采 深层清洁 温和净肤'
			},
			{
				src:'images/adm1.jpg',
				txt:'AHC 致美自然保湿防晒霜 50ml/支 SPF50+防水防汗防紫外线全身可用',
				oi:'￥',
				ob:'113',
				os:'￥200',
				logo:'images/adt11.jpg',
				op:'海外直采 海外价格 闪电发货'
			},
			{
				src:'images/adm2.jpg',
				txt:'Elta MD氨基酸泡沫洁面乳207ml 深层清洁 温和净肤',
				oi:'￥',
				ob:'113',
				os:'￥200',
				logo:'',
				op:'海外直采 深层清洁 温和净肤'
			},
			{
				src:'images/adm1.jpg',
				txt:'AHC 致美自然保湿防晒霜 50ml/支 SPF50+防水防汗防紫外线全身可用',
				oi:'￥',
				ob:'113',
				os:'￥200',
				logo:'images/adt11.jpg',
				op:'海外直采 海外价格 闪电发货'
			},
		    {
				src:'images/adm2.jpg',
				txt:'Elta MD氨基酸泡沫洁面乳207ml 深层清洁 温和净肤',
				oi:'￥',
				ob:'113',
				os:'￥200',
				logo:'',
				op:'海外直采 深层清洁 温和净肤'
			},
			{
				src:'images/adm1.jpg',
				txt:'AHC 致美自然保湿防晒霜 50ml/支 SPF50+防水防汗防紫外线全身可用',
				oi:'￥',
				ob:'113',
				os:'￥200',
				logo:'images/adt11.jpg',
				op:'海外直采 海外价格 闪电发货'
			},
		    {
				src:'images/adm2.jpg',
				txt:'Elta MD氨基酸泡沫洁面乳207ml 深层清洁 温和净肤',
				oi:'￥',
				ob:'113',
				os:'￥200',
				logo:'',
				op:'海外直采 深层清洁 温和净肤'
			},
			{
				src:'images/adm1.jpg',
				txt:'AHC 致美自然保湿防晒霜 50ml/支 SPF50+防水防汗防紫外线全身可用',
				oi:'￥',
				ob:'113',
				os:'￥200',
				logo:'images/adt11.jpg',
				op:'海外直采 海外价格 闪电发货'
			},
		    {
				src:'images/adm1.jpg',
				txt:'AHC 致美自然保湿防晒霜 50ml/支 SPF50+防水防汗防紫外线全身可用',
				oi:'￥',
				ob:'113',
				os:'￥200',
				logo:'images/adt11.jpg',
				op:'海外直采 海外价格 闪电发货'
			},
		    {
				src:'images/adm2.jpg',
				txt:'Elta MD氨基酸泡沫洁面乳207ml 深层清洁 温和净肤',
				oi:'￥',
				ob:'113',
				os:'￥200',
				logo:'',
				op:'海外直采 深层清洁 温和净肤'
			},
			{
				src:'images/adm1.jpg',
				txt:'AHC 致美自然保湿防晒霜 50ml/支 SPF50+防水防汗防紫外线全身可用',
				oi:'￥',
				ob:'113',
				os:'￥200',
				logo:'images/adt11.jpg',
				op:'海外直采 海外价格 闪电发货'
			},
			{
				src:'images/adm1.jpg',
				txt:'AHC 致美自然保湿防晒霜 50ml/支 SPF50+防水防汗防紫外线全身可用',
				oi:'￥',
				ob:'113',
				os:'￥200',
				logo:'images/adt11.jpg',
				op:'海外直采 海外价格 闪电发货'
			},
		    {
				src:'images/adm2.jpg',
				txt:'Elta MD氨基酸泡沫洁面乳207ml 深层清洁 温和净肤',
				oi:'￥',
				ob:'113',
				os:'￥200',
				logo:'',
				op:'海外直采 深层清洁 温和净肤'
			},
			{
				src:'images/adm1.jpg',
				txt:'AHC 致美自然保湿防晒霜 50ml/支 SPF50+防水防汗防紫外线全身可用',
				oi:'￥',
				ob:'113',
				os:'￥200',
				logo:'images/adt11.jpg',
				op:'海外直采 海外价格 闪电发货'
			},
			{
				src:'images/adm1.jpg',
				txt:'AHC 致美自然保湿防晒霜 50ml/支 SPF50+防水防汗防紫外线全身可用',
				oi:'￥',
				ob:'113',
				os:'￥200',
				logo:'images/adt11.jpg',
				op:'海外直采 海外价格 闪电发货'
			},
		    {
				src:'images/adm2.jpg',
				txt:'Elta MD氨基酸泡沫洁面乳207ml 深层清洁 温和净肤',
				oi:'￥',
				ob:'113',
				os:'￥200',
				logo:'',
				op:'海外直采 深层清洁 温和净肤'
			},
			{
				src:'images/adm1.jpg',
				txt:'AHC 致美自然保湿防晒霜 50ml/支 SPF50+防水防汗防紫外线全身可用',
				oi:'￥',
				ob:'113',
				os:'￥200',
				logo:'images/adt11.jpg',
				op:'海外直采 海外价格 闪电发货'
			},
		  ];

for(var i=0;i<list3.length;i++){
	var tag3=$('.adver li').eq(0).clone(true);
	if(i==0) $('.adver').html('');
	tag3.children('a').children('.adbox').children('img').attr('src', list3[i].src);
	tag3.children('a').children('.txt').html(list3[i].txt);
	tag3.children('a').children('.box_btn').children('i').html(list3[i].oi);
	tag3.children('a').children('.box_btn').children('b').html(list3[i].ob);
	tag3.children('a').children('.box_btn').children('s').html(list3[i].os);
	tag3.children('a').children('.box_btn').children('span').css('background',"url('"+list3[i].logo+"')");
	tag3.children('a').children('p').html(list3[i].op);
	$('.adver').append(tag3);
}