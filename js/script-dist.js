$(document).ready(function(){$(".header_burger").click(function(t){$(".header_burger,.header_menu").toggleClass("active"),$("body").toggleClass("lock")})}),$(document).ready(function(){$(".block_title").click(function(t){$(".prays").hasClass("one")&&($(".block_title").not($(this)).removeClass("active"),$(".block_text").not($(this).next()).slideUp(300)),$(this).toggleClass("active").next().slideToggle(300)})}),$(".userInput").focus(function(){$(this).parent().addClass("focus")}).blur(function(){""===$(this).val()&&$(this).parent().removeClass("focus")}),$(document).ready(function(){$(".block_titlei").click(function(t){$(".praysi").hasClass("one")&&($(".block_titlei").not($(this)).removeClass("active"),$(".block_texti").not($(this).next()).slideUp(300)),$(this).toggleClass("active").next().slideToggle(300)})}),$(document).ready(function(){$("#menu").on("click","a",function(t){t.preventDefault();var e=$(this).attr("href"),o=$(e).offset().top;$("body,html").animate({scrollTop:o},1500)})});