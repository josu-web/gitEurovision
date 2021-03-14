  $(document).ready(function() {    

  
//Lo propio para winners
       $("#tira").show()
      $("#finals").show()
          $("#anniosss").show()
      
       $("#pulsadores").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 0);
												  
				             })
          
          $("#parteAbajo").hide()
         
         
         $("#decada1").on("click",function(){ 
                   valor = 67
                   var canDec = $("#decada1").find(".cifras").text()
                 $("#deca").text(canDec)
                   pedirDatos()
         })    
         $("#decada2").on("click",function(){ 
                   valor = 57
                 var canDec = $("#decada2").find(".cifras").text()
                 $("#deca").text(canDec)
                   pedirDatos()
         })  
         $("#decada3").on("click",function(){ 
                   valor = 47
                   var canDec = $("#decada3").find(".cifras").text()
                 $("#deca").text(canDec)
                   pedirDatos()
         })  
         $("#decada4").on("click",function(){ 
                   valor = 37
                  var canDec = $("#decada4").find(".cifras").text()
                 $("#deca").text(canDec)
                   pedirDatos()
         })  
         $("#decada5").on("click",function(){ 
                   valor = 27
                  var canDec = $("#decada5").find(".cifras").text()
                 $("#deca").text(canDec)
                   pedirDatos()
         })  
         $("#decada6").on("click",function(){ 
                   valor = 17
                   var canDec = $("#decada6").find(".cifras2").text()
                 $("#deca").text(canDec)
                   pedirDatos()
         })  
         $("#decada7").on("click",function(){ 
                   valor = 4
                    var canDec = $("#decada7").find(".cifras3").text()
                 $("#deca").text(canDec)
                   pedirDatos()
         })  
         
                function pedirDatos(){ 
                    $("#parteAbajo").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 680);
												  
				             })
          
                    $("#pulsadores").hide()
                    $("#tira").hide()
                    $("#final").show()
            $("#sob").hide()
                    $("#finals").hide()
          $("#anniosss").hide()
                    
                  
                 $.ajax ({  url: "api.php",
                            data:
                                {
                                comando: "pedirPaises",
                                numPais : valor
                                    },
                            dataType: "json",
                            method: "post",
                            success: fin
                        })  
                 }
                 function fin(datos){  
                    
                     if(datos.meta.ok != true) {
                       alert("Error al cargar los datos")
                       return
                     }
                     
                      $("#contenedorWinners").text("")   
                     for(var item of datos.data){
                         var cadena = `
                 <div class = "ficha tilt-in-top-1">
<div class="tv"><img src="img/tv_icono.png" alt="television"></div>
                        <h2 class="ann">${item.Annio}</h2>
                         <div class="video">	
	<div class="video"><iframe width="95%" height="95%" src="${item.Video}" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
	</div>
                         <div class = "banPaisFicha">
                              <div class = "bandera"><img src="${item.Flag}"></div>
                              <div class = "pais">${item.Pais}</div>
                         </div>
                         <div class="music">
                         <div class="nota"><i class="fas fa-music fa-2x"></i></div>
                         <h3 class="cancion">${item.Cancion}<br>(${item.Interprete})</h3> 
                         </div>
                         <div class = "borde"></div>

                         <div class="music">
                         <div class="nota2"><i class="fas fa-map-marker-alt fa-2x"></i></div>
                         <div class="cancion">${item.CiudadSede}</div>
                         </div>

                         </div>
                         
                         `;
                         
                        $("#contenedorWinners").append(cadena);
                  
                         
                     }
                 }
      
      $("#volver").on("click",function(){ 
          $("#finals").show()
          $("#anniosss").show()
               $("#tira").show()
          $("#sob").show()
          
               $("#pulsadores").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 680);
												  
				             })
                $("#parteAbajo").hide()
               
           })
      
   

     
      })       