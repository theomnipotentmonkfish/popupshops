var g;

window.addEventListener("load", function(){
	document.getElementById("generate-string").addEventListener("click", function() {	
		if (!g) g = tracery.createGrammar(grammar);
		document.getElementById("output").innerHTML = g.flatten("#origin#");
	});
})