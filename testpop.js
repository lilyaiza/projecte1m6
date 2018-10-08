var intents1 = 0;
var intents2 = 0;
var intentstot = 0;


function netejar() {
	   var form = document.getElementById('formRespostes');
      for (var i = 0; i < form.resposta.length; i++) {     
      if (form.resposta[i].checked) {
        form.resposta[i].checked=false;
        document.getElementById("error1").hidden = true;
        document.getElementById("error2").hidden = true;
        document.getElementById("lab_resposta2").style.color = "#0000cc";
        document.getElementById("lab_resposta3").style.color = "#0000cc";

        }
      }
    }
  

  function check() {
    var form = document.getElementById('formRespostes');
    for (var i = 0; i < form.resposta.length; i++) {      
      if (form.resposta[i].checked) {
        var clase = form.resposta[i].getAttribute("class");
        var var_id = form.resposta[i].getAttribute("id");
        if (clase != null && clase == "correcta") {
          //var text = form.resposta[i].getValue();
          document.getElementById("correcta").style.color = "green";
          document.getElementById("correcta1").hidden = false;
          deshabilitar();

        }
        else {
          if (var_id=="resposta2"){
            document.getElementById("lab_resposta2").style.color = "red";
            document.getElementById("error1").hidden = false;
          }
          else if (var_id=="resposta3"){
            document.getElementById("lab_resposta3").style.color = "red";
            document.getElementById("error2").hidden = false;
          }
        }
      }
    }

    intents1+=1;
    intents();
  }

function vaciar() {
  document.getElementById("textarea").value="";

}

function deshabilitar() {
   document.getElementById("netejar_b1").disabled=true;
   document.getElementById("check_b1").disabled=true;
}

function deshabilitar2() {
   document.getElementById("netejar_b2").disabled=true;
   document.getElementById("check_b2").disabled=true;
}


function netejar2() {
  var form = document.getElementById('form_vof');
      for (var i = 0; i < form.vof.length; i++) {     
      if (form.vof[i].checked) {
        form.vof[i].checked=false;
        document.getElementById("error3").hidden = true;
        document.getElementById("vof1").style.color = "#0000cc";

        }
      }

}


function check2() {
  var form = document.getElementById('form_vof');
    for (var i = 0; i < form.vof.length; i++) {      
      if (form.vof[i].checked) {
        var clase = form.vof[i].getAttribute("class");
        var var_id = form.vof[i].getAttribute("id");
        if (clase != null && clase == "correcta") {
          //var text = form.resposta[i].getValue();
          document.getElementById("vof2").style.color = "green";
          document.getElementById("correcta2").hidden = false;
          deshabilitar2();

        }
        else {
            document.getElementById("vof1").style.color = "red";
            document.getElementById("error3").hidden = false;
          }
        }
      }
    

    intents2+=1;
    intents();

}


function mostrartexto() {
    var x = document.getElementById("textarea").value;
    if (x.length>1) {
          document.getElementById('textorespuesta').style.visibility = 'visible';
   }
   else {
    alert("No ha introducido texto");
  }

}


function intents() {
	document.getElementById("intents1").innerHTML = intents1;
  document.getElementById("intents2").innerHTML = intents2;
  document.getElementById("intents").innerHTML = (intents1+intents2);


}




function hasClass(elem, className) {
    return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
