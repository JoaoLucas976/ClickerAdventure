//window.alert("Bem vindo ao Clicker Adventure");
//window.alert("Seu objetivo é clicar o máximo que puder")
//window.alert("Nem acredito que perdi meu tempo programando isso :(")

/*
	upxt = Total de upgrades x comprados
	------------------------------------
	upxv = Valor do upgrade x
	------------------------------------
	clicks = total de vezes que o jogador clicou
*/

var multiplier = 1;
var clicks = 0;
var cps = 0;
// Upgrades
var up1t = 0, up1v = 10;
var up2t = 0, up2v = 100;
var up3t = 0, up3v = 10000;
var up4t = 0, up4v = 100000;
var up5t = 0, up5v = 1000000;
var up6t = 0, up6v = 10000000;
var up7t = 0, up7v = 100000000;
var up8t = 0, up8v = 1000000000;
var up9t = 0, up9v = 10000000000;
var up10t = 0, up10v = 100000000000;
// Autoclickers
var aut1t = 0, aut1v = 10;
var aut2t = 0, aut2v = 100;
var aut3t = 0, aut3v = 1000;
var aut4t = 0, aut4v = 10000;
var aut5t = 0, aut5v = 100000;
var aut6t = 0, aut6v = 1000000;
var aut7t = 0, aut7v = 10000000;
var aut8t = 0, aut8v = 100000000;
var aut9t = 0, aut9v = 1000000000;
var aut10t = 0, aut10v = 10000000000;

