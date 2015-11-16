/*var oHead=document.getElementsByTagName("header")[0];
var oNav=oHead.getElementsByClassName("nav-option")[0];
var oLeft=oNav.getElementsByClassName("left")[0];*/
//var oLi=oLeft.getElementsByTagName("li");
window.onload=function(){
/*function arrow()
{

var oUl=document.getElementById("option_left");
var oLi=oUl.getElementsByTagName("li");
var oImg=oUl.getElementsByTagName("img");
for (var i = 0; i < oImg.length; i++) {
	var current=-135;
    oLi[i].index=i;
	oLi[i].onclick=function()
{
	//oImg[i].style.transform="rotate(-135deg) scale(0.6)";
	current=(current-180)%360;
	oImg[this.index].style.transform="rotate("+current+"deg) scale(0.6)";
	};
}
}
arrow();*/
function hide()
{
	var oLeft=document.getElementById("option_left");
	var aLi=oLeft.getElementsByTagName("li");
	var oNav=document.getElementById("nav_filters");
	/*var oImg=aLi.getElementsByTagName("img");*/
	var current=-135;
	var arrImg=[];
	oNav.style.display="none";
	for (var i = 0; i < aLi.length; i++) {
		aLi[i].index=i;
		var oImg=aLi[i].getElementsByTagName("img")[0];
		arrImg.push(oImg);		
		aLi[i].onclick=function()
		{
			oNav.style.display="block";
			current=(current-180)%360;
	        arrImg[this.index].style.transform="rotate("+current+"deg) scale(0.6)";
	       /* if (current==-135) {
	        	aLi[i].onClick=function ()
	        	{
	        		oNav.style.display="none";
	        		arrImg[this.index].style.transform="rotate("+current+"deg) scale(0.6)";

	        	}
	        };*/
		};
	};
}
hide();
}
