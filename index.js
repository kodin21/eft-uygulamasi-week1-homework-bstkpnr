// import { name } from './example-other-file';


// console.log('Javascriptinizi buraya yazabilirsiniz')

// // Baska dosyadan calistirmak mumkun, dosyalari parcalamaktan korkmayin!
// // name
const accounts = [
  {
    iban: "trxx yyyy xxxx yyyy",
    balance: 100,
  },
  {
    iban: "trxx yyyy xxxx yyyx",
    balance: 5040,
  },
  {
    iban: "trxx yyyy xxxx xyyx",
    balance: 10594,
  },
];
let sendMoney = 0;
let balance = 0;
var dropdown = document.getElementById("bankAccount");
 dropdown && accounts.forEach(function (e) {
  var account_number = `Hesap No: ${e.iban} - Bakiye: ${e.balance} £`;
     var accounts = document.createElement("option");
     accounts.innerText = account_number;
     dropdown.appendChild(accounts);
     activeButton();
});

function activeButton() {
  if (sendMoney && balance) {
    document.getElementById("sendAccount").disabled = false;
  } else {
    document.getElementById("sendAccount").diabled = true;
  }
}
let interval;
function startTimer(duration, display) {
  let start = Date.now(),
    diff =null,
    minutes=null,
    seconds=null;

  function timer() {
    diff = duration - (((Date.now() - start) / 1000) | 0);
    minutes = (diff / 60) | 0;
    seconds = diff % 60 | 0;

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display &&  (display.textContent = minutes + ":" + seconds);


    if (minutes == 0 && seconds == 0) {
      clearInterval(interval);
      alert("SÜRE BİTTİ ");
      setTimeout(function(){
        location.href='index.html'
      },1000);
    } 
  }
  interval=setInterval(timer, 120);
}
window.onload = function () {
  var twoMinutes = 60 * 2;
  display = document.querySelector("#time");
  startTimer(twoMinutes, display);
};
let sendAccount=document.getElementById('sendAccount');
sendAccount && sendAccount.addEventListener('click',function () {
  document.querySelector('#aliciIban').value="";
  setTimeout(function () {
    location.href = "index2.html";
    console.log("Basıldı", sendAccount);
  });
})
  

var counter = 0;
function enter() {
  var pasword = document.getElementById("sifre").value;

  if (pasword.length == 4) {
    if (pasword === "1234") {
      alert("Başarılı");
    }else
        alert("ŞİFRE HATALI !!!");
        return;
      
    }
  }

