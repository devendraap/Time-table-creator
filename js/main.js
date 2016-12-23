
function updateA1(){
        
    $(".A1").html($(".A1T").val());
    
    if($(".A1S").val() === "A1 + TA1 + TAA1" && ($(".A1T").val() != "")){
        $(".TAA1").html($(".A1T").val());
        $(".L11T").fadeOut();
    }else{
        $(".TAA1").html("");
        $(".L11T").fadeIn();
        $(".L11").html($(".L11T").val());
    }
    if(($(".A1S").val() === "A1 + TA1" || $(".A1S").val() === "A1 + TA1 + TAA1" )&& ($(".A1T").val() != "")){
        $(".TA1").html($(".A1T").val());
        $(".L27T").fadeOut();
    }else{
        $(".TA1").html("");
        $(".L27T").fadeIn();
        $(".L27").html($(".L27T").val());
    }
    
    if($(".A1T").val() === ""){
        $(".L1T").fadeIn();
        $(".L14T").fadeIn();
    }else{
        $(".L1T").fadeOut();
        $(".L14T").fadeOut();        
    }
};

function updateB1(){
        
    $(".B1").html($(".B1T").val());
    
    
    if($(".B1S").val() === "B1 + TB1"  && $(".B1T").val() != ""){
        $(".TB1").html($(".B1T").val());
        $(".L4T").fadeOut();
    }else{
        $(".TB1").html("");
        $(".L4T").fadeIn();
        $(".L4").html($(".L4T").val());
    }
    if($(".B1T").val() === ""){
        $(".L7T").fadeIn();
        $(".L20T").fadeIn();
    }else{
        $(".L7T").fadeOut();
        $(".L20T").fadeOut();
    }
};

function updateC1(){
    
    $(".C1").html($(".C1T").val());
    if($(".C1S").val() === "C1 + TC1 + TCC1" && $(".C1T").val() != ""){
        $(".TCC1").html($(".C1T").val());
        $(".L23T").fadeOut();

    }else{
        $(".TCC1").html("");
        $(".L23T").fadeIn();
        $(".L23").html($(".L23T").val());
    }
    
    if(($(".C1S").val() === "C1 + TC1" || $(".C1S").val() === "C1 + TC1 + TCC1") && $(".C1T").val() != ""){
        $(".TC1").html($(".C1T").val());
        $(".L10T").fadeOut();

    }else{
        $(".TC1").html("");
        $(".L10T").fadeIn();
        $(".L10").html($(".L10T").val());
    }
    if($(".C1T").val() === ""){
        $(".L13T").fadeIn();
        $(".L26T").fadeIn();
    }else{
        $(".L13T").fadeOut();
        $(".L26T").fadeOut();
    }
};

function updateD1(){
        
    $(".D1").html($(".D1T").val());
        
    
    if($(".D1S").val() == "D1 + TD1"  && $(".D1T").val() != ""){
        $(".TD1").html($(".D1T").val());
        $(".L29T").fadeOut();
    }else{
        $(".TD1").html("");
        $(".L29T").fadeIn();
        $(".L29").html($(".L29T").val());
    }
    if($(".D1T").val() == ""){
        $(".L3T").fadeIn();
        $(".L19T").fadeIn();
    }else{
        $(".L3T").fadeOut();
        $(".L19T").fadeOut();
    }
};

function updateE1(){
        
    $(".E1").html($(".E1T").val());
        
    if($(".E1S").val() == "E1 + TE1"  && $(".E1T").val() != ""){
        $(".TE1").html($(".E1T").val());
        $(".L22T").fadeOut();
    }else{
        $(".TE1").html("");
        $(".L22T").fadeIn();
        $(".L22").html($(".L22T").val());
    }
    if($(".E1T").val() == ""){
        $(".L9T").fadeIn();
        $(".L25T").fadeIn();
    }else{
        $(".L9T").fadeOut();
        $(".L25T").fadeOut();

    }
};

function updateF1(){
    $(".F1").html($(".F1T").val());    
    
    if($(".F1S").val() == "F1 + TF1"  && $(".F1T").val() != ""){
        $(".TF1").html($(".F1T").val());
        $(".L28T").fadeOut();
    }else{
        $(".TF1").html("");
        $(".L28T").fadeIn();
        $(".L28").html($(".L28T").val());
    }
    if($(".F1T").val() === ""){
        $(".L2T").fadeIn();
        $(".L15T").fadeIn();
    }else{
        $(".L2T").fadeOut();
        $(".L15T").fadeOut();
    }
};

