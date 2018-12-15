
let cooler = document.querySelector('.cooler');
let spiral = document.querySelector('.spiral');
let rele1 = document.querySelector('.rele1');
let rele2 = document.querySelector('.rele2');

let range = document.querySelectorAll('.nav-item-input');
let spanCurrTemp = document.getElementById('currTemp');

range.forEach(item => {
    item.addEventListener('change', (e) => {
        let currTemp = e.target.value
        switch(item.dataset.id) {
            case 'temp':
                spanCurrTemp.innerText = `${currTemp} deg`
                thermostatLogic()
                break
            case 'rele1':
                rele1.innerText = `${currTemp} deg`
                break
            case 'rele2':
                rele2.innerText = `${currTemp} deg`
                break
        }
    })
})

let thermostatLogic = () => {
    let tempInputList = document.querySelectorAll('.nav-item-input')
    let indicatorList = document.querySelectorAll('.indicator')
    let rele1State = document.querySelector('.rele1State')
    let rele2State = document.querySelector('.rele2State')

    if (tempInputList[0].value >= tempInputList[1].value) {
        indicatorList[0].style.cssText = 'background-color: #ff0300'
        rele1State.innerText = 'On'
        if(indicatorList[0].style.backgroundColor === 'rgb(255, 3, 0)') {
            cooler.classList.add('cooler-active');
        } else {
            cooler.classList.remove('cooler-active')
        }
        indicatorList[1].style.cssText = 'background-color: #ff0300'
        rele2State.innerText = 'On'
    } else {
        indicatorList[0].style.cssText = 'background-color: #000000'
        rele1State.innerText = 'Off'
        if(indicatorList[0].style.backgroundColor === 'rgb(255, 3, 0)') {
            cooler.classList.add('cooler-active');
        } else {
            cooler.classList.remove('cooler-active')
        }
        indicatorList[1].style.cssText = 'background-color: #000000'
        rele2State.innerText = 'Off'
    }
    if (tempInputList[0].value >= tempInputList[2].value) {
        indicatorList[1].style.cssText = 'background-color: #ff0300'
        rele2State.innerText = 'On'
        if(indicatorList[1].style.backgroundColor === 'rgb(255, 3, 0)') {
            spiral.style.cssText = 'visibility: visible; opacity: 1; z-index: 2';
        } else {
            spiral.style.cssText = 'visibility: hidden; opacity: 0; z-index: -1';
        }
    } else {
        indicatorList[1].style.cssText = 'background-color: #000000'
        rele2State.innerText = 'Off'
        if(indicatorList[1].style.backgroundColor === 'rgb(255, 3, 0)') {
            spiral.style.cssText = 'visibility: visible; opacity: 1; z-index: 2';
        } else {
            spiral.style.cssText = 'visibility: hidden; opacity: 0; z-index: -1';
        }

    }

}