     
     $(document).ready(function() { 
         $("#tira").show()
          $("#parte1").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 0);
												  
				             })
          
          $("#parte2").hide()
         

  
 //Lo propio para countries
           var nPais
           $(".pulsador").on("click",function(){ 
               
              $("#parte2").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 680);
												  
				             })
                $("#parte1").hide()
               $("#tira").hide()
               
            
         var volcarVeces = ($(this).find(".vecesGan"))
                   nPais= $(this).find(".pais2").text()
              
                   $("#contenedorCountries").text("")
               
                   pedirDatos()
                   
             function pedirDatos(){ 
                 $.ajax ({
                            url: "api.php",
                            data:
                                {
                                comando: "cancionesPais",
                                nombrePais : nPais
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
                 <div class = "ficha tilt-in-top-1">
                        <h2 class="ann">${item.Annio}</h2>
                         <div class="video">
<div class="tv"><img src="img/tv_icono.png" alt="television"></div>
	<div class="video"><iframe width="95%" height="95%" src="${item.Video}" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
	</div>
                         <div class = "banPaisFicha">
                              <div class = "bandera"><img id="#imaBan" src="${item.Flag}"></div>
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
                         
                        $("#contenedorCountries").append(cadena);
      //OBTENEMOS EL NUMERO DE ELEMENTOS CON OBJECT.KEYS       
                    var veces = Object.keys(datos.data).length
                    var pais = item.Pais
                    }
                    
                if (veces>1){
                    $("#numVecesP").text(pais)
                    $("#numVeces").text(veces+" wins")
                
                 
                    
                }
                  else
                    {
                     $("#numVecesP").text(pais)
                    $("#numVeces").text(veces+" win")
                
                    
                  }
            
                 }
               }) 
         
           $("#volver").on("click",function(){ 
               $("#tira").show()
               $("#parte1").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 680);
												  
				             })
                $("#parte2").hide()
               
           })
         
          }) 