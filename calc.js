    //mobile
    let newStart = document.querySelector("h1");
    let simple = document.querySelector("#simple");
    let drip = document.querySelector("#drip");
    let usefuld = document.querySelector("#useful");
    let simpleCalc = document.getElementById("simple_calc");
    let dripCalc = document.getElementById("drip_calc");
    let note = document.querySelector(".note")

    let startMoney1 = document.querySelector(".start_money1");
    let divYield1 = document.querySelector(".div_yield1");
    let divGrowth1 = document.querySelector(".div_growth1");
    let taxes1 = document.querySelector(".tax1");
    let years1 = document.querySelector(".year1");
    let but1 = document.querySelector(".calculate1");
    let getResultYear = document.querySelector(".result_year")
    let finalResult = document.querySelector(".final_result");
    
    let startMoney = document.querySelector(".start_money");
    let divYield = document.querySelector(".div_yield");
    let divGrowth = document.querySelector(".div_growth");
    let taxes = document.querySelector(".tax");
    let years = document.querySelector(".years");
    let payTime = document.querySelector(".pay_time");
    let annually = document.querySelector(".ann");
    let quartely = document.querySelector(".quar");
    let monthly = document.querySelector(".month");
    let result = document.querySelector(".result");
    let but = document.querySelector(".calculate");
    let getSel = document.querySelector(".pay_time")
    
    let finalText = document.createElement("p");
    let dividend, money1, checking = true, divi, lift, moneyFormatted, dividendFormatted;
  
    
    but1.addEventListener("click", ()=>{
        if (checking == false){ 
            divi.remove()
            finalText.remove()
        }
        checking = false;
        aler(startMoney1, divYield1, years1);
        let money = +startMoney1.value;
        let yield = +divYield1.value; 
        let growth = +divGrowth1.value;
        let tax = +taxes1.value;
        let m = 1;
        divi = document.createElement("div");
        divi.setAttribute("class", "resultTver")
        result.appendChild(divi);
        getResultYear.innerHTML = `Years`;
        money1 = money;
        if (startMoney1.value != "" && divYield1.value != ""){
           for (let i = 0; i < +years1.value; i++){
               dividend = (((money/100 * yield) + (money / 100 * yield) / 100 * growth)-(((money/100 * yield) + ((money / 100 * yield) / 100 * growth) / 100 * tax)))
            money1 += dividend;
            moneyFormatted = money1.toFixed(2);
            dividendFormatted = dividend.toFixed(2);
            divi.style.display = "inline";
            let resultyear = document.createElement("span");
            resultyear.innerHTML = `
            <span>${m}</span><span>${dividendFormatted}</span> <span>${moneyFormatted}</span>
            <br>`;
            divi.appendChild(resultyear);
            resultyear.style = `
            padding-left: 30px;
            box-sizing:border-box;
            display:flex;
            flex-direction:row;
            justify-content: space-around;`;
            m++
        }
        result.style.display = 'block';
        emptyValue(startMoney1, years1, startMoney, divYield, divGrowth, taxes, years);
    }
       
    });
    
    but.addEventListener("click", ()=>{
        if (checking == false){ 
        divi.remove()
        finalText.remove()
        getResultYear.innerHTML = ``;
        }
        checking = false;
        
        aler(startMoney, divYield, years);
        let money = +startMoney.value;
        let yield = +divYield.value; 
        let growth = +divGrowth.value;
        let tax = +taxes.value;
        let m = 1;
        divi = document.createElement("div");
        divi.setAttribute("class", "resultTver")
        result.appendChild(divi);
        
        if (getSel.value == "ann" && startMoney.value != "" && divYield.value != ""){
            getResultYear.innerHTML = `Years`;
            for (let i = 0; i < +years.value; i++){
                dividend = (((money/100 * yield) + (money / 100 * yield) / 100 * growth)-( ((money/100 * yield) + (money / 100 * yield) / 100 * growth) / 100 * tax))
                money = money + dividend;
                moneyFormatted = money.toFixed(2);
                dividendFormatted = dividend.toFixed(2);
                divi.style.display = "inline";
                let resultyear = document.createElement("span");
                resultyear.innerHTML = `
                <span>${m}</span><span>${dividendFormatted}</span> <span>${moneyFormatted}</span>
                <br>`;
                divi.appendChild(resultyear);
                resultyear.style = `
                    padding-left: 30px;
                    box-sizing:border-box;
                    display:flex;
                    flex-direction:row;
                    justify-content: space-around;`;
                m++
            };
            result.style.display = 'block';
            emptyValue(startMoney, years,  startMoney1, divYield1, divGrowth1, taxes1, years1);
        }
        if (getSel.value == "month" && startMoney.value != "" && divYield.value != ""){
            getResultYear.innerHTML = `Months`;
            let yearsM = +years.value * 12;
            yield = yield / 12;
            growth = growth / 12;
            for (let j = 0; j < yearsM; j++){
                    dividend = (((money/100 * yield) + (money / 100 * yield) / 100 * growth)-( ((money/100 * yield) + (money / 100 * yield) / 100 * growth) / 100 * tax))
                money = money + dividend;
                moneyFormatted = money.toFixed(2);
                dividendFormatted = dividend.toFixed(2);
                divi.style.display = "inline";
                let resultyear = document.createElement("span");
                resultyear.innerHTML = `
                <span>${m}</span><span>${dividendFormatted}</span> <span>${moneyFormatted}</span>
                <br>`;
                divi.appendChild(resultyear);
                resultyear.style = `
                    padding-left: 30px;
                    box-sizing:border-box;
                    display:flex;
                    flex-direction:row;
                    justify-content: space-around;`;
                m++
            }
            result.style.display = 'block';
            emptyValue(startMoney, years,  startMoney1, divYield1, divGrowth1, taxes1, years1);
        }
            if (getSel.value == "quar" && startMoney.value != "" && divYield.value != ""){
                getResultYear.innerHTML = `Quarters`;
                 let yearsQ = +years.value * 4;
                 yield = yield / 4;
                 growth = growth / 4;
                 for (let j = 0; j < yearsQ; j++){
                         dividend = (((money/100 * yield) + (money / 100 * yield) / 100 * growth)-( ((money/100 * yield) + (money / 100 * yield) / 100 * growth) / 100 * tax))
                     money = money + dividend;
 
                     moneyFormatted = money.toFixed(2);
                     dividendFormatted = dividend.toFixed(2);
                     divi.style.display = "inline";
                     let resultyear = document.createElement("span");
                     resultyear.innerHTML = `
                     <span>${m}</span><span>${dividendFormatted}</span> <span>${moneyFormatted}</span>
                     <br>`;
                     divi.appendChild(resultyear);
                     resultyear.style = `
                        padding-left: 30px;
                        box-sizing:border-box;
                         display:flex;
                         flex-direction:row;
                         justify-content: space-around;`;
                     m++
                 }
                 result.style.display = 'block';
                 emptyValue(startMoney, years,  startMoney1, divYield1, divGrowth1, taxes1, years1);
            }
    });
    lift = document.createElement("a");
    lift.setAttribute("id", "pop");
    result.appendChild(lift);

    newStart.addEventListener("click", ()=>{
       location.reload()
    });
    simple.addEventListener("click", ()=>{
        simpleCalc.style.display = 'block';
        usefuld.style.display = 'block';
        simple.style.display = 'none';
        drip.style.display = 'none';
        note.style.display = 'block';
    });
    drip.addEventListener("click", ()=>{
        dripCalc.style.display = 'block';
        usefuld.style.display = 'block';
        simple.style.display = 'none';
        drip.style.display = 'none';
        note.style.display = 'block';
    });

    function aler(a, b, c) {
        if (a.value == "" ){
            alert("Please input the Starting Principal");
        }
        if (b.value == ""){
            alert("Please input the Dividend Yield")
        }
        if(c.value == ""){
            alert("Please input the amount of years you are going to hold")
        }
    }
    function emptyValue(startMoney, years,  startMoney1, divYield1, divGrowth1, taxes1, years1){
       finalResult.innerHTML = ` You started with <i>${startMoney.value}$</i> and ended up with <i>${moneyFormatted}$</i>. 
       <br> This was over <i>${years.value} years.</i>`;
        startMoney1.value= "";
        divYield1.value = "";
        divGrowth1.value ="";
        taxes1.value = "";
        years1.value = "";
    }
  


    
  

