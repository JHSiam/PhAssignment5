
//Donation function added

document.getElementById('don-btn-noakhali').addEventListener('click', function(){
    donMoney=getValueById('inp-don-noakhali');
    pevMoney=getInnerTextById('tot-don-noakhali');
    accountBalance=getInnerTextById('ac-balance');

    if (donMoney === "") {
        alert('Donation amount cannot be empty');
        return;
    }

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


    //adding history

    const div = document.createElement('div');
    const currentDate = new Date().toString();

    div.innerHTML=`
        <div class="p-[32px] border-2 border-[#B7B7B7] rounded-xl mb-[20px]">
                <h2 class="font-bold text-2xl">${donMoney} Taka is Donate for Flood at Noakhali, Bangladesh</h2><br>
                <p>Date: ${currentDate}</p>

            </div>
    `

    document.getElementById('hist-main-page').appendChild(div);
        
    //addind popup modal
    const modal = document.getElementById('donationModal');
    modal.classList.remove('hidden');
});

document.getElementById('don-btn-feni').addEventListener('click', function(){
    donMoney=getValueById('inp-don-feni');
    pevMoney=getInnerTextById('tot-don-feni');
    accountBalance=getInnerTextById('ac-balance');

    if (donMoney === "") {
        alert('Donation amount cannot be empty');
        return;
    }

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

    //adding history

    const div = document.createElement('div');
    const currentDate = new Date().toString();

    div.innerHTML=`
        <div class="p-[32px] border-2 border-[#B7B7B7] rounded-xl mb-[20px]">
                <h2 class="font-bold text-2xl">${donMoney} Taka is Donate for Flood Relief in Feni,Bangladesh</h2><br>
                <p>Date: ${currentDate}</p>

            </div>
    `

    document.getElementById('hist-main-page').appendChild(div);
        
    //addind popup modal
    const modal = document.getElementById('donationModal');
    modal.classList.remove('hidden');


})


document.getElementById('don-btn-pro').addEventListener('click', function(){
    donMoney=getValueById('inp-don-pro');
    pevMoney=getInnerTextById('tot-don-pro');
    accountBalance=getInnerTextById('ac-balance');

    if (donMoney === "") {
        alert('Donation amount cannot be empty');
        return;
    }


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


    //adding history

    const div = document.createElement('div');
    const currentDate = new Date().toString();

    div.innerHTML=`
        <div class="p-[32px] border-2 border-[#B7B7B7] rounded-xl mb-[20px]">
                <h2 class="font-bold text-2xl">${donMoney} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh</h2><br>
                <p>Date: ${currentDate}</p>

            </div>
    `

    document.getElementById('hist-main-page').appendChild(div);
        
    //addind popup modal
    const modal = document.getElementById('donationModal');
    modal.classList.remove('hidden');


})


// modal closing
document.getElementById('closeModal').addEventListener('click', function() {
    const modal = document.getElementById('donationModal');
    modal.classList.add('hidden');


})



//Donation and History btn function

document.getElementById('don-btn').addEventListener('click', function(){

    document.getElementById('don-btn').classList.add('bg-[#B4F461]')
    document.getElementById('don-btn').classList.remove('border-2')
    document.getElementById('don-btn').classList.remove('border-[#B7B7B7]')

    document.getElementById('hist-btn').classList.remove('bg-[#B4F461]')
    document.getElementById('hist-btn').classList.add('border-2')
    document.getElementById('hist-btn').classList.add('border-[#B7B7B7]')

    

    

    const donMainPage= document.getElementById('don-main-page');
    const histPage = document.getElementById('hist-main-page');
    donMainPage.classList.remove('hidden');
    histPage.classList.add('hidden');
    
})


document.getElementById('hist-btn').addEventListener('click', function(){

    document.getElementById('don-btn').classList.remove('bg-[#B4F461]')
    document.getElementById('don-btn').classList.add('border-2')
    document.getElementById('don-btn').classList.add('border-[#B7B7B7]')


    document.getElementById('hist-btn').classList.add('bg-[#B4F461]')
    document.getElementById('hist-btn').classList.remove('border-2')
    document.getElementById('hist-btn').classList.remove('border-[#B7B7B7]')

    const donMainPage= document.getElementById('don-main-page');
    const histPage = document.getElementById('hist-main-page');
    donMainPage.classList.add('hidden');
    histPage.classList.remove('hidden');
    
})


//Blog btn

document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = 'blog.html';
})