function updateG1(){
        
    $(".G1").html($(".G1T").val());
    

    if($(".G1S").val() == "G1 + TG1"  && $(".G1T").val() != ""){
        $(".TG1").html($(".G1T").val());
        $(".L5T").fadeOut();
    }else{
        $(".TG1").html("");
        $(".L5T").fadeIn();
        $(".L5").html($(".L5T").val());
    }
    if($(".G1T").val() == ""){
        $(".L8T").fadeIn();
        $(".L21T").fadeIn();
    }else{
        $(".L8T").fadeOut();
        $(".L21T").fadeOut();
    }
};

function updateA2(){
        
    $(".A2").html($(".A2T").val());
    if($(".A2S").val() == "A2 + TA2 + TAA2" && $(".A2T").val() != ""){
        $(".TAA2").html($(".A2T").val());
        $(".L41T").fadeOut();
    }else{
        $(".TAA2").html("");
        $(".L41T").fadeIn();
        $(".L41").html($(".L41T").val());
    }
    
    if(($(".A2S").val() == "A2 + TA2" || $(".A2S").val() == "A2 + TA2 + TAA2") && $(".A2T").val() != ""){
        $(".TA2").html($(".A2T").val());
        $(".L57T").fadeOut();
    }else{
        $(".TA2").html("");
        $(".L57T").fadeIn();
        $(".L57").html($(".L57T").val());
    }
    if($(".A2T").val() == "" ){
        $(".L31T").fadeIn();
        $(".L44T").fadeIn();
    }else{
        $(".L31T").fadeOut();
        $(".L44T").fadeOut();
    }
};

function updateB2(){
        
    $(".B2").html($(".B2T").val());
    if($(".B2S").val() == "B2 + TB2 + TBB2" && $(".B2T").val() != ""){
        $(".TBB2").html($(".B2T").val());
        $(".L47T").fadeOut();
    }else{
        $(".TBB2").html("");
        $(".L47T").fadeIn();
        $(".L47").html($(".L47T").val());
    }

    if(($(".B2S").val() == "B2 + TB2" || $(".B2S").val() == "B2 + TB2 + TBB2" ) && $(".B2T").val() != ""){
        $(".TB2").html($(".B2T").val());
        $(".L34T").fadeOut();
    }else{
        $(".TB2").html("");
        $(".L34T").fadeIn();
        $(".L34").html($(".L34T").val());
    }
    if($(".B2T").val() == ""){
        $(".L37T").fadeIn();
        $(".L50T").fadeIn();
    }else{
       $(".L37T").fadeOut();
       $(".L50T").fadeOut();
    }
};

function updateC2(){
        
    $(".C2").html($(".C2T").val());
    if(($(".C2S").val() == "C2 + TC2 + TCC2"  ) && $(".C2T").val() != ""){
        $(".TCC2").html($(".C2T").val());
        $(".L53T").fadeOut();
    }else{
        $(".TCC2").html("");
        $(".L53T").fadeIn();
        $(".L53").html($(".L53T").val());
    }

    if(($(".C2S").val() == "C2 + TC2" || $(".C2S").val() == "C2 + TC2 + TCC2"  ) && $(".C2T").val() != ""){
        $(".TC2").html($(".C2T").val());
        $(".L40T").fadeOut();
    }else{
        $(".TC2").html("");
        $(".L40T").fadeIn();
        $(".L40").html($(".L40T").val());
    }
    if($(".C2T").val() == ""){
        $(".L43T").fadeIn();
        $(".L56T").fadeIn();
    }else{
        $(".L43T").fadeOut();
        $(".L56T").fadeOut();
    }
};

function updateD2(){
        
    $(".D2").html($(".D2T").val());
    if(($(".D2S").val() == "D2 + TD2 + TDD2" ) && $(".D2T").val() != ""){
        $(".TDD2").html($(".D2T").val());
        $(".L59T").fadeOut();
    }else{
        $(".TDD2").html("");
        $(".L59T").fadeIn();
        $(".L59").html($(".L59T").val());
    }
    
    if(($(".D2S").val() == "D2 + TD2" || $(".D2S").val() == "D2 + TD2 + TDD2" ) && $(".D2T").val() != ""){
        $(".TD2").html($(".D2T").val());
        $(".L46T").fadeOut();
    }else{
        $(".TD2").html("");
        $(".L46T").fadeIn();
        $(".L46").html($(".L46T").val());
    }
    if($(".D2T").val() == ""){
        
        $(".L49T").fadeIn();
        $(".L33T").fadeIn();
    }else{
        $(".L49T").fadeOut();
        $(".L33T").fadeOut();
    }
};

