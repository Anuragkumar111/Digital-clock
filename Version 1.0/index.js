function setDateTime() {
    let today = new Date();

    let hr = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    let period = "AM";

    let day = today.getDay();
    let mon = today.getMonth();
    let date = today.getDate();
    let year = today.getFullYear();

    const setDate = document.querySelector('.day');
    const setTime = document.querySelector('.time');
    

    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const weekDays = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

    if(date < 10)
        date = "0" + date;

    setDate.innerHTML = weekDays[day] + "," + months[mon+1] + " " + date + "," + year;


    if(hr == 0)
        hr = 12;
    if(hr > 12){
        hr = hr - 12;
        period = "PM"
    }
    hr = (hr < 10) ? "0" + hr : hr;
    min = (min < 10) ? "0" +min :min;
    sec = (sec < 10) ? "0" + sec : sec;

    setTime.innerHTML = hr + ":" + min + ":" + sec + " " + period ;

}
setDateTime();
setInterval(() => {
    setDateTime();
}, 1000);