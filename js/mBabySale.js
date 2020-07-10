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
	$('.buycar').css({'background':'#fff','border-bottom':'#fff'});	
	$('.buycar a').css('color', '#ed1e61');
	$('.buycar s').addClass('add');
	t=setTimeout(function(){$('.cartips').stop().show()},'500');
}, function() {
	$('.buycar').css({'background':'','border-bottom':''});
	$('.buycar a').css('color', '');
	$('.buycar s').removeClass('add');
	$('.cartips').stop().hide();
	clearTimeout(t);
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

var num=0;
var timer;

	var arr=['../images/237649_1920_349_001-web.jpg',
			'../images/237640_1920_349_002-web.jpg',
			'../images/237638_1920_350_002-web.jpg'
			];
function go(){
timer=setInterval(function(){
	num++;
	if(num==3) num=0;
	$('.box li').css('background', 'url('+arr[num]+') center 0px no-repeat');
	$('.btn li').eq(num).css('background', '#ed1e61').siblings('li').css('background', '#666666');
},2500);
}

go();

$('.box,.btn').hover(function() {
	clearInterval(timer);
}, function() {
	go();
});

$('.btn li').click(function() {
	$('.box li').css('background', 'url('+arr[$(this).index()]+') center 0px no-repeat');
	$('.btn li').eq($(this).index()).css('background', '#ed1e61').siblings('li').css('background', '#666666');
    num=$(this).index();
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

$(window).scroll(function() {
	if($(window).scrollTop()>430){
		$('.rf_b li').eq(2).css('display', 'block');
		$('.rf_b span').eq(2).css('display', 'block');
	}else {
		$('.rf_b li').eq(2).css('display', 'none');
		$('.rf_b span').eq(2).css('display', 'none');
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

var list=[
			{
				logo:'../images/ad00.jpg',
				title:'花王天天特卖',
				ou:'单包低至59元',
				oi:'1月4日-1月20日',
				oimg:'../images/ad01.jpg',
				ob:'日本直采 保税发货',
				os:0
			},
			{
				logo:'../images/ad10.jpg',
				title:'花王天天特卖',
				ou:'单包低至59元',
				oi:'1月4日-1月20日',
				oimg:'../images/ad11.jpg',
				ob:'日本直采 保税发货',
				os:-1
			},
			{
				logo:'../images/ad00.jpg',
				title:'花王天天特卖',
				ou:'单包低至59元',
				oi:'1月4日-1月20日',
				oimg:'../images/ad01.jpg',
				ob:'日本直采 保税发货',
				os:2
			},
			{
				logo:'../images/ad10.jpg',
				title:'花王天天特卖',
				ou:'单包低至59元',
				oi:'1月4日-1月20日',
				oimg:'../images/ad11.jpg',
				ob:'日本直采 保税发货',
				os:-1
			},
			{
				logo:'../images/ad00.jpg',
				title:'花王天天特卖',
				ou:'单包低至59元',
				oi:'1月4日-1月20日',
				oimg:'../images/ad01.jpg',
				ob:'日本直采 保税发货',
				os:-1
			},
			{
				logo:'../images/ad10.jpg',
				title:'花王天天特卖',
				ou:'单包低至59元',
				oi:'1月4日-1月20日',
				oimg:'../images/ad11.jpg',
				ob:'日本直采 保税发货',
				os:1
			},
			{
				logo:'../images/ad00.jpg',
				title:'花王天天特卖',
				ou:'单包低至59元',
				oi:'1月4日-1月20日',
				oimg:'../images/ad01.jpg',
				ob:'日本直采 保税发货',
				os:0
			},
			{
				logo:'../images/ad00.jpg',
				title:'花王天天特卖',
				ou:'单包低至59元',
				oi:'1月4日-1月20日',
				oimg:'../images/ad01.jpg',
				ob:'日本直采 保税发货',
				os:-1
			},
			{
				logo:'../images/ad10.jpg',
				title:'花王天天特卖',
				ou:'单包低至59元',
				oi:'1月4日-1月20日',
				oimg:'../images/ad11.jpg',
				ob:'日本直采 保税发货',
				os:1
			},
			{
				logo:'../images/ad00.jpg',
				title:'花王天天特卖',
				ou:'单包低至59元',
				oi:'1月4日-1月20日',
				oimg:'../images/ad01.jpg',
				ob:'日本直采 保税发货',
				os:2
			},
			{
				logo:'../images/ad10.jpg',
				title:'花王天天特卖',
				ou:'单包低至59元',
				oi:'1月4日-1月20日',
				oimg:'../images/ad11.jpg',
				ob:'日本直采 保税发货',
				os:-1
			},
			{
				logo:'../images/ad00.jpg',
				title:'花王天天特卖',
				ou:'单包低至59元',
				oi:'1月4日-1月20日',
				oimg:'../images/ad01.jpg',
				ob:'日本直采 保税发货',
				os:0
			},
			{
				logo:'../images/ad10.jpg',
				title:'花王天天特卖',
				ou:'单包低至59元',
				oi:'1月4日-1月20日',
				oimg:'../images/ad11.jpg',
				ob:'日本直采 保税发货',
				os:1
			}

		];

for(var i=0;i<list.length;i++){
	var tag=$('.ad li').eq(0).clone(true);
	tag.children('a').children('span').children('.h3').children('img').attr('src', list[i].logo);
	tag.children('a').children('span').children('.h4').html(list[i].title);
	tag.children('a').children('span').children('u').html(list[i].ou);
	tag.children('a').children('span').children('i').html(list[i].oi);
	tag.children('a').children('img').attr('src', list[i].oimg);
	tag.children('a').children('p').children('b').html(list[i].ob);

	if(list[i].os==0){
		tag.children('a').children('s').css('background', 'url("../images/trans_new.png") 0px -30px no-repeat');
	}

	if(list[i].os==1){
		tag.children('a').children('s').css('background', 'url("../images/trans_new.png") -57px -30px no-repeat');
	}

	if(list[i].os==2){
		tag.children('a').children('s').css('background', 'url("../images/trans_new.png") -276px -131px no-repeat');
	}

	$('.ad').append(tag);
}

