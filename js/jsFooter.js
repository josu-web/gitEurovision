$(document).ready(function() {          

	var cual
	var tiem = false
	var tiem2 = false
	var anc
	
	   anc = $(window).width()
	
	  if (anc < 1300){ 

       if($("h1").text() == "Start Josuvision Song Contest"){
	       anc = $(window).width()

		  $("#cas1").addClass("active")
	 
	
       }
        
       if($("h1").text() == "Winners since its inception in 1956"){
           $("#cas3").addClass("active")
           
       }
        
       if($("h1").text() == "Josuvision winning countries"){
           $("#cas2").addClass("active")
           $("#cabecera").css("background-image", "url(../eurovision/img/coun.jpg)")
        
        
       } 
    
       if($("h1").text() == "Winners and second places"){
           $("#paraDes").addClass("active")
          
        
        
       } 
   
    
       if($("h1").text() == "Other hits"){
           $("#cas5").addClass("active")
           $("#cabecera").css("background-image", "url(../eurovision/img/otr.jpg)")
        
        
       } 
        
    
       if($("h1").text() == "Rotterdam 2020"){
           $("#bo").addClass("active")
           $("#cabecera").css("background-image", "url(../eurovision/img/sede.jpg)")
          
           
       }
    
       if($("h1").text() == "News"){
           $("#cas4").addClass("active")
        
       }
		  
	  }else{
		  
		   if($("h1").text() == "Start Josuvision Song Contest"){
			   $(".casilla #inicio").addClass("activeOrd")
		   }

		   if($("h1").text() == "Winners since its inception in 1956"){
			   $(".casilla #ganadores").addClass("activeOrd")

		   }

		   if($("h1").text() == "Josuvision winning countries"){
			   $(".casilla #porPaises").addClass("activeOrd")
			   $("#cabecera").css("background-image", "url(../eurovision/img/coun.jpg)")


		   } 

		   if($("h1").text() == "Winners and second places"){
			   $(".casilla #alf").addClass("activeOrd")



		   } 

		   if($("h1").text() == "Other hits"){
			   $(".casilla #porOtros").addClass("activeOrd")
			   $("#cabecera").css("background-image", "url(../eurovision/img/otr.jpg)")


		   } 


		   if($("h1").text() == "Rotterdam 2020"){
			   $("#rote").addClass("activeOrd")
			   $("#cabecera").css("background-image", "url(../eurovision/img/sede.jpg)")


		   }

		   if($("h1").text() == "News"){
			   $(".casilla #curio").addClass("activeOrd")

		   }
		  
		  
	  }
	
	function realizarSalto(cual){
		   $.ajax ({  url: "api.php",
                data:
                   {
                comando: "elegirSalto",
			    salt: cual
					   
                    },
                dataType: "json",
                method: "post",
                success: finMeterSalto
                 }) 
          function finMeterSalto(datos){  
            if(datos.meta.ok != true) {
               alert("Error al cargar los datos")
               return
             }
                                         
            }
		
		
	}
    
    
     $("#caso1").on("click",function(){ 
			window.location="segundos.php"
             realizarSalto(1)
        
          })
         
         $("#caso2").on("click",function(){ 
			window.location="segundos.php"
              realizarSalto(2)
        
          })
         
          $("#caso3").on("click",function(){ 
			window.location="segundos.php"
              realizarSalto(3)
        
          })
         
         $("#caso4").on("click",function(){ 
			window.location="segundos.php"
              realizarSalto(4)
        
          })
         $("#caso5").on("click",function(){ 
			 window.location="segundos.php"
             realizarSalto(5)
        
          })
	
	$("#paraDes").hover(function(){
		
		 anc = $(window).width()
  
       if (anc > 1023){ 
		  
		$("#desplegable").css("display", "block")
		
	   }
	})

	$("#ca").on("click",function(){ 
		
		$("#desplegable").css("display", "none")
		
		
	})
	
	$("#caRev").on("click",function(){ 
		
		$("#desplegable").css("display", "none")
		
		
	})
	
	
	$("#myCarousel").on("click",function(){ 
		$("#desplegable").css("display", "none")
		
	})
	
	$("#myCarousel2").on("click",function(){ 
		$("#desplegable").css("display", "none")
		
	})
	
	$("#alca").on("click",function(){ 
		
		if(tiem == false){
/*
		$("#desplegable").css("display", "block")
			tiem = true
			*/
			$("#ocultoMenu").css("display", "block")
			$("#enlaces").css("display", "grid")
			tiem = true
			
			
		}
		else{
			/*
			$("#desplegable").css("display", "none")
			tiem = false
			*/
			$("#ocultoMenu").css("display", "none")
			$("#desplegable").css("display", "none")
			$("#enlaces").css("display", "none")
			tiem = false
		}
		
	})
	
		$("#alca2").on("click",function(){ 
		
		if(tiem2 == false){
/*
		$("#desplegable").css("display", "block")
			tiem = true
			*/
			$("#desplegable").css("display", "block")
			
			tiem2 = true
			
			
		}
		else{
			/*
			$("#desplegable").css("display", "none")
			tiem = false
			*/
			$("#desplegable").css("display", "none")
		
			tiem2 = false
		}
		
	})
	
	
	 anc = $(window).width()
  
       if (anc > 1023){ 
		   $(".cierre").hover(function(){ console.log("rr")
			   $("#desplegable").hide()
			   
		   })
		   
	   }
 
  
       })