function updateE2(){
        
    $(".E2").html($(".E2T").val());

    if($(".E2S").val() == "E2 + TE2"  && $(".E2T").val() != ""){
        $(".TE2").html($(".E2T").val());
        $(".L52T").fadeOut();
    }else{
        $(".TE2").html("");
        $(".L52T").fadeIn();
        $(".L52").html($(".L52T").val());
    }
    if($(".E2T").val() == ""){
        $(".L55T").fadeIn();
        $(".L39T").fadeIn();
    }else{
        $(".L55T").fadeOut();
        $(".L39T").fadeOut();
    }
};

function updateF2(){
        
    $(".F2").html($(".F2T").val());
    
    if($(".F2S").val() == "F2 + TF2"  && $(".F2T").val() != ""){
        $(".TF2").html($(".F2T").val());
        $(".L58T").fadeOut();
    }else{
        $(".TF2").html("");
        $(".L58T").fadeIn();
        $(".L58").html($(".L58T").val());
    }
    if($(".F2T").val() == ""){
        $(".L32T").fadeIn();
        $(".L45T").fadeIn();
    }else{
        $(".L32T").fadeOut();
        $(".L45T").fadeOut();
    }
};

function updateG2(){
        
    $(".G2").html($(".G2T").val());
    
    if($(".G2S").val() == "G2 + TG2"  && $(".G2T").val() != ""){
        $(".TG2").html($(".G2T").val());
        $(".L35T").fadeOut();
    }else{
        $(".TG2").html("");
        $(".L35T").fadeIn();
        $(".L35").html($(".L35").val());
    }
    if($(".G2T").val() == ""){
        $(".L38T").fadeIn();
        $(".L51T").fadeIn();
    }else{
        $(".L38T").fadeOut();
        $(".L51T").fadeOut();
    }
};
$(".L1T").keyup(function(){ $(".L1").html($(".L1T").val());});
$(".L2T").keyup(function(){ $(".L2").html($(".L2T").val());});
$(".L3T").keyup(function(){ $(".L3").html($(".L3T").val());});
$(".L4T").keyup(function(){ $(".L4").html($(".L4T").val());});
$(".L5T").keyup(function(){ $(".L5").html($(".L5T").val());});
$(".L6T").keyup(function(){ $(".L6").html($(".L6T").val());});
$(".L7T").keyup(function(){ $(".L7").html($(".L7T").val());});
$(".L8T").keyup(function(){ $(".L8").html($(".L8T").val());});
$(".L9T").keyup(function(){ $(".L9").html($(".L9T").val());});
$(".L10T").keyup(function(){ $(".L10").html($(".L10T").val());});
$(".L11T").keyup(function(){ $(".L11").html($(".L11T").val());});
$(".L12T").keyup(function(){ $(".L12").html($(".L12T").val());});
$(".L13T").keyup(function(){ $(".L13").html($(".L13T").val());});
$(".L14T").keyup(function(){ $(".L14").html($(".L14T").val());});
$(".L15T").keyup(function(){ $(".L15").html($(".L15T").val());});
$(".L16T").keyup(function(){ $(".L16").html($(".L16T").val());});
$(".L17T").keyup(function(){ $(".L17").html($(".L17T").val());});
$(".L18T").keyup(function(){ $(".L18").html($(".L18T").val());});
$(".L19T").keyup(function(){ $(".L19").html($(".L19T").val());});
$(".L20T").keyup(function(){ $(".L20").html($(".L20T").val());});
$(".L21T").keyup(function(){ $(".L21").html($(".L21T").val());});
$(".L22T").keyup(function(){ $(".L22").html($(".L22T").val());});
$(".L23T").keyup(function(){ $(".L23").html($(".L23T").val());});
$(".L24T").keyup(function(){ $(".L24").html($(".L24T").val());});
$(".L25T").keyup(function(){ $(".L25").html($(".L25T").val());});
$(".L26T").keyup(function(){ $(".L26").html($(".L26T").val());});
$(".L27T").keyup(function(){ $(".L27").html($(".L27T").val());});
$(".L28T").keyup(function(){ $(".L28").html($(".L28T").val());});
$(".L29T").keyup(function(){ $(".L29").html($(".L29T").val());});
$(".L30T").keyup(function(){ $(".L30").html($(".L30T").val());});
$(".L31T").keyup(function(){ $(".L31").html($(".L31T").val());});
$(".L32T").keyup(function(){ $(".L32").html($(".L32T").val());});
$(".L33T").keyup(function(){ $(".L33").html($(".L33T").val());});
$(".L34T").keyup(function(){ $(".L34").html($(".L34T").val());});
$(".L35T").keyup(function(){ $(".L35").html($(".L35T").val());});
$(".L36T").keyup(function(){ $(".L36").html($(".L36T").val());});
$(".L37T").keyup(function(){ $(".L37").html($(".L37T").val());});
$(".L38T").keyup(function(){ $(".L38").html($(".L38T").val());});
$(".L39T").keyup(function(){ $(".L39").html($(".L39T").val());});
$(".L39T").keyup(function(){ $(".L39").html($(".L39T").val());});
$(".L40T").keyup(function(){ $(".L40").html($(".L40T").val());});
$(".L41T").keyup(function(){ $(".L41").html($(".L41T").val());});
$(".L42T").keyup(function(){ $(".L42").html($(".L42T").val());});
$(".L43T").keyup(function(){ $(".L43").html($(".L43T").val());});
$(".L44T").keyup(function(){ $(".L44").html($(".L44T").val());});
$(".L45T").keyup(function(){ $(".L45").html($(".L45T").val());});
$(".L46T").keyup(function(){ $(".L46").html($(".L46T").val());});
$(".L47T").keyup(function(){ $(".L47").html($(".L47T").val());});
$(".L48T").keyup(function(){ $(".L48").html($(".L48T").val());});
$(".L49T").keyup(function(){ $(".L49").html($(".L49T").val());});
$(".L50T").keyup(function(){ $(".L50").html($(".L50T").val());});
$(".L51T").keyup(function(){ $(".L51").html($(".L51T").val());});
$(".L52T").keyup(function(){ $(".L52").html($(".L52T").val());});
$(".L53T").keyup(function(){ $(".L53").html($(".L53T").val());});
$(".L54T").keyup(function(){ $(".L54").html($(".L54T").val());});
$(".L55T").keyup(function(){ $(".L55").html($(".L55T").val());});
$(".L56T").keyup(function(){ $(".L56").html($(".L56T").val());});
$(".L57T").keyup(function(){ $(".L57").html($(".L57T").val());});
$(".L58T").keyup(function(){ $(".L58").html($(".L58T").val());});
$(".L59T").keyup(function(){ $(".L59").html($(".L59T").val());});
$(".L60T").keyup(function(){ $(".L60").html($(".L60T").val());});




