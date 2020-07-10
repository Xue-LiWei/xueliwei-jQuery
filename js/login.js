
$('#tel').click(function(event) {
	$('#it0,#it1,#ib').stop().show();
	$('#isp1,#isp2,#isp3').stop().hide();
	$('#omain').height(416+'px');
});

$('#nor').click(function(event) {
	$('#it0,#it1,#ib').stop().hide();
	$('#isp1,#isp2,#isp3').stop().show();
	$('#omain').height(476+'px');
});

var flag=0;
$('#more2').click(function(event) {
	if(flag==0){
	// $('#more2').css('background', "url('../images/icon.jpg') no-repeat -274px -2px");
	$('#more2').css({'background-position': "-274px -2px"});
	$('#obox').animate({'height': 112+'px'}, 500);
    flag=1;
    }else{ 	
    $('#more2').css({'background-position': "-274px -26px"});
	$('#obox').animate({'height': 56+'px'}, 500);
    flag=0;
    }
});


$('#obox li').hover(function() {
	$(this).css('opacity', '1');
}, function() {
	$(this).css('opacity', '0.5');
});

