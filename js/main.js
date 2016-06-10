document.getElementById('nav-toggle').onclick = function() {
    if(document.body.classList.contains('nav-open')){
        
    document.body.classList.remove('nav-open');
    document.body.classList.add('nav-close');
    

    }
    else{
    document.body.classList.add('nav-open');
    document.body.classList.remove('nav-close');
}
	return false;
    
}