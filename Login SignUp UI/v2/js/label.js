var inputBoxes = document.querySelectorAll('.inputbox2 input');

for (var i = 0; i < inputBoxes.length; i++){
    inputBoxes[i].addEventListener('focus', function (){

        var inputBox = this.parentNode;
        var lab = inputBox.querySelector('label');

        inputBox.style.marginTop = "10%";
        lab.style.top = "-50%";
        lab.style.color = "rgb(53, 208, 255)";
    });

    inputBoxes[i].addEventListener('blur', function (){

        var inputBox = this.parentNode;
        var lab = inputBox.querySelector('label');

        if (this.value === ''){
            inputBox.style.marginTop = "0%";
            lab.style.top = "30%";
            lab.style.color = "rgb(0, 0, 0)";
        }
        else{
            lab.style.color = "rgb(0, 255, 0)";
        }
    });
}
