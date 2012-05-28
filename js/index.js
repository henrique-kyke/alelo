		  $(document).ready(function(){
		    $(".head_link").mouseover(function(){
		      $("#top_img").removeClass("wb");
		      $("#top_img").addClass("color");	
		      $("#header_comment").removeClass("transparence");
		      $("#header_link").removeClass("transparence");
		    });
		    $(".head_link").mouseout(function(){
		      $("#top_img").removeClass("color");
		      $("#top_img").addClass("wb");
		      $("#header_comment").addClass("transparence");
 		      $("#header_link").addClass("transparence");
		    });
		    $(".link_mat_1").mouseover(function (){
		      $("#materia_1").removeClass("wb");
		      $("#materia_1").addClass("color");
		      $("#intro_materia_1").removeClass("transparence");
		    });
		    $(".link_mat_1").mouseout(function (){
		      $("#materia_1").removeClass("color");
		      $("#materia_1").addClass("wb");
		      $("#intro_materia_1").addClass("transparence");
		    });		    
		    $(".link_mat_2").mouseover(function (){
		      $("#materia_2").removeClass("wb");
		      $("#materia_2").addClass("color");
		      $("#intro_materia_2").removeClass("transparence");
		    });
		    $(".link_mat_2").mouseout(function (){
		      $("#materia_2").removeClass("color");
		      $("#materia_2").addClass("wb");
		      $("#intro_materia_2").addClass("transparence");
		    });
		    $(".link_mat_3").mouseover(function (){
		      $("#materia_3").removeClass("wb");
		      $("#materia_3").addClass("color");
		      $("#intro_materia_3").removeClass("transparence");
		    });
 		    $(".link_mat_3").mouseout(function (){
		      $("#materia_3").removeClass("color");
		      $("#materia_3").addClass("wb");
		      $("#intro_materia_3").addClass("transparence");
		    });
		    $(".link_mat_4").mouseover(function (){
		      $("#materia_4").removeClass("wb");
		      $("#materia_4").addClass("color");
		    });
 		    $(".link_mat_4").mouseout(function (){
		      $("#materia_4").removeClass("color");
		      $("#materia_4").addClass("wb");
		    });
		  });