function initialize(){
	// Recuperando a quantidade de clicks e multiplier
	document.getElementById('total_clicks').innerHTML = parseInt(localStorage.getItem("total_clicks"));
	clicks = parseInt(localStorage.getItem("total_clicks"));
	document.getElementById('cps').innerHTML = parseInt(localStorage.getItem("cps"));
	cps = parseInt(localStorage.getItem("cps"));
	document.getElementById('multiplier').innerHTML = parseInt(localStorage.getItem("multiplier"));
	multiplier = parseInt(localStorage.getItem("multiplier"));

	// Recuperando as quantidades de cada ugprade
    document.getElementById('up1t').innerHTML = parseInt(localStorage.getItem('up1t'));
    up1t = parseInt(localStorage.getItem('up1t'));
    document.getElementById('up2t').innerHTML = parseInt(localStorage.getItem('up2t'));
    up2t = parseInt(localStorage.getItem('up2t'));
    document.getElementById('up3t').innerHTML = parseInt(localStorage.getItem('up3t'));
    up3t = parseInt(localStorage.getItem('up3t'));
    document.getElementById('up4t').innerHTML = parseInt(localStorage.getItem('up4t'));
    up4t = parseInt(localStorage.getItem('up4t'));
    document.getElementById('up5t').innerHTML = parseInt(localStorage.getItem('up5t'));
    up5t = parseInt(localStorage.getItem('up5t'));
    document.getElementById('up6t').innerHTML = parseInt(localStorage.getItem('up6t'));
    up6t = parseInt(localStorage.getItem('up6t'));
    document.getElementById('up7t').innerHTML = parseInt(localStorage.getItem('up7t'));
    up7t = parseInt(localStorage.getItem('up7t'));
    document.getElementById('up8t').innerHTML = parseInt(localStorage.getItem('up8t'));
    up8t = parseInt(localStorage.getItem('up8t'));
    document.getElementById('up9t').innerHTML = parseInt(localStorage.getItem('up9t'));
    up9t = parseInt(localStorage.getItem('up9t'));
    document.getElementById('up10t').innerHTML = parseInt(localStorage.getItem('up10t'));
    up10t = parseInt(localStorage.getItem('up10t'));

    // Recuperando os valores de cada upgrade
    document.getElementById('up1v').innerHTML = parseInt(localStorage.getItem('up1v'));
    up1v = parseInt(localStorage.getItem('up1v'));
    document.getElementById('up2v').innerHTML = parseInt(localStorage.getItem('up2v'));
    up2v = parseInt(localStorage.getItem('up2v'));
    document.getElementById('up3v').innerHTML = parseInt(localStorage.getItem('up3v'));
    up3v = parseInt(localStorage.getItem('up3v'));
    document.getElementById('up4v').innerHTML = parseInt(localStorage.getItem('up4v'));
    up4v = parseInt(localStorage.getItem('up4v'));
    document.getElementById('up5v').innerHTML = parseInt(localStorage.getItem('up5v'));
    up5v = parseInt(localStorage.getItem('up5v'));
    document.getElementById('up6v').innerHTML = parseInt(localStorage.getItem('up6v'));
    up6v = parseInt(localStorage.getItem('up6v'));
    document.getElementById('up7v').innerHTML = parseInt(localStorage.getItem('up7v'));
    up7v = parseInt(localStorage.getItem('up7v'));
    document.getElementById('up8v').innerHTML = parseInt(localStorage.getItem('up8v'));
    up8v = parseInt(localStorage.getItem('up8v'));
    document.getElementById('up9v').innerHTML = parseInt(localStorage.getItem('up9v'));
    up9v = parseInt(localStorage.getItem('up9v'));
    document.getElementById('up10v').innerHTML = parseInt(localStorage.getItem('up10v'));
    up10v = parseInt(localStorage.getItem('up10v'));

    // Recuperando as quantidades de cada autoclicker
    document.getElementById('aut1t').innerHTML = parseInt(localStorage.getItem('aut1t'));
    aut1t = parseInt(localStorage.getItem('aut1t'));
    document.getElementById('aut2t').innerHTML = parseInt(localStorage.getItem('aut2t'));
    aut2t = parseInt(localStorage.getItem('aut2t'));
    document.getElementById('aut3t').innerHTML = parseInt(localStorage.getItem('aut3t'));
    aut3t = parseInt(localStorage.getItem('aut3t'));
    document.getElementById('aut4t').innerHTML = parseInt(localStorage.getItem('aut4t'));
    aut4t = parseInt(localStorage.getItem('aut4t'));
    document.getElementById('aut5t').innerHTML = parseInt(localStorage.getItem('aut5t'));
    aut5t = parseInt(localStorage.getItem('aut5t'));
    document.getElementById('aut6t').innerHTML = parseInt(localStorage.getItem('aut6t'));
    aut6t = parseInt(localStorage.getItem('aut6t'));
    document.getElementById('aut7t').innerHTML = parseInt(localStorage.getItem('aut7t'));
    aut7t = parseInt(localStorage.getItem('aut7t'));
    document.getElementById('aut8t').innerHTML = parseInt(localStorage.getItem('aut8t'));
    aut8t = parseInt(localStorage.getItem('aut8t'));
    document.getElementById('aut9t').innerHTML = parseInt(localStorage.getItem('aut9t'));
    aut9t = parseInt(localStorage.getItem('aut9t'));
    document.getElementById('aut10t').innerHTML = parseInt(localStorage.getItem('aut10t'));
    aut10t = parseInt(localStorage.getItem('aut10t'));

    // Recuperando os valores de cada autoclicker
    document.getElementById('aut1v').innerHTML = parseInt(localStorage.getItem('aut1v'));
    aut1v = parseInt(localStorage.getItem('aut1v'));
    document.getElementById('aut2v').innerHTML = parseInt(localStorage.getItem('aut2v'));
    aut2v = parseInt(localStorage.getItem('aut2v'));
    document.getElementById('aut3v').innerHTML = parseInt(localStorage.getItem('aut3v'));
    aut3v = parseInt(localStorage.getItem('aut3v'));
    document.getElementById('aut4v').innerHTML = parseInt(localStorage.getItem('aut4v'));
    aut4v = parseInt(localStorage.getItem('aut4v'));
    document.getElementById('aut5v').innerHTML = parseInt(localStorage.getItem('aut5v'));
    aut5v = parseInt(localStorage.getItem('aut5v'));
    document.getElementById('aut6v').innerHTML = parseInt(localStorage.getItem('aut6v'));
    aut6v = parseInt(localStorage.getItem('aut6v'));
    document.getElementById('aut7v').innerHTML = parseInt(localStorage.getItem('aut7v'));
    aut7v = parseInt(localStorage.getItem('aut7v'));
    document.getElementById('aut8v').innerHTML = parseInt(localStorage.getItem('aut8v'));
    aut8v = parseInt(localStorage.getItem('aut8v'));
    document.getElementById('aut9v').innerHTML = parseInt(localStorage.getItem('aut9v'));
    aut9v = parseInt(localStorage.getItem('aut9v'));
    document.getElementById('aut10v').innerHTML = parseInt(localStorage.getItem('aut10v'));
    aut10v = parseInt(localStorage.getItem('aut10v'));
}

