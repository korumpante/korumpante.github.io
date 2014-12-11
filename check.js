				var $ = function(id) {
					return document.getElementById(id);
				};
				window.onload =	function (){
					var submit = $("submitButton");

					submit.onclick = function() {
					var text = $("review");
						if (text.value == "") {
							alert("Ievadiet kaut kādas atsauksmes!");
							return false;
						}
						if (!isNaN(text.value)) {
							alert("Skaitlis nav atsauksme!");
							return false;
						}
					}
				}
