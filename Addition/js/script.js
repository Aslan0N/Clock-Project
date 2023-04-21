const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

setInterval(() => {
    let time = new Date 
    hr.innerHTML = time.getHours();
    mn.innerHTML = time.getMinutes();
    sc.innerHTML = time.getSeconds();

    if(hr.innerHTML < 10){
        hr.innerHTML = "0" + time.getHours()
    }
    if(mn.innerHTML < 10){
        mn.innerHTML = "0" + time.getMinutes()
    }
    if(sc.innerHTML < 10){
        sc.innerHTML = "0" + time.getSeconds()
    }
},);