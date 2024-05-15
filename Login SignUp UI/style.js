const signupUI = document.querySelectorAll(".signupUI");
const loginUI_But = document.querySelectorAll(".loginUI");
const loginForm = document.querySelector(".loginForm");
const signupForm = document.querySelector(".signupForm");

signupUI.forEach(function(button){
    button.addEventListener("click", function(){
        loginForm.style.display = "none";
        signupForm.style.display = "flex";

        signupForm.style.minWidth = "0px";
        zoomAnima(signupForm);
        signupForm.style.minWidth = "200px";
    });
});

loginUI_But.forEach(function(button){
    button.addEventListener("click", function(){
        loginForm.style.display = "flex";
        signupForm.style.display = "none";

        loginForm.style.minWidth = "0px";
        zoomAnima(loginForm);
        loginForm.style.minWidth = "200px";
    });
});

function zoomAnima(element){
    let i = 0;
    function animate(){
        i += 0.1;
        if(i <= 1.1){
            const transform = "scale(" + i + ")";
            element.style.transform = transform;
            setTimeout(animate, 3);
        }else{
            setTimeout(function(){
                element.style.transform ="scale(1)"
            }, 500);
        }
    }
    animate();
}