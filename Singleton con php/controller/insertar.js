function inser(){
    var r = document.getElementById('nombre').value
    console.log(r)
    const XHR = new XMLHttpRequest();
    XHR.open('POST','../model/inser.php',true)
    XHR.setRequestHeader('Content-type','application/x-www-form-urlencoded')
    XHR.send('dato=' + r)
    XHR.onreadystatechange =function(){
        if(this.readyState==4 && this.status==200){
            var datos=this.responseText
            document.getElementById('info').innerHTML=datos
        }
    }

}