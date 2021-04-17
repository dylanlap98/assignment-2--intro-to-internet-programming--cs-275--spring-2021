function setup() {
    let button1 = document.getElementById('caliRiceButton');
    let button2 = document.getElementById('whiteRiceButton');
    let recipe1 = document.getElementsByClassName('sprouted-california-rice')[0];
    let recipe2 = document.getElementsByClassName('white-rice')[0];
    recipe1.style.display = 'none';
    recipe2.style.display = 'none';

    button1.onclick = function textCaliRice() {
        recipe1.style.display = 'block';
        recipe2.style.display = 'none';
    }

    button2.onclick = function whiteRice() {
        recipe1.style.display = 'none';
        recipe2.style.display = 'block';
    }
}



// function() function textCaliRice() {
//     alert('Cali Rice!');
// }


function run() {
    let input = document.getElementById('input');
    input.addEventListener('input', () => {
    let cupsOfRice = input.value
    calculate(cupsOfRice);
}, false);

}

function calculate(cupsOfRice) {
    let cupsOfWater = cupsOfRice * 1.6;
    console.log(cupsOfWater);

    let output = document.getElementById('output');
    output.innerHTML = cupsOfWater;
}


