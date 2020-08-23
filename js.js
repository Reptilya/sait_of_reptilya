
		window.onload = function (){
			var nam = document.querySelector("#name");
			var ls_name = localStorage.getItem("lsname");
			nam.value = ls_name;

			var surnam = document.querySelector("#surname");
			var ls_surname = localStorage.getItem("lssurname");
			surnam.value = ls_surname;

			var elem = document.getElementsByName("radioo");
			var numb =  localStorage.getItem("lsradio");
			elem[numb].checked = true;

			var pol = JSON.parse(localStorage.getItem("lscheck"));
			document.getElementById("check").checked = pol;

			var m = document.querySelector("#message");
			var ls_m = localStorage.getItem("lsmess");
			m.value = ls_m;

		}

		function locStorage(){
			var name = document.querySelector("#name");
			localStorage.setItem("lsname", name.value);

			var surname = document.querySelector("#surname");
			localStorage.setItem("lssurname", surname.value);

			var area = document.querySelector("#message");
			localStorage.setItem("lsmess", area.value);

			var sel = document.querySelector("#select");
			localStorage.setItem("select", sel.value);

			var elements = document.getElementsByName("radioo");
				for(i=0; i<elements.length; i++){
					if (elements[i].checked){
						localStorage.setItem("lsradio", elements[i].value);
						break;
					}
				}

			var checkbox = document.getElementById("check");
			localStorage.setItem("lscheck", checkbox.checked);
		}

		var link=document.querySelector(".log");
		var popup=document.querySelector(".modal");
		var btn = document.querySelector(".btn");
		document.getElementById("namb").value="100";

		var plus = document.querySelector(".plus");
		var minus = document.querySelector(".minus");
		// <!-- var year = prompt('год отмены крепостного права', ''); -->

		// <!-- if (year > 1861){ -->

			// <!-- alert('поздновато'); -->
		// <!-- } -->
		// <!-- else if (year < 1861) -->
		// <!-- { -->
			// <!-- alert('рановато'); -->
		// <!-- } -->
		// <!-- else -->
		 // <!-- alert ('yes'); -->

		// <!-- let year = 1861; -->
		// <!-- let answer = (year == 1861) ? true : false; -->
		// <!-- alert(answer); -->
		// <!-- alert(null||false||0); -->
		// <!-- let x = !!99; -->
		// <!-- true||(x=1); -->
		// <!-- alert(x); -->

		plus.addEventListener("click", function(event){
			event.preventDefault();
			let ddt=document.getElementById("namb").value;
			document.getElementById("namb").value=parseInt(ddt)+1;
			});

		minus.addEventListener("click", function(event){
			event.preventDefault();
			let ddt=document.getElementById("namb").value;
			document.getElementById("namb").value=parseInt(ddt)-1;
			});

		btn.addEventListener("click", function(event){
			event.preventDefault();
			console.log("работал");
			popup.classList.remove("modal-show");
			});

		link.addEventListener("click", function(event){
			event.preventDefault();
			console.log("cick");
			popup.classList.add("modal-show");
			<!---->
		});

	// let sss=12.3;
	// sss=123;
	// let t= 123456789101112131415162728292n;
	// let rrr="корова";
	// let uu=`королевская кобра ${1+2}`;
	// let erer;
	// let iii = typeof t;
	// let fff = true;
	// fff = String(fff);
	// fff = Number(null);
	// fff = Boolean(" ");
	// alert(Infinity-Infinity);
	// // alert(typeof fff);



	// let i = 5;

	// while (i){
		// alert(i);
		// i--;
	// }


	// let y = 9;

	// do{
		// alert(y);
		// y++;
	// } while (y<10)
	// let r = 0;
	// outer: for (;r<10;r++){
		// for (let c = 0;c<10;c++){
			// let v = prompt(`coordinats (${r}, ${c})`, "");
			// if (!v){
				// break outer;
			// }
		// }
	// }
	// w === 1;
	// let w = prompt("введите число");
	// w = Number(w);
	// switch (w){
		// case 0:
		// case 1:
			// alert("1 || 0");
			// break;
		// case 2:
			// alert("2");
			// break;
		// case 3:
			// alert("nhb");
			// break;
		// case "2":
			// alert("||");
			// break;
		// default:
			// alert("!маловато");
			// break;
	// }

	// let y = 1;
	// function ddt(x, y) {
		// return x+y;
	// }

	// let res = ddt(1, 6);

	// alert(res);

	// function put(){
		// r = "крокодил";
		// alert(r);
		// var r
	// }

	// put();

	// if (true){
		// var test = 90009;
	// }

	// alert(test);

	for(let i=0; i < 10; i++){
		setInterval(function (){
			console.log(i);
		}, 1000);
	}

	function ppsh(x, y){
		alert(x+ ", "+y);
	}

	let timerId = setInterval(ppsh, 1050, "привет", "Настя");
	// clearTimeout(timerId);

	document.getElementById("radio1").onchange = changeSunTem;

	function changeSunTem(){
		let body = document.getElementById("body");
		body.style.backgroundColor = "#fff";
		alert('123');
	}
