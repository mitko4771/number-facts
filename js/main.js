window.onload = () => {
    let output = document.querySelector('#output');
    let factText = document.querySelector('#factText');

    let numberInput = document.querySelector('#numberInput');

    numberInput.addEventListener('input', getFact);

    function getFact() {
        let number = numberInput.value;
        let xhr = new XMLHttpRequest();

        xhr.open('GET', 'http://numbersapi.com/' + number);

        xhr.onload = function() {
            if(this.status === 200 && number !== '') {
                output.style.display = 'block';
                factText.innerText = this.responseText;
            }

            if(number === '') {
                output.style.display = 'none';
            }
        }

        xhr.send();
    }
    
    /*
        uncomment the code bellow and comment upper function
        to use getFacts() with FETCH
    */

    // function getFact() {
    //     let number = numberInput.value;

    //     fetch('http://numbersapi.com/' + number)
    //         .then(response => response.text())
    //         .then(data => {
    //             if(number !== '') {
    //                 output.style.display = 'block';
    //                 factText.innerText = data;
    //             }

    //             if(number === '') {
    //                 output.style.display = 'none';
    //                 factText.innerText = data;
    //             }
    //         })
    //         .catch(err => console.log(err))
    // }


    // function resize margin left and right of the main
    
    window.addEventListener('resize', () => {
        let widthSize = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;
        let main = document.getElementsByTagName('main');

        main[0].style.marginLeft = widthSize / 10 + 'px';
        main[0].style.marginRight = widthSize / 10 + 'px';

        if(widthSize === 304) {
            main[0].style.marginLeft = 0;
            main[0].style.marginRight = 0;
        }

    });

    // function  set different color every time when enter a number
    
    document.getElementById('numberInput').addEventListener('input', setRandomColor);

    function setRandomColor() {
        document.getElementById('factText').style.color = getRandomColor();
    }

    function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let hash = '#';
        let colorLetter = document.getElementById('factText');
        
        for(let i = 0; i < 6; i++) {
            hash += letters[Math.floor(Math.random() * 16)];
            if(hash !== '#000000') {
                colorLetter.style.textShadow = '1px 1px #000';
            }
        }

        return hash;
    }
}
