<?php
     include "header.php";
     include("inc/conexion.php");
     $sql = "SELECT * FROM eur_ganadores";
     $consulta = mysqli_query($conexion, $sql);
     $i = 0;
     while($fila = mysqli_fetch_assoc($consulta) ){
                  $banderas[$i] = $fila['Bandera'];  
                  $fotoBan[$i] = "<img src='{$banderas[$i]}'>";
                  $i++;
  
     }

?>

<body id="ini">
 
   
   <div id="menu">
   	  <div id="alca">
             	<div class="alcach"></div>
             	<div class="alcach"></div>
             	<div class="alcach"></div>
             </div>
   	   <div id="fotFooter2Menu" class="rotate-vert-center"><img src= "img/eurLogo.png" alt="ima"></div>
   </div>
   
   <div id="ocultoMenu"></div>
   <!--IMPORTANTE: PARA CONSEGUIR EL EFECTO ZOOM EN LAS FOTOS DE PORTADA FUERA DEL CAROUSEL DE INICIO HAY QUE ENGLOBAR LA CABECERA EN UN DIV CON UN ID que tenga: overflow: hidden;
  
  -->
   <div id="ca">
    <div id="cabeceraS" class="kenburns-bottom">
          </div>
          </div>
         
           
          
            
         <div id="enlaces">
            <div id="cas1" class="casilla mar cierre"><a href="index.php" id="inicio">Start</a></div>
            
            <div id="cas2" class="casilla opt2 cierre"><a href="countries.php" id="porPaises"><div class="int">Winning<br>countries</div></a></div>
            <div id="cas5" class="casilla mar cierre"><a href="otros.php" id="porOtros">Other hits</a></div>
            
             <div id="cas3" class="casilla cierre" id="opt1"><a href="winners.php" id="ganadores"><div class="int">Winners<br></div></a></div>
          
           <div class="casilla" id="paraDes">
               <a href="segundos.php" id="alf">
               <div id="alf2">All 1st and 2nd &nbsp<i id="flechA" class="fas fa-angle-down"></i></div>
               </a>
               <div id="alca2">
             	<div class="alcach"></div>
             	<div class="alcach"></div>
             	<div class="alcach"></div>
               </div>
            
           </div>
             <div id="cas4" class="casilla mar opt2 cierre"><a href="curiosidades.php" id="curio"><div id="int2">News<br>Comments</div></a></div>
              <div class="casilla" id="bo"><a href="roterdam.php" id="rote"><div id="int3">Rotterdam 2021</div></a></div>
           
         </div>
         
         <div id="desplegable" class="scale-in-hor-left">
            <div id="caso1" class="casual"><div class="agua"><img src= "img/lena.jpg" alt="ima"></div><div class="fuego">ALL WINNERS</div></div>
            <div id="caso2" class="casual"><div class="agua"><img src= "img/anabel.jpg" alt="ima"></div><div class="fuego">ALL SECONDS POSITIONS</div></div>
            <div id="caso3" class="casual"><div class="agua"><img src= "img/mans.jpg" alt="ima"></div><div class="fuego">ALL 1st AND 2nd POSITIONS</div></div>
            <div id="caso4" class="casual"><div class="agua"><img src= "img/logoAntiguo.jpg" alt="ima"></div><div class="fuego">HISTORICAL RANKING</div></div>
            <div id="caso5" class="casual"><div class="agua"><img src= "img/ReunionGanadores.jpg" alt="ima"></div><div class="fuego">OTHER VIDEOS</div></div>
         </div>
         <div id="fotFooter2" class="rotate-vert-center"><img src= "img/eurLogo.png" alt="ima"></div>
  


      <div id="tiraRot">
 <div id="home"><a class="noDec" href="index.php">Start&nbsp;</a> > Winners and second places</div>
 
</div> 

  


  <h1>Winners and second places</h1>

