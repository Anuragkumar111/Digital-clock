function setTime() {
    let today = new Date();

    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let p = "AM";

    p = (h < 12) ? "AM" : "PM";
    h = (h == 0) ? 12 : ((h > 12) ? h-12 : h);
    h = Modify(h);
    s = Modify(s);
    m = Modify(m)

    document.querySelector('#time').innerHTML = h + " : " + m;
    document.querySelector('#sec').innerHTML = s;
    document.querySelector('#period').innerHTML = p;
}

function setDate(){
    let today = new Date();

    let mon = today.getMonth();
    let year = today.getFullYear();
    let curr_date = today.getDate();

    const date = document.querySelector('#fullDate');

    const months = ['January','Febuary','March','April','May','June','July','August','September','October','November','December'];

    curr_date = Modify(curr_date);

    date.innerHTML = months[mon] + " " + curr_date + ", " + year; 
    date.style.padding = '65px';
}

function Modify(k){
    if(k < 10)
        return k = '0' + k;
    return k;
}


function setDay(){
    let today = new Date();

    let day = today.getDay();

    const show = document.querySelectorAll('.day span');
    show[day].style.opacity = '1';
    show[day].style.fontWeight = 'bold';
    show[day].classList.toggle('textColor');
}

function clock(){
    setTime();
    setInterval(() => {
        setCurrentDateTime();
    }, 1000);

    setDay();
    setDate();
    setInterval(() => {
        setDay();
        setDate();
    }, 1000 * 60 * 60 * 24)
}

clock();
