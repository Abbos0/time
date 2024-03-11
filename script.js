const Week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
function Timeline() {
    var now = new Date();
    document.getElementById("date").innerHTML =
        now.getFullYear() + "-" +
        now.toLocaleString('en-US', { month: '2-digit' }) + "-" +
        (String(now.getDate()).padStart(2, '0')) + " " +
        Week[now.getDay()];

    document.getElementById("time").innerHTML =
        (String(now.getHours() > 12 ? (now.getHours() - 12) : (now.getHours() === 0 ? 12 : now.getHours())).padStart(2, '0')) + " - " +
        (String(now.getMinutes()).padStart(2, '0')) + " - " +
        (String(now.getSeconds()).padStart(2, '0')) +
        (now.getHours() >= 12 ? " pm" : " am");
}

setInterval(Timeline, 1000);





// const Week = ["SUN","MON","TUE","WED","THU","FRI","SAT"]


// function Timeline(){
//     var now = new Date()


//     document.getElementById("date").innerHTML =
//     now.getFullYear() + "-" +
//     now.getMonth() + "-" +
//     now.getDate() + " " +
//     Week[now.getDay()];


//     document.getElementById("time").innerHTML =
//     (now.getHours() >12 ? (now.getHours() -12) :   "0" + now.getHours()) + " - " +
//     (now.getMinutes() >=10 ? now.getMinutes() : "0" + now.getMinutes() ) + " - " +
//     (now.getSeconds() >=10 ? now.getSeconds() : "0" + now.getSeconds()) + 
//     (now.getHours() >=12 ? "    pm" : "   am");
    
// }

// setInterval(Timeline,1000)