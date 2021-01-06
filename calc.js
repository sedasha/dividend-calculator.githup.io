    //mobile
    let newStart = document.querySelector("h1");
    let simple = document.querySelector("#simple");
    let drip = document.querySelector("#drip");
    let usefuld = document.querySelector("#useful");
    let simpleCalc = document.getElementById("simple_calc");
    let dripCalc = document.getElementById("drip_calc");
    let note = document.querySelector(".note")
    ////------------------calculate-1---------------//

    let startMoney1 = document.querySelector(".start_money1");
    let divYield1 = document.querySelector(".div_yield1");
    let divGrowth1 = document.querySelector(".div_growth1");
    let taxes1 = document.querySelector(".tax1");
    let years1 = document.querySelector(".year1");
    let but1 = document.querySelector(".calculate1");
    let getResultYear = document.querySelector(".result_year")
    let finalResult = document.querySelector(".final_result");
    ////------------------calculate----------------//
    let startMoney = document.querySelector(".start_money");
    let divYield = document.querySelector(".div_yield");
    let divGrowth = document.querySelector(".div_growth");
    let taxes = document.querySelector(".tax");
    let years = document.querySelector(".years");
    let annually = document.querySelector(".ann");
    let quartely = document.querySelector(".quar");
    let monthly = document.querySelector(".month");
    let result = document.querySelector(".result");
    let but = document.querySelector(".calculate");
    let getSel = document.querySelector(".pay_time");
    // -----------Alert-------------//
    let alerPrincipal1 = document.querySelector("#alert_principal1");
    let alerYield1 = document.querySelector("#alert_yield1");
    let aleryear1 = document.querySelector("#alert_year1");
    let alerPrincipal = document.querySelector("#alert_principal");
    let alerYield = document.querySelector("#alert_yield");
    let aleryear = document.querySelector("#alert_year");

    let privacy = document.querySelector(".privacy");
    let privacyText = document.querySelector(".privacy_explain");
    let dividend, money1, checking = true, checking2= true, lift, 
    moneyFormatted, dividendFormatted, resultyear, m, divi;
    
    // ------reload-----------//
    newStart.addEventListener("click", ()=>{
        location.reload()
     });
    ////------------------calculate-1---------------//
    but1.addEventListener("click", ()=>{
        if (checking == false){ 
            divi.remove();
            result.style.display = "none";
        }
        aler(startMoney1, divYield1, years1);
        checking = false;
        let money = +startMoney1.value;
        let yield = +divYield1.value; 
        let growth = +divGrowth1.value;
        let tax = +taxes1.value;
        divi = document.createElement("div");
        result.appendChild(divi);
        m = 1;
        getResultYear.innerHTML = `Years`;
        money1 = money;
        if (startMoney1.value != "" && divYield1.value != "" && years1.value != ""){
           for (let i = 0; i < +years1.value; i++){
               dividend = divedent(money,yield,growth,tax)
            money1 += dividend;
            moneyFormatted = money1.toFixed(2);
            dividendFormatted = dividend.toFixed(2);
            calc(m);
            m++
            }
        result.style.display = 'block';
    }  
    emptyValue(startMoney1, years1, startMoney, divYield, divGrowth, taxes, years, alerPrincipal, alerYield, aleryear);
     
    });
    ////------------------calculate-Drip------------------------------------------------------//
    but.addEventListener("click", ()=>{
        if (checking == false){
            divi.remove();
            result.style.display = "none";
        }
        checking = false;
        aler(startMoney, divYield, years);
        let money = +startMoney.value;
        let yield = +divYield.value; 
        let growth = +divGrowth.value;
        let tax = +taxes.value;
        divi = document.createElement("div");
        result.appendChild(divi);
        m = 1;
        if (getSel.value == "ann" && startMoney.value != "" && divYield.value != ""  && years.value != ""){
            getResultYear.innerHTML = `Years`;
            for (let i = 0; i < +years.value; i++){
                dividend = divedent(money,yield,growth,tax)
                money += dividend;
                moneyFormatted = money.toFixed(2);
                dividendFormatted = dividend.toFixed(2);
                calc(m)
                m++
            };
            result.style.display = 'block';
        }
        if (getSel.value == "month" && startMoney.value != "" && divYield.value != "" && years.value != ""){
            getResultYear.innerHTML = `Months`;
            let yearsM = +years.value * 12;
            yield = yield / 12;
            growth = growth / 12;
            for (let j = 0; j < yearsM; j++){
                dividend = divedent(money,yield,growth,tax)
                money = money + dividend;
                moneyFormatted = money.toFixed(2);
                dividendFormatted = dividend.toFixed(2);
               calc(m)
                m++
            }
            result.style.display = 'block';
            
        }
        if (getSel.value == "quar" && startMoney.value != "" && divYield.value != "" && years.value != ""){
            getResultYear.innerHTML = `Quarters`;
             let yearsQ = +years.value * 4;
             yield = yield / 4;
             growth = growth / 4;
             for (let j = 0; j < yearsQ; j++){
                dividend = divedent(money,yield,growth,tax);
                 money += dividend;
                 moneyFormatted = money.toFixed(2);
                 dividendFormatted = dividend.toFixed(2);
                  calc(m)
                 m++
             }
             result.style.display = 'block';
        }
        emptyValue(startMoney, years, startMoney1, divYield1, divGrowth1, taxes1, years1, alerPrincipal1, alerYield1, aleryear1);
    });
    lift = document.createElement("a");
    lift.setAttribute("id", "pop");
    result.appendChild(lift);
    // ------------Privacy-------------/
    privacy.addEventListener("click", ()=>{
       privacy.classList.toggle("explain");
    })

