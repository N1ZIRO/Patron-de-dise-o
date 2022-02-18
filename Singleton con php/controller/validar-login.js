
function Validar(){

    var email=document.getElementById('email').value
    var pass=document.getElementById('pass').value
    var v=0;
    if(email!=''){
        v=v+1;
    }
    if(pass!=''){
        v=v+1;
    }
    if(v==2){
        login_ajax(email,pass)
    }
}


function login_ajax(email,pass){
    var datos=[email,pass]
    console.log(datos)
    const XHR = new XMLHttpRequest();
    XHR.open('POST','../model/validar-login.php',true)
    XHR.setRequestHeader('Content-type','application/x-www-form-urlencoded')
    XHR.send('dato='+datos)
    XHR.onreadystatechange =function(){
        if(this.readyState==4 && this.status==200){
            var dato=this.responseText
            document.getElementById('info').innerHTML=dato
        }
    }

}