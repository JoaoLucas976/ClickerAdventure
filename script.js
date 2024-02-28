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

function formatarNumero(numero) {
    if (numero >= 1e9){
		return (numero / 1e9).toFixed(3) + 'B';
	} else if (numero >= 1e6) {
        return (numero / 1e6).toFixed(3) + 'M';
    } else if (numero >= 1e3) {
        return (numero / 1e3).toFixed(3) + 'K';
    } else {
        return numero.toString();
    }
}

// Autoclickers
var aut1t = 0,  aut1v  = 15;
var aut2t = 0,  aut2v  = 100;
var aut3t = 0,  aut3v  = 1100;
var aut4t = 0,  aut4v  = 12000;
var aut5t = 0,  aut5v  = 130000;
var aut6t = 0,  aut6v  = 1400000;
var aut7t = 0,  aut7v  = 20000000;
var aut8t = 0,  aut8v  = 330000000;
var aut9t = 0,  aut9v  = 5100000000;
var aut10t = 0, aut10v = 75000000000;

// Upgrades
var up1t = 0;  up1v  = 20;
var up2t = 0;  up2v  = 300;
var up3t = 0;  up3v  = 4500;
var up4t = 0;  up4v  = 67500;
var up5t = 0;  up5v  = 1000000;
var up6t = 0;  up6v  = 12000000;
var up7t = 0;  up7v  = 250000000;
var up8t = 0;  up8v  = 3000000000;
var up9t = 0;  up9v  = 36000000000;	
var up10t = 0; up10v = 180000000000;

function testar_valores(){
	var teste = localStorage.getItem("total_clicks");
	if (isNaN(teste) || (teste == null)) {
		Reset();
	} 
	initialize();	
}

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
	document.getElementById('up1v').innerHTML = formatarNumero(up1v);
	document.getElementById('up2v').innerHTML = formatarNumero(up2v);
	document.getElementById('up3v').innerHTML = formatarNumero(up3v);
	document.getElementById('up4v').innerHTML = formatarNumero(up4v);
	document.getElementById('up5v').innerHTML = formatarNumero(up5v);
	document.getElementById('up6v').innerHTML = formatarNumero(up6v);
	document.getElementById('up7v').innerHTML = formatarNumero(up7v);
	document.getElementById('up8v').innerHTML = formatarNumero(up8v);
	document.getElementById('up9v').innerHTML = formatarNumero(up9v);
	document.getElementById('up10v').innerHTML = formatarNumero(up10v);

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
	document.getElementById('aut1v').innerHTML = formatarNumero(aut1v);
	document.getElementById('aut2v').innerHTML = formatarNumero(aut2v);
	document.getElementById('aut3v').innerHTML = formatarNumero(aut3v);
	document.getElementById('aut4v').innerHTML = formatarNumero(aut4v);
	document.getElementById('aut5v').innerHTML = formatarNumero(aut5v);
	document.getElementById('aut6v').innerHTML = formatarNumero(aut6v);
	document.getElementById('aut7v').innerHTML = formatarNumero(aut7v);
	document.getElementById('aut8v').innerHTML = formatarNumero(aut8v);
	document.getElementById('aut9v').innerHTML = formatarNumero(aut9v);
	document.getElementById('aut10v').innerHTML = formatarNumero(aut10v);