// ------------------Responsive------------------///
    simple.addEventListener("click", ()=>{
        [simpleCalc, usefuld, note]. forEach(elem => elem.style.display ="block");
        [simple, drip].forEach(elem => elem.style.display = "none");
    });
    drip.addEventListener("click", ()=>{
        [dripCalc, usefuld, note]. forEach(elem => elem.style.display ="block");
        [simple, drip].forEach(elem => elem.style.display = "none");
    });
// /----------------functions---------------//
    function aler(a, b, c) {
        arr = [a, b, c];
        arr1 =[startMoney1, divYield1, years1];
        arr2 =[alerPrincipal1, alerYield1, aleryear1];
        arr3 = [alerPrincipal, alerYield, aleryear]
        arr.forEach((elem, index)=>{
            if (elem.value == ""){
                result.style.display = "none";
                elem == arr1[index]?arr2[index].style.display = "block":arr3[index].style.display = "block";
            } else{
                    elem == arr1[index]?arr2[index].style.display = "none":arr3[index].style.display = "none";
                }
        })
    }

    function emptyValue(startMoney, years,  startMoney1, divYield1, divGrowth1, taxes1, years1, alerPrincipal1, alerYield1, aleryear1){
       finalResult.innerHTML = ` You started with <i>${startMoney.value}$</i> and ended up with <i>${moneyFormatted}$</i>. 
       <br> This was over <i>${years.value} years.</i>`;
        [startMoney1, divYield1, divGrowth1,taxes1, years1].forEach(elem => elem.value = "");
        [alerPrincipal1, alerYield1, aleryear1].forEach(elem => elem.style.display = "none")
    }
    function divedent(money,yield,growth,tax){
        return (((money/100 * yield) + ((money / 100 * yield) / 100 * growth))-(((money/100 * yield) + ((money / 100 * yield) / 100 * growth)) / 100 * tax))
    }
    function calc(m){
        divi.style.display = "inline";
        resultyear = document.createElement("span");
        resultyear.setAttribute("class", "resultJS")
        resultyear.innerHTML = `
        <span>${m}</span><span>${dividendFormatted}</span> <span>${moneyFormatted}</span> <br>`;
        divi.appendChild(resultyear);
    }
    
  

