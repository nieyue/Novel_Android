$(function(){
	//登陆注册
	$("#loginbtn").on("click",function(){
		$("#login").css("display","block");
		$("#register").css("display","none");
	});
	$("#registerbtn").on("click",function(){
		$("#register").css("display","block");
		$("#login").css("display","none");
	});
	//玄幻 奇幻
	$("#fantasy").on("click",function(){
		$(this).css("color","red");
		$("#strange").css("color","black");
		$(".show").each(function(){
			$(this).css("display","block");
		});
		$(".hide").each(function(){
			$(this).css("display","none");
		});
		
	});
	$("#strange").on("click",function(){
		$(this).css("color","red");
		$("#fantasy").css("color","black");
		$(".hide").each(function(){
			$(this).css("display","block");
		});
		$(".show").each(function(){
			$(this).css("display","none");
		});
	});
	
	
});
/**
 * 元素居中
 */
;(function($){
$.fn.center=function(top,left){
$(this).css("position","absolute");
this.css("top",(($(window).height()-this.height())/2+$(window).scrollTop()+top)+"px");
this.css("left",(($(window).width()-this.width())/2+$(window).scrollLeft()+left)+"px");
return this;
}})(jQuery);
/**
 * 底部色彩横线变换bottomhr
 */
;(function($){
	$.fn.bottomhr=function(){
		var ballnumber=100;
		if($(this).children().size()<ballnumber){
		for (var int = 0; int <ballnumber; int++) {
		$(this).append("<div></div>");
		}
		}
		var $this=$(this).children();
		//alert($(this).children().size())
	var colorstr=["#1685a9","#16a951","#003472","#ffb61e","#ff4777"
	              ,"#574266","#8d4bbb","#cca4e3","#30dff3","#424c50"];
	$this.each(function(){
		$(this).css("display","inline-block");
		$(this).css("width","1%");
		$(this).css("height","5px");
		//$(this).css("border-radius",$(this).css("width"));
		$(this).css("background-color",colorstr[Math.ceil(Math.random()*10)]);
		$(this).css("box-shadow","0 0 20px "+colorstr[Math.ceil(Math.random()*10)]);
	});
	}})(jQuery);