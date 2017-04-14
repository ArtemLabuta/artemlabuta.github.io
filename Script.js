function checkpart(){
	var Nn  = document.getElementById('Nn').value;
	var Npn  = document.getElementById('Npn').value;
	var Acn  = document.getElementById('Acn').value;
	var Ack  = document.getElementById('Ack').value;
	var part = (Nn + Npn)/(Acn + Ack);
	if(part > 1){
		document.getElementById('reserv').innerHTML = ' Kpc > 1 ';
		document.getElementById("posblock").style.display = "block";
		document.getElementById("negblock").style.display = "none"; 
		showTables();
		}
	else{
		document.getElementById("negblock").style.display = "block"; 
		document.getElementById("posblock").style.display = "none"; 
		document.getElementById("negreserv").innerHTML = ' У даного підприємства недостатня спроможність виробничо-технічної бази для виконання робіт із технічного обслуговування та ремонту транспортних засобів в партнерстві. ';
		document.getElementById("resultconcl").style.display = "none";
		hideTables();
		
	}
}
function showTables(){
	document.getElementById("business").style.display = "block";
	document.getElementById("personal").style.display = "block";
	document.getElementById("clients").style.display = "block";
	document.getElementById("finance").style.display = "block";
	document.getElementById("resultconcl").style.display = "block";
	
	
}
function hideTables(){
	document.getElementById("business").style.display = "none";
	document.getElementById("personal").style.display = "none";
	document.getElementById("clients").style.display = "none";
	document.getElementById("finance").style.display = "none";
	document.getElementById("errordiv").style.display = "block";
	document.getElementById("resultconcl").style.display = "none";
	
}