// Atualizando o numero de cliks, clicks por segundo e o multiplicador
	document.getElementById('total_clicks').innerHTML = formatarNumero(clicks);
	document.getElementById('cps').innerHTML = formatarNumero(cps);
	document.getElementById('multiplier').innerHTML = formatarNumero(multiplier);    // Poder de Click
	multiplier = (up1t * 1 + up2t * 6 + up3t * 45 + up4t * 250 + up5t * 1200 + up6t * 7000 + up7t * 40000 + up8t * 250000 + up9t * 1500000 + up10t * 9000000) + 1;
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
			aut1v = 1.15 * aut1v;
			aut1v = Math.round(aut1v);
			cps = cps + 1;
		} 
	} else if (a == 2) {
		if (clicks >= aut2v){
			aut2t = aut2t + 1;
			clicks = clicks - aut2v;
			aut2v = 1.15 * aut2v;
			aut2v = Math.round(aut2v);
			cps = cps + 8;
		}
	} else if (a == 3){
		if (clicks >= aut3v){
			aut3t = aut3t + 1;
			clicks = clicks - aut3v;
			aut3v = 1.15 * aut3v;
			aut3v = Math.round(aut3v);
			cps = cps + 47;
		}
	} else if (a == 4){
		if (clicks >= aut4v){
			aut4t = aut4t + 1;
			clicks = clicks - aut4v;
			aut4v = 1.15 * aut4v;
			aut4v = Math.round(aut4v);
			cps = cps + 260;
		}
	} else if (a == 5){
		if (clicks >= aut5v){
			aut5t = aut5t + 1;
			clicks = clicks - aut5v;
			aut5v = 1.15 * aut5v;
			aut5v = Math.round(aut5v);
			cps = cps + 1400;
		}
	} else if (a == 6){
		if (clicks >= aut6v){
			aut6t = aut6t + 1;
			clicks = clicks - aut6v;
			aut6v = 1.15 * aut6v;
			aut6v = Math.round(aut6v);
			cps = cps + 7800;
		}
	} else if (a == 7){
		if (clicks >= aut7v){
			aut7t = aut7t + 1;
			clicks = clicks - aut7v;
			aut7v = 1.15 * aut7v;
			aut7v = Math.round(aut7v);
			cps = cps + 44000;
		}
	} else if (a == 8){
		if (clicks >= aut8v){
			aut8t = aut8t + 1;
			clicks = clicks - aut8v;
			aut8v = 1.15 * aut8v;
			aut8v = Math.round(aut8v);
			cps = cps + 260000;
		}
	} else if (a == 9){
		if (clicks >= aut9v){
			aut9t = aut9t + 1;
			clicks = clicks - aut9v;
			aut9v = 1.15 * aut9v;
			aut9v = Math.round(aut9v);
			cps = cps + 1600000;
		}
	} else if (a == 10){
		if (clicks >= aut10v) {
			aut10t = aut10t + 1;
			clicks = clicks - aut10v;
			aut10v = 1.15 * aut10v;
			aut10v = Math.round(aut10v);
			cps = cps + 10000000;			
		}
	}
	update();
}

function buy_up(b){
	if (b == 1){
		if (clicks >= up1v){
			up1t = up1t + 1;
			clicks = clicks - up1v;
			up1v = 1.15 * up1v;
			up1v = Math.round(up1v);
		}
	} else if (b == 2){
		if (clicks >= up2v){
			up2t = up2t + 1;
			clicks = clicks - up2v;
			up2v = 1.15 * up2v;
			up2v = Math.round(up2v);
		}
	} else if (b == 3){
		if (clicks >= up3v){
			up3t = up3t + 1;
			clicks = clicks - up3v;
			up3v = 1.15 * up3v;
			up3v = Math.round(up3v);
		}
	} else if (b == 4){
		if (clicks >= up4v){
			up4t = up4t + 1;
			clicks = clicks - up4v;
			up4v = 1.15 * up4v;
			up4v = Math.round(up4v);
		}
	} else if (b == 5){
		if (clicks >= up5v){
			up5t = up5t + 1;
			clicks = clicks - up5v;
			up5v = 1.15 * up5v;
			up5v = Math.round(up5v);
		}
	} else if (b == 6){
		if (clicks >= up6v){
			up6t = up6t + 1;
			clicks = clicks - up6v;
			up6v = 1.15 * up6v;
			up6v = Math.round(up6v);
		}
	} else if (b == 7){
		if (clicks >= up7v){
			up7t = up7t + 1;
			clicks = clicks - up7v;
			up7v = 1.15 * up7v;
			up7v = Math.round(up7v);
		}
	} else if (b == 8){
		if (clicks >= up8v){
			up8t = up8t + 1;
			clicks = clicks - up8v;
			up8v = 1.15 * up8v;
			up8v = Math.round(up8v);
		}
	} else if (b == 9){
		if (clicks >= up9v){
			up9t = up9t + 1;
			clicks = clicks - up9v;
			up9v = 1.15 * up9v;
			up9v = Math.round(up9v);
		}
	} else if (b == 10){
		if (clicks >= up10v){
			up10t = up10t + 1;
			clicks = clicks - up10v;
			up10v = 1.15 * up10v;
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

	up1t = 0;  up1v  = 20;
	up2t = 0;  up2v  = 300;
	up3t = 0;  up3v  = 4500;
	up4t = 0;  up4v  = 67500;
	up5t = 0;  up5v  = 1000000;
	up6t = 0;  up6v  = 12000000;
	up7t = 0;  up7v  = 250000000;
	up8t = 0;  up8v  = 3000000000;
	up9t = 0;  up9v  = 36000000000;	
	up10t = 0; up10v = 180000000000;

	aut1t = 0,  aut1v  = 15;
	aut2t = 0,  aut2v  = 100;
	aut3t = 0,  aut3v  = 1100;
	aut4t = 0,  aut4v  = 12000;
	aut5t = 0,  aut5v  = 130000;
	aut6t = 0,  aut6v  = 1400000;
	aut7t = 0,  aut7v  = 20000000;
	aut8t = 0,  aut8v  = 330000000;
	aut9t = 0,  aut9v  = 5100000000;
	aut10t = 0, aut10v = 75000000000;

	Save();
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