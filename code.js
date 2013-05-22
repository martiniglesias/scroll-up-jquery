$(document).ready(function()
  {
		$("body").append("<a href='#' class='volverarriba'>Volver arriba</a>"); // Agregamos el botón con la flecha
		$(window).scroll(function()
		{
			if ($(this).scrollTop() > 70) $('.volverarriba').fadeIn();
			else $('.volverarriba').fadeOut();
		});
		/* IMPORTANTE: si usas jQuery <1.7 esto de abajo no funcionará */
		$(document).on("click",".volverarriba",function(e)
		{
			e.preventDefault();
			$("html, body").stop().animate({ scrollTop: 0 }, "slow");
		});
	});