function businessprocess()
			{ 	var bpnorm = document.getElementById('bpnorm').value;
				var Wmvp = document.getElementById('Wmvp').value;
				var Vm = document.getElementById('Vm').value;
				var Vzag = document.getElementById('Vzag').value;
				var Wg = document.getElementById('Wg').value;
				var Nr = document.getElementById('Nr').value;
				var Nzag = document.getElementById('Nzag').value;
				var Wv = document.getElementById('Wv').value;
				var Ae = document.getElementById('Ae').value;
				var Asp = document.getElementById('Asp').value;
				var bpresult = Wmvp * (Vm/Vzag) + Wg * (Nr/Nzag) + Wv * (Ae/Asp);
				var bpdiff = bpnorm-bpresult;
				
		
				if(bpresult > bpnorm){
					document.getElementById('businessconcl').innerHTML = 'Висновок: Значення комплексного показника \"Внутрішні бізнес процеси\" становить ' + bpresult + '.\nНормативне значення '+bpnorm+'. Отже, комплексний показник відповідає умовам партнерства.' ;
					document.getElementById('businessconcl').style.backgroundColor = "#269900"; 
				}
				else{
					document.getElementById('businessconcl').innerHTML = 'Висновок: Значення комплексного показника \"Внутрішні бізнес процеси" становить ' + bpresult + '.\nНормативне значення '+bpnorm+'. Отже, комплексний показник не відповідає умовам партнерства.';
					document.getElementById('businessconcl').style.backgroundColor = "#ff3300"; 
				}
				document.getElementById("businessconcl").style.display = "block";
				document.getElementById('resultbp').innerHTML = bpresult;
				
				
				
			}
			
			function personal(){
				var personalnorm  = document.getElementById('personalnorm').value;
				var Wzp = document.getElementById('Wzp').value;
				var Nsp = document.getElementById('Nsp').value;
				var Np = document.getElementById('Np').value;
				var Wst = document.getElementById('Wst').value;
				var Zr = document.getElementById('Zr').value;
				var Pr = document.getElementById('Pr').value;
				var Wkp = document.getElementById('Wkp').value;
				var Nkv = document.getElementById('Nkv').value;
				var personalresult = Wzp * (Nsp/Np) + Wst * (1-(Zr/(Nsp*1+Pr*1))) + Wkp * (Nkv/Nsp);
				
				
				if(personalresult > personalnorm){
					document.getElementById('personalconcl').innerHTML = 'Висновок: Значення комплексного показника \"Персонал\" ' + personalresult + '.\nНормативне значення '+personalnorm+'. Отже, комплексний показник відповідає умовам партнерства.' ;
					document.getElementById('personalconcl').style.backgroundColor = "#269900"; 
				}
				else{
					document.getElementById('personalconcl').innerHTML = 'Висновок: Значення комплексного показника \"Персонал\" становить ' + personalresult + '.\nНормативне значення '+personalnorm+'. Отже, комплексний показник не відповідає умовам партнерства.';
					document.getElementById('personalconcl').style.backgroundColor = "#ff3300"; 
				}
				document.getElementById("personalconcl").style.display = "block";
				document.getElementById('resultpr').innerHTML = personalresult
			}
			function clients(){
				
				var clientsnorm = document.getElementById('clientsnorm').value;
				var Woch = document.getElementById('Woch').value;
				var Toch = document.getElementById('Toch').value;
				var Tdop = document.getElementById('Tdop').value;
				var Wy = document.getElementById('Wy').value;
				var Arp = document.getElementById('Arp').value;
				var Am = document.getElementById('Am').value;
				var Wtoi = document.getElementById('Wtoi').value;
				var Tfi = document.getElementById('Tfi').value;
				var Tni = document.getElementById('Tni').value;
				var Wr = document.getElementById('Wr').value;
				var nr = document.getElementById('nr').value;
				var Aobs = document.getElementById('Aobs').value;
				var Wvp = document.getElementById('Wvp').value;
				var Vi = document.getElementById('Vi').value;
				var Vik = document.getElementById('Vik').value;
				var nCk  = document.getElementById('nCk').value;
				var clientsresult = ((1-Woch*(Toch/Tdop))+(1-Wy*(Arp/Am))+(1-Wtoi*(Tfi/Tni))+(1-Wr*(nr/Aobs))+(1-Wvp*(Vi/Vik)))/nCk;
				
				if(clientsresult > clientsnorm){
					document.getElementById('clientsconcl').innerHTML = 'Висновок: Значення комплексного показника \"Клієнти\" ' + clientsresult + '.\nНормативне значення '+clientsnorm+'. Отже, комплексний показник відповідає запитам клієнтів' ;
					document.getElementById('clientsconcl').style.backgroundColor = "#269900"; 
				}
				else{
					document.getElementById('clientsconcl').innerHTML = 'Висновок: Значення комплексного показника \"Клієнти\" становить ' + clientsresult + '.\nНормативне значення '+clientsnorm+'. Отже, комплексний показник не відповідає запитам клієнтів';
					document.getElementById('clientsconcl').style.backgroundColor = "#ff3300"; 
				}	
				document.getElementById("clientsconcl").style.display = "block";
				document.getElementById('resultcl').innerHTML = clientsresult;
			}
			
			function finance(){
				var financenorm = document.getElementById('financenorm').value;
				var Wn = document.getElementById('Wn').value;
				var Kv = document.getElementById('Kv').value;
				var Ka = document.getElementById('Ka').value;
				var Wvoz = document.getElementById('Wvoz').value;
				var Voz = document.getElementById('Voz').value;
				var A = document.getElementById('A').value;
				var Vmzag = document.getElementById('Vmzag').value;
				var Wrp = document.getElementById('Wrp').value;
				var P = document.getElementById('P').value;
				var Vp = document.getElementById('Vp').value;
				var financeresult = Wn * (Kv/Ka) + Wvoz * ((Voz-A)/Vmzag) + Wrp * (P/Vp);
				
				if(financeresult > financenorm){
					document.getElementById('financeconcl').innerHTML = 'Висновок: Значення комплексного показника \"Фінанси\" ' + financeresult + '.\nНормативне значення '+financenorm+'.Отже, комплексний показник відповідає умовам партнерства.' ;
					document.getElementById('financeconcl').style.backgroundColor = "#269900"; 
				}
				else{
					document.getElementById('financeconcl').innerHTML = 'Висновок: Значення комплексного показника \"Фінанси\" становить ' + financeresult + '.\nНормативне значення '+financenorm+'.Отже, комплексний показник не відповідає умовам партнерства.';
					document.getElementById('financeconcl').style.backgroundColor = "#ff3300"; 
				}	
				document.getElementById("financeconcl").style.display = "block";
				document.getElementById('resultfn').innerHTML = financeresult;
				
			}