<div id="eleccion">
   <div id="seIzq">
      <div id="fichaSE" class="fich tilt-in-top-1">
                      <img src="img/eurLogo.png" alt="Totterdam-2020">
                       <div id="fechaH">History</div>
                       <div id="granMH">
                         <i id="micro" class="fas fa-microphone fa-3x"></i>
                       </div>
      </div>
       
   </div>
   
   <div id="seDer">
     <div id="granA">
      <div id="parteA" class="efecto scale-in-hor-left">
         <img class="irA" src="img/lena.jpg" alt="lena">
       
          
      </div>
        <div class="irA all">All winners</div>
     </div> 
     <div id="granB">
      <div id="parteB" class="efecto scale-in-hor-left">
         <img class="irB" src="img/anabel.jpg" alt="anabel">
       
          
      </div>
        <div class="irB all">All seconds positions</div>
     </div>
     <div id="granC">
      <div id="parteC" class="efecto scale-in-hor-left">
         <img class="irC" src="img/mans.jpg" alt="mans">
       
          
      </div>
        <div class="irC all">All 1st and 2nd positions</div>
     </div>
   </div>
    
    
</div>

<div id="rank">HISTORICAL RANKING</div>

<div id="granLA">
<div id="logoAntiguo" class="efecto scale-in-hor-left">
         <img src="img/logoAntiguo.jpg" alt="logo antiguo">
       
          
      </div>
</div>


<!--INICIO TABLERO-->
<div id="granTablero">

      <div id="tiraRotTrans">
 <div id="homeA"><a class="noDecS" href="index.php">Start&nbsp;</a> > Winners and second places</div>
 
</div>


<div id="rankEstr"></div>
<div id="tablero">
    
    
   <div id="tabl1" class="tabl scale-in-hor-left">
     
     
   </div>
   
   <div id="tabl2" class="tabl scale-in-hor-left">
     
     
   </div>
   
   <div id="tabl3" class="tabl scale-in-hor-left">
     
     
   </div>
   
   <div id="tabl4" class="tabl scale-in-hor-left">
     
     
   </div>
   
   <div id="tabl5" class="tabl scale-in-hor-left">
     
     
   </div>
   
   <div id="tabl6" class="tabl scale-in-hor-left">
     
     
   </div>
   
   <div id="tabl7" class="tabl scale-in-hor-left">
     
     
   </div>
   
   <div id="tabl8" class="tabl scale-in-hor-left">
     
     
   </div>
   
   <div id="tabl9" class="tabl scale-in-hor-left">
     
     
   </div>
   
   <div id="tabl10" class="tabl scale-in-hor-left">
     
     
   </div>
   
   <div id="tabl11" class="tabl scale-in-hor-left">
     
     
   </div>
   
   <div id="tabl12" class="tabl scale-in-hor-left">
     
     
   </div>
   
   <div id="tabl13" class="tabl scale-in-hor-left">
     
     
   </div>
   <div id="tabl14" class="tabl scale-in-hor-left">
     
     
   </div>
   <div id="tabl15" class="tabl">
     
     
   </div>
 
    
    
</div>

   


<div id="bbb">
 <div id="volverSS" class="botV">RETURN</div>

</div>

 </div>

<div id="granMT">
  
      <div id="tiraRotTrans2">
 <div id="homeB"><a class="noDecS" href="index.php">Start&nbsp;</a> > Winners and second places</div>
 
</div>
   <div id="aW2"></div>
<div id="muestraTablero">
    
    
    
</div>

<div id="aaa">
 <div id="volverTab" class="botV">RETURN</div>

</div>
</div>

<!--FIN TABLERO-->

<div id="rank2">OTHER VIDEOS</div>

<figure id="gana" class="snip1325"><a href="#"><img src="img/ReunionGanadores.jpg" alt="ls-sample4"/></a></figure>


