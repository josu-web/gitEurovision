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
    <div id="cabeceraW" class="kenburns-bottom">
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
 <div id="home"><a class="noDec" href="index.php">Start&nbsp;</a> > Winners</div>
 
</div> 
 
 
  <h1>Winners since its inception in 1956</h1>
 
  <div id="granPu">

<div id="pulsadores" class="centr">
  
  


 


   <div id="esp"></div>
 
   <div class = "pulsador2 scale-in-hor-left" id="decada1">
           <div class='paisesB'>
              <?php     
               for ($i = 57; $i < 62; $i++){
               echo "<div class='bandera3'>{$fotoBan[$i]}</div>";
               }
               ?>
           </div>
           <div class="cifras">2010 - 2019</div>
           <div class='paisesB'>
              <?php 
               for ($i = 62; $i < 67; $i++){
               echo "<div class='bandera3'>{$fotoBan[$i]}</div>";
               }
               ?> 
           </div>
   </div>
   
   <div class = "pulsador2 scale-in-hor-left" id="decada2">
           <div class='paisesB'>
              <?php     
               for ($i = 47; $i < 52; $i++){
               echo "<div class='bandera3'>{$fotoBan[$i]}</div>";
               }
               ?>
           </div>
           <div class="cifras">2000 - 2009</div>
           <div class='paisesB'>
              <?php 
               for ($i = 52; $i < 57; $i++){
               echo "<div class='bandera3'>{$fotoBan[$i]}</div>";
               }
               ?> 
           </div>
   </div>
  
   <div class = "pulsador2 scale-in-hor-left" id="decada3">
           <div class='paisesB'>
              <?php     
               for ($i = 37; $i < 42; $i++){
               echo "<div class='bandera3'>{$fotoBan[$i]}</div>";
               }
               ?>
           </div>
           <div class="cifras">1990 - 1999</div>
           <div class='paisesB'>
              <?php 
               for ($i = 42; $i < 47; $i++){
               echo "<div class='bandera3'>{$fotoBan[$i]}</div>";
               }
               ?> 
           </div>
   </div>
   <div class = "pulsador2 scale-in-hor-left" id="decada4">
           <div class='paisesB'>
              <?php     
               for ($i = 27; $i < 32; $i++){
               echo "<div class='bandera3'>{$fotoBan[$i]}</div>";
               }
               ?>
           </div>
           <div class="cifras">1980 - 1989</div>
           <div class='paisesB'>
              <?php 
               for ($i = 32; $i < 37; $i++){
               echo "<div class='bandera3'>{$fotoBan[$i]}</div>";
               }
               ?> 
           </div>
   </div>
   <div class = "pulsador2 scale-in-hor-left" id="decada5">
           <div class='paisesB'>
              <?php     
               for ($i = 17; $i < 22; $i++){
               echo "<div class='bandera3'>{$fotoBan[$i]}</div>";
               }
               ?>
           </div>
           <div class="cifras">1970 - 1979</div>
           <div class='paisesB'>
              <?php 
               for ($i = 22; $i < 27; $i++){
               echo "<div class='bandera3'>{$fotoBan[$i]}</div>";
               }
               ?> 
           </div>
   </div>
   <div class = "pulsador2M scale-in-hor-left" id="decada6">
           <div class='paisesB'>
              <?php     
               for ($i = 4; $i < 9; $i++){
               echo "<div class='bandera3'>{$fotoBan[$i]}</div>";
               }
               ?>
           </div>
           <div class="cifras2">1960 - 1969</div>
           <div class='paisesB'>
              <?php 
               for ($i = 9; $i < 17; $i++){
               echo "<div class='bandera3'>{$fotoBan[$i]}</div>";
               }
               ?> 
           </div>
   </div>
    <div class = "pulsador2P scale-in-hor-left" id="decada7">
         
           <div class="cifras3">1956 - 1959</div>
           <div class='paisesB'>
              <?php 
               for ($i = 0; $i < 4; $i++){
               echo "<div class='bandera3'>{$fotoBan[$i]}</div>";
               }
               ?> 
           </div>

   </div>
   
      

  
   
 </div> 
 
 <div id="sob">
    

       <div class="card">
            <div class="imgBx">
                <img src="img/s.jpg" alt="ganad">
            </div>
            <div class="details">
                <h2>PORTUGAL<br>Score record</h2>
                <p>Portugal won Eurovision in 2017 with 758 points, setting a new record for top score. This is the first winning theme sung in Portuguese. The first win, first podium and first TOP 5 of Portugal in its entire history in Eurovision.</p>
            </div>
      </div>

 
     
     
 </div>
 
 