function update(){
// Definindo as quantidades de cada ugprade
	document.getElementById('up1t').innerHTML = up1t;
	document.getElementById('up2t').innerHTML = up2t;
	document.getElementById('up3t').innerHTML = up3t;
	document.getElementById('up4t').innerHTML = up4t;
	document.getElementById('up5t').innerHTML = up5t;
	document.getElementById('up6t').innerHTML = up6t;
	document.getElementById('up7t').innerHTML = up7t;
	document.getElementById('up8t').innerHTML = up8t;
	document.getElementById('up9t').innerHTML = up9t;
	document.getElementById('up10t').innerHTML = up10t;
// Definindo os valores de cada upgrade
	document.getElementById('up1v').innerHTML = up1v;
	document.getElementById('up2v').innerHTML = up2v;
	document.getElementById('up3v').innerHTML = up3v;
	document.getElementById('up4v').innerHTML = up4v;
	document.getElementById('up5v').innerHTML = up5v;
	document.getElementById('up6v').innerHTML = up6v;
	document.getElementById('up7v').innerHTML = up7v;
	document.getElementById('up8v').innerHTML = up8v;
	document.getElementById('up9v').innerHTML = up9v;
	document.getElementById('up10v').innerHTML = up10v;
// Definindo as quantidades de cada autoclicker
	document.getElementById('aut1t').innerHTML = aut1t;
	document.getElementById('aut2t').innerHTML = aut2t;
	document.getElementById('aut3t').innerHTML = aut3t;	
	document.getElementById('aut4t').innerHTML = aut4t;
	document.getElementById('aut5t').innerHTML = aut5t;
	document.getElementById('aut6t').innerHTML = aut6t;	
	document.getElementById('aut7t').innerHTML = aut7t;
	document.getElementById('aut8t').innerHTML = aut8t;
	document.getElementById('aut9t').innerHTML = aut9t;
	document.getElementById('aut10t').innerHTML = aut10t;	
// Definindo os valores de cada autoclicker
	document.getElementById('aut1v').innerHTML = aut1v;
	document.getElementById('aut2v').innerHTML = aut2v;
	document.getElementById('aut3v').innerHTML = aut3v;
	document.getElementById('aut4v').innerHTML = aut4v;
	document.getElementById('aut5v').innerHTML = aut5v;
	document.getElementById('aut6v').innerHTML = aut6v;
	document.getElementById('aut7v').innerHTML = aut7v;
	document.getElementById('aut8v').innerHTML = aut8v;
	document.getElementById('aut9v').innerHTML = aut9v;
	document.getElementById('aut10v').innerHTML = aut10v;

// Atualizando o numero de cliks, clicks por segundo e o multiplicador
	document.getElementById('total_clicks').innerHTML = clicks;
	document.getElementById('cps').innerHTML = cps;
	document.getElementById('multiplier').innerHTML = multiplier;
	multiplier = (up1t * 1 + up2t * 5 + up3t * 20 + up4t * 100 + up5t * 500 + up6t * 2500 + up7t * 10000 + up8t * 50000 + up9t * 300000 + up10t * 1000000) + 1;
}

function clicker(){
	clicks = clicks + multiplier;
	update();
}

