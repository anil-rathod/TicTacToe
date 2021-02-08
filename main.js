var move=1;
var play=true;

$('table tr td').click(function(){
	if($(this).text()=="" && play){
		if((move%2)==1){
			$(this).append("x");
			$(this).css('color','green');
		}
		else{
			$(this).append('o');
			$(this).css('color','red');
		}
		move++;

		if(winner()!=-1 &&  winner()!=""){
			if(winner()=="x"){
				$('body').append('<div class="winner"><span>winner</span>x</div>');
				$('body').append('<button onclick="location.reload()">Play again</button>');
				$('.winner').css('background-color','pink');
				$('.button').css('color','pink');
			}
			else{
			$('body').append('<div class="winner"><span>winner</span>x</div>');
				$('body').append('<button onclick="location.reload()">Play again</button>');
				$('.winner').css('background-color','red');
				$('.button').css('color','red');	
			}
			play=false;
		}
	}
});

function winner()
{
	sp1=$('table tr:nth-child(1) td:nth-child(1)').text();
	sp2=$('table tr:nth-child(1) td:nth-child(2)').text();
	sp3=$('table tr:nth-child(1) td:nth-child(3)').text();
	sp4=$('table tr:nth-child(2) td:nth-child(1)').text();
	sp5=$('table tr:nth-child(2) td:nth-child(2)').text();
	sp6=$('table tr:nth-child(2) td:nth-child(3)').text();
	sp7=$('table tr:nth-child(3) td:nth-child(1)').text();
	sp8=$('table tr:nth-child(3) td:nth-child(2)').text();
	sp9=$('table tr:nth-child(3) td:nth-child(3)').text();

if((sp1==sp2)&&(sp2==sp3)){
	return sp3;
}
else if((sp4==sp5)&&(sp5==sp6)){
return sp6;
}
else if((sp7==sp8)&&(sp8==sp9)){
return sp9;
}
else if((sp1==sp4)&&(sp4==sp7)){
return sp7;
}
else if((sp2==sp5)&&(sp5==sp8)){
return sp8;
}
else if((sp3==sp6)&&(sp6==sp9)){
return sp9;
}
else if((sp1==sp5)&&(sp5==sp9)){
return sp9;
}
else if((sp3==sp5)&&(sp5==sp7)){
return sp7;
}
 return -1;
}