</div>
 

    <div class = "contenedor1" id="parteAbajo">
    <div id="tira">
 <div id="home"><a class="noDec" href="index.php">Start&nbsp;</a> > Winners</div>
 
</div>
    
        <div id="deca"></div>
     
        <div id = "contenedorWinners">
                  
                   
              
        </div>
        
        <div id="volver" class="botV">RETURN</div>
        
    </div>
    
    
    <div id="finals">FINALS</div>
    
<div id="anniosss">  
    
    <div class="granAn">
    
    <div class="annW">2019</div>
<figure class="snip1566 hover"><img src="img/ann1.jpg" alt="sq-sample17" />
  <figcaption><i class="fas fa-external-link-alt"></i></figcaption>
  <a href="http://www.youtube.com/watch?v=Dsx4pVjUth0" target="_blank"></a>
</figure>
</div>

  <div class="granAn">
    
    <div class="annW">2018</div>
<figure class="snip1566 hover"><img src="img/ann2.jpg" alt="sq-sample17" />
  <figcaption><i class="fas fa-external-link-alt"></i></figcaption>
   <a href="http://www.youtube.com/watch?v=4AXTB-iShio" target="_blank"></a>
</figure>
</div>

    <div class="granAn">
    <div class="annW">2017</div>
<figure class="snip1566 hover"><img src="img/ann3.jpg" alt="sq-sample17" />
  <figcaption><i class="fas fa-external-link-alt"></i></figcaption>
   <a href="http://www.youtube.com/watch?v=ehH0_UXtQlY" target="_blank"></a>
</figure>
</div>

    <div class="granAn">
    <div class="annW">2016</div>
<figure class="snip1566 hover"><img src="img/ann4.jpg" alt="sq-sample17" />
  <figcaption><i class="fas fa-external-link-alt"></i></figcaption>
   <a href="http://www.youtube.com/watch?v=no1v1-2HZ6g" target="_blank"></a>
</figure>
</div>

    <div class="granAn">
    <div class="annW">2015</div>
<figure class="snip1566 hover"><img src="img/ann5.jpg" alt="sq-sample17" />
  <figcaption><i class="fas fa-external-link-alt"></i></figcaption>
  <a href="http://www.youtube.com/watch?v=Qji5GMu11qs" target="_blank"></a>
</figure>
</div>

    <div class="granAn">
    <div class="annW">2014</div>
<figure class="snip1566 hover"><img src="img/ann6.jpg" alt="sq-sample17" />
  <figcaption><i class="fas fa-external-link-alt"></i></figcaption>
   <a href="http://www.youtube.com/watch?v=m8ACe_PKx14" target="_blank"></a>
</figure>
</div>

    <div class="granAn">
    <div class="annW">2013</div>
<figure class="snip1566 hover"><img src="img/ann7.jpg" alt="sq-sample17" />
  <figcaption><i class="fas fa-external-link-alt"></i></figcaption>
   <a href="http://www.youtube.com/watch?v=38M7XGMBo0g" target="_blank"></a>
</figure>
</div>
    <div class="granAn">
    <div class="annW">2012</div>
<figure class="snip1566 hover"><img src="img/ann8.jpg" alt="sq-sample17" />
  <figcaption><i class="fas fa-external-link-alt"></i></figcaption>
   <a href="http://www.youtube.com/watch?v=mG2wrPnD6Oo" target="_blank"></a>
</figure>
</div>
    <div class="granAn">
    <div class="annW">2011</div>
<figure class="snip1566 hover"><img src="img/ann9.jpg" alt="sq-sample17" />
  <figcaption><i class="fas fa-external-link-alt"></i></figcaption>
   <a href="http://www.youtube.com/watch?v=7GELpb-1JtU" target="_blank"></a>
</figure>
</div>

    <div class="granAn">
        <div class="annW">2010</div>
<figure class="snip1566 hover"><img src="img/ann10.jpg" alt="sq-sample17" />
  <figcaption><i class="fas fa-external-link-alt"></i></figcaption>
   <a href="http://www.youtube.com/watch?v=R8wtwJYwNUw" target="_blank"></a>
</figure>
</div>

</div>  


 <div id="icOtros" class="dejarEsp">
             <a href="#ini"><i id="iconoInt2Otros" class="fas fa-arrow-alt-circle-up fa-3x"></i></a>
           </div>
 
 

<div id="franja">
   
</div>

 <?php 
  include "footer.php";
  ?>  

    
    <script src= "https://code.jquery.com/jquery-3.3.1.min.js"></script>
    <script src= "js/jsWinners.js?ver=1.2"></script>
  
        
  
</body>
</html>