$(".A1S").change(function(){updateA1();});
$(".A2S").change(function(){updateA2();});
$(".B1S").change(function(){updateB1();});
$(".B2S").change(function(){updateB2();});
$(".C1S").change(function(){updateC1();});
$(".C2S").change(function(){updateC2();});
$(".D1S").change(function(){updateD1();});
$(".D2S").change(function(){updateD2();});
$(".E1S").change(function(){updateE1();});
$(".E2S").change(function(){updateE2();});
$(".F1S").change(function(){updateF1();});
$(".F2S").change(function(){updateF2();});
$(".G1S").change(function(){updateG1();});
$(".G2S").change(function(){updateG2();});


$(".A1T").keyup(function(){updateA1();});
$(".A2T").keyup(function(){updateA2();});
$(".B1T").keyup(function(){updateB1();});
$(".B2T").keyup(function(){updateB2();});
$(".C1T").keyup(function(){updateC1();});
$(".C2T").keyup(function(){updateC2();});
$(".D1T").keyup(function(){updateD1();});
$(".D2T").keyup(function(){updateD2();});
$(".E1T").keyup(function(){updateE1();});
$(".E2T").keyup(function(){updateE2();});
$(".F1T").keyup(function(){updateF1();});
$(".F2T").keyup(function(){updateF2();});
$(".G1T").keyup(function(){updateG1();});
$(".G2T").keyup(function(){updateG2();});


