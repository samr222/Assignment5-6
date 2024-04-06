const dropList = document.querySelectorAll("form select"),
  fromCurrency = document.querySelector(".from select"),
  toCurrency = document.querySelector(".to select");
let country_list = { "CAD": "CA", "USD": "US" };

for (let i = 0; i < dropList.length; i++) {
  for (let currency_code in country_list) {
    let selected = i == 0 ? currency_code == "USD" ? "selected" : "" : currency_code == "CAD" ? "selected" : "";
    let optionTag = `<option value="${currency_code}" ${selected}>${currency_code}</option>`;
    dropList[i].insertAdjacentHTML("beforeend", optionTag);
  }
  dropList[i].addEventListener("change", e => {
    loadFlag(e.target);
    convertCurrency();
  });
}

function loadFlag(element) {
  for (let code in country_list) {
    if (code == element.value) {
      let imgTag = element.parentElement.querySelector("img");
      imgTag.src = `https://flagcdn.com/48x36/${country_list[code].toLowerCase()}.png`;
    }
  }
}

//Creating a function 
function fun310(){
    //Taking the value of amount in usd from the html form and storing it in variable usd_amount310    
    var usd_amount310 = document.getElementById("number").value;
    //Validating the input: if user enters any number or any negative values the error messege is displayed
    if (isNaN(usd_amount310) || usd_amount310 <=0  ){
        window.alert("Please enter the valid positive usd amount to be converted to cad!!");
    }
    else{
        var cad_amount310= 1.35 * usd_amount310;
        document.getElementById("number1").value= cad_amount310.toFixed(3); //toFixed(3) displays only 3 digits after decimal
    }
}
