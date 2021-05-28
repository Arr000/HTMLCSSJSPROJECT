
var uppgifter =[];

function addUppgifter(){

    var uppgift ={
    namn: document.getElementById('form_namn').value ,
    epost: document.getElementById('form_email').value,
    telefon: document.getElementById('form_telefonnr').value,
    meddelande: document.getElementById('form_meddelande').value
}

if(uppgift.namn.length >= 3 && uppgift.epost !== "" && uppgift.telefon !== "" && uppgift.meddelande !== ""){
    uppgifter.push(uppgift);
    localStorage.setItem('ID'+new Date().getTime(),JSON.stringify(uppgifter));
}      
}
    document.addEventListener("DOMContentLoaded", ()=>{
    document.getElementById("submitBtn").addEventListener('click', addUppgifter);
});


$(document).ready(function(){
    var burger = document.querySelector('.burger');
    var nav = document.querySelector('.nav-links');
    var navLinks = document.querySelectorAll('.nav-links li');

    $(".showButton").click(function(){
        $(".minakompetenser").fadeToggle();
    });

    if(burger !== null)
    {
        burger.addEventListener('click', () => {

            nav.classList.toggle('nav-active');
    
            navLinks.forEach((link, index) => {
    
                if(link.style.animation){
                link.style.animation = "";
                }else{
                    link.style.animation = `navLinksFade 0.5s ease forwards ${index/7+0.5}s`;
                }
            });
    
            burger.classList.toggle('toggle');
        });   
    }
 });



 $(function formularmanagment(){
    $("felmeddelandenamn").hide();
    $("felmeddelandeepost").hide();
    $("felmeddelandetelefon").hide();
    $("felmeddelandemeddelande").hide();

 var namnLangd =false;
 var felEpost =false;
 var felTelefon = false;
 var felmessage = false;

    $("#form_email").focusout(function(){
       
        kollaEpost();

    }); 


    $("#form_namn").focusout(function(){
       
        kollaNamn();

    }); 

    $("#form_telefonnr").focusout(function(){
       
        kollaTelefon();

    });


    $("#form_meddelande").focusout(function(){
       
        kollaMeddelande();

    }); 

    function kollaMeddelande(){
        var meddelande = $("#form_meddelande").val().length;

        if(meddelande > 0 ){

            $("felmeddelandemeddelande").hide(); 
            felmessage = false;
            
        }else {
        $("#felmeddelandemeddelande").html("Kan inte lämnas tom");
        $("felmeddelandemeddelande").show();
        felmessage = true;
        }
    }

    function kollaTelefon(){

        var mobil = new RegExp(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
        var telefon = new RegExp(/^\(?([0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);

        var telefonnr = $("#form_telefonnr").val();
        if(telefonnr.match(mobil) || telefonnr.match(telefon))
        {
            $("#felmeddelandetelefon").hide();
            felTelefon=false;
        }else{
            $("#felmeddelandetelefon").html("Felaktigt nummer");
            $("#felmeddelandetelefon").show();
            felTelefon = true;
            
        }
    }

    function kollaEpost(){
        var epost = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
        if(epost.test($("#form_email").val())){
            $("#felmeddelandeepost").hide();
            felEpost=false;
        }else{
            $("#felmeddelandeepost").html("Ogitig e-post");
            $("#felmeddelandeepost").show();
            felEpost =true;
           
        }
   }
    function kollaNamn(){
        var namelength = $("#form_namn").val().length;
    
        if(namelength === null || namelength < 3  )
        {
            $("#felmeddelandenamn").html("Minst 3 tecken");   
            $("felmeddelandenamn").show();
            namnLangd =true;
        }
        else{
            $("#felmeddelandenamn").hide();   
            namnLangd=false;   
        }
    }

    $("#formular").submit(function(){
        
        kollaMeddelande();
        kollaTelefon();
        kollaEpost();
        kollaNamn();

        if( felEpost == false && felTelefon == false && felmessage == false && namnLangd == false )
    {  
            return true;
         
        }else{
            
           alert('Du måste fylla i alla*');
           return false;
          
        }

    });




});


$(function portfoliomanagment(){


    var portfoliopage = document.getElementById('portfoliosida');
    if(portfoliopage == null)
    {
        return;
    }
   
    var bilder = document.querySelectorAll('#bilder .bild');
    var nuvarandebild = 0;
    var bildintervall = setInterval(nextBild,1500);
    var spela = true;
    var pausKnapp = document.getElementById('paus');

    function nextBild(){
        bilder[nuvarandebild].className = 'bild';
        nuvarandebild = (nuvarandebild+1)%bilder.length;
        bilder[nuvarandebild].className = 'bild first';
    }
 
    function spelaBild(){
        pausKnapp.innerHTML = 'Stopp';
        spela = true;
        bildintervall = setInterval(nextBild,1500);
    }

    function pausBild(){
        pausKnapp.innerHTML = 'Spela';
        spela = false;
        clearInterval(bildintervall);
    }
    if(pausKnapp !== null){
        pausKnapp.onclick = function(){
            if(spela){
                 pausBild(); 
             }
            else{ 
                spelaBild(); 
            }
        };

    }
});

function initMap(){
    var location = {lat: 59.254626, lng: 15.248319};

    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: location
    }); 
    var marker = new google.maps.Marker({
        position: location, 
        map: map
        
    });
}






 