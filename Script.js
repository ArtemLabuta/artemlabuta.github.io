function checkpart(){
	var Nn  = document.getElementById('Nn').value;
	var Npn  = document.getElementById('Npn').value;
	var Acn  = document.getElementById('Acn').value;
	var Ack  = document.getElementById('Ack').value;
	var part = (Nn + Npn)/(Acn + Ack);
	if(part <=1){
		document.getElementById('reserv').innerHTML = ' Kpc <=1 ';
		showTables();
		}
	else{
		document.getElementById('reserv').innerHTML = ' Kpc> 1 ';
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
			{ 	var bpnorm = 0.72;
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
					document.getElementById('businessconcl').innerHTML = 'Р’РёСЃРЅРѕРІРѕРє: Р—РЅР°С‡РµРЅРЅСЏ РєРѕРјРїР»РµРєСЃРЅРѕРіРѕ РїРѕРєР°Р·РЅРёРєР° \"Р’РЅСѓС‚СЂС–С€РЅС– Р±С–Р·РЅРµСЃ РїСЂРѕС†РµСЃРё\" СЃС‚Р°РЅРѕРІРёС‚СЊ ' + bpresult + '.\nРќРѕСЂРјР°С‚РёРІРЅРµ Р·РЅР°С‡РµРЅРЅСЏ '+bpnorm+'. РћС‚Р¶Рµ, РєРѕРјРїР»РµРєСЃРЅРёР№ РїРѕРєР°Р·РЅРёРє РІС–РґРїРѕРІС–РґР°С” СѓРјРѕРІР°Рј РїР°СЂС‚РЅРµСЂСЃС‚РІР°.' ;
					document.getElementById('businessconcl').style.backgroundColor = "#269900"; 
				}
				else{
					document.getElementById('businessconcl').innerHTML = 'Р’РёСЃРЅРѕРІРѕРє: Р—РЅР°С‡РµРЅРЅСЏ РєРѕРјРїР»РµРєСЃРЅРѕРіРѕ РїРѕРєР°Р·РЅРёРєР° \"Р’РЅСѓС‚СЂС–С€РЅС– Р±С–Р·РЅРµСЃ РїСЂРѕС†РµСЃРё" СЃС‚Р°РЅРѕРІРёС‚СЊ ' + bpresult + '.\nРќРѕСЂРјР°С‚РёРІРЅРµ Р·РЅР°С‡РµРЅРЅСЏ '+bpnorm+'. РћС‚Р¶Рµ, РєРѕРјРїР»РµРєСЃРЅРёР№ РїРѕРєР°Р·РЅРёРє РЅРµ РІС–РґРїРѕРІС–РґР°С” СѓРјРѕРІР°Рј РїР°СЂС‚РЅРµСЂСЃС‚РІР°.';
					document.getElementById('businessconcl').style.backgroundColor = "#ff3300"; 
				}
				document.getElementById("businessconcl").style.display = "block";
				document.getElementById('resultbp').innerHTML = bpresult;
				
				
				
			}
			
			function personal(){
				var personalnorm  = 0.485;
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
					document.getElementById('personalconcl').innerHTML = 'Р’РёСЃРЅРѕРІРѕРє: Р—РЅР°С‡РµРЅРЅСЏ РєРѕРјРїР»РµРєСЃРЅРѕРіРѕ РїРѕРєР°Р·РЅРёРєР° \"РџРµСЂСЃРѕРЅР°Р»\" ' + personalresult + '.\nРќРѕСЂРјР°С‚РёРІРЅРµ Р·РЅР°С‡РµРЅРЅСЏ '+personalnorm+'. РћС‚Р¶Рµ, РєРѕРјРїР»РµРєСЃРЅРёР№ РїРѕРєР°Р·РЅРёРє РІС–РґРїРѕРІС–РґР°С” СѓРјРѕРІР°Рј РїР°СЂС‚РЅРµСЂСЃС‚РІР°.' ;
					document.getElementById('personalconcl').style.backgroundColor = "#269900"; 
				}
				else{
					document.getElementById('personalconcl').innerHTML = 'Р’РёСЃРЅРѕРІРѕРє: Р—РЅР°С‡РµРЅРЅСЏ РєРѕРјРїР»РµРєСЃРЅРѕРіРѕ РїРѕРєР°Р·РЅРёРєР° \"РџРµСЂСЃРѕРЅР°Р»\" СЃС‚Р°РЅРѕРІРёС‚СЊ ' + personalresult + '.\nРќРѕСЂРјР°С‚РёРІРЅРµ Р·РЅР°С‡РµРЅРЅСЏ '+personalnorm+'. . РћС‚Р¶Рµ, РєРѕРјРїР»РµРєСЃРЅРёР№ РїРѕРєР°Р·РЅРёРє РЅРµ РІС–РґРїРѕРІС–РґР°С” СѓРјРѕРІР°Рј РїР°СЂС‚РЅРµСЂСЃС‚РІР°.';
					document.getElementById('personalconcl').style.backgroundColor = "#ff3300"; 
				}
				document.getElementById("personalconcl").style.display = "block";
				document.getElementById('resultpr').innerHTML = personalresult
			}
			function clients(){
				
				var clientsnorm = 0.867;
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
					document.getElementById('clientsconcl').innerHTML = 'Р’РёСЃРЅРѕРІРѕРє: Р—РЅР°С‡РµРЅРЅСЏ РєРѕРјРїР»РµРєСЃРЅРѕРіРѕ РїРѕРєР°Р·РЅРёРєР° \"РљР»С–С”РЅС‚Рё\" ' + clientsresult + '.\nРќРѕСЂРјР°С‚РёРІРЅРµ Р·РЅР°С‡РµРЅРЅСЏ '+clientsnorm+'. РћС‚Р¶Рµ, РєРѕРјРїР»РµРєСЃРЅРёР№ РїРѕРєР°Р·РЅРёРє РІС–РґРїРѕРІС–РґР°С” Р·Р°РїРёС‚Р°Рј РєР»С–С”РЅС‚С–РІ' ;
					document.getElementById('clientsconcl').style.backgroundColor = "#269900"; 
				}
				else{
					document.getElementById('clientsconcl').innerHTML = 'Р’РёСЃРЅРѕРІРѕРє: Р—РЅР°С‡РµРЅРЅСЏ РєРѕРјРїР»РµРєСЃРЅРѕРіРѕ РїРѕРєР°Р·РЅРёРєР° \"РљР»С–С”РЅС‚Рё\" СЃС‚Р°РЅРѕРІРёС‚СЊ ' + clientsresult + '.\nРќРѕСЂРјР°С‚РёРІРЅРµ Р·РЅР°С‡РµРЅРЅСЏ '+clientsnorm+'. РћС‚Р¶Рµ, РєРѕРјРїР»РµРєСЃРЅРёР№ РїРѕРєР°Р·РЅРёРє РЅРµ РІС–РґРїРѕРІС–РґР°С” Р·Р°РїРёС‚Р°Рј РєР»С–С”РЅС‚С–РІ';
					document.getElementById('clientsconcl').style.backgroundColor = "#ff3300"; 
				}	
				document.getElementById("clientsconcl").style.display = "block";
				document.getElementById('resultcl').innerHTML = clientsresult;
			}
			
			function finance(){
				var financenorm = 0.42;
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
					document.getElementById('financeconcl').innerHTML = 'Р’РёСЃРЅРѕРІРѕРє: Р—РЅР°С‡РµРЅРЅСЏ РєРѕРјРїР»РµРєСЃРЅРѕРіРѕ РїРѕРєР°Р·РЅРёРєР° \"Р¤С–РЅР°РЅСЃРё\" ' + financeresult + '.\nРќРѕСЂРјР°С‚РёРІРЅРµ Р·РЅР°С‡РµРЅРЅСЏ '+financenorm+'.РћС‚Р¶Рµ, РєРѕРјРїР»РµРєСЃРЅРёР№ РїРѕРєР°Р·РЅРёРє РІС–РґРїРѕРІС–РґР°С” СѓРјРѕРІР°Рј РїР°СЂС‚РЅРµСЂСЃС‚РІР°.' ;
					document.getElementById('financeconcl').style.backgroundColor = "#269900"; 
				}
				else{
					document.getElementById('financeconcl').innerHTML = 'Р’РёСЃРЅРѕРІРѕРє: Р—РЅР°С‡РµРЅРЅСЏ РєРѕРјРїР»РµРєСЃРЅРѕРіРѕ РїРѕРєР°Р·РЅРёРєР° \"Р¤С–РЅР°РЅСЃРё\" СЃС‚Р°РЅРѕРІРёС‚СЊ ' + financeresult + '.\nРќРѕСЂРјР°С‚РёРІРЅРµ Р·РЅР°С‡РµРЅРЅСЏ '+financenorm+'.РћС‚Р¶Рµ, РєРѕРјРїР»РµРєСЃРЅРёР№ РїРѕРєР°Р·РЅРёРє РЅРµ РІС–РґРїРѕРІС–РґР°С” СѓРјРѕРІР°Рј РїР°СЂС‚РЅРµСЂСЃС‚РІР°.';
					document.getElementById('financeconcl').style.backgroundColor = "#ff3300"; 
				}	
				document.getElementById("financeconcl").style.display = "block";
				document.getElementById('resultfn').innerHTML = financeresult;
				
			}