function buy_aut(a){
	if (a == 1){
		if (clicks >= aut1v){
			aut1t = aut1t + 1;
			clicks = clicks - aut1v;
			aut1v = 1.4 * aut1v;
			aut1v = Math.round(aut1v);
			cps = cps + 1;
		} 
	} else if (a == 2) {
		if (clicks >= aut2v){
			aut2t = aut2t + 1;
			clicks = clicks - aut2v;
			aut2v = 1.4 * aut2v;
			aut2v = Math.round(aut2v);
			cps = cps + 3;
		}
	} else if (a == 3){
		if (clicks >= aut3v){
			aut3t = aut3t + 1;
			clicks = clicks - aut3v;
			aut3v = 1.4 * aut3v;
			aut3v = Math.round(aut3v);
			cps = cps + 10;
		}
	} else if (a == 4){
		if (clicks >= aut4v){
			aut4t = aut4t + 1;
			clicks = clicks - aut4v;
			aut4v = 1.4 * aut4v;
			aut4v = Math.round(aut4v);
			cps = cps + 30;
		}
	} else if (a == 5){
		if (clicks >= aut5v){
			aut5t = aut5t + 1;
			clicks = clicks - aut5v;
			aut5v = 1.4 * aut5v;
			aut5v = Math.round(aut5v);
			cps = cps + 80;
		}
	} else if (a == 6){
		if (clicks >= aut6v){
			aut6t = aut6t + 1;
			clicks = clicks - aut6v;
			aut6v = 1.4 * aut6v;
			aut6v = Math.round(aut6v);
			cps = cps + 250;
		}
	} else if (a == 7){
		if (clicks >= aut7v){
			aut7t = aut7t + 1;
			clicks = clicks - aut7v;
			aut7v = 1.4 * aut7v;
			aut7v = Math.round(aut7v);
			cps = cps + 800;
		}
	} else if (a == 8){
		if (clicks >= aut8v){
			aut8t = aut8t + 1;
			clicks = clicks - aut8v;
			aut8v = 1.4 * aut8v;
			aut8v = Math.round(aut8v);
			cps = cps + 2500;
		}
	} else if (a == 9){
		if (clicks >= aut9v){
			aut9t = aut9t + 1;
			clicks = clicks - aut9v;
			aut9v = 1.4 * aut9v;
			aut9v = Math.round(aut9v);
			cps = cps + 8000;
		}
	} else if (a == 10){
		if (clicks >= aut10v) {
			aut10t = aut10t + 1;
			clicks = clicks - aut10v;
			aut10v = 1.4 * aut10v;
			aut10v = Math.round(aut10v);
			cps = cps + 24000;			
		}
	}
	update();
}

function buy_up(b){
	if (b == 1){
		if (clicks >= up1v){
			up1t = up1t + 1;
			clicks = clicks - up1v;
			up1v = 1.4 * up1v;
			up1v = Math.round(up1v);
		}
	} else if (b == 2){
		if (clicks >= up2v){
			up2t = up2t + 1;
			clicks = clicks - up2v;
			up2v = 1.4 * up2v;
			up2v = Math.round(up2v);
		}
	} else if (b == 3){
		if (clicks >= up3v){
			up3t = up3t + 1;
			clicks = clicks - up3v;
			up3v = 1.4 * up3v;
			up3v = Math.round(up3v);
		}
	} else if (b == 4){
		if (clicks >= up4v){
			up4t = up4t + 1;
			clicks = clicks - up4v;
			up4v = 1.4 * up4v;
			up4v = Math.round(up4v);
		}
	} else if (b == 5){
		if (clicks >= up5v){
			up5t = up5t + 1;
			clicks = clicks - up5v;
			up5v = 1.4 * up5v;
			up5v = Math.round(up5v);
		}
	} else if (b == 6){
		if (clicks >= up6v){
			up6t = up6t + 1;
			clicks = clicks - up6v;
			up6v = 1.4 * up6v;
			up6v = Math.round(up6v);
		}
	} else if (b == 7){
		if (clicks >= up7v){
			up7t = up7t + 1;
			clicks = clicks - up7v;
			up7v = 1.4 * up7v;
			up7v = Math.round(up7v);
		}
	} else if (b == 8){
		if (clicks >= up8v){
			up8t = up8t + 1;
			clicks = clicks - up8v;
			up8v = 1.4 * up8v;
			up8v = Math.round(up8v);
		}
	} else if (b == 9){
		if (clicks >= up9v){
			up9t = up9t + 1;
			clicks = clicks - up9v;
			up9v = 1.4 * up9v;
			up9v = Math.round(up9v);
		}
	} else if (b == 10){
		if (clicks >= up10v){
			up10t = up10t + 1;
			clicks = clicks - up10v;
			up10v = 1.4 * up10v;
			up10v = Math.round(up10v);
		}
	}
	update();
}

function CloseAll(){
	document.getElementById("main_display").style.display = "none";
	document.getElementById("achievements").style.display = "none";
	document.getElementById("options").style.display = "none";
	document.getElementById("credits").style.display = "none";
	document.getElementById("shop").style.display = "none";
}

function ResetMain(){
	CloseAll();
	document.getElementById("main_display").style.display = "inline-block";
	document.getElementById("close_btn").style.background = "white";	
	document.getElementById("close_btn").style.color = "black";
}

function ShowAchievements(x){
	if (x == 1){
		CloseAll();
		document.getElementById("achievements").style.display = "inline-block";
		document.getElementById("close_btn").style.background = "black";	
		document.getElementById("close_btn").style.color = "white";
	} else {
		ResetMain();
	}
}

