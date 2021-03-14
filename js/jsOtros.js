     
     $(document).ready(function() { 
         var clicado
         var inte
              
       $("#pru").show()
          $("#contenedor1").hide()
         $("#volverOt").hide()
          $("#starsE").show()
          $("#sta").show()
         $(".snip0015").show()
          $("#granVolver").hide()
           $("#contenedorEstrellas").hide()
  
 //Lo propio para countries
        
         
               $("#tira").hide()
               
            
       
                   nPais= $(this).find(".pais2").text()
              
                   $("#contenedorCountries").text("")
               
                   pedirDatos()
                   
             function pedirDatos(){ 
                 $.ajax ({
                            url: "api.php",
                            data:
                                {
                                comando: "otrosExitos"
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
               
                     for(var item of datos.data){  
                         var cadena = `
                 <div class = "ficha2 tilt-in-top-1">
<div class="tv"><img src="img/tv_icono.png" alt="television"></div>
                        <h2 class="ann">${item.Annio}</h2>
                         <div class="video">
                         
	<div class="video"><iframe width="95%" height="95%" src="${item.Video}" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
	</div>
                           
                         <div class = "banPaisFicha">
                              <div class = "bandera"><img id="#imaBan" src="${item.Flag}"></div>
                              <div class = "pais">${item.Pais}</div>
                         </div>
                        
                         <div class="music">
                            <div class="nota"><i class="fas fa-list-ol fa-2x"></i></div>
                            <div class = "puesto">${item.Puesto}</div>   
                         </div>
                         <div class = "borde2"></div>
                         <div class="music">
                         <div class="nota"><i class="fas fa-music fa-2x"></i></div>
                         <h3 class="cancion">${item.Cancion}<br>(${item.interprete})</h3> 
                         </div>
                         <div class = "borde"></div>

                         <div class="music">
                         <div class="nota2"><i class="fas fa-map-marker-alt fa-2x"></i></div>
                         <div class="cancion">${item.CiudadSede}</div>
                         </div>

                         </div>
                         
                         `;
                         
                        $("#contenedorCountries").append(cadena);
     
                    }
          
            
                 }
         
         $("#volverOt").on("click",function(){ 
             
             $("#pru").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 680);
												  
				             })
              $("#contenedor1").hide()
              $("#contenedorStar").hide()
              $("#contenedorEstrellas").hide()
             $(".snip0015").show()
      
        $("#volverOt").hide()
              $("#granVolver").hide()
             
             $("#starsE").show()
          $("#sta").show()
             
           
             $(".snip1477").show()
             
         })
           
   $("#pru").on("click",function(){ 
       
             $("#contenedor1").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 680);
												  
				             })
       
         $("#starsE").hide()
          $("#sta").hide()
       $(".snip0015").hide()
       $("#pru").hide()
        $("#volverOt").show()
              $("#granVolver").show()
       
   })
         
    $(".snip1477").on("click",function(){ 
              $("#contenedorStar").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 680);
												  
				             })
        
          $("#contenedorEstrellas").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 680);
												  
				             })
          
                       $("#imitacion").hide()
        $("#snip0015").hide()
             
        $("#sta").hide()
        
        $("#gana").hide()
         $("#pru").hide()
        $(".snip1477").hide()
        $(".snip0015").hide()
          $("#muestra").hide()
       $("#starsE").hide()
          $("h1").show()
         $("#volverOt").show()
         $("#granVolver").show()
       
        clicado = $(this).find(".inVIS").text()
        inte = $(this).find(".inVIS2").text()
        
          $.ajax ({
                            url: "api.php",
                            data:
                                {
                                comando: "estrellas",
                                nombrePais: clicado,
                                nombreInt: inte
                                    },
                            dataType: "json",
                            method: "post",
                         
                            success: finESTR
                        })
                  
                 
            function finESTR(datos){ 
         
                     if(datos.meta.ok != true) {
                       alert("Error al cargar los datos")
                       return
                     }
               
                $("#contenedorEstrellas").text("")
                     for(var item of datos.data){  
                         var cadena = `
                 <div class = "ficha2 tilt-in-top-1">
<div class="tv"><img src="img/tv_icono.png" alt="television"></div>
                        <h2 class="ann">${item.Annio}</h2>
                         <div class="video">
                         
	<div class="video"><iframe width="95%" height="95%" src="${item.Video}" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
	</div>
                           
                         <div class = "banPaisFicha">
                              <div class = "bandera"><img id="#imaBan" src="${item.Flag}"></div>
                              <div class = "pais">${item.Pais}</div>
                         </div>
                        
                         <div class="music">
                            <div class="nota"><i class="fas fa-list-ol fa-2x"></i></div>
                            <div class = "puesto">${item.Puesto}</div>   
                         </div>
                         <div class = "borde2"></div>
                         <div class="music">
                         <div class="nota"><i class="fas fa-music fa-2x"></i></div>
                         <h3 class="cancion">${item.Cancion}<br>(${item.interprete})</h3> 
                         </div>
                         <div class = "borde"></div>

                         <div class="music">
                         <div class="nota2"><i class="fas fa-map-marker-alt fa-2x"></i></div>
                         <div class="cancion">${item.CiudadSede}</div>
                         </div>

                         </div>
                         
                         `;
                         
                        $("#contenedorEstrellas").append(cadena);
     
                    }
          
            
                 }
              
          })
         
          }) 