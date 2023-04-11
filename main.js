var h1 = document.getElementsByClassName("heading");
for(i=0; i<=2; i++){
h1[i].addEventListener('click', function(e){
	let targetElement=e.target;//h1->html elementobjcet
	let parentDiv=targetElement.parentNode; //div-html elementobject
	let pElements=parentDiv.getElementsByTagName('p');  //html collections
	let pElement=pElements[0]; //array of p
	pElement.classList.toggle('content');
	});
}
