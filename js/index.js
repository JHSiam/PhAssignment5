document.getElementById('don-btn-noakhali').addEventListener('click', function(){
    donMoney=getValueById('inp-don-noakhali');
    pevMoney=getInnerTextById('tot-don-noakhali');
    accountBalance=getInnerTextById('ac-balance');


    if(isNaN(donMoney) || parseFloat(donMoney)<0){
        alert('Failed to donate');
        return;
    }

    if(parseFloat(donMoney)>parseFloat(accountBalance)){
        alert('You dont have enough money');
        return;
    }

    const totMoney =parseFloat(donMoney)+parseFloat(pevMoney);
    const remMoney = parseFloat(accountBalance)-parseFloat(donMoney);
    setInnerTextById('tot-don-noakhali',totMoney);
    setInnerTextById('ac-balance', remMoney);


})



document.getElementById('don-btn-feni').addEventListener('click', function(){
    donMoney=getValueById('inp-don-feni');
    pevMoney=getInnerTextById('tot-don-feni');
    accountBalance=getInnerTextById('ac-balance');


    if(isNaN(donMoney) || parseFloat(donMoney)<0){
        alert('Failed to donate');
        return;
    }

    if(parseFloat(donMoney)>parseFloat(accountBalance)){
        alert('You dont have enough money');
        return;
    }

    const totMoney =parseFloat(donMoney)+parseFloat(pevMoney);
    const remMoney = parseFloat(accountBalance)-parseFloat(donMoney);
    setInnerTextById('tot-don-feni',totMoney);
    setInnerTextById('ac-balance', remMoney);


})


document.getElementById('don-btn-pro').addEventListener('click', function(){
    donMoney=getValueById('inp-don-pro');
    pevMoney=getInnerTextById('tot-don-pro');
    accountBalance=getInnerTextById('ac-balance');


    if(isNaN(donMoney) || parseFloat(donMoney)<0){
        alert('Failed to donate');
        return;
    }

    if(parseFloat(donMoney)>parseFloat(accountBalance)){
        alert('You dont have enough money');
        return;
    }

    const totMoney =parseFloat(donMoney)+parseFloat(pevMoney);
    const remMoney = parseFloat(accountBalance)-parseFloat(donMoney);
    setInnerTextById('tot-don-pro',totMoney);
    setInnerTextById('ac-balance', remMoney);


})