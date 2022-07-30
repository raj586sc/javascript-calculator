let sreenValue = document.querySelector('.input')
let inputValue = "";

const btnSign = document.querySelectorAll('.btn');
for (let i of btnSign) {
    i.addEventListener('click', () => {
        let btntext = i.innerText;
        console.log(btntext)
        if (btntext == 'x') {
            inputValue += '*';
            inputValue += btntext;
            inputValue = inputValue.substring(0, inputValue.length - 1);
            sreenValue.innerText = `${inputValue}`
        }
        else if (btntext === '=') {
            inputValue = inputValue
            inputValue = eval(inputValue);
            sreenValue.innerText = inputValue;
        }
        else if (btntext === 'AC') {
            inputValue = ''
            sreenValue.innerText = inputValue
        }
        else if (btntext === 'Del') {
            inputValue = inputValue.substring(0, inputValue.length - 1);
            inputValue
            sreenValue.innerText = `${inputValue}`
        }
        else if (btntext !== '=' && btntext !== 'Del' && btntext !== 'AC') {
            inputValue += btntext;
            sreenValue.innerText = `${inputValue}`
        }


    })
}