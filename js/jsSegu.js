     
     $(document).ready(function() { 
   
         var queHay
         var An
         var Pa
         var Pb
         var AnP
         var PS
       
        
         
          $("#eleccion").show()
         $("#aW").hide()
           $("#aW2").hide()
          $("#muestra").hide()
         $("#imitacion").hide()
          $("h1").show()
          $("#rank").show()
           $("#rank2").show()
         $("#tablero").hide()
          $("#muestraTablero").hide()
         $("#volverTab").hide()
         $("#logoAntiguo").show()
         $("#volverSS").hide()
         $("#granTablero").hide()
          $("#granMT").hide()
         $("#tiraRotTrans").hide()
        
         
         /*-------------------------------------------INICIO WINNERS--------------------------*/
         
          $(".irA").on("click",function(){ 
              $("#granTablero").hide()
              
              $("#aW").text("ALL WINNERS")
               $("#aW").show()
               $("#aW2").hide()
              $("#cSe").hide()
              $("#cTot").hide()
              $("#c").show()
              $("#gana").hide()
               $("#rank").hide()
                $("#rank2").hide()
               $("#imitacion").hide()
              $("#tablero").hide()
               $("#muestraTablero").hide()
               $("h1").hide()
                  $("#logoAntiguo").hide()
            $("#volverSS").hide()
               $("#granMT").hide()
         
         
              queHay = "1"
              $("#invisPaginat").text(queHay)
              
              queHay = $("#invisPaginat").text()
              console.log(queHay)
              
              
              $("#eleccion2").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 680);
												  
				             })
              $("#eleccion2A").hide()
              $("#eleccion2B").hide()
              $("#eleccion2C").hide()
              $("#eleccion2D").hide()
              $("#eleccion2E").hide()
              $("#eleccion2F").hide()
              $("#eleccion2G").hide()
              $("#eleccion2H").hide()
              $("#eleccion2I").hide()
              $("#eleccion2J").hide()
              $("#eleccion2K").hide()
              $("#eleccion2L").hide()
              $("#eleccion2M").hide()
              $("#eleccion2N").hide()
              $("#eleccion2O").hide()
              $("#eleccion2P").hide()
              $("#eleccion2Q").hide()
              $("#eleccion2R").hide()
              $("#c .pagination a#p1").addClass("active")
              $("#c .pagination a#p2").removeClass("active")
              $("#c .pagination a#p3").removeClass("active")
              $("#c .pagination a#p4").removeClass("active")
              $("#c .pagination a#p5").removeClass("active")
              $("#c .pagination a#p6").removeClass("active")
              $("#c .pagination a#p7").removeClass("active")
              $("#c .pagination a#p8").removeClass("active")
              $("#c .pagination a#p9").removeClass("active")
              
               $("#eleccion").hide()
               $("#muestra").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 680)})
              
              
             cargar(1)
           
              $("h1").hide() 
              
              })
         
         
         /*EN ESTA WEB TENEMOS QUE CARGAR MUCHSO VIDEOS QUE TARDAN EN CARGAR, COMO HE HECHO PAGINACION, HAGO QUE CADA PAGINA CARGUE SOLO SUS VIDEOS, PORQUE SINO TARDAN MUCHISIMO EN CARGAR. PARA ELLO LLAMO A ESTA FUNCION DE CARGA Y LE PASO EL PARAMETRO ORDEN QUE LE INDICA EL NUMERO DE PAGINA EN LA QUE ESTAMOS DE LA PAGINACION PARA QUE CARGUE EN SU BLOQUE CORRESPONDIENTE*/
         
                function cargar(orden){
             
                 $.ajax ({
                            url: "api.php",
                            data:
                                {
                                comando: "allWinners"
                                    },
                            dataType: "json",
                            method: "post",
                            success: finASecon
                        })
                  
               
            function finASecon(datos){ 
                    
                     if(datos.meta.ok != true) {
                       alert("Error al cargar los datos")
                       return
                     }
               var cont=0
               
                $("#eleccion2").text("")
                $("#eleccion2A").text("")
                $("#eleccion2B").text("")
                $("#eleccion2C").text("")
                $("#eleccion2D").text("")
                $("#eleccion2E").text("")
                $("#eleccion2F").text("")
                $("#eleccion2G").text("")
                $("#eleccion2H").text("")
                     for(var item of datos.data){ 
                        
                       
                         
                          var cadena = `
                 <div class = "tema swirl-in-fwd">
                        <div class="refeAnnio">${item.Annio}</div>
                        
	<div class="videoTema"><iframe class="vTema" width="100%" height="100%" src="${item.Video}" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
	
                         <div class = "refe">
                              <div class = "banderaRefe"><img id="#imaBan" src="${item.Flag}"></div>
                              <div class = "paisRefe">${item.Pais}</div>
                         </div>
                         <div class="music2A">
                         <div class="notaRefe"><i class="fas fa-music fa-2x"></i></div>
                         <div class="cancion2">${item.Cancion}<br>(${item.Interprete})</div> 
                         </div>
                      

                         <div class="music2B">
                         <div class="nota2Refe"><i class="fas fa-map-marker-alt fa-2x"></i></div>
                         <div class="cancion2">${item.CiudadSede}</div>
                         </div>

                         </div>
                         
                         `;
                         
                         cont++
                        if(orden == 1){
                         if(cont < 9){
                           $("#eleccion2").append(cadena)
                         }
                        }
                        if(orden == 2){
                         if (cont >= 9 && cont < 17){
                           $("#eleccion2A").append(cadena)
                         }
                        }
                        if(orden == 3){
                         if (cont >= 17 && cont < 25){
                           $("#eleccion2B").append(cadena)
                         }
                        }
                        if(orden == 4){
                         if (cont >= 25 && cont < 33){
                           $("#eleccion2C").append(cadena)
                         }
                        }
                        if(orden == 5){
                         if (cont >= 33 && cont < 41){
                           $("#eleccion2D").append(cadena)
                         }
                        }
                        if(orden == 6){
                         if (cont >= 41 && cont < 49){
                           $("#eleccion2E").append(cadena)
                         }
                        }
                        if(orden == 7){
                         if (cont >= 49 && cont < 57){
                           $("#eleccion2F").append(cadena)
                         }
                        }
                        if(orden == 8){
                         if (cont >= 57 && cont < 65){
                           $("#eleccion2G").append(cadena)
                         }
                        }
                        if(orden == 9){
                         if (cont >= 65){
                           $("#eleccion2H").append(cadena)
                         }
                        }
                     }
            }
              
                }
         
      /*----------------------------FIN WINNERS--------------------------*/   
         /*-------------------------------INICIO SECONDS POSITIONS-------------------*/
          $(".irB").on("click",function(){ 
               $("#imitacion").hide()
              $("#granTablero").hide()
               $("#aW").text("ALL SECONDS POSITIONS")
              $("#aW").show()
                $("#aW2").hide()
              $("#tablero").hide()
               $("#c").hide()
              $("#cTot").hide()
              $("#cSe").show()
               $("#rank").hide()
                 $("#rank2").hide()
               $("#volverSS").hide()
               $("#logoAntiguo").hide()
              $("#gana").hide()
               $("#muestraTablero").hide()
               $("h1").hide()
               $("#volverSS").hide()
               $("#granMT").hide()
              
              queHay = "1"
              $("#invisPaginat").text(queHay)
              
              queHay = $("#invisPaginat").text()
              console.log(queHay)
              
              
              $("#eleccion2").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 680);
												  
				             })
              $("#eleccion2A").hide()
              $("#eleccion2B").hide()
              $("#eleccion2C").hide()
              $("#eleccion2D").hide()
              $("#eleccion2E").hide()
              $("#eleccion2F").hide()
              $("#eleccion2G").hide()
              $("#eleccion2H").hide()
              $("#eleccion2I").hide()
              $("#eleccion2J").hide()
              $("#eleccion2K").hide()
              $("#eleccion2L").hide()
              $("#eleccion2M").hide()
              $("#eleccion2N").hide()
              $("#eleccion2O").hide()
              $("#eleccion2P").hide()
              $("#eleccion2Q").hide()
              $("#eleccion2R").hide()
              $("#cSe .pagination a#p1Se").addClass("active")
              $("#cSe .pagination a#p2Se").removeClass("active")
              $("#cSe .pagination a#p3Se").removeClass("active")
              $("#cSe .pagination a#p4Se").removeClass("active")
              $("#cSe .pagination a#p5Se").removeClass("active")
              $("#cSe .pagination a#p6Se").removeClass("active")
              $("#cSe .pagination a#p7Se").removeClass("active")
              $("#cSe .pagination a#p8Se").removeClass("active")
            
              
               $("#eleccion").hide()
               $("#muestra").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 680)})
           
              $("h1").hide() 
               cargar2(1)
              
                  })
         
              function cargar2(orden){
                 $.ajax ({
                            url: "api.php",
                            data:
                                {
                                comando: "allSeconds"
                                    },
                            dataType: "json",
                            method: "post",
                            success: finAW
                        })
                  
               
            function finAW(datos){ 
                    
                     if(datos.meta.ok != true) {
                       alert("Error al cargar los datos")
                       return
                     }
               var cont=0
               
                $("#eleccion2").text("")
                $("#eleccion2A").text("")
                $("#eleccion2B").text("")
                $("#eleccion2C").text("")
                $("#eleccion2D").text("")
                $("#eleccion2E").text("")
                $("#eleccion2F").text("")
                $("#eleccion2G").text("")
                $("#eleccion2H").text("")
                     for(var item of datos.data){ 
                        
                    if(item.DosPais != ""){
                         
                          var cadena = `
                 <div class = "tema swirl-in-fwd">
                        <div class="refeAnnio">${item.Annio}</div>
                        
	<div class="videoTema"><iframe class="vTema" width="100%" height="100%" src="${item.Dosvideo}" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
	
                         <div class = "refe">
                              <div class = "banderaRefe"><img id="#imaBan" src="${item.Flag}"></div>
                              <div class = "paisRefe">${item.DosPais}</div>
                         </div>
                         <div class="music2A">
                         <div class="notaRefe"><i class="fas fa-music fa-2x"></i></div>
                         <div class="cancion2">${item.DosCancion}<br>(${item.DosInterprete})</div> 
                         </div>
                      

                         <div class="music2B">
                         <div class="nota2Refe"><i class="fas fa-map-marker-alt fa-2x"></i></div>
                         <div class="cancion2">${item.CiudadSede}</div>
                         </div>

                         </div>
                         
                         `;
                         
                         cont++
                         if(item.DosCancion != 'x'){
                        if(orden == 1){
                         if(cont < 9){
                           $("#eleccion2").append(cadena)
                         }
                        }
                        if(orden == 2){
                         if (cont >= 9 && cont < 17){
                           $("#eleccion2A").append(cadena)
                         }
                        }
                        if(orden == 3){
                         if (cont >= 17 && cont < 25){
                           $("#eleccion2B").append(cadena)
                         }
                        }
                        if(orden == 4){
                         if (cont >= 25 && cont < 33){
                           $("#eleccion2C").append(cadena)
                         }
                        }
                        if(orden == 5){
                         if (cont >= 33 && cont < 41){
                           $("#eleccion2D").append(cadena)
                         }
                        }
                        if(orden == 6){
                         if (cont >= 41 && cont < 49){
                           $("#eleccion2E").append(cadena)
                         }
                        }
                        if(orden == 7){
                         if (cont >= 49 && cont < 60){
                           $("#eleccion2F").append(cadena)
                         }
                        }
                        if(orden == 8){
                         if (cont >= 60 && cont < 68){
                           $("#eleccion2G").append(cadena)
                         }
                        }
                        if(orden == 9){
                         if (cont >= 68){
                           $("#eleccion2H").append(cadena)
                         }
                        }
                     }
                     }
                     }
            }
              
              }
         
         /*----------------------------------------FIN SECONDS POSITIONS----------------------------*/
         
         
         
          /*-------------------------------INICIO WINNERS AND SECONDS POSITIONS-------------------*/
          $(".irC").on("click",function(){  
               $("#imitacion").hide()
              $("#granTablero").hide()
              $("#aW").text("ALL WINNERS AND SECONDS PLACES")
               $("#aW").show()
                $("#aW2").hide()
               $("#c").hide()
              $("#cSe").hide()
              $("#cTot").show()
              $("#gana").hide()
               $("#rank").hide()
                 $("#rank2").hide()
              $("#tablero").hide()
               $("#muestraTablero").hide()
               $("h1").hide()
               $("#logoAntiguo").hide()
               $("#granMT").hide()
               $("#volverSS").hide()
              
              queHay = "1"
              $("#invisPaginat").text(queHay)
              
              queHay = $("#invisPaginat").text()
            
              
             
              $("#eleccion2").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 680);
												  
				             })
              $("#eleccion2A").hide()
              $("#eleccion2B").hide()
              $("#eleccion2C").hide()
              $("#eleccion2D").hide()
              $("#eleccion2E").hide()
              $("#eleccion2F").hide()
              $("#eleccion2G").hide()
              $("#eleccion2H").hide()
              $("#eleccion2I").hide()
              $("#eleccion2J").hide()
              $("#eleccion2K").hide()
              $("#eleccion2L").hide()
              $("#eleccion2M").hide()
              $("#eleccion2N").hide()
              $("#eleccion2O").hide()
              $("#eleccion2P").hide()
              $("#eleccion2Q").hide()
              $("#eleccion2R").hide()
              $("#cTot .pagination a#p1Tot").addClass("active")
              $("#cTot .pagination a#p2Tot").removeClass("active")
              $("#cTot .pagination a#p3Tot").removeClass("active")
              $("#cTot .pagination a#p4Tot").removeClass("active")
              $("#cTot .pagination a#p5Tot").removeClass("active")
              $("#cTot .pagination a#p6Tot").removeClass("active")
              $("#cTot .pagination a#p7Tot").removeClass("active")
              $("#cTot .pagination a#p8Tot").removeClass("active")
              $("#cTot .pagination a#p9Tot").removeClass("active")
              $("#cTot .pagination a#p10Tot").removeClass("active")
              $("#cTot .pagination a#p11Tot").removeClass("active")
              $("#cTot .pagination a#p12Tot").removeClass("active")
              $("#cTot .pagination a#p13Tot").removeClass("active")
              $("#cTot .pagination a#p14Tot").removeClass("active")
              $("#cTot .pagination a#p15Tot").removeClass("active")
              $("#cTot .pagination a#p16Tot").removeClass("active")
              $("#cTot .pagination a#p17Tot").removeClass("active")
              $("#cTot .pagination a#p18Tot").removeClass("active")
            
              
               $("#eleccion").hide()
              
                $("#muestra").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 680)})
               
               
            cargar3(1)
              $("h1").hide() 
                })
         
         
              function cargar3(orden){ 
                 $.ajax ({
                            url: "api.php",
                            data:
                                {
                                comando: "allWinSec"
                                    },
                            dataType: "json",
                            method: "post",
                            success: finWinSec
                        })
                  
               
            function finWinSec(datos){ 
                    
                     if(datos.meta.ok != true) {
                       alert("Error al cargar los datos")
                       return
                     }
               var cont=0
               
                $("#eleccion2").text("")
                $("#eleccion2A").text("")
                $("#eleccion2B").text("")
                $("#eleccion2C").text("")
                $("#eleccion2D").text("")
                $("#eleccion2E").text("")
                $("#eleccion2F").text("")
                $("#eleccion2G").text("")
                $("#eleccion2H").text("")
                 $("#eleccion2I").text("")
                $("#eleccion2J").text("")
                $("#eleccion2K").text("")
                $("#eleccion2L").text("")
                $("#eleccion2M").text("")
                $("#eleccion2N").text("")
                $("#eleccion2O").text("")
                $("#eleccion2P").text("")
                $("#eleccion2Q").text("")
                $("#eleccion2R").text("")
                     for(var item of datos.data){
                         
                            var cadena = `
                 <div class = "tema pos">
                  <div class="micro2"><i class="color-change-2x fas fa-microphone fa-3x"></i></div>
                        <div class="refeAnnio2">${item.Annio}<span class="obli">&nbsp-&nbsp1st</span></div>
                        
	<div class="videoTema"><iframe class="vTema" width="100%" height="100%" src="${item.Video}" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
	
                         <div class = "refe">
                              <div class = "banderaRefe"><img id="#imaBan" src="${item.Bandera}"></div>
                              <div class = "paisRefe">${item.Pais}</div>
                         </div>
                         <div class="music2A">
                         <div class="notaRefe"><i class="fas fa-music fa-2x"></i></div>
                         <div class="cancion2">${item.Cancion}<br>(${item.Interprete})</div> 
                         </div>
                      

                         <div class="music2B">
                         <div class="nota2Refe"><i class="fas fa-map-marker-alt fa-2x"></i></div>
                         <div class="cancion2">${item.CiudadSede}</div>
                         </div>

                         </div>
                         
                         `;
                         
                         cont++
                       if(orden == 1){
                         if(cont < 9){
                           $("#eleccion2").append(cadena)
                         }
                       }
                       if(orden == 2){
                         if (cont >= 9 && cont < 17){
                           $("#eleccion2A").append(cadena)
                         }
                       }
                       if(orden == 3){
                         if (cont >= 17 && cont < 25){
                           $("#eleccion2B").append(cadena)
                         }
                       }
                       if(orden == 4){
                         if (cont >= 25 && cont < 33){
                           $("#eleccion2C").append(cadena)
                         }
                       }
                       if(orden == 5){
                         if (cont >= 33 && cont < 41){
                           $("#eleccion2D").append(cadena)
                         }
                       }
                       if(orden == 6){
                         if (cont >= 41 && cont < 49){
                           $("#eleccion2E").append(cadena)
                         }
                       }
                       if(orden == 7){
                         if (cont >= 49 && cont < 57){
                           $("#eleccion2F").append(cadena)
                         }
                       }
                       if(orden == 8){
                         if (cont >= 57 && cont < 65){
                           $("#eleccion2G").append(cadena)
                         }
                       }
                       if(orden == 9){
                         if (cont >= 65 && cont < 73){
                           $("#eleccion2H").append(cadena)
                         }
                       }
                       if(orden == 10){
                         if (cont >= 73 && cont < 81){
                           $("#eleccion2I").append(cadena)
                         }
                       }
                       if(orden == 11){
                         if (cont >= 81 && cont < 89){
                           $("#eleccion2J").append(cadena)
                         }
                       }
                       if(orden == 12){
                         if (cont >= 89 && cont < 97){
                           $("#eleccion2K").append(cadena)
                         }
                       }
                       if(orden == 13){
                         if (cont >= 97 && cont < 108){
                           $("#eleccion2L").append(cadena)
                         }
                       }
                       if(orden == 14){
                         if (cont >= 108 && cont < 116){
                           $("#eleccion2M").append(cadena)
                         }
                       }
                       if(orden == 15){
                         if (cont >= 116 && cont < 124){
                           $("#eleccion2N").append(cadena)
                         }
                       }
                       if(orden == 16){
                         if (cont >= 124 && cont < 132){
                           $("#eleccion2O").append(cadena)
                         }
                       }
                       if(orden == 17){
                         if (cont >= 132 && cont < 140){
                           $("#eleccion2P").append(cadena)
                         }
                       }
                       if(orden == 18){
                         if (cont >= 140 && cont < 148){
                           $("#eleccion2Q").append(cadena)
                         }
                       }
                       if(orden == 19){
                         if (cont >= 148){
                           $("#eleccion2R").append(cadena)
                         }
                       }
                        
                    if(item.DosPais != ""){
                         
                          var cadena2 = `
                 <div class = "tema">
                        <div class="refeAnnio2">${item.Annio}<span class="obli">&nbsp-&nbsp2nd</span></div>
                        
	<div class="videoTema"><iframe class="vTema" width="100%" height="100%" src="${item.Dosvideo}" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
	
                         <div class = "refe">
                              <div class = "banderaRefe"><img id="#imaBan" src="${item.Flag}"></div>
                              <div class = "paisRefe">${item.DosPais}</div>
                         </div>
                         <div class="music2A">
                         <div class="notaRefe"><i class="fas fa-music fa-2x"></i></div>
                         <div class="cancion2">${item.DosCancion}<br>(${item.DosInterprete})</div> 
                         </div>
                      

                         <div class="music2B">
                         <div class="nota2Refe"><i class="fas fa-map-marker-alt fa-2x"></i></div>
                         <div class="cancion2">${item.CiudadSede}</div>
                         </div>

                         </div>
                         
                         `;
                         
                         cont++
                        if(item.DosCancion != 'x'){
                         if(orden == 1){
                         if(cont < 9){
                           $("#eleccion2").append(cadena2)
                         }
                       }
                       if(orden == 2){
                         if (cont >= 9 && cont < 17){
                           $("#eleccion2A").append(cadena2)
                         }
                       }
                       if(orden == 3){
                         if (cont >= 17 && cont < 25){
                           $("#eleccion2B").append(cadena2)
                         }
                       }
                       if(orden == 4){
                         if (cont >= 25 && cont < 33){
                           $("#eleccion2C").append(cadena2)
                         }
                       }
                       if(orden == 5){
                         if (cont >= 33 && cont < 41){
                           $("#eleccion2D").append(cadena2)
                         }
                       }
                       if(orden == 6){
                         if (cont >= 41 && cont < 49){
                           $("#eleccion2E").append(cadena2)
                         }
                       }
                       if(orden == 7){
                         if (cont >= 49 && cont < 57){
                           $("#eleccion2F").append(cadena2)
                         }
                       }
                       if(orden == 8){
                         if (cont >= 57 && cont < 65){
                           $("#eleccion2G").append(cadena2)
                         }
                       }
                       if(orden == 9){
                         if (cont >= 65 && cont < 73){
                           $("#eleccion2H").append(cadena2)
                         }
                       }
                       if(orden == 10){
                         if (cont >= 73 && cont < 81){
                           $("#eleccion2I").append(cadena2)
                         }
                       }
                       if(orden == 11){
                         if (cont >= 81 && cont < 89){
                           $("#eleccion2J").append(cadena2)
                         }
                       }
                       if(orden == 12){
                         if (cont >= 89 && cont < 97){
                           $("#eleccion2K").append(cadena2)
                         }
                       }
                       if(orden == 13){
                         if (cont >= 97 && cont < 105){
                           $("#eleccion2L").append(cadena2)
                         }
                       }
                       if(orden == 14){
                         if (cont >= 105 && cont < 115){
                           $("#eleccion2M").append(cadena2)
                         }
                       }
                       if(orden == 15){
                         if (cont >= 115 && cont < 123){
                           $("#eleccion2N").append(cadena2)
                         }
                       }
                       if(orden == 16){
                         if (cont >= 123 && cont < 131){
                           $("#eleccion2O").append(cadena2)
                         }
                       }
                       if(orden == 17){
                         if (cont >= 131 && cont < 139){
                           $("#eleccion2P").append(cadena2)
                         }
                       }
                       if(orden == 18){
                         if (cont >= 139 && cont < 147){
                           $("#eleccion2Q").append(cadena2)
                         }
                       }
                       if(orden == 19){
                         if (cont >= 147){
                           $("#eleccion2R").append(cadena2)
                         }
                       }
                     }
                     }
                     }
            }
				  
              }
       
         
         /*----------------------------------------FIN WINNERS AND SECONDS POSITIONS----------------------------*/
         
         
         
          $("#volver").on("click",function(){ 
              
               $("#eleccion").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 680);
												  
				             })
                $("#muestra").hide()
          $("#tablero").hide()
              $("#rank").show()
                 $("#rank2").show()
              $("h1").show() 
             $("#gana").show()
         $("#imitacion").hide()
               $("#muestraTablero").hide()
               $("#logoAntiguo").show()
               $("#volverSS").hide()
               
           })
         
         
          /*----------------------INICIO PAGINACION WINNERS--------------------------*/  
         
         $("#pP").css("display", "none")
        $("#pS").css("display", "block")
            
          $("#p1").on("click",function(){ 
              
              $("#pP").css("display", "none")
        $("#pS").css("display", "block")
              
              cargar(1)
              $("#eleccion2").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 680);
												  
				             })
            
              $("#eleccion2A").hide()
              $("#eleccion2B").hide()
              $("#eleccion2C").hide()
              $("#eleccion2D").hide()
              $("#eleccion2E").hide()
              $("#eleccion2F").hide()
              $("#eleccion2G").hide()
              $("#eleccion2H").hide()
              $("#c .pagination a#p1").addClass("active")
              $("#c .pagination a#p2").removeClass("active")
              $("#c .pagination a#p3").removeClass("active")
              $("#c .pagination a#p4").removeClass("active")
              $("#c .pagination a#p5").removeClass("active")
              $("#c .pagination a#p6").removeClass("active")
              $("#c .pagination a#p7").removeClass("active")
              $("#c .pagination a#p8").removeClass("active")
              $("#c .pagination a#p9").removeClass("active")
            
           
              
          })
         
          $("#p2").on("click",function(){ 
              
              $("#pP").css("display", "block")
        $("#pS").css("display", "block")
              
              cargar(2)
              $("#eleccion2A").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 680);
												  
				             })
             
              $("#eleccion2").hide()
              $("#eleccion2B").hide()
              $("#eleccion2C").hide()
              $("#eleccion2D").hide()
              $("#eleccion2E").hide()
              $("#eleccion2F").hide()
              $("#eleccion2G").hide()
              $("#eleccion2H").hide()
              $("#c .pagination a#p1").removeClass("active")
              $("#c .pagination a#p2").addClass("active")
              $("#c .pagination a#p3").removeClass("active")
              $("#c .pagination a#p4").removeClass("active")
              $("#c .pagination a#p5").removeClass("active")
              $("#c .pagination a#p6").removeClass("active")
              $("#c .pagination a#p7").removeClass("active")
              $("#c .pagination a#p8").removeClass("active")
              $("#c .pagination a#p9").removeClass("active")
            
              $("#invisPaginat").text("2")
              
          })
         
         $("#p3").on("click",function(){
             
             $("#pP").css("display", "block")
        $("#pS").css("display", "block")
             
             cargar(3)
              $("#eleccion2B").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 680);
												  
				             })
             
              $("#eleccion2").hide()
              $("#eleccion2A").hide()
              $("#eleccion2C").hide()
              $("#eleccion2D").hide()
              $("#eleccion2E").hide()
              $("#eleccion2F").hide()
              $("#eleccion2G").hide()
              $("#eleccion2H").hide()
              $("#c .pagination a#p1").removeClass("active")
              $("#c .pagination a#p2").removeClass("active")
              $("#c .pagination a#p3").addClass("active")
              $("#c .pagination a#p4").removeClass("active")
              $("#c .pagination a#p5").removeClass("active")
              $("#c .pagination a#p6").removeClass("active")
              $("#c .pagination a#p7").removeClass("active")
              $("#c .pagination a#p8").removeClass("active")
              $("#c .pagination a#p9").removeClass("active")
            
              $("#invisPaginat").text("3")
          })
         
          $("#p4").on("click",function(){ 
              
              $("#pP").css("display", "block")
        $("#pS").css("display", "block")
              
              cargar(4)
              $("#eleccion2C").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 680);
												  
				             })
             
              $("#eleccion2").hide()
              $("#eleccion2A").hide()
              $("#eleccion2B").hide()
              $("#eleccion2D").hide()
              $("#eleccion2E").hide()
              $("#eleccion2F").hide()
              $("#eleccion2G").hide()
              $("#eleccion2H").hide()
              $("#c .pagination a#p1").removeClass("active")
              $("#c .pagination a#p2").removeClass("active")
              $("#c .pagination a#p3").removeClass("active")
              $("#c .pagination a#p4").addClass("active")
              $("#c .pagination a#p5").removeClass("active")
              $("#c .pagination a#p6").removeClass("active")
              $("#c .pagination a#p7").removeClass("active")
              $("#c .pagination a#p8").removeClass("active")
              $("#c .pagination a#p9").removeClass("active")
            
              $("#invisPaginat").text("4")
          })
         
         $("#p5").on("click",function(){ 
             
             $("#pP").css("display", "block")
        $("#pS").css("display", "block")
             
             cargar(5)
              $("#eleccion2D").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 680);
												  
				             })
             
              $("#eleccion2").hide()
              $("#eleccion2A").hide()
              $("#eleccion2B").hide()
              $("#eleccion2C").hide()
              $("#eleccion2E").hide()
              $("#eleccion2F").hide()
              $("#eleccion2G").hide()
              $("#eleccion2H").hide()
              $("#c .pagination a#p1").removeClass("active")
              $("#c .pagination a#p2").removeClass("active")
              $("#c .pagination a#p3").removeClass("active")
              $("#c .pagination a#p4").removeClass("active")
              $("#c .pagination a#p5").addClass("active")
              $("#c .pagination a#p6").removeClass("active")
              $("#c .pagination a#p7").removeClass("active")
              $("#c .pagination a#p8").removeClass("active")
              $("#c .pagination a#p9").removeClass("active")
            
              $("#invisPaginat").text("5")
          })
         
         $("#p6").on("click",function(){ 
             
             $("#pP").css("display", "block")
        $("#pS").css("display", "block")
             
             cargar(6)
              $("#eleccion2E").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 680);
												  
				             })
             
              $("#eleccion2").hide()
              $("#eleccion2A").hide()
              $("#eleccion2B").hide()
              $("#eleccion2C").hide()
              $("#eleccion2D").hide()
              $("#eleccion2F").hide()
              $("#eleccion2G").hide()
              $("#eleccion2H").hide()
              $("#c .pagination a#p1").removeClass("active")
              $("#c .pagination a#p2").removeClass("active")
              $("#c .pagination a#p3").removeClass("active")
              $("#c .pagination a#p4").removeClass("active")
              $("#c .pagination a#p5").removeClass("active")
              $("#c .pagination a#p6").addClass("active")
              $("#c .pagination a#p7").removeClass("active")
              $("#c .pagination a#p8").removeClass("active")
              $("#c .pagination a#p9").removeClass("active")
            
              $("#invisPaginat").text("6")
              
          })
         $("#p7").on("click",function(){ 
             
             $("#pP").css("display", "block")
        $("#pS").css("display", "block")
             
             cargar(7)
              $("#eleccion2F").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 680);
												  
				             })
             
              $("#eleccion2").hide()
              $("#eleccion2A").hide()
              $("#eleccion2B").hide()
              $("#eleccion2C").hide()
              $("#eleccion2D").hide()
              $("#eleccion2E").hide()
              $("#eleccion2G").hide()
              $("#eleccion2H").hide()
              $("#c .pagination a#p1").removeClass("active")
              $("#c .pagination a#p2").removeClass("active")
              $("#c .pagination a#p3").removeClass("active")
              $("#c .pagination a#p4").removeClass("active")
              $("#c .pagination a#p5").removeClass("active")
              $("#c .pagination a#p6").removeClass("active")
              $("#c .pagination a#p7").addClass("active")
              $("#c .pagination a#p8").removeClass("active")
              $("#c .pagination a#p9").removeClass("active")
            
              $("#invisPaginat").text("7")
              
          })
         
         $("#p8").on("click",function(){
             
             $("#pP").css("display", "block")
        $("#pS").css("display", "block")
             
             cargar(8)
              $("#eleccion2G").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 680);
												  
				             })
             
              $("#eleccion2").hide()
              $("#eleccion2A").hide()
              $("#eleccion2B").hide()
              $("#eleccion2C").hide()
              $("#eleccion2D").hide()
              $("#eleccion2E").hide()
              $("#eleccion2F").hide()
              $("#eleccion2H").hide()
              $("#c .pagination a#p1").removeClass("active")
              $("#c .pagination a#p2").removeClass("active")
              $("#c .pagination a#p3").removeClass("active")
              $("#c .pagination a#p4").removeClass("active")
              $("#c .pagination a#p5").removeClass("active")
              $("#c .pagination a#p6").removeClass("active")
              $("#c .pagination a#p7").removeClass("active")
              $("#c .pagination a#p8").addClass("active")
              $("#c .pagination a#p9").removeClass("active")
            
              $("#invisPaginat").text("8")
          })
         $("#p9").on("click",function(){ 
             
             $("#pP").css("display", "block")
        $("#pS").css("display", "none")
             
            cargar(9)
            $("#eleccion2H").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 680);
												  
				             })
              $("#eleccion2A").hide()
              $("#eleccion2B").hide()
              $("#eleccion2C").hide()
              $("#eleccion2D").hide()
              $("#eleccion2E").hide()
              $("#eleccion2F").hide()
              $("#eleccion2G").hide()
              $("#eleccion2").hide()
             
              $("#c .pagination a#p1").removeClass("active")
              $("#c .pagination a#p2").removeClass("active")
              $("#c .pagination a#p3").removeClass("active")
              $("#c .pagination a#p4").removeClass("active")
              $("#c .pagination a#p5").removeClass("active")
              $("#c .pagination a#p6").removeClass("active")
              $("#c .pagination a#p7").removeClass("active")
              $("#c .pagination a#p8").removeClass("active")
              $("#c .pagination a#p9").addClass("active")
            
              $("#invisPaginat").text("9") 
              queHay = $("#invisPaginat").text()
            
          })
         
          $("#pP").on("click",function(){ 
              queHay = $("#invisPaginat").text()
              if(queHay == "2"){
                 $('#p1').click()
              }
              if(queHay == "3"){
                 $('#p2').click()
              }
              if(queHay == "4"){
                 $('#p3').click()
              }
              if(queHay == "5"){
                 $('#p4').click()
              }
              if(queHay == "6"){
                 $('#p5').click()
              }
              if(queHay == "7"){
                 $('#p6').click()
              }
              if(queHay == "8"){
                 $('#p7').click()
              }
              if(queHay == "9"){
                 $('#p8').click()
              }
          })
         
         $("#pS").on("click",function(){ 
              queHay = $("#invisPaginat").text()
              if(queHay == "1"){
                 $('#p2').click()
              }
              if(queHay == "2"){
                 $('#p3').click()
              }
              if(queHay == "3"){
                 $('#p4').click()
              }
              if(queHay == "4"){
                 $('#p5').click()
              }
              if(queHay == "5"){
                 $('#p6').click()
              }
              if(queHay == "6"){
                 $('#p7').click()
              }
              if(queHay == "7"){
                 $('#p8').click()
              }
              if(queHay == "8"){
                 $('#p9').click()
              }
          })
          /*----------------------FIN PAGINACION WINNERS--------------------------*/   
        
          /*----------------------INICIO PAGINACION SECONDS--------------------------*/   
         
         $("#pPSe").css("display", "none")
         $("#pSSe").css("display", "block")
            
          $("#p1Se").on("click",function(){ 
              
              $("#pPSe").css("display", "none")
         $("#pSSe").css("display", "block")
              
              cargar2(1)
              $("#eleccion2").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 680);
												  
				             })
            
              $("#eleccion2A").hide()
              $("#eleccion2B").hide()
              $("#eleccion2C").hide()
              $("#eleccion2D").hide()
              $("#eleccion2E").hide()
              $("#eleccion2F").hide()
              $("#eleccion2G").hide()
              $("#eleccion2H").hide()
              $("#cSe .pagination a#p1Se").addClass("active")
              $("#cSe .pagination a#p2Se").removeClass("active")
              $("#cSe .pagination a#p3Se").removeClass("active")
              $("#cSe .pagination a#p4Se").removeClass("active")
              $("#cSe .pagination a#p5Se").removeClass("active")
              $("#cSe .pagination a#p6Se").removeClass("active")
              $("#cSe .pagination a#p7Se").removeClass("active")
              $("#cSe .pagination a#p8Se").removeClass("active")
            
            
              $("#invisPaginat").text("1")
              
          })
         
          $("#p2Se").on("click",function(){ 
              
               $("#pPSe").css("display", "block")
         $("#pSSe").css("display", "block")
              
              cargar2(2)
              $("#eleccion2A").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 680);
												  
				             })
             
              $("#eleccion2").hide()
              $("#eleccion2B").hide()
              $("#eleccion2C").hide()
              $("#eleccion2D").hide()
              $("#eleccion2E").hide()
              $("#eleccion2F").hide()
              $("#eleccion2G").hide()
              $("#eleccion2H").hide()
              $("#cSe .pagination a#p1Se").removeClass("active")
              $("#cSe .pagination a#p2Se").addClass("active")
              $("#cSe .pagination a#p3Se").removeClass("active")
              $("#cSe .pagination a#p4Se").removeClass("active")
              $("#cSe .pagination a#p5Se").removeClass("active")
              $("#cSe .pagination a#p6Se").removeClass("active")
              $("#cSe .pagination a#p7Se").removeClass("active")
              $("#cSe .pagination a#p8Se").removeClass("active")
          
            
              $("#invisPaginat").text("2")
              
          })
         
         $("#p3Se").on("click",function(){ 
             
             $("#pPSe").css("display", "block")
         $("#pSSe").css("display", "block")
             
             cargar2(3)
              $("#eleccion2B").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 680);
												  
				             })
             
              $("#eleccion2").hide()
              $("#eleccion2A").hide()
              $("#eleccion2C").hide()
              $("#eleccion2D").hide()
              $("#eleccion2E").hide()
              $("#eleccion2F").hide()
              $("#eleccion2G").hide()
              $("#eleccion2H").hide()
              $("#cSe .pagination a#p1Se").removeClass("active")
              $("#cSe .pagination a#p2Se").removeClass("active")
              $("#cSe .pagination a#p3Se").addClass("active")
              $("#cSe .pagination a#p4Se").removeClass("active")
              $("#cSe .pagination a#p5Se").removeClass("active")
              $("#cSe .pagination a#p6Se").removeClass("active")
              $("#cSe .pagination a#p7Se").removeClass("active")
              $("#cSe .pagination a#p8Se").removeClass("active")
         
            
              $("#invisPaginat").text("3")
          })
         
          $("#p4Se").on("click",function(){ 
              
              $("#pPSe").css("display", "block")
         $("#pSSe").css("display", "block")
              
              cargar2(4)
              $("#eleccion2C").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 680);
												  
				             })
             
              $("#eleccion2").hide()
              $("#eleccion2A").hide()
              $("#eleccion2B").hide()
              $("#eleccion2D").hide()
              $("#eleccion2E").hide()
              $("#eleccion2F").hide()
              $("#eleccion2G").hide()
              $("#eleccion2H").hide()
              $("#cSe .pagination a#p1Se").removeClass("active")
              $("#cSe .pagination a#p2Se").removeClass("active")
              $("#cSe .pagination a#p3Se").removeClass("active")
              $("#cSe .pagination a#p4Se").addClass("active")
              $("#cSe .pagination a#p5Se").removeClass("active")
              $("#cSe .pagination a#p6Se").removeClass("active")
              $("#cSe .pagination a#p7Se").removeClass("active")
              $("#cSe .pagination a#p8Se").removeClass("active")
             
            
              $("#invisPaginat").text("4")
          })
         
         $("#p5Se").on("click",function(){ 
             
             $("#pPSe").css("display", "block")
         $("#pSSe").css("display", "block")
             
             cargar2(5)
              $("#eleccion2D").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 680);
												  
				             })
             
              $("#eleccion2").hide()
              $("#eleccion2A").hide()
              $("#eleccion2B").hide()
              $("#eleccion2C").hide()
              $("#eleccion2E").hide()
              $("#eleccion2F").hide()
              $("#eleccion2G").hide()
              $("#eleccion2H").hide()
              $("#cSe .pagination a#p1Se").removeClass("active")
              $("#cSe .pagination a#p2Se").removeClass("active")
              $("#cSe .pagination a#p3Se").removeClass("active")
              $("#cSe .pagination a#p4Se").removeClass("active")
              $("#cSe .pagination a#p5Se").addClass("active")
              $("#cSe .pagination a#p6Se").removeClass("active")
              $("#cSe .pagination a#p7Se").removeClass("active")
              $("#cSe .pagination a#p8Se").removeClass("active")
            
            
              $("#invisPaginat").text("5")
          })
         
         $("#p6Se").on("click",function(){ 
             
             $("#pPSe").css("display", "block")
         $("#pSSe").css("display", "block")
             
             cargar2(6)
              $("#eleccion2E").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 680);
												  
				             })
             
              $("#eleccion2").hide()
              $("#eleccion2A").hide()
              $("#eleccion2B").hide()
              $("#eleccion2C").hide()
              $("#eleccion2D").hide()
              $("#eleccion2F").hide()
              $("#eleccion2G").hide()
              $("#eleccion2H").hide()
              $("#cSe .pagination a#p1Se").removeClass("active")
              $("#cSe .pagination a#p2Se").removeClass("active")
              $("#cSe .pagination a#p3Se").removeClass("active")
              $("#cSe .pagination a#p4Se").removeClass("active")
              $("#cSe .pagination a#p5Se").removeClass("active")
              $("#cSe .pagination a#p6Se").addClass("active")
              $("#cSe .pagination a#p7Se").removeClass("active")
              $("#cSe .pagination a#p8Se").removeClass("active")
            
            
              $("#invisPaginat").text("6")
              
          })
         $("#p7Se").on("click",function(){ 
             $("#pPSe").css("display", "block")
         $("#pSSe").css("display", "block")
             
             cargar2(7)
              $("#eleccion2F").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 680);
												  
				             })
             
              $("#eleccion2").hide()
              $("#eleccion2A").hide()
              $("#eleccion2B").hide()
              $("#eleccion2C").hide()
              $("#eleccion2D").hide()
              $("#eleccion2E").hide()
              $("#eleccion2G").hide()
              $("#eleccion2H").hide()
              $("#cSe .pagination a#p1Se").removeClass("active")
              $("#cSe .pagination a#p2Se").removeClass("active")
              $("#cSe .pagination a#p3Se").removeClass("active")
              $("#cSe .pagination a#p4Se").removeClass("active")
              $("#cSe .pagination a#p5Se").removeClass("active")
              $("#cSe .pagination a#p6Se").removeClass("active")
              $("#cSe .pagination a#p7Se").addClass("active")
              $("#cSe .pagination a#p8Se").removeClass("active")
            
            
              $("#invisPaginat").text("7")
              
          })
         
         $("#p8Se").on("click",function(){ 
             
             $("#pPSe").css("display", "block")
         $("#pSSe").css("display", "none")
             
             cargar2(8)
              $("#eleccion2G").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 680);
												  
				             })
             
              $("#eleccion2").hide()
              $("#eleccion2A").hide()
              $("#eleccion2B").hide()
              $("#eleccion2C").hide()
              $("#eleccion2D").hide()
              $("#eleccion2E").hide()
              $("#eleccion2F").hide()
              $("#eleccion2H").hide()
              $("#cSe .pagination a#p1Se").removeClass("active")
              $("#cSe .pagination a#p2Se").removeClass("active")
              $("#cSe .pagination a#p3Se").removeClass("active")
              $("#cSe .pagination a#p4Se").removeClass("active")
              $("#cSe .pagination a#p5Se").removeClass("active")
              $("#cSe .pagination a#p6Se").removeClass("active")
              $("#cSe .pagination a#p7Se").removeClass("active")
              $("#cSe .pagination a#p8Se").addClass("active")
          
            
              $("#invisPaginat").text("8")
          })
     
         
          $("#pPSe").on("click",function(){ 
             
              queHay = $("#invisPaginat").text()
              if(queHay == "2"){
                 $('#p1Se').click()
              }
              if(queHay == "3"){
                 $('#p2Se').click()
              }
              if(queHay == "4"){
                 $('#p3Se').click()
              }
              if(queHay == "5"){
                 $('#p4Se').click()
              }
              if(queHay == "6"){
                 $('#p5Se').click()
              }
              if(queHay == "7"){
                 $('#p6Se').click()
              }
              if(queHay == "8"){
                 $('#p7Se').click()
              }
              if(queHay == "9"){
                 $('#p8Se').click()
              }
          })
         
         $("#pSSe").on("click",function(){ 
              queHay = $("#invisPaginat").text()
              if(queHay == "1"){
                 $('#p2Se').click()
              }
              if(queHay == "2"){
                 $('#p3Se').click()
              }
              if(queHay == "3"){
                 $('#p4Se').click()
              }
              if(queHay == "4"){
                 $('#p5Se').click()
              }
              if(queHay == "5"){
                 $('#p6Se').click()
              }
              if(queHay == "6"){
                 $('#p7Se').click()
              }
              if(queHay == "7"){
                 $('#p8Se').click()
              }
              if(queHay == "8"){
                 $('#p9Se').click()
              }
          })
          /*----------------------FIN PAGINACION SECONDS--------------------------*/ 
         
         
          /*----------------------INICIO PAGINACION WINNERS AND SECONDS--------------------------*/   
            
          $("#pPTot").css("display", "none")
              $("#pSTot").css("display", "block")
         
          $("#p1Tot").on("click",function(){ 
              
              $("#pPTot").css("display", "none")
              $("#pSTot").css("display", "block")
              cargar3(1)
              $("#eleccion2").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 680);
												  
				             })
            
              $("#eleccion2A").hide()
              $("#eleccion2B").hide()
              $("#eleccion2C").hide()
              $("#eleccion2D").hide()
              $("#eleccion2E").hide()
              $("#eleccion2F").hide()
              $("#eleccion2G").hide()
              $("#eleccion2H").hide()
              $("#eleccion2I").hide()
              $("#eleccion2J").hide()
              $("#eleccion2K").hide()
              $("#eleccion2L").hide()
              $("#eleccion2M").hide()
              $("#eleccion2N").hide()
              $("#eleccion2O").hide()
              $("#eleccion2P").hide()
              $("#eleccion2Q").hide()
              $("#eleccion2R").hide()
              $("#cTot .pagination a#p1Tot").addClass("active")
              $("#cTot .pagination a#p2Tot").removeClass("active")
              $("#cTot .pagination a#p3Tot").removeClass("active")
              $("#cTot .pagination a#p4Tot").removeClass("active")
              $("#cTot .pagination a#p5Tot").removeClass("active")
              $("#cTot .pagination a#p6Tot").removeClass("active")
              $("#cTot .pagination a#p7Tot").removeClass("active")
              $("#cTot .pagination a#p8Tot").removeClass("active")
              $("#cTot .pagination a#p9Tot").removeClass("active")
              $("#cTot .pagination a#p10Tot").removeClass("active")
              $("#cTot .pagination a#p11Tot").removeClass("active")
              $("#cTot .pagination a#p12Tot").removeClass("active")
              $("#cTot .pagination a#p13Tot").removeClass("active")
              $("#cTot .pagination a#p14Tot").removeClass("active")
              $("#cTot .pagination a#p15Tot").removeClass("active")
              $("#cTot .pagination a#p16Tot").removeClass("active")
              $("#cTot .pagination a#p17Tot").removeClass("active")
              $("#cTot .pagination a#p18Tot").removeClass("active")
             $("#cTot .pagination a#p19Tot").removeClass("active")
            
              $("#invisPaginat").text("1")
              
          })
         
          $("#p2Tot").on("click",function(){ 
              
              $("#pPTot").css("display", "block")
              $("#pSTot").css("display", "block")
              
              cargar3(2)
              $("#eleccion2A").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 680);
												  
				             })
             
              $("#eleccion2").hide()
              $("#eleccion2B").hide()
              $("#eleccion2C").hide()
              $("#eleccion2D").hide()
              $("#eleccion2E").hide()
              $("#eleccion2F").hide()
              $("#eleccion2G").hide()
              $("#eleccion2H").hide()
              $("#eleccion2I").hide()
              $("#eleccion2J").hide()
              $("#eleccion2K").hide()
              $("#eleccion2L").hide()
              $("#eleccion2M").hide()
              $("#eleccion2N").hide()
              $("#eleccion2O").hide()
              $("#eleccion2P").hide()
              $("#eleccion2Q").hide()
              $("#eleccion2R").hide()
              $("#cTot .pagination a#p1Tot").removeClass("active")
              $("#cTot .pagination a#p2Tot").addClass("active")
              $("#cTot .pagination a#p3Tot").removeClass("active")
              $("#cTot .pagination a#p4Tot").removeClass("active")
              $("#cTot .pagination a#p5Tot").removeClass("active")
              $("#cTot .pagination a#p6Tot").removeClass("active")
              $("#cTot .pagination a#p7Tot").removeClass("active")
              $("#cTot .pagination a#p8Tot").removeClass("active")
               $("#cTot .pagination a#p9Tot").removeClass("active")
              $("#cTot .pagination a#p10Tot").removeClass("active")
              $("#cTot .pagination a#p11Tot").removeClass("active")
              $("#cTot .pagination a#p12Tot").removeClass("active")
              $("#cTot .pagination a#p13Tot").removeClass("active")
              $("#cTot .pagination a#p14Tot").removeClass("active")
              $("#cTot .pagination a#p15Tot").removeClass("active")
              $("#cTot .pagination a#p16Tot").removeClass("active")
              $("#cTot .pagination a#p17Tot").removeClass("active")
              $("#cTot .pagination a#p18Tot").removeClass("active")
           $("#cTot .pagination a#p19Tot").removeClass("active")
            
              $("#invisPaginat").text("2")
              
          })
         
         $("#p3Tot").on("click",function(){ 
             $("#pPTot").css("display", "block")
              $("#pSTot").css("display", "block")
             cargar3(3)
              $("#eleccion2B").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 680);
												  
				             })
             
              $("#eleccion2").hide()
              $("#eleccion2A").hide()
              $("#eleccion2C").hide()
              $("#eleccion2D").hide()
              $("#eleccion2E").hide()
              $("#eleccion2F").hide()
              $("#eleccion2G").hide()
              $("#eleccion2H").hide()
             $("#eleccion2I").hide()
              $("#eleccion2J").hide()
              $("#eleccion2K").hide()
              $("#eleccion2L").hide()
              $("#eleccion2M").hide()
              $("#eleccion2N").hide()
              $("#eleccion2O").hide()
              $("#eleccion2P").hide()
              $("#eleccion2Q").hide()
              $("#eleccion2R").hide()
              $("#cTot .pagination a#p1Tot").removeClass("active")
              $("#cTot .pagination a#p2Tot").removeClass("active")
              $("#cTot .pagination a#p3Tot").addClass("active")
              $("#cTot .pagination a#p4Tot").removeClass("active")
              $("#cTot .pagination a#p5Tot").removeClass("active")
              $("#cTot .pagination a#p6Tot").removeClass("active")
              $("#cTot .pagination a#p7Tot").removeClass("active")
              $("#cTot .pagination a#p8Tot").removeClass("active")
              $("#cTot .pagination a#p9Tot").removeClass("active")
             $("#cTot .pagination a#p10Tot").removeClass("active")
              $("#cTot .pagination a#p11Tot").removeClass("active")
              $("#cTot .pagination a#p12Tot").removeClass("active")
              $("#cTot .pagination a#p13Tot").removeClass("active")
              $("#cTot .pagination a#p14Tot").removeClass("active")
              $("#cTot .pagination a#p15Tot").removeClass("active")
              $("#cTot .pagination a#p16Tot").removeClass("active")
              $("#cTot .pagination a#p17Tot").removeClass("active")
              $("#cTot .pagination a#p18Tot").removeClass("active")
          $("#cTot .pagination a#p19Tot").removeClass("active")
            
              $("#invisPaginat").text("3")
          })
         
          $("#p4Tot").on("click",function(){ 
              $("#pPTot").css("display", "block")
              $("#pSTot").css("display", "block")
              cargar3(4)
              $("#eleccion2C").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 680);
												  
				             })
             
              $("#eleccion2").hide()
              $("#eleccion2A").hide()
              $("#eleccion2B").hide()
              $("#eleccion2D").hide()
              $("#eleccion2E").hide()
              $("#eleccion2F").hide()
              $("#eleccion2G").hide()
              $("#eleccion2H").hide()
              $("#eleccion2I").hide()
              $("#eleccion2J").hide()
              $("#eleccion2K").hide()
              $("#eleccion2L").hide()
              $("#eleccion2M").hide()
              $("#eleccion2N").hide()
              $("#eleccion2O").hide()
              $("#eleccion2P").hide()
              $("#eleccion2Q").hide()
              $("#eleccion2R").hide()
              $("#cTot .pagination a#p1Tot").removeClass("active")
              $("#cTot .pagination a#p2Tot").removeClass("active")
              $("#cTot .pagination a#p3Tot").removeClass("active")
              $("#cTot .pagination a#p4Tot").addClass("active")
              $("#cTot .pagination a#p5Tot").removeClass("active")
              $("#cTot .pagination a#p6Tot").removeClass("active")
              $("#cTot .pagination a#p7Tot").removeClass("active")
              $("#cTot .pagination a#p8Tot").removeClass("active")
               $("#cTot .pagination a#p9Tot").removeClass("active")
              $("#cTot .pagination a#p10Tot").removeClass("active")
              $("#cTot .pagination a#p11Tot").removeClass("active")
              $("#cTot .pagination a#p12Tot").removeClass("active")
              $("#cTot .pagination a#p13Tot").removeClass("active")
              $("#cTot .pagination a#p14Tot").removeClass("active")
              $("#cTot .pagination a#p15Tot").removeClass("active")
              $("#cTot .pagination a#p16Tot").removeClass("active")
              $("#cTot .pagination a#p17Tot").removeClass("active")
              $("#cTot .pagination a#p18Tot").removeClass("active")
              $("#cTot .pagination a#p19Tot").removeClass("active")
            
              $("#invisPaginat").text("4")
          })
         
         $("#p5Tot").on("click",function(){ 
             $("#pPTot").css("display", "block")
              $("#pSTot").css("display", "block")
             cargar3(5)
              $("#eleccion2D").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 680);
												  
				             })
             
              $("#eleccion2").hide()
              $("#eleccion2A").hide()
              $("#eleccion2B").hide()
              $("#eleccion2C").hide()
              $("#eleccion2E").hide()
              $("#eleccion2F").hide()
              $("#eleccion2G").hide()
              $("#eleccion2H").hide()
             $("#eleccion2I").hide()
              $("#eleccion2J").hide()
              $("#eleccion2K").hide()
              $("#eleccion2L").hide()
              $("#eleccion2M").hide()
              $("#eleccion2N").hide()
              $("#eleccion2O").hide()
              $("#eleccion2P").hide()
              $("#eleccion2Q").hide()
              $("#eleccion2R").hide()
              $("#cTot .pagination a#p1Tot").removeClass("active")
              $("#cTot .pagination a#p2Tot").removeClass("active")
              $("#cTot .pagination a#p3Tot").removeClass("active")
              $("#cTot .pagination a#p4Tot").removeClass("active")
              $("#cTot .pagination a#p5Tot").addClass("active")
              $("#cTot .pagination a#p6Tot").removeClass("active")
              $("#cTot .pagination a#p7Tot").removeClass("active")
              $("#cTot .pagination a#p8Tot").removeClass("active")
              $("#cTot .pagination a#p9Tot").removeClass("active")
             $("#cTot .pagination a#p10Tot").removeClass("active")
              $("#cTot .pagination a#p11Tot").removeClass("active")
              $("#cTot .pagination a#p12Tot").removeClass("active")
              $("#cTot .pagination a#p13Tot").removeClass("active")
              $("#cTot .pagination a#p14Tot").removeClass("active")
              $("#cTot .pagination a#p15Tot").removeClass("active")
              $("#cTot .pagination a#p16Tot").removeClass("active")
              $("#cTot .pagination a#p17Tot").removeClass("active")
              $("#cTot .pagination a#p18Tot").removeClass("active")
             $("#cTot .pagination a#p19Tot").removeClass("active")
            
              $("#invisPaginat").text("5")
          })
         
         $("#p6Tot").on("click",function(){ 
             $("#pPTot").css("display", "block")
              $("#pSTot").css("display", "block")
             cargar3(6)
              $("#eleccion2E").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 680);
												  
				             })
             
              $("#eleccion2").hide()
              $("#eleccion2A").hide()
              $("#eleccion2B").hide()
              $("#eleccion2C").hide()
              $("#eleccion2D").hide()
              $("#eleccion2F").hide()
              $("#eleccion2G").hide()
              $("#eleccion2H").hide()
             $("#eleccion2I").hide()
              $("#eleccion2J").hide()
              $("#eleccion2K").hide()
              $("#eleccion2L").hide()
              $("#eleccion2M").hide()
              $("#eleccion2N").hide()
              $("#eleccion2O").hide()
              $("#eleccion2P").hide()
              $("#eleccion2Q").hide()
              $("#eleccion2R").hide()
              $("#cTot .pagination a#p1Tot").removeClass("active")
              $("#cTot .pagination a#p2Tot").removeClass("active")
              $("#cTot .pagination a#p3Tot").removeClass("active")
              $("#cTot .pagination a#p4Tot").removeClass("active")
              $("#cTot .pagination a#p5Tot").removeClass("active")
              $("#cTot .pagination a#p6Tot").addClass("active")
              $("#cTot .pagination a#p7Tot").removeClass("active")
              $("#cTot .pagination a#p8Tot").removeClass("active")
              $("#cTot .pagination a#p9Tot").removeClass("active")
             $("#cTot .pagination a#p10Tot").removeClass("active")
              $("#cTot .pagination a#p11Tot").removeClass("active")
              $("#cTot .pagination a#p12Tot").removeClass("active")
              $("#cTot .pagination a#p13Tot").removeClass("active")
              $("#cTot .pagination a#p14Tot").removeClass("active")
              $("#cTot .pagination a#p15Tot").removeClass("active")
              $("#cTot .pagination a#p16Tot").removeClass("active")
              $("#cTot .pagination a#p17Tot").removeClass("active")
              $("#cTot .pagination a#p18Tot").removeClass("active")
             $("#cTot .pagination a#p19Tot").removeClass("active")
            
              $("#invisPaginat").text("6")
              
          })
         $("#p7Tot").on("click",function(){
             $("#pPTot").css("display", "block")
              $("#pSTot").css("display", "block")
             cargar3(7)
              $("#eleccion2F").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 680);
												  
				             })
             
              $("#eleccion2").hide()
              $("#eleccion2A").hide()
              $("#eleccion2B").hide()
              $("#eleccion2C").hide()
              $("#eleccion2D").hide()
              $("#eleccion2E").hide()
              $("#eleccion2G").hide()
              $("#eleccion2H").hide()
             $("#eleccion2I").hide()
              $("#eleccion2J").hide()
              $("#eleccion2K").hide()
              $("#eleccion2L").hide()
              $("#eleccion2M").hide()
              $("#eleccion2N").hide()
              $("#eleccion2O").hide()
              $("#eleccion2P").hide()
              $("#eleccion2Q").hide()
              $("#eleccion2R").hide()
              $("#cTot .pagination a#p1Tot").removeClass("active")
              $("#cTot .pagination a#p2Tot").removeClass("active")
              $("#cTot .pagination a#p3Tot").removeClass("active")
              $("#cTot .pagination a#p4Tot").removeClass("active")
              $("#cTot .pagination a#p5Tot").removeClass("active")
              $("#cTot .pagination a#p6Tot").removeClass("active")
              $("#cTot .pagination a#p7Tot").addClass("active")
              $("#cTot .pagination a#p8Tot").removeClass("active")
              $("#cTot .pagination a#p9Tot").removeClass("active")
             $("#cTot .pagination a#p10Tot").removeClass("active")
              $("#cTot .pagination a#p11Tot").removeClass("active")
              $("#cTot .pagination a#p12Tot").removeClass("active")
              $("#cTot .pagination a#p13Tot").removeClass("active")
              $("#cTot .pagination a#p14Tot").removeClass("active")
              $("#cTot .pagination a#p15Tot").removeClass("active")
              $("#cTot .pagination a#p16Tot").removeClass("active")
              $("#cTot .pagination a#p17Tot").removeClass("active")
              $("#cTot .pagination a#p18Tot").removeClass("active")
             $("#cTot .pagination a#p19Tot").removeClass("active")
            
              $("#invisPaginat").text("7")
              
          })
         
         $("#p8Tot").on("click",function(){ 
             $("#pPTot").css("display", "block")
              $("#pSTot").css("display", "block")
             cargar3(8)
              $("#eleccion2G").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 680);
												  
				             })
             
              $("#eleccion2").hide()
              $("#eleccion2A").hide()
              $("#eleccion2B").hide()
              $("#eleccion2C").hide()
              $("#eleccion2D").hide()
              $("#eleccion2E").hide()
              $("#eleccion2F").hide()
              $("#eleccion2H").hide()
             $("#eleccion2I").hide()
              $("#eleccion2J").hide()
              $("#eleccion2K").hide()
              $("#eleccion2L").hide()
              $("#eleccion2M").hide()
              $("#eleccion2N").hide()
              $("#eleccion2O").hide()
              $("#eleccion2P").hide()
              $("#eleccion2Q").hide()
              $("#eleccion2R").hide()
              $("#cTot .pagination a#p1Tot").removeClass("active")
              $("#cTot .pagination a#p2Tot").removeClass("active")
              $("#cTot .pagination a#p3Tot").removeClass("active")
              $("#cTot .pagination a#p4Tot").removeClass("active")
              $("#cTot .pagination a#p5Tot").removeClass("active")
              $("#cTot .pagination a#p6Tot").removeClass("active")
              $("#cTot .pagination a#p7Tot").removeClass("active")
              $("#cTot .pagination a#p8Tot").addClass("active")
              $("#cTot .pagination a#p9Tot").removeClass("active")
             $("#cTot .pagination a#p10Tot").removeClass("active")
              $("#cTot .pagination a#p11Tot").removeClass("active")
              $("#cTot .pagination a#p12Tot").removeClass("active")
              $("#cTot .pagination a#p13Tot").removeClass("active")
              $("#cTot .pagination a#p14Tot").removeClass("active")
              $("#cTot .pagination a#p15Tot").removeClass("active")
              $("#cTot .pagination a#p16Tot").removeClass("active")
              $("#cTot .pagination a#p17Tot").removeClass("active")
              $("#cTot .pagination a#p18Tot").removeClass("active")
           $("#cTot .pagination a#p19Tot").removeClass("active")
            
              $("#invisPaginat").text("8")
          })
         
           $("#p9Tot").on("click",function(){ 
               $("#pPTot").css("display", "block")
              $("#pSTot").css("display", "block")
               cargar3(9)
              $("#eleccion2H").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 680);
												  
				             })
             
              $("#eleccion2").hide()
              $("#eleccion2A").hide()
              $("#eleccion2B").hide()
              $("#eleccion2C").hide()
              $("#eleccion2D").hide()
              $("#eleccion2E").hide()
              $("#eleccion2F").hide()
              $("#eleccion2G").hide()
             $("#eleccion2I").hide()
              $("#eleccion2J").hide()
              $("#eleccion2K").hide()
              $("#eleccion2L").hide()
              $("#eleccion2M").hide()
              $("#eleccion2N").hide()
              $("#eleccion2O").hide()
              $("#eleccion2P").hide()
              $("#eleccion2Q").hide()
              $("#eleccion2R").hide()
              $("#cTot .pagination a#p1Tot").removeClass("active")
              $("#cTot .pagination a#p2Tot").removeClass("active")
              $("#cTot .pagination a#p3Tot").removeClass("active")
              $("#cTot .pagination a#p4Tot").removeClass("active")
              $("#cTot .pagination a#p5Tot").removeClass("active")
              $("#cTot .pagination a#p6Tot").removeClass("active")
              $("#cTot .pagination a#p7Tot").removeClass("active")
              $("#cTot .pagination a#p8Tot").removeClass("active")
                $("#cTot .pagination a#p9Tot").addClass("active")
             $("#cTot .pagination a#p10Tot").removeClass("active")
              $("#cTot .pagination a#p11Tot").removeClass("active")
              $("#cTot .pagination a#p12Tot").removeClass("active")
              $("#cTot .pagination a#p13Tot").removeClass("active")
              $("#cTot .pagination a#p14Tot").removeClass("active")
              $("#cTot .pagination a#p15Tot").removeClass("active")
              $("#cTot .pagination a#p16Tot").removeClass("active")
              $("#cTot .pagination a#p17Tot").removeClass("active")
              $("#cTot .pagination a#p18Tot").removeClass("active")
           $("#cTot .pagination a#p19Tot").removeClass("active")
            
              $("#invisPaginat").text("9")
          })
         
         $("#p10Tot").on("click",function(){ 
             $("#pPTot").css("display", "block")
              $("#pSTot").css("display", "block")
             cargar3(10)
              $("#eleccion2I").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 680);
												  
				             })
             
              $("#eleccion2").hide()
              $("#eleccion2A").hide()
              $("#eleccion2B").hide()
              $("#eleccion2C").hide()
              $("#eleccion2D").hide()
              $("#eleccion2E").hide()
              $("#eleccion2F").hide()
              $("#eleccion2G").hide()
             $("#eleccion2H").hide()
              $("#eleccion2J").hide()
              $("#eleccion2K").hide()
              $("#eleccion2L").hide()
              $("#eleccion2M").hide()
              $("#eleccion2N").hide()
              $("#eleccion2O").hide()
              $("#eleccion2P").hide()
              $("#eleccion2Q").hide()
              $("#eleccion2R").hide()
              $("#cTot .pagination a#p1Tot").removeClass("active")
              $("#cTot .pagination a#p2Tot").removeClass("active")
              $("#cTot .pagination a#p3Tot").removeClass("active")
              $("#cTot .pagination a#p4Tot").removeClass("active")
              $("#cTot .pagination a#p5Tot").removeClass("active")
              $("#cTot .pagination a#p6Tot").removeClass("active")
              $("#cTot .pagination a#p7Tot").removeClass("active")
              $("#cTot .pagination a#p9Tot").removeClass("active")
              $("#cTot .pagination a#p8Tot").removeClass("active")
             $("#cTot .pagination a#p10Tot").addClass("active")
              $("#cTot .pagination a#p11Tot").removeClass("active")
              $("#cTot .pagination a#p12Tot").removeClass("active")
              $("#cTot .pagination a#p13Tot").removeClass("active")
              $("#cTot .pagination a#p14Tot").removeClass("active")
              $("#cTot .pagination a#p15Tot").removeClass("active")
              $("#cTot .pagination a#p16Tot").removeClass("active")
              $("#cTot .pagination a#p17Tot").removeClass("active")
              $("#cTot .pagination a#p18Tot").removeClass("active")
           $("#cTot .pagination a#p19Tot").removeClass("active")
            
              $("#invisPaginat").text("10")
          })
         
         $("#p11Tot").on("click",function(){ 
             $("#pPTot").css("display", "block")
              $("#pSTot").css("display", "block")
             cargar3(11)
              $("#eleccion2J").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 680);
												  
				             })
             
              $("#eleccion2").hide()
              $("#eleccion2A").hide()
              $("#eleccion2B").hide()
              $("#eleccion2C").hide()
              $("#eleccion2D").hide()
              $("#eleccion2E").hide()
              $("#eleccion2F").hide()
              $("#eleccion2G").hide()
             $("#eleccion2H").hide()
              $("#eleccion2I").hide()
              $("#eleccion2K").hide()
              $("#eleccion2L").hide()
              $("#eleccion2M").hide()
              $("#eleccion2N").hide()
              $("#eleccion2O").hide()
              $("#eleccion2P").hide()
              $("#eleccion2Q").hide()
              $("#eleccion2R").hide()
              $("#cTot .pagination a#p1Tot").removeClass("active")
              $("#cTot .pagination a#p2Tot").removeClass("active")
              $("#cTot .pagination a#p3Tot").removeClass("active")
              $("#cTot .pagination a#p4Tot").removeClass("active")
              $("#cTot .pagination a#p5Tot").removeClass("active")
              $("#cTot .pagination a#p6Tot").removeClass("active")
              $("#cTot .pagination a#p7Tot").removeClass("active")
              $("#cTot .pagination a#p8Tot").removeClass("active")
             $("#cTot .pagination a#p10Tot").removeClass("active")
              $("#cTot .pagination a#p11Tot").addClass("active")
              $("#cTot .pagination a#p12Tot").removeClass("active")
              $("#cTot .pagination a#p13Tot").removeClass("active")
              $("#cTot .pagination a#p14Tot").removeClass("active")
              $("#cTot .pagination a#p15Tot").removeClass("active")
              $("#cTot .pagination a#p16Tot").removeClass("active")
              $("#cTot .pagination a#p17Tot").removeClass("active")
              $("#cTot .pagination a#p18Tot").removeClass("active")
             $("#cTot .pagination a#p9Tot").removeClass("active")
           $("#cTot .pagination a#p19Tot").removeClass("active")
            
              $("#invisPaginat").text("11")
          })
         
         $("#p12Tot").on("click",function(){ 
             $("#pPTot").css("display", "block")
              $("#pSTot").css("display", "block")
             cargar3(12)
              $("#eleccion2K").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 680);
												  
				             })
             
              $("#eleccion2").hide()
              $("#eleccion2A").hide()
              $("#eleccion2B").hide()
              $("#eleccion2C").hide()
              $("#eleccion2D").hide()
              $("#eleccion2E").hide()
              $("#eleccion2F").hide()
              $("#eleccion2G").hide()
             $("#eleccion2H").hide()
              $("#eleccion2J").hide()
              $("#eleccion2I").hide()
              $("#eleccion2L").hide()
              $("#eleccion2M").hide()
              $("#eleccion2N").hide()
              $("#eleccion2O").hide()
              $("#eleccion2P").hide()
              $("#eleccion2Q").hide()
              $("#eleccion2R").hide()
              $("#cTot .pagination a#p1Tot").removeClass("active")
              $("#cTot .pagination a#p2Tot").removeClass("active")
              $("#cTot .pagination a#p3Tot").removeClass("active")
              $("#cTot .pagination a#p4Tot").removeClass("active")
              $("#cTot .pagination a#p5Tot").removeClass("active")
              $("#cTot .pagination a#p6Tot").removeClass("active")
              $("#cTot .pagination a#p7Tot").removeClass("active")
              $("#cTot .pagination a#p8Tot").removeClass("active")
             $("#cTot .pagination a#p10Tot").removeClass("active")
              $("#cTot .pagination a#p11Tot").removeClass("active")
              $("#cTot .pagination a#p12Tot").addClass("active")
              $("#cTot .pagination a#p13Tot").removeClass("active")
              $("#cTot .pagination a#p14Tot").removeClass("active")
              $("#cTot .pagination a#p15Tot").removeClass("active")
              $("#cTot .pagination a#p16Tot").removeClass("active")
              $("#cTot .pagination a#p17Tot").removeClass("active")
              $("#cTot .pagination a#p18Tot").removeClass("active")
             $("#cTot .pagination a#p9Tot").removeClass("active")
           $("#cTot .pagination a#p19Tot").removeClass("active")
            
              $("#invisPaginat").text("12")
          })
         
          $("#p13Tot").on("click",function(){ 
              $("#pPTot").css("display", "block")
              $("#pSTot").css("display", "block")
              cargar3(13)
              $("#eleccion2L").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 680);
												  
				             })
             
              $("#eleccion2").hide()
              $("#eleccion2A").hide()
              $("#eleccion2B").hide()
              $("#eleccion2C").hide()
              $("#eleccion2D").hide()
              $("#eleccion2E").hide()
              $("#eleccion2F").hide()
              $("#eleccion2G").hide()
             $("#eleccion2H").hide()
              $("#eleccion2J").hide()
              $("#eleccion2I").hide()
              $("#eleccion2K").hide()
              $("#eleccion2M").hide()
              $("#eleccion2N").hide()
              $("#eleccion2O").hide()
              $("#eleccion2P").hide()
              $("#eleccion2Q").hide()
              $("#eleccion2R").hide()
              $("#cTot .pagination a#p1Tot").removeClass("active")
              $("#cTot .pagination a#p2Tot").removeClass("active")
              $("#cTot .pagination a#p3Tot").removeClass("active")
              $("#cTot .pagination a#p4Tot").removeClass("active")
              $("#cTot .pagination a#p5Tot").removeClass("active")
              $("#cTot .pagination a#p6Tot").removeClass("active")
              $("#cTot .pagination a#p7Tot").removeClass("active")
              $("#cTot .pagination a#p8Tot").removeClass("active")
             $("#cTot .pagination a#p10Tot").removeClass("active")
              $("#cTot .pagination a#p11Tot").removeClass("active")
              $("#cTot .pagination a#p12Tot").removeClass("active")
              $("#cTot .pagination a#p13Tot").addClass("active")
              $("#cTot .pagination a#p14Tot").removeClass("active")
              $("#cTot .pagination a#p15Tot").removeClass("active")
              $("#cTot .pagination a#p16Tot").removeClass("active")
              $("#cTot .pagination a#p17Tot").removeClass("active")
              $("#cTot .pagination a#p18Tot").removeClass("active")
              $("#cTot .pagination a#p9Tot").removeClass("active")
           $("#cTot .pagination a#p19Tot").removeClass("active")
            
              $("#invisPaginat").text("13")
          })
         
             $("#p14Tot").on("click",function(){ 
                 $("#pPTot").css("display", "block")
              $("#pSTot").css("display", "block")
                 cargar3(14)
              $("#eleccion2M").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 680);
												  
				             })
             
              $("#eleccion2").hide()
              $("#eleccion2A").hide()
              $("#eleccion2B").hide()
              $("#eleccion2C").hide()
              $("#eleccion2D").hide()
              $("#eleccion2E").hide()
              $("#eleccion2F").hide()
              $("#eleccion2G").hide()
             $("#eleccion2H").hide()
              $("#eleccion2J").hide()
              $("#eleccion2I").hide()
              $("#eleccion2K").hide()
              $("#eleccion2L").hide()
              $("#eleccion2N").hide()
              $("#eleccion2O").hide()
              $("#eleccion2P").hide()
              $("#eleccion2Q").hide()
              $("#eleccion2R").hide()
              $("#cTot .pagination a#p1Tot").removeClass("active")
              $("#cTot .pagination a#p2Tot").removeClass("active")
              $("#cTot .pagination a#p3Tot").removeClass("active")
              $("#cTot .pagination a#p4Tot").removeClass("active")
              $("#cTot .pagination a#p5Tot").removeClass("active")
              $("#cTot .pagination a#p6Tot").removeClass("active")
              $("#cTot .pagination a#p7Tot").removeClass("active")
              $("#cTot .pagination a#p8Tot").removeClass("active")
             $("#cTot .pagination a#p10Tot").removeClass("active")
              $("#cTot .pagination a#p11Tot").removeClass("active")
              $("#cTot .pagination a#p12Tot").removeClass("active")
              $("#cTot .pagination a#p13Tot").removeClass("active")
              $("#cTot .pagination a#p14Tot").addClass("active")
              $("#cTot .pagination a#p15Tot").removeClass("active")
              $("#cTot .pagination a#p16Tot").removeClass("active")
              $("#cTot .pagination a#p17Tot").removeClass("active")
              $("#cTot .pagination a#p18Tot").removeClass("active")
                 $("#cTot .pagination a#p9Tot").removeClass("active")
           $("#cTot .pagination a#p19Tot").removeClass("active")
            
              $("#invisPaginat").text("14")
          }) 
         $("#p15Tot").on("click",function(){ 
             $("#pPTot").css("display", "block")
              $("#pSTot").css("display", "block")
             cargar3(15)
              $("#eleccion2N").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 680);
												  
				             })
             
              $("#eleccion2").hide()
              $("#eleccion2A").hide()
              $("#eleccion2B").hide()
              $("#eleccion2C").hide()
              $("#eleccion2D").hide()
              $("#eleccion2E").hide()
              $("#eleccion2F").hide()
              $("#eleccion2G").hide()
             $("#eleccion2H").hide()
              $("#eleccion2J").hide()
              $("#eleccion2I").hide()
              $("#eleccion2K").hide()
              $("#eleccion2L").hide()
              $("#eleccion2M").hide()
              $("#eleccion2O").hide()
              $("#eleccion2P").hide()
              $("#eleccion2Q").hide()
              $("#eleccion2R").hide()
              $("#cTot .pagination a#p1Tot").removeClass("active")
              $("#cTot .pagination a#p2Tot").removeClass("active")
              $("#cTot .pagination a#p3Tot").removeClass("active")
              $("#cTot .pagination a#p4Tot").removeClass("active")
              $("#cTot .pagination a#p5Tot").removeClass("active")
              $("#cTot .pagination a#p6Tot").removeClass("active")
              $("#cTot .pagination a#p7Tot").removeClass("active")
              $("#cTot .pagination a#p8Tot").removeClass("active")
             $("#cTot .pagination a#p10Tot").removeClass("active")
              $("#cTot .pagination a#p11Tot").removeClass("active")
              $("#cTot .pagination a#p12Tot").removeClass("active")
              $("#cTot .pagination a#p13Tot").removeClass("active")
              $("#cTot .pagination a#p14Tot").removeClass("active")
              $("#cTot .pagination a#p15Tot").addClass("active")
              $("#cTot .pagination a#p16Tot").removeClass("active")
              $("#cTot .pagination a#p17Tot").removeClass("active")
              $("#cTot .pagination a#p18Tot").removeClass("active")
             $("#cTot .pagination a#p9Tot").removeClass("active")
           $("#cTot .pagination a#p19Tot").removeClass("active")
            
              $("#invisPaginat").text("15")
          })
         
         $("#p16Tot").on("click",function(){ 
             $("#pPTot").css("display", "block")
              $("#pSTot").css("display", "block")
             cargar3(16)
              $("#eleccion2O").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 680);
												  
				             })
             
              $("#eleccion2").hide()
              $("#eleccion2A").hide()
              $("#eleccion2B").hide()
              $("#eleccion2C").hide()
              $("#eleccion2D").hide()
              $("#eleccion2E").hide()
              $("#eleccion2F").hide()
              $("#eleccion2G").hide()
             $("#eleccion2H").hide()
              $("#eleccion2J").hide()
              $("#eleccion2I").hide()
              $("#eleccion2K").hide()
              $("#eleccion2M").hide()
              $("#eleccion2N").hide()
              $("#eleccion2L").hide()
              $("#eleccion2P").hide()
              $("#eleccion2Q").hide()
              $("#eleccion2R").hide()
              $("#cTot .pagination a#p1Tot").removeClass("active")
              $("#cTot .pagination a#p2Tot").removeClass("active")
              $("#cTot .pagination a#p3Tot").removeClass("active")
              $("#cTot .pagination a#p4Tot").removeClass("active")
              $("#cTot .pagination a#p5Tot").removeClass("active")
              $("#cTot .pagination a#p6Tot").removeClass("active")
              $("#cTot .pagination a#p7Tot").removeClass("active")
              $("#cTot .pagination a#p8Tot").removeClass("active")
             $("#cTot .pagination a#p10Tot").removeClass("active")
              $("#cTot .pagination a#p11Tot").removeClass("active")
              $("#cTot .pagination a#p12Tot").removeClass("active")
              $("#cTot .pagination a#p13Tot").removeClass("active")
              $("#cTot .pagination a#p14Tot").removeClass("active")
              $("#cTot .pagination a#p15Tot").removeClass("active")
              $("#cTot .pagination a#p16Tot").addClass("active")
              $("#cTot .pagination a#p17Tot").removeClass("active")
              $("#cTot .pagination a#p18Tot").removeClass("active")
             $("#cTot .pagination a#p9Tot").removeClass("active")
           $("#cTot .pagination a#p19Tot").removeClass("active")
            
              $("#invisPaginat").text("16")
          })

          $("#p17Tot").on("click",function(){ 
              $("#pPTot").css("display", "block")
              $("#pSTot").css("display", "none")
              cargar3(17)
              $("#eleccion2P").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 680);
												  
				             })
             
              $("#eleccion2").hide()
              $("#eleccion2A").hide()
              $("#eleccion2B").hide()
              $("#eleccion2C").hide()
              $("#eleccion2D").hide()
              $("#eleccion2E").hide()
              $("#eleccion2F").hide()
              $("#eleccion2G").hide()
             $("#eleccion2H").hide()
              $("#eleccion2J").hide()
              $("#eleccion2I").hide()
              $("#eleccion2K").hide()
              $("#eleccion2M").hide()
              $("#eleccion2N").hide()
              $("#eleccion2L").hide()
              $("#eleccion2O").hide()
              $("#eleccion2Q").hide()
              $("#eleccion2R").hide()
              $("#cTot .pagination a#p1Tot").removeClass("active")
              $("#cTot .pagination a#p2Tot").removeClass("active")
              $("#cTot .pagination a#p3Tot").removeClass("active")
              $("#cTot .pagination a#p4Tot").removeClass("active")
              $("#cTot .pagination a#p5Tot").removeClass("active")
              $("#cTot .pagination a#p6Tot").removeClass("active")
              $("#cTot .pagination a#p7Tot").removeClass("active")
              $("#cTot .pagination a#p8Tot").removeClass("active")
             $("#cTot .pagination a#p10Tot").removeClass("active")
              $("#cTot .pagination a#p11Tot").removeClass("active")
              $("#cTot .pagination a#p12Tot").removeClass("active")
              $("#cTot .pagination a#p13Tot").removeClass("active")
              $("#cTot .pagination a#p14Tot").removeClass("active")
              $("#cTot .pagination a#p15Tot").removeClass("active")
              $("#cTot .pagination a#p16Tot").removeClass("active")
              $("#cTot .pagination a#p17Tot").addClass("active")
              $("#cTot .pagination a#p18Tot").removeClass("active")
              $("#cTot .pagination a#p9Tot").removeClass("active")
               $("#cTot .pagination a#p19Tot").removeClass("active")
            
              $("#invisPaginat").text("17")
          })
         
         /*
         
          $("#p18Tot").on("click",function(){ 
              $("#pPTot").css("display", "block")
              $("#pSTot").css("display", "block")
              cargar3(18)
              $("#eleccion2Q").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 0);
												  
				             })
             
              $("#eleccion2").hide()
              $("#eleccion2A").hide()
              $("#eleccion2B").hide()
              $("#eleccion2C").hide()
              $("#eleccion2D").hide()
              $("#eleccion2E").hide()
              $("#eleccion2F").hide()
              $("#eleccion2G").hide()
             $("#eleccion2H").hide()
              $("#eleccion2J").hide()
              $("#eleccion2I").hide()
              $("#eleccion2K").hide()
              $("#eleccion2M").hide()
              $("#eleccion2N").hide()
              $("#eleccion2L").hide()
              $("#eleccion2O").hide()
              $("#eleccion2P").hide()
              $("#eleccion2R").hide()
              $("#cTot .pagination a#p1Tot").removeClass("active")
              $("#cTot .pagination a#p2Tot").removeClass("active")
              $("#cTot .pagination a#p3Tot").removeClass("active")
              $("#cTot .pagination a#p4Tot").removeClass("active")
              $("#cTot .pagination a#p5Tot").removeClass("active")
              $("#cTot .pagination a#p6Tot").removeClass("active")
              $("#cTot .pagination a#p7Tot").removeClass("active")
              $("#cTot .pagination a#p8Tot").removeClass("active")
             $("#cTot .pagination a#p10Tot").removeClass("active")
              $("#cTot .pagination a#p11Tot").removeClass("active")
              $("#cTot .pagination a#p12Tot").removeClass("active")
              $("#cTot .pagination a#p13Tot").removeClass("active")
              $("#cTot .pagination a#p14Tot").removeClass("active")
              $("#cTot .pagination a#p15Tot").removeClass("active")
              $("#cTot .pagination a#p16Tot").removeClass("active")
              $("#cTot .pagination a#p17Tot").removeClass("active")
              $("#cTot .pagination a#p18Tot").addClass("active")
              $("#cTot .pagination a#p9Tot").removeClass("active")
               $("#cTot .pagination a#p19Tot").removeClass("active")
          
            
              $("#invisPaginat").text("18")
          })
         
          $("#p19Tot").on("click",function(){ 
              $("#pPTot").css("display", "block")
              $("#pSTot").css("display", "none")
              cargar3(19)
              $("#eleccion2R").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 0);
												  
				             })
             
              $("#eleccion2").hide()
              $("#eleccion2A").hide()
              $("#eleccion2B").hide()
              $("#eleccion2C").hide()
              $("#eleccion2D").hide()
              $("#eleccion2E").hide()
              $("#eleccion2F").hide()
              $("#eleccion2G").hide()
             $("#eleccion2H").hide()
              $("#eleccion2J").hide()
              $("#eleccion2I").hide()
              $("#eleccion2K").hide()
              $("#eleccion2M").hide()
              $("#eleccion2N").hide()
              $("#eleccion2L").hide()
              $("#eleccion2O").hide()
              $("#eleccion2P").hide()
              $("#eleccion2Q").hide()
              $("#cTot .pagination a#p1Tot").removeClass("active")
              $("#cTot .pagination a#p2Tot").removeClass("active")
              $("#cTot .pagination a#p3Tot").removeClass("active")
              $("#cTot .pagination a#p4Tot").removeClass("active")
              $("#cTot .pagination a#p5Tot").removeClass("active")
              $("#cTot .pagination a#p6Tot").removeClass("active")
              $("#cTot .pagination a#p7Tot").removeClass("active")
              $("#cTot .pagination a#p8Tot").removeClass("active")
             $("#cTot .pagination a#p10Tot").removeClass("active")
              $("#cTot .pagination a#p11Tot").removeClass("active")
              $("#cTot .pagination a#p12Tot").removeClass("active")
              $("#cTot .pagination a#p13Tot").removeClass("active")
              $("#cTot .pagination a#p14Tot").removeClass("active")
              $("#cTot .pagination a#p15Tot").removeClass("active")
              $("#cTot .pagination a#p16Tot").removeClass("active")
              $("#cTot .pagination a#p17Tot").removeClass("active")
              $("#cTot .pagination a#p18Tot").removeClass("active")
              $("#cTot .pagination a#p9Tot").removeClass("active")
              $("#cTot .pagination a#p19Tot").addClass("active")
            
              $("#invisPaginat").text("19")
          })
         
     */
         
          $("#pPTot").on("click",function(){ 
              queHay = $("#invisPaginat").text()
              if(queHay == "2"){
                 $('#p1Tot').click()
              }
              if(queHay == "3"){
                 $('#p2Tot').click()
              }
              if(queHay == "4"){
                 $('#p3Tot').click()
              }
              if(queHay == "5"){
                 $('#p4Tot').click()
              }
              if(queHay == "6"){
                 $('#p5Tot').click()
              }
              if(queHay == "7"){
                 $('#p6Tot').click()
              }
              if(queHay == "8"){
                 $('#p7Tot').click()
              }
              if(queHay == "9"){
                 $('#p8Tot').click()
              }
               if(queHay == "10"){
                 $('#p9Tot').click()
              }
              if(queHay == "11"){
                 $('#p10Tot').click()
              }
              if(queHay == "12"){
                 $('#p11Tot').click()
              }
              if(queHay == "13"){
                 $('#p12Tot').click()
              }
              if(queHay == "14"){
                 $('#p13Tot').click()
              }
              if(queHay == "15"){
                 $('#p14Tot').click()
              }
               if(queHay == "16"){
                 $('#p15Tot').click()
              }
              if(queHay == "17"){
                 $('#p16Tot').click()
              }
              if(queHay == "18"){
                 $('#p17Tot').click()
              }
              if(queHay == "19"){
                 $('#p18Tot').click()
              }
          })
         
         $("#pSTot").on("click",function(){ 
              queHay = $("#invisPaginat").text()
              if(queHay == "1"){
                 $('#p2Tot').click()
              }
              if(queHay == "2"){
                 $('#p3Tot').click()
              }
              if(queHay == "3"){
                 $('#p4Tot').click()
              }
              if(queHay == "4"){
                 $('#p5Tot').click()
              }
              if(queHay == "5"){
                 $('#p6Tot').click()
              }
              if(queHay == "6"){
                 $('#p7Tot').click()
              }
              if(queHay == "7"){
                 $('#p8Tot').click()
              }
              if(queHay == "8"){
                 $('#p9Tot').click()
              }
              if(queHay == "9"){
                 $('#p10Tot').click()
              }
              if(queHay == "10"){
                 $('#p11Tot').click()
              }
              if(queHay == "11"){
                 $('#p12Tot').click()
              }
              if(queHay == "12"){
                 $('#p13Tot').click()
              }
              if(queHay == "13"){
                 $('#p14Tot').click()
              }
              if(queHay == "14"){
                 $('#p15Tot').click()
              }
              if(queHay == "15"){
                 $('#p16Tot').click()
              }
              if(queHay == "16"){
                 $('#p17Tot').click()
              }
             if(queHay == "17"){
                 $('#18Tot').click()
              }
              if(queHay == "18"){
                 $('#p19Tot').click()
              }
          })
          /*----------------------FIN PAGINACION WINNERS AND SECONDS--------------------------*/ 
         
          $("#gana").on("click",function(){ 
              $("#imitacion").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 680);
												  
				             })
             
              $("#eleccion").hide()
            $("#gana").hide()
               $("#logoAntiguo").hide()
              $("#aW").hide()
              $("#aW2").hide()
              $("#rank").hide()
                 $("#rank2").hide()
          $("#muestra").hide()
         $("#tablero").hide()
          $("h1").hide()
             $("#granTablero").hide() 
          })
    
         
         $("#volverEsp").on("click",function(){ 
              $("#eleccion").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 680);
												  
				             })
               $("#imitacion").hide()
             $("#rank").show()
                $("#rank2").show()
               $("#tablero").hide()
        $("#gana").show()
          $("#muestra").hide()
       $("#logoAntiguo").show()
          $("h1").show()
               $("#volverSS").hide()
             $("#granTablero").hide()
          })
         
         $("#volverSS").on("click",function(){ 
              $("#eleccion").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 680);
												  
				             })
               $("#imitacion").hide()
             $("#rank").show()
                $("#rank2").show()
               $("#tablero").hide()
        $("#gana").show()
          $("#muestra").hide()
       $("#logoAntiguo").show()
          $("h1").show()
               $("#volverSS").hide()
             $("#granTablero").hide()
              $("#granMT").hide()
              $("#tiraRot").show()
             $("#tiraRotTrans").hide()
             
          })
         
         
         
         
         
         
         
        $("#volverTab").on("click",function(){ 
              $("#granTablero").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 680);
												  
				             })
            
           
             $("#tablero").show()
               $("#imitacion").hide()
             $("#rank").hide()
               $("#rank2").hide()
             $("#volverSS").show()
            $("#volverTab").hide()
            $("#aW").hide()
            $("#aW2").hide()
            $("#logoAntiguo").show()
        $("#gana").hide()
          $("#muestraTablero").hide()
       $("#logoAntiguo").hide()
          $("h1").hide()
             $("#granMT").hide()
          $("#tiraRot").hide()
            $("#tiraRotTrans").show()
            $("#tiraRotTrans2").hide()
             
          })
         
         
      
         /*----------------------------------INICIO TABLERO-------------------------------*/
         
         
        $("#logoAntiguo").on("click",function(){   
            
            $("#rankEstr").text("")
            var texto = "          2019 - 1956 HISTORICAL RANKING EUROVISION SONG CONTEST";
// 100 es el intervalo de minisegundos en el que se escribirá cada letra.
maquina("rankEstr",texto,100)
            $("#eleccion").hide()
            $("#aW").hide()
               $("#aW2").hide()
              $("#cSe").hide()
              $("#cTot").hide()
              $("#c").hide()
              $("#gana").hide()
               $("#rank").hide()
                $("#rank2").hide()
               $("#imitacion").hide()
            
               $("h1").hide()
                  $("#logoAntiguo").hide()
            $("#volverSS").hide()
               $("#granMT").hide()
			
          $("#tiraRotTrans").show()
            $("#tiraRot").hide()
        $("#volverSS").show()
            $("#tablero").show()
             $("#muestra").hide()
            $("#rank").hide()
          
            $("#granTablero").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 684);
												  
				             })
             
         
               $("#rank2").hide()
            $("#tabl1").text("")
            $("#tabl2").text("")
            $("#tabl3").text("")
            $("#tabl4").text("")
            $("#tabl5").text("")
            $("#tabl6").text("")
            $("#tabl7").text("")
            $("#tabl8").text("")
            $("#tabl9").text("")
            $("#tabl10").text("")
            $("#tabl11").text("")
            $("#tabl12").text("")
            $("#tabl13").text("")
            $("#tabl14").text("")
             $("#granMT").hide()
       
         meter(2019, 2015, 1)
          meter(2014, 2010, 2)
      
         meter(2009, 2005, 3)
         meter(2004, 2000, 4)
         meter(1999, 1995, 5)
         meter(1994, 1990, 6)
         meter(1989, 1985, 7)
         meter(1984, 1980, 8)
         meter(1979, 1975, 9)
         meter(1974, 1970, 10)
         meter(1969, 1968, 11)
         meter(1967, 1963, 12)
         meter(1962, 1958, 13)
         meter(1957, 1956, 14)
          })
       
           function meter(cubo, cubo2, bloque){
            
                 $.ajax ({
                            url: "api.php",
                            data:
                                {
                                comando: "meterCubo",
                                numeroEle : cubo,
                                numeroEle2 : cubo2
                                    },
                            dataType: "json",
                            method: "post",
                            success: finMeterC
                        })
                  
               
            function finMeterC(datos){ 
                    
                     if(datos.meta.ok != true) {
                       alert("Error al cargar los datos")
                       return
                     }
                  for(var item of datos.data){  
                        if(item.Annio != 1956){         
                       var cadena = `
                          
                             <div class="elemTab">
                                <div class="tablA">${item.Annio}</div>
                                <div class="paisesTab">
                                    <div class="banYpas">
                                           <div class="numerito">1st</div>
                                           <div class = "ensena"><img src="${item.Bandera}"></div>
                                           <div class="tablB">${item.Pais}</div>
                                    </div>
                                    <div class="banYpas">
                                           <div class="numerito">2nd</div>
                                           <div class = "ensena"><img src="${item.Flag}"></div>
                                           <div class="tablC">${item.DosPais}</div> 
                                    </div>
                                </div>
                              </div>
                      



                          `;
                        }
                      else{
                           var cadena = `
                          
                             <div class="elemTab">
                                <div class="tablA">${item.Annio}</div>
                                <div class="paisesTab">
                                    <div class="banYpas">
                                           <div class="numerito">1st</div>
                                           <div class = "ensena"><img src="${item.Bandera}"></div>
                                           <div class="tablB">${item.Pais}</div>
                                    </div>
                                    <div class="banYpas">
                                           <div class="numerito">2nd</div>
                                         
                                           <div class="tablC">-</div> 
                                    </div>
                                </div>
                              </div>
                      



                          `;
                          
                          
                      }
                 
                      
                                              
                      if(bloque == 1){
                         $("#tabl1").append(cadena)
                      }
                      if(bloque == 2){
                         $("#tabl2").append(cadena)
                      }
                      if(bloque == 3){
                         $("#tabl3").append(cadena)
                      }
                      if(bloque == 4){
                         $("#tabl4").append(cadena)
                      }
                      if(bloque == 5){
                         $("#tabl5").append(cadena)
                      }
                      if(bloque == 6){
                         $("#tabl6").append(cadena)
                      }
                      if(bloque == 7){
                         $("#tabl7").append(cadena)
                      }
                      if(bloque == 8){
                         $("#tabl8").append(cadena)
                      }
                      if(bloque == 9){
                         $("#tabl9").append(cadena)
                      }
                      if(bloque == 10){
                         $("#tabl10").append(cadena)
                      }
                      if(bloque == 11){
                         $("#tabl11").append(cadena)
                      }
                      if(bloque == 12){
                         $("#tabl12").append(cadena)
                      }
                      if(bloque == 13){
                         $("#tabl13").append(cadena)
                      }
                      if(bloque == 14){
                        
                         $("#tabl14").append(cadena)
                      }
                      
                      //AGREGAMOS EL LISENER A CADA ITEM. MUY IMPORTANTE DESPUES DEL APPEND
                         
                           $(".tablA").off("click")
					       $(".tablA").on("click",function(){ 
                               $("h1").hide()
                                $("#rank").hide()
                                  $("#rank2").hide()
                                $("#eleccion").hide()
                                $("#muestra").hide()
                                $("#imitacion").hide()
                               $("#tablero").hide()
                                $("#granTablero").hide()
                               $("#volverSS").hide()
                                $("#granMT").show()
                                $("#tiraRot").hide()
                               $("#tiraRotTrans2").show()
                               $("#muestraTablero").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 680);
												  
				             })
                               
                                $("#aW2").text($(this).text()+" WINNER AND SECOND PLACE")
                               
                                $("#aW2").show()
                                $("#volverTab").show()
                                $("h1").hide()
                              $("rank").hide()
                                  $("#rank2").hide()
                                $("#c").hide()
                                $("#cSe").hide()
                                $("#cTot").hide()
                                  $("#gana").hide()
                                   $("#imitacion").hide()
                                $("#aW").hide()
                               
                               
                               An = $(this).text()
                               
                               if (An == 1969){
                                   $("#aW2").text($(this).text()+" FOUR WINNERS AND SECOND PLACE")
                               }
                               
                               if (An == 1956){
                                   $("#aW2").text($(this).text()+" WINNER")
                               }
                              
                             
                 $.ajax ({
                            url: "api.php",
                            data:
                                {
                                comando: "cancionesAnnio",
                                nombrePais : An
                                    },
                            dataType: "json",
                            method: "post",
                            success: finCAN
                        })
                  
                
            function finCAN(datos){ 
                    
                     if(datos.meta.ok != true) {
                       alert("Error al cargar los datos")
                       return
                     }
                
                $("#muestraTablero").text("")
               
                     for(var item of datos.data){   
                         var cadena = `
                 <div class = "ficha tilt-in-top-1">
                        <h2 class="ann">${item.Annio}</h2>
                         <div class="video">
<div class="tv"><img src="img/tv_icono.png" alt="television"></div>
	<div class="video videoEsp"><iframe width="95%" height="95%" src="${item.Video}" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
	</div>
                         <div class = "banPaisFicha">
                              <div class = "bandera"><img id="#imaBan" src="${item.Bandera}"></div>
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
                         
                        $("#muestraTablero").append(cadena);
                   if(item.DosCancion != 'x') { 
                          var cadena2 = `
                 <div class = "ficha tilt-in-top-1">
                        <h2 class="ann">${item.Annio}</h2>
                         <div class="video">
<div class="tv"><img src="img/tv_icono.png" alt="television"></div>
	<div class="video videoEsp"><iframe width="95%" height="95%" src="${item.Dosvideo}" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
	</div>
                         <div class = "banPaisFicha">
                              <div class = "bandera"><img id="#imaBan" src="${item.Flag}"></div>
                              <div class = "pais">${item.DosPais}</div>
                         </div>
                         <div class="music">
                         <div class="nota"><i class="fas fa-music fa-2x"></i></div>
                         <h3 class="cancion">${item.DosCancion}<br>(${item.DosInterprete})</h3> 
                         </div>
                         <div class = "borde"></div>

                         <div class="music">
                         <div class="nota2"><i class="fas fa-map-marker-alt fa-2x"></i></div>
                         <div class="cancion">${item.CiudadSede}</div>
                         </div>

                         </div>
                         
                         `;
                         
                        $("#muestraTablero").append(cadena2);
                   }
                  
                    }
                    
           
            
                 }
                               
                               
                              
                           })
                      
                           $(".banYpas").off("click")
					       $(".banYpas").on("click",function(){ 
                               
                              PS = $(this).find(".tablC").text() 
                              if(PS != "-"){
                                $("#eleccion").hide()
                                $("#muestra").hide()
                                $("#imitacion").hide()
                                  $("#volverSS").hide()
                               $("#tablero").hide()
                                   $("#granMT").show()
                                   $("#granTablero").hide()
                                   $("#tiraRot").hide()
                                  $("#tiraRotTrans2").show()
                                 $("#muestraTablero").show(0, function(){
				         // desplaza la ventana a left 0 y top 0
                           window.scrollTo(0, 680);
												  
				             })
                              
                               $("#rank").hide()
                                     $("#rank2").hide()
                                $("#volverTab").show()
                                $("h1").hide()
                                $("#c").hide()
                                $("#cSe").hide()
                                $("#cTot").hide()
                                  $("#gana").hide()
                                   $("#imitacion").hide()
                                $("#aW").hide()
                               An = $(this).text()
                               
                         Pa = $(this).find(".tablB").text() 
                         Pb = $(this).find(".tablC").text() 
                         AnP = $(this).parent().parent().find(".tablA").text()
                             
                               
                         if (Pa != 0){
                              $("#aW2").text(AnP+" WINNER")
                               
                                $("#aW2").show()
                             
                         
                             
                 $.ajax ({
                            url: "api.php",
                            data:
                                {
                                comando: "cancionesPais2",
                                nombrePais : Pa,
                                nombreAnn: AnP
                                    },
                            dataType: "json",
                            method: "post",
                            success: finCANPA
                        })
                  
                
            function finCANPA(datos){ 
                    
                     if(datos.meta.ok != true) {
                       alert("Error al cargar los datos")
                       return
                     }
                
                $("#muestraTablero").text("")
               
                     for(var item of datos.data){ 
                              var cadena = `
                 <div class = "ficha tilt-in-top-1">
                        <h2 class="ann">${item.Annio}</h2>
                         <div class="video">
<div class="tv"><img src="img/tv_icono.png" alt="television"></div>
	<div class="video videoEsp"><iframe width="95%" height="95%" src="${item.Video}" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
	</div>
                         <div class = "banPaisFicha">
                              <div class = "bandera"><img id="#imaBan" src="${item.Bandera}"></div>
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
                         
                        $("#muestraTablero").append(cadena);
                         
                         
                         
                         
                     }
                
            }
                             
                         }
                               
                               
                               else{  $("#aW2").text(AnP+" SECOND PLACE")
                               
                                $("#aW2").show()
                       
                                   
                                     $.ajax ({
                            url: "api.php",
                            data:
                                {
                                comando: "cancionesPais3",
                                nombrePais : Pb,
                                nombreAnn: AnP
                                    },
                            dataType: "json",
                            method: "post",
                            success: finCANPA2
                        })
                  
                
            function finCANPA2(datos){ 
                    
                     if(datos.meta.ok != true) {
                       alert("Error al cargar los datos")
                       return
                     }
                
                $("#muestraTablero").text("")
               
                     for(var item of datos.data){
                       if(item.DosCancion != 'x'){                 
                                                 
                                var cadena2 = `
                 <div class = "ficha tilt-in-top-1">
                        <h2 class="ann">${item.Annio}</h2>
                         <div class="video">
<div class="tv"><img src="img/tv_icono.png" alt="television"></div>
	<div class="video videoEsp"><iframe width="95%" height="95%" src="${item.Dosvideo}" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
	</div>
                         <div class = "banPaisFicha">
                              <div class = "bandera"><img id="#imaBan" src="${item.Flag}"></div>
                              <div class = "pais">${item.DosPais}</div>
                         </div>
                         <div class="music">
                         <div class="nota"><i class="fas fa-music fa-2x"></i></div>
                         <h3 class="cancion">${item.DosCancion}<br>(${item.DosInterprete})</h3> 
                         </div>
                         <div class = "borde"></div>

                         <div class="music">
                         <div class="nota2"><i class="fas fa-map-marker-alt fa-2x"></i></div>
                         <div class="cancion">${item.CiudadSede}</div>
                         </div>

                         </div>
                         
                         `;
                         
                        $("#muestraTablero").append(cadena2);
                         
                       
                       }
                         
                     }
                
            }
                                   
                                   
                                   
                                   
                               }
                              }
                         
                           })
                      
                      
                  }
                
            }
               
           }
         
      
   
       
         /*-------------------------------------FIN TABLERO---------------------------------*/
         
         /*------------------------INICIO DESPLEGABLE-----------------------------*/
         
      $.ajax ({
                            url: "api.php",
                            data:
                                {
                                comando: "consultarSalto"
                                    },
                            dataType: "json",
                            method: "post",
                            success: finConSalto
                        })
                  
               
            function finConSalto(datos){ 
                    
                     if(datos.meta.ok != true) {
                       alert("Error al cargar los datos")
                       return
                     }
               var cont=0
             
                     for(var item of datos.data){ 
						 
						if (item.deDonde == 1){
							
							 if(item.Salto == 1){
								 $(".irA").click()
							 }

							 if(item.Salto == 2){
								 $(".irB").click()
							 }

							 if(item.Salto == 3){
								 $(".irC").click()
							 }

							 if(item.Salto == 4){
								 $("#logoAntiguo").click()
							 }

							 if(item.Salto == 5){
								 $("#gana").click()
							 }
							
							
							   $.ajax ({  url: "api.php",
									data:
									   {
									comando: "iniSalto"
										},
									dataType: "json",
									method: "post",
									success: finIniSalto
									 }) 
							  function finIniSalto(datos){  
								if(datos.meta.ok != true) {
								   alert("Error al cargar los datos")
								   return
								 }

								}
						}
                       
                        }
                    
                     }
          
         
         /*------------------------FIN DESPLEGABLE--------------------------------*/
         
      /*------------------INICIO EFECTO MAQUINA DE ESCRIBIR-------------------------*/  
         
             
      function maquina(contenedor,texto,intervalo){
   // Calculamos la longitud del texto
   longitud = texto.length;
   // Obtenemos referencia del div donde se va a alojar el texto.
   cnt = document.getElementById(contenedor);
   var i=0;
   // Creamos el timer
   timer = setInterval(function(){
      // Vamos añadiendo letra por letra y la _ al final.
      cnt.innerHTML = cnt.innerHTML.substr(0,cnt.innerHTML.length-1) + texto.charAt(i) + "_";
      // Si hemos llegado al final del texto..
      if(i >= longitud){
         // Salimos del Timer y quitamos la barra baja (_)
         clearInterval(timer);
         cnt.innerHTML = cnt.innerHTML.substr(0,longitud);
         return true;
      } else {
         // En caso contrario.. seguimos
         i++;
      }},intervalo);
};
     
        

         
         
          /*------------------FIN EFECTO MAQUINA DE ESCRIBIR-------------------------*/   
           
          }) 