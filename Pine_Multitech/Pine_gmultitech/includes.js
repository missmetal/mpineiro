function includeCss(path){
    document.write('<link rel="stylesheet" href="'+path+'">');
}

function includeJs(path){
    document.write('<script src="'+path+'"></script>');
}
/*Librerias JS*/
includeJs("js/jquery.js");
includeJs("js/bootstrap.js");
includeJs("js/bootstrap.min.js");

/*Hojas de estilo*/
includeCss("css/styleHomepage.css");
includeCss("css/bootstrap.css");
includeCss("css/bootstrap.min.css");
includeCss("css/font-awesome.min.css");