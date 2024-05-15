let buts = document.querySelectorAll(".butbox button");
let inputbox2s = document.querySelectorAll(".inputbox2");
let logindiv = document.querySelector(".login");

let n = 1;

let sText = [
    ["UserNA", "UserEM", "UserPW", "UserPWr"],
    ["UserEM", "UserPW", "", ""],
    ["使用者名稱", "電子郵件", "密碼", "重複密碼"],
    ["電子郵件", "密碼", "", ""],
    ["block", "block", "block", "block"],
    ["block", "block", "none", "none"]
];

let titleText = ["Signup", "Login"];

buts.forEach(function(but){
    but.addEventListener("click", function(){
        if(but.id == "swbut"){
            logindiv.style.transform = "scale(0)";

            setTimeout(function(){
                if(but.textContent == "註冊"){
                UIinit();
                UIsw(n);

                buts[0].textContent = "註冊"; buts[0].id = "signupbut";
                buts[1].textContent = "登入";

                n = 2;
                }
                else if(but.textContent == "登入"){
                    UIinit();
                    UIsw(n);

                    buts[0].textContent = "登入"; buts[0].id = "loginbut";
                    buts[1].textContent = "註冊";

                    n = 1;
                }

                zoomAnima(logindiv);
            }, 210);
        }
    });
});

function UIinit(){
    inputbox2s.forEach(function(elem){
        elem.style.marginTop = "0%";
        elem.querySelector("input").value = "";
        elem.querySelector("label").style = "color: rgb(0, 0, 0); top: 0.5vw;";
    });
}

function UIsw(n){
    document.querySelector(".title h1").textContent = titleText[n - 1];

    inputbox2s.forEach(function(elem, index){
        elem.querySelector("input").name =          sText[(n - 1)][index];
        elem.querySelector("label").textContent =   sText[(n - 1) + 2][index];
        elem.style.display =                        sText[(n - 1) + 4][index];
    });
}

function zoomAnima(element){
    let i = 0;

    function animate(){
        if(i <= 1.1){
            const transform = "scale(" + i + ")";
            element.style.transform = transform;
            i += 0.1;
            setTimeout(animate, 3);
        }else{
            setTimeout(function(){
                element.style.transform ="scale(1)"
            }, 300);
        }
    }
    animate();
}