function ShowOptions(y){
	if (y == 1){
		CloseAll();
		document.getElementById("options").style.display = "inline-block";
		document.getElementById("close_btn").style.background = "black";	
		document.getElementById("close_btn").style.color = "white";
	} else {
		ResetMain();
	} 
}

function ShowShop(z){
	if (z == 1){
		CloseAll();
		document.getElementById("shop").style.display = "inline-block";
		document.getElementById("close_btn").style.background = "black";
		document.getElementById("close_btn").style.color = "white";
	} else {
		ResetMain();		
	}
}

function ShowCredits(k){ 
	if (k == 1){
		CloseAll();
		document.getElementById("credits").style.display = "inline-block";
		document.getElementById("close_btn").style.background = "black";
		document.getElementById("close_btn").style.color = "white";
	} else {
		ResetMain();		
	}
}

function Reset(){
	multiplier = 1;
	clicks = 0;
	cps = 0;
	up1t = 0; up1v = 100;
	up2t = 0; up2v = 500;
	up3t = 0; up3v = 2500;
	up4t = 0; up4v = 12500;
	up5t = 0; up5v = 62500;
	up6t = 0; up6v = 312500;
	up7t = 0; up7v = 1562500;
	up8t = 0; up8v = 7812500;
	up9t = 0; up9v = 39062500;	
	up10t = 0; up10v = 195312500;
	aut1t = 0; aut1v = 100;
	aut2t = 0; aut2v = 300;
	aut3t = 0; aut3v = 900;
	aut4t = 0; aut4v = 1800;
	aut5t = 0; aut5v = 5400;
	aut6t = 0; aut6v = 16200;
	aut7t = 0; aut7v = 48600;
	aut8t = 0; aut8v = 145800;
	aut9t = 0; aut9v = 437400;
	aut10t = 0; aut10v = 1312200;
}

// Dando Vida aos Autoclicks


function Save(){
	// Salvando a quantidade de clicks, CPS e multiplier
	localStorage.setItem("total_clicks", clicks);
	localStorage.setItem('cps', cps);
	localStorage.setItem('multiplier', multiplier);

	// Salvando as quantidades de cada ugprade
	localStorage.setItem('up1t', up1t);
	localStorage.setItem('up2t', up2t);
	localStorage.setItem('up3t', up3t);
	localStorage.setItem('up4t', up4t);
	localStorage.setItem('up5t', up5t);
	localStorage.setItem('up6t', up6t);
	localStorage.setItem('up7t', up7t);
	localStorage.setItem('up8t', up8t);
	localStorage.setItem('up9t', up9t);
	localStorage.setItem('up10t', up10t);
	
	// Salvando os valores de cada upgrade
	localStorage.setItem('up1v', up1v);
	localStorage.setItem('up2v', up2v);
	localStorage.setItem('up3v', up3v);
	localStorage.setItem('up4v', up4v);
	localStorage.setItem('up5v', up5v);
	localStorage.setItem('up6v', up6v);
	localStorage.setItem('up7v', up7v);
	localStorage.setItem('up8v', up8v);
	localStorage.setItem('up9v', up9v);
	localStorage.setItem('up10v', up10v);
	
	// Salvando as quantidades de cada autoclicker
	localStorage.setItem('aut1t', aut1t);
	localStorage.setItem('aut2t', aut2t);
	localStorage.setItem('aut3t', aut3t); 
	localStorage.setItem('aut4t', aut4t);
	localStorage.setItem('aut5t', aut5t);
	localStorage.setItem('aut6t', aut6t); 
	localStorage.setItem('aut7t', aut7t);
	localStorage.setItem('aut8t', aut8t);
	localStorage.setItem('aut9t', aut9t);
	localStorage.setItem('aut10t', aut10t);   
	
	// Salvando os valores de cada autoclicker
	localStorage.setItem('aut1v', aut1v);
	localStorage.setItem('aut2v', aut2v);
	localStorage.setItem('aut3v', aut3v);
	localStorage.setItem('aut4v', aut4v);
	localStorage.setItem('aut5v', aut5v);
	localStorage.setItem('aut6v', aut6v);
	localStorage.setItem('aut7v', aut7v);
	localStorage.setItem('aut8v', aut8v);
	localStorage.setItem('aut9v', aut9v);
	localStorage.setItem('aut10v', aut10v);
}

setInterval(function(){
	clicks = clicks + cps;
	document.title = clicks + " clicks - Clicker Adventure";
	Save()
	update();
}, 1000)