<div id="muestra">
        <div id="aW">ALL WINNERS</div>
        <div id="eleccion2" class="scale-up-hor-center">



        </div>
        <div id="eleccion2A" class="scale-up-hor-center">



        </div>
        <div id="eleccion2B" class="scale-up-hor-center">



        </div>
        <div id="eleccion2C" class="scale-up-hor-center">



        </div>
        <div id="eleccion2D" class="scale-up-hor-center">



        </div>
        <div id="eleccion2E" class="scale-up-hor-center">



        </div>
        <div id="eleccion2F" class="scale-up-hor-center">



        </div>
        <div id="eleccion2G" class="scale-up-hor-center">



        </div>
        <div id="eleccion2H" class="scale-up-hor-center">



        </div>
        
         <div id="eleccion2I" class="scale-up-hor-center">



        </div>
        <div id="eleccion2J" class="scale-up-hor-center">



        </div>
        <div id="eleccion2K" class="scale-up-hor-center">



        </div>
        <div id="eleccion2L" class="scale-up-hor-center">



        </div>
        <div id="eleccion2M" class="scale-up-hor-center">



        </div>
        <div id="eleccion2N" class="scale-up-hor-center">



        </div>
        <div id="eleccion2O" class="scale-up-hor-center">



        </div>
        <div id="eleccion2P" class="scale-up-hor-center">



        </div>
        <div id="eleccion2Q" class="scale-up-hor-center">



        </div>
        <div id="eleccion2R" class="scale-up-hor-center">



        </div>
      
      <div id="invisPaginat"></div>
      
     <div id="c">
        <div class="pagination">
         
          <a id="pP">Previous</a>
         
          <a id="p1" class="active" title="WINNERS 2012 - 2019">1</a>
          <a id="p2" title="WINNERS 2004 - 2011">2</a>
          <a id="p3" title="WINNERS 1996 - 2003">3</a>
          <a id="p4" title="WINNERS 1088 - 1995">4</a>
          <a id="p5" title="WINNERS 1980 - 1987">5</a>
          <a id="p6" title="WINNERS 1972 - 1979">6</a>
          <a id="p7" title="WINNERS 1967 - 1971">7</a>
          <a id="p8" title="WINNERS 1959 - 1966">8</a>
          <a id="p9" title="WINNERS 1956 - 1958">9</a>
         
          <a id="pS">Next</a>
         
        </div>
      </div>
         
      <div id="cSe">
        <div class="pagination">
         
          <a id="pPSe">Previous</a>
         
          <a id="p1Se" class="active" title="SECONDS POSITIONS 2012 - 2019">1</a>
          <a id="p2Se" title="SECONDS POSITIONS 2004 - 2011">2</a>
          <a id="p3Se" title="SECONDS POSITIONS 1996 - 2003">3</a>
          <a id="p4Se" title="SECONDS POSITIONS 1088 - 1995">4</a>
          <a id="p5Se" title="SECONDS POSITIONS 1980 - 1987">5</a>
          <a id="p6Se" title="SECONDS POSITIONS 1972 - 1979">6</a>
          <a id="p7Se" title="SECONDS POSITIONS 1967 - 1971">7</a>
          <a id="p8Se" title="SECONDS POSITIONS 1959 - 1966">8</a>
          
         
          <a id="pSSe">Next</a>
         
        </div>
      </div>
        
         <div id="cTot">
        <div class="pagination">
         
          <a id="pPTot">Previous</a>
         
          <a id="p1Tot" class="active" title="WINNERS AND SECONDS POSITIONS 2016 - 2019">1</a>
          <a id="p2Tot" title="WINNERS AND SECONDS POSITIONS 2012 - 2015">2</a>
          <a id="p3Tot" title="WINNERS AND SECONDS POSITIONS 2008 - 2011">3</a>
          <a id="p4Tot" title="WINNERS AND SECONDS POSITIONS 2004 - 2007">4</a>
          <a id="p5Tot" title="WINNERS AND SECONDS POSITIONS 2000 - 2003">5</a>
          <a id="p6Tot" title="WINNERS AND SECONDS POSITIONS 1996 - 1999">6</a>
          <a id="p7Tot" title="WINNERS AND SECONDS POSITIONS 1992 - 1995">7</a>
          <a id="p8Tot" title="WINNERS AND SECONDS POSITIONS 1988 - 1991">8</a>
          <a id="p9Tot" title="WINNERS AND SECONDS POSITIONS 1984 - 1987">9</a>
          <a id="p10Tot" title="WINNERS AND SECONDS POSITIONS 1980 - 1983">10</a>
          <a id="p11Tot" title="WINNERS AND SECONDS POSITIONS 1976 - 1979">11</a>
          <a id="p12Tot" title="WINNERS AND SECONDS POSITIONS 1972 - 1975">12</a>
          <a id="p13Tot" title="WINNERS AND SECONDS POSITIONS 1969 - 1971">13</a>
          <a id="p14Tot" title="WINNERS AND SECONDS POSITIONS 1965 - 1969">14</a>
          <a id="p15Tot" title="WINNERS AND SECONDS POSITIONS 1961 - 1965">15</a>
          <a id="p16Tot" title="WINNERS AND SECONDS POSITIONS 1957 - 1961">16</a>
          <a id="p17Tot" title="WINNERS AND SECONDS POSITIONS 1956 - 1957">17</a>
        
         
          <a id="pSTot">Next</a>
         
        </div>
      </div>
         
 

         <div id="volver" class="botV">RETURN</div>
         
  </div>
   
    <div id="imitacion">
     
       
       
       <div id="grupoVideo">
          
          
          <div class="elemVIAN tilt-in-top-1">
              <div class="granLogoE"><img src= "img/eurLogo.png"></div>
              <div class="videoIaG todoAncho" class="esp"><iframe class="dime" src="https://www.youtube.com/embed/GGaXOdJ9kE4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
              <div class="titVIAN">NICOLE IN 2015<br><span class="ff">(WINNER 1982 GERMANY)</span></div>
              
          </div>
          
          <div class="elemVIAN tilt-in-top-1">
              <div class="granLogoE"><img src= "img/eurLogo.png"></div>
              <div class="videoIaG todoAncho" class="esp"><iframe class="dime" src="https://www.youtube.com/embed/9xIHK2ZJpTA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
              <div class="titVIAN">SÉVERINE IN 2016<br><span class="ff">(WINNER 1971 MONACO)</span></div>
              
          </div>
          
          <div class="elemVIAN tilt-in-top-1">
              <div class="granLogoE"><img src= "img/eurLogo.png"></div>
              <div class="videoIaG todoAncho" class="esp"><iframe class="dime"
              src="https://www.youtube.com/embed/PzSeIdYp3VM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
              <div class="titVIAN">BROTHERHOOD OF MAN IN 2005<br><span class="ff">(WINNER 1976 UNITED KINGDOM)</span></div>
              
          </div>
          
          <div class="elemVIAN tilt-in-top-1">
              <div class="granLogoE"><img src= "img/eurLogo.png"></div>
              <div class="videoIaG todoAncho" class="esp"><iframe class="dime"
              src="https://www.youtube.com/embed/ls2Lq07iWPM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
              <div class="titVIAN">HERREYS IN 2015<br><span class="ff">(WINNER 1984 SWEDEN)</span></div>
          </div>
           
          <div class="elemVIAN tilt-in-top-1">
              <div class="granLogoE"><img src= "img/eurLogo.png"></div>
              <div class="videoIaG todoAncho" class="esp"><iframe class="dime"
              src="https://www.youtube.com/embed/6P1paFElB24" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
               <div class="titVIAN">VICKY LEANDROS IN 2012<br><span class="ff">(WINNER 1972 LUXEMBURGO)</span></div>
          </div>
          
          <div class="elemVIAN tilt-in-top-1">
              <div class="granLogoE"><img src= "img/eurLogo.png"></div>
              <div class="videoIaG todoAncho" class="esp"><iframe class="dime"
              src="https://www.youtube.com/embed/oJdYotAVzAc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
              <div class="titVIAN">ANNE MARIE DAVID IN 2015<br><span class="ff">(WINNER 1973 LUXEMBURGO)</span></div>
          </div>
          
         <div class="elemVIAN tilt-in-top-1">  
              <div class="granLogoE"><img src= "img/eurLogo.png"></div>
              <div class="videoIaG todoAncho" class="esp"><iframe class="dime" src="https://www.youtube.com/embed/uOoEq5h93SM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
              <div class="titVIAN">ALL WINNERS<br><span class="ff">(1956 - 2019)</span></div>
         </div> 
         <div class="elemVIAN tilt-in-top-1">  
              <div class="granLogoE"><img src= "img/eurLogo.png"></div>
              <div class="videoIaG todoAncho" class="esp"><iframe class="dime" src="https://www.youtube.com/embed/M1cjEuT_uvg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
              <div class="titVIAN">PERFORMANCE<br><span class="ff">(IN EUROVISION 2019)</span></div>
         </div> 
       </div>
       
       
        
        
         <div id="volverEsp" class="botV">RETURN</div>
        
    </div>
      
    <div id="franja3">
   
</div>       

 <?php 
  include "footer.php";
  ?>  

    
    <script src= "https://code.jquery.com/jquery-3.3.1.min.js"></script>
  <script src= "js/jsSegu.js?ver=1.9"></script>
  
        
  
</body>
</html>