function check(){
    if($(".L1T").val() !== "" || $(".L14T").val() !== ""){
        $(".A1T").hide(); $(".A1S").hide();
    }else{
        $(".A1T").show(); $(".A1S").show();
    };
    if($(".L11T").val() !== "" || $(".L27T").val() !== "" ){
        $(".TAA1O").hide(); 
    }else{
        $(".TAA1O").show();
    };
    if($(".L27T").val() !== "" ){
        $(".TA1O").hide();
    }else{
        $(".TA1O").show();
    };
    
    if($(".L7T").val() !== "" || $(".L20T").val() !== ""){
        $(".B1T").hide(); $(".B1S").hide();
    }else{
        $(".B1T").show(); $(".B1S").show();
    };
    if($(".L4T").val() !== "" ){
        $(".TB1O").hide();
    }else{
        $(".TB1O").show();
    };
    
    
    if($(".L13T").val() !== "" || $(".L26T").val() !== ""){
        $(".C1T").hide(); $(".C1S").hide();
    }else{
        $(".C1T").show(); $(".C1S").show();
    };
    if($(".L10T").val() !== "" || $(".L23T").val() !== ""){
        $(".TCC1O").hide();
    }else{
        $(".TCC1O").show();
    };
    if($(".L10T").val() !== "" ){
        $(".TC1O").hide();
    }else{
        $(".TC1O").show();
    };
    
    if($(".L19T").val() !== "" || $(".L3T").val() !== ""){
        $(".D1T").hide(); $(".D1S").hide();
    }else{
        $(".D1T").show(); $(".D1S").show();
    };
    if($(".L29T").val() !== ""){
        $(".TD1O").hide();
    }else{
        $(".TD1O").show();
    };
    
    
    if($(".L9T").val() !== "" || $(".L25T").val() !== ""){
        $(".E1T").hide(); $(".E1S").hide();
    }else{
        $(".E1T").show(); $(".E1S").show();
    };
    if($(".L22T").val() !== ""){
        $(".TE1O").hide();
    }else{
        $(".TE1O").show();
    };
    
    if($(".L2T").val() !== ""){
        $(".F1T").hide(); $(".F1S").hide();
    }else{
        $(".F1T").show(); $(".F1S").show();
    };
    if($(".L28T").val() !== ""){
        $(".TF1O").hide();
    }else{
        $(".TF1O").show();
    };
    
    if($(".L8T").val() !== "" || $(".L21T").val() !== ""){
        $(".G1T").hide(); $(".G1S").hide();
    }else{
        $(".G1T").show(); $(".G1S").show();
    };
    if($(".L5T").val() !== ""){
        $(".TG1O").hide();
    }else{
        $(".TG1O").show();
    };
    
    
    
    
    
    
    if($(".L31T").val() !== "" || $(".L44T").val() !== ""){
        $(".A2T").hide(); $(".A2S").hide();
    }else{
        $(".A2T").show(); $(".A2S").show();
    };
    if($(".L57T").val() !== "" || $(".L41T").val() !== "" ){
        $(".TAA2O").hide(); 
    }else{
        $(".TAA2O").show();
    };
    if($(".L57T").val() !== "" ){
        $(".TA2O").hide();
    }else{
        $(".TA2O").show();
    };
    
     if($(".L37T").val() !== "" || $(".L50T").val() !== ""){
        $(".B2T").hide(); $(".B2S").hide();
    }else{
        $(".B2T").show(); $(".B2S").show();
    };
    if($(".L34T").val() !== "" || $(".L47T").val() !== "" ){
        $(".TBB2O").hide(); 
    }else{
        $(".TBB2O").show();
    };
    if($(".L34T").val() !== "" ){
        $(".TB2O").hide();
    }else{
        $(".TB2O").show();
    };
    
    
    if($(".L43T").val() !== "" || $(".L56T").val() !== ""){
        $(".C2T").hide(); $(".C2S").hide();
    }else{
        $(".C2T").show(); $(".C2S").show();
    };
    if($(".L40T").val() !== "" ){
        $(".TC2O").hide();
    }else{
        $(".TC2O").show();
    };
    if($(".L40T").val() !== "" || $(".L53T").val() !== "" ){
        $(".TCC2O").hide(); 
    }else{
        $(".TCC2O").show();
    };
    
    
    if($(".L33T").val() !== "" || $(".L49T").val() !== ""){
        $(".D2T").hide(); $(".D2S").hide();
    }else{
        $(".D2T").show(); $(".D2S").show();
    };
    if($(".L46T").val() !== "" || $(".L59T").val() !== "" ){
        $(".TDD2O").hide(); 
    }else{
        $(".TDD2O").show();
    };
    if($(".L46T").val() !== "" ){
        $(".TD2O").hide();
    }else{
        $(".TD2O").show();
    };
    
    if($(".L39T").val() !== "" || $(".L55T").val() !== ""){
        $(".E2T").hide(); $(".E2S").hide();
    }else{
        $(".E2T").show(); $(".E2S").show();
    };
    if($(".L52T").val() !== "" ){
        $(".TE2O").hide(); 
    }else{
        $(".TE2O").show();
    };
    
    if($(".L32T").val() !== "" || $(".L45T").val() !== ""){
        $(".F2T").hide(); $(".F2S").hide();
    }else{
        $(".F2T").show(); $(".F2S").show();
    };
    if($(".L58T").val() !== "" ){
        $(".TF2O").hide(); 
    }else{
        $(".TF2O").show();
    };
    
    if($(".L38T").val() !== "" || $(".L51T").val() !== ""){
        $(".G2T").hide(); $(".G2S").hide();
    }else{
        $(".G2T").show(); $(".G2S").show();
    };
    if($(".L35T").val() !== "" ){
        $(".TG2O").hide(); 
    }else{
        $(".TG2O").show();
    };
    
    if($(".L1").html() === ""){ $(".L1").removeClass("selected").html("A1 / L1");}
    else if($(".L1").html() !== "A1 / L1"){ $(".L1").addClass("selected"); };
    
    if($(".L2").html() === ""){ $(".L2").removeClass("selected").html("F1 / L2");}
    else if($(".L2").html() !== "F1 / L2"){ $(".L2").addClass("selected"); };
    
    if($(".L3").html() === ""){ $(".L3").removeClass("selected").html("D1 / L3");}
    else if($(".L3").html() !== "D1 / L3"){ $(".L3").addClass("selected"); };
    
    if($(".L4").html() === ""){ $(".L4").removeClass("selected").html("TB1 / L4");}
    else if($(".L4").html() !== "TB1 / L4"){ $(".L4").addClass("selected"); };
    
    if($(".L5").html() === ""){ $(".L5").removeClass("selected").html("TG1 / L5");}
    else if($(".L5").html() !== "TG1 / L5"){ $(".L5").addClass("selected"); };
    
    if($(".L6").html() === ""){ $(".L6").removeClass("selected").html("L6");}
    else if($(".L6").html() !== "L6"){ $(".L6").addClass("selected"); };
    
    if($(".L7").html() === ""){ $(".L7").removeClass("selected").html("B1 / L7");}
    else if($(".L7").html() !== "B1 / L7"){ $(".L7").addClass("selected"); };
    
    if($(".L8").html() === ""){ $(".L8").removeClass("selected").html("G1 / L8");}
    else if($(".L8").html() !== "G1 / L8"){ $(".L8").addClass("selected"); };
    
    if($(".L9").html() === ""){ $(".L9").removeClass("selected").html("E1 / L9");}
    else if($(".L9").html() !== "E1 / L9"){ $(".L9").addClass("selected"); };
    
    if($(".L10").html() === ""){ $(".L10").removeClass("selected").html("TC1 / L10");}
    else if($(".L10").html() !=="TC1 / L10"){ $(".L10").addClass("selected"); };
    
    if($(".L11").html() === ""){ $(".L11").removeClass("selected").html("TAA1 / L11");}
    else if($(".L11").html() !=="TAA1 / L11"){ $(".L11").addClass("selected"); };
    
    if($(".L12").html() === ""){ $(".L12").removeClass("selected").html("L12");}
    else if($(".L12").html() !=="L12"){ $(".L12").addClass("selected"); };
    
    if($(".L13").html() === ""){ $(".L13").removeClass("selected").html("C1 / L13");}
    else if($(".L13").html() !=="C1 / L13"){ $(".L13").addClass("selected"); };
    
    if($(".L14").html() === ""){ $(".L14").removeClass("selected").html("A1 / L14");}
    else if($(".L14").html() !=="A1 / L14"){ $(".L14").addClass("selected"); };
    
    if($(".L15").html() === ""){ $(".L15").removeClass("selected").html("F1 / L15");}
    else if($(".L15").html() !=="F1 / L15"){ $(".L15").addClass("selected"); };
    
    if($(".L19").html() === ""){ $(".L19").removeClass("selected").html("D1 / L19");}
    else if($(".L19").html() !=="D1 / L19"){ $(".L19").addClass("selected"); };
    
    if($(".L20").html() === ""){ $(".L20").removeClass("selected").html("B1 / L20");}
    else if($(".L20").html() !=="B1 / L20"){ $(".L20").addClass("selected"); };
    
    if($(".L21").html() === ""){ $(".L21").removeClass("selected").html("G1 / L21");}
    else if($(".L21").html() !=="G1 / L21"){ $(".L21").addClass("selected"); };
    
    if($(".L22").html() === ""){ $(".L22").removeClass("selected").html("TE1 / L22");}
    else if($(".L22").html() !=="TE1 / L22"){ $(".L22").addClass("selected"); };
    
    if($(".L23").html() === ""){ $(".L23").removeClass("selected").html("TCC1 / L23");}
    else if($(".L23").html() !=="TCC1 / L23"){ $(".L23").addClass("selected"); };
    
    if($(".L24").html() === ""){ $(".L24").removeClass("selected").html("L24");}
    else if($(".L24").html() !=="L24"){ $(".L24").addClass("selected"); };
    
    if($(".L25").html() === ""){ $(".L25").removeClass("selected").html("E1 / L25");}
    else if($(".L25").html() !=="E1 / L25"){ $(".L25").addClass("selected"); };
    
    if($(".L26").html() === ""){ $(".L26").removeClass("selected").html("C1 / L26");}
    else if($(".L26").html() !=="C1 / L26"){ $(".L26").addClass("selected"); };
    
    if($(".L27").html() === ""){ $(".L27").removeClass("selected").html("TA1 / L27");}
    else if($(".L27").html() !=="TA1 / L27"){ $(".L27").addClass("selected"); };
    
    if($(".L28").html() === ""){ $(".L28").removeClass("selected").html("TF1 / L28");}
    else if($(".L28").html() !=="TF1 / L28"){ $(".L28").addClass("selected"); };
    
    if($(".L29").html() === ""){ $(".L29").removeClass("selected").html("TD1 / L29");}
    else if($(".L29").html() !=="TD1 / L29"){ $(".L29").addClass("selected"); };
    
    if($(".L30").html() === ""){ $(".L30").removeClass("selected").html("L30");}
    else if($(".L30").html() !=="L30"){ $(".L30").addClass("selected"); };
    
    if($(".L31").html() === ""){ $(".L31").removeClass("selected").html("A2 / L31");}
    else if($(".L31").html() !=="A2 / L31"){ $(".L31").addClass("selected"); };
    
    if($(".L32").html() === ""){ $(".L32").removeClass("selected").html("F2 / L32");}
    else if($(".L32").html() !=="F2 / L32"){ $(".L32").addClass("selected"); };
    
    if($(".L33").html() === ""){ $(".L33").removeClass("selected").html("D2 / L33");}
    else if($(".L33").html() !=="D2 / L33"){ $(".L33").addClass("selected"); };
    
    if($(".L34").html() === ""){ $(".L34").removeClass("selected").html("TB2 / L34");}
    else if($(".L34").html() !=="TB2 / L34"){ $(".L34").addClass("selected"); };
    
    if($(".L35").html() === ""){ $(".L35").removeClass("selected").html("TG2 / L35");}
    else if($(".L35").html() !=="TG2 / L35"){ $(".L35").addClass("selected"); };
    
    if($(".L36").html() === ""){ $(".L36").removeClass("selected").html("L36");}
    else if($(".L36").html() !=="L36"){ $(".L36").addClass("selected"); };
    
    if($(".L37").html() === ""){ $(".L37").removeClass("selected").html("B2 / L37");}
    else if($(".L37").html() !=="B2 / L37"){ $(".L37").addClass("selected"); };
    
    
    if($(".L37").html() === ""){ $(".L37").removeClass("selected").html("B2 / L37");}
    else if($(".L37").html() !=="B2 / L37"){ $(".L37").addClass("selected"); };
    
    if($(".L38").html() === ""){ $(".L38").removeClass("selected").html("G2 / L38");}
    else if($(".L38").html() !=="G2 / L38"){ $(".L38").addClass("selected"); };
    
    if($(".L39").html() === ""){ $(".L39").removeClass("selected").html("E2 / L39");}
    else if($(".L39").html() !=="E2 / L39"){ $(".L39").addClass("selected"); };
    
    if($(".L40").html() === ""){ $(".L40").removeClass("selected").html("TC2 / L40");}
    else if($(".L40").html() !=="TC2 / L40"){ $(".L40").addClass("selected"); };
    
    if($(".L41").html() === ""){ $(".L41").removeClass("selected").html("TAA2 / L41");}
    else if($(".L41").html() !=="TAA2 / L41"){ $(".L41").addClass("selected"); };
    
    if($(".L42").html() === ""){ $(".L42").removeClass("selected").html("L42");}
    else if($(".L42").html() !=="L42"){ $(".L42").addClass("selected"); };
    
    if($(".L43").html() === ""){ $(".L43").removeClass("selected").html("C2 / L43");}
    else if($(".L43").html() !=="C2 / L43"){ $(".L43").addClass("selected"); };
    
    if($(".L44").html() === ""){ $(".L44").removeClass("selected").html("A2 / L44");}
    else if($(".L44").html() !=="A2 / L44"){ $(".L44").addClass("selected"); };
    
    if($(".L45").html() === ""){ $(".L45").removeClass("selected").html("F2 / L45");}
    else if($(".L45").html() !=="F2 / L45"){ $(".L45").addClass("selected"); };
    
    if($(".L46").html() === ""){ $(".L46").removeClass("selected").html("TD2 / L46");}
    else if($(".L46").html() !=="TD2 / L46"){ $(".L46").addClass("selected"); };
    
    if($(".L47").html() === ""){ $(".L47").removeClass("selected").html("TBB2 / L47");}
    else if($(".L47").html() !=="TBB2 / L47"){ $(".L47").addClass("selected"); };
    
    if($(".L48").html() === ""){ $(".L48").removeClass("selected").html("L48");}
    else if($(".L48").html() !=="L48"){ $(".L48").addClass("selected"); };
    
    if($(".L49").html() === ""){ $(".L49").removeClass("selected").html("D2 / L49");}
    else if($(".L49").html() !=="D2 / L49"){ $(".L49").addClass("selected"); };
    
    if($(".L50").html() === ""){ $(".L50").removeClass("selected").html("B2 / L50");}
    else if($(".L50").html() !=="B2 / L50"){ $(".L50").addClass("selected"); };
    

    
    if($(".L51").html() === ""){ $(".L51").removeClass("selected").html("G2 / L51");}
    else if($(".L51").html() !=="G2 / L51"){ $(".L51").addClass("selected"); };
    
    if($(".L52").html() === ""){ $(".L52").removeClass("selected").html("TE2 / L52");}
    else if($(".L52").html() !=="TE2 / L52"){ $(".L52").addClass("selected"); };
    
    if($(".L53").html() === ""){ $(".L53").removeClass("selected").html("TCC2 / L53");}
    else if($(".L53").html() !=="TCC2 / L53"){ $(".L53").addClass("selected"); };
    
    if($(".L55").html() === ""){ $(".L55").removeClass("selected").html("E2 / L55");}
    else if($(".L55").html() !=="E2 / L55"){ $(".L55").addClass("selected"); };
    
    
    if($(".L54").html() === ""){ $(".L54").removeClass("selected").html("L54");}
    else if($(".L54").html() !=="L54"){ $(".L54").addClass("selected"); };
    
    if($(".L56").html() === ""){ $(".L56").removeClass("selected").html("C2 / L56");}
    else if($(".L56").html() !=="C2 / L56"){ $(".L56").addClass("selected"); };
    
    if($(".L57").html() === ""){ $(".L57").removeClass("selected").html("TA2 / L57");}
    else if($(".L57").html() !=="TA2 / L57"){ $(".L57").addClass("selected"); };
    
    if($(".L58").html() === ""){ $(".L58").removeClass("selected").html("TF2 / L58");}
    else if($(".L58").html() !=="TF2 / L58"){ $(".L58").addClass("selected"); };
    
    
    
    if($(".L59").html() === ""){ $(".L59").removeClass("selected").html("TDD2 / L59");}
    else if($(".L59").html() !=="TDD2 / L59"){ $(".L59").addClass("selected"); };
    
    if($(".L60").html() === ""){ $(".L60").removeClass("selected").html("L60");}
    else if($(".L60").html() !=="L60"){ $(".L60").addClass("selected"); };
    
    
    sessionStorage.sec1 = $(".sec1").html();
};

$("select").change(function(){
   check(); 
});
$("input").keyup(function(){
   check(); 
});

function myConfirmation() {
    return "You can SAVE the created Time Table.\n Are you sure you want to quit? www.ffcs.ml";
}

window.onbeforeunload = myConfirmation;

$(document).on('click', '.panel-heading span.clickable', function(e){
    var $this = $(this);
	if(!$this.hasClass('panel-collapsed')) {
		$this.parents('.panel').find('.panel-body').slideUp();
		$this.addClass('panel-collapsed');
		$this.find('i').removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
	} else {
		$this.parents('.panel').find('.panel-body').slideDown();
		$this.removeClass('panel-collapsed');
		$this.find('i').removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
	}
})

