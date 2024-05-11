const messages = ["Make yourself familiar with the equipments by hovering over them.",
   "Press on the next button.",
   "Press ON button on the weighing machine.",
   "Place S1 beaker on the weighing machine.",
   "Press tare button.",
   "Open the cap of protein isolate bottle",
   "Pick up spatula and measure 1g protein.",
   "Click on the S1 beaker",
   "Click on S2 beaker!",
   "Press tare button.",
   "Pick up spatula to measure 2g protein .",
   "Click on the S2 beaker.",
   "Click on the S3 beaker to put it on weighing machine.",
   "Press tare button .",
   "Click spatula to measure 3g protein.",
   "Click on S3 beaker." ,
   "Click on S4 beaker to put it on weighing machine.",
   "Press tare button." ,
   "Click spatula to measure 4g protein.",
   "Click on S4 beaker.",
   "Click on S5 beaker to put it on weighing machine.",
   "Press tare button",
   "Click on spatula to measure 5g protein!",
   "Click on S5 beaker.",
   "Press on the next button",
   "Click on cylinder to pour 50ml water in S1 beaker",
   "Click on cylinder to pour 50ml water in S2 beaker",
   "Click on cylinder to pour 50ml water in S3 beaker",
   "Click on cylinder to pour 50ml water in S4 beaker",
   "Click on cylinder to pour 50ml water in S5 beaker",
   "Press on the next button",
   "Click on the ON button on the whipping machine ",
   "Click on S1 beaker to foam the protein.",
   "Click on foamed S1 beaker after foaming",
   "Click on S2 beaker to foam the protein",
   "Click on foamed S2 beaker after foaming ",
   "Click S3 beaker for foaming",
   "Click on foamed S3 beaker after foaming",
   "Click on S4 beaker to foam the protein!",
   "Click on foamed S4 beaker after foaming",
   "Click on S5 beaker to foam it",
   "Click on foamed S5 beaker after foaming",
   "Press OFF button on the whipping machine",
   "Press on next button",
   "Pour S1 foam in cylinder and measure volume",
   "Pour S2 foam in cylinder and measure volume ",
   "Pour S3 foam in cylinder and measure volume",
   "Pour S4 foam in cylinder and measure volume",
   "Pour S5 foam in cylinder and measure volume",
   "Record the volumes again after few seconds( note:1hr in real)",
   "Press on the next button",
   "Enter your calculated foaming capacity and stability and press check button",
   "Press the next button"
];

const messagesh=["उपकरणों के ऊपर माउस ले जाकर स्वयं को उनसे परिचित कराएं।",
"वजन मशीन पर ऑन बटन दबाएँ।",
   "वजन मशीन पर S1 बीकर रखें।",
   "टायर बटन दबाएँ।",
   "प्रोटीन आइसोलेट बोतल का ढक्कन खोलें",
   "स्पैटुला उठाएँ और 1 ग्राम प्रोटीन मापें।",
   "S1 बीकर पर क्लिक करें",
   "S2 बीकर पर क्लिक करें!",
   "टायर बटन दबाएँ।",
   "2 ग्राम प्रोटीन मापने के लिए स्पैटुला उठाएँ।",
   "S2 बीकर पर क्लिक करें।",
   "वेइंग मशीन पर रखने के लिए S3 बीकर पर क्लिक करें।",
   "टायर बटन दबाएँ।",
   "3जी प्रोटीन मापने के लिए स्पैटुला पर क्लिक करें।",
   "S3 बीकर पर क्लिक करें।" ,
   "वेइंग मशीन पर रखने के लिए S4 बीकर पर क्लिक करें।",
   "टायर बटन दबाएँ।" ,
   "4 ग्राम प्रोटीन मापने के लिए स्पैटुला पर क्लिक करें।",
   "S4 बीकर पर क्लिक करें।",
   "वेइंग मशीन पर रखने के लिए S5 बीकर पर क्लिक करें।",
   "टायर बटन दबाएँ",
   "5 ग्राम प्रोटीन मापने के लिए स्पैटुला पर क्लिक करें!",
   "S5 बीकर पर क्लिक करें।",
   "अगला बटन दबाएँ",
   "S1 बीकर में 50ml पानी डालने के लिए सिलेंडर पर क्लिक करें",
   "S2 बीकर में 50ml पानी डालने के लिए सिलेंडर पर क्लिक करें",
   "S3 बीकर में 50ml पानी डालने के लिए सिलेंडर पर क्लिक करें",
   "S4 बीकर में 50ml पानी डालने के लिए सिलेंडर पर क्लिक करें",
   "S5 बीकर में 50ml पानी डालने के लिए सिलेंडर पर क्लिक करें",
   "अगला बटन दबाएँ",
   "व्हिपिंग मशीन पर ऑन बटन पर क्लिक करें",
   "प्रोटीन को फोम करने के लिए S1 बीकर पर क्लिक करें।",
   "फोमिंग के बाद फोमयुक्त S1 बीकर पर क्लिक करें",
   "प्रोटीन को फोम करने के लिए S2 बीकर पर क्लिक करें",
   "फोम बनने के बाद फोमयुक्त S2 बीकर पर क्लिक करें",
   "फोमिंग के लिए S3 बीकर पर क्लिक करें",
   "फोमिंग के बाद फोमयुक्त S3 बीकर पर क्लिक करें",
   "प्रोटीन को फोम करने के लिए S4 बीकर पर क्लिक करें!",
   "फोमिंग के बाद फोमयुक्त S4 बीकर पर क्लिक करें",
   "इसे फोम करने के लिए S5 बीकर पर क्लिक करें",
   "फोमिंग के बाद फोमयुक्त S5 बीकर पर क्लिक करें",
   "व्हिपिंग मशीन पर ऑफ बटन दबाएं",
   "अगला बटन दबाएँ",
   "सिलेंडर में S1 फोम डालें और आयतन मापें",
   "सिलेंडर में S2 फोम डालें और आयतन मापें",
   "सिलेंडर में S3 फोम डालें और आयतन मापें",
   "सिलेंडर में S4 फोम डालें और आयतन मापें",
   "सिलेंडर में S5 फोम डालें और आयतन मापें",
   "कुछ सेकंड के बाद फिर से वॉल्यूम रिकॉर्ड करें (नोट: वास्तविक रूप से 1 घंटा)",
   "अगला बटन दबाएँ",
   "अपनी गणना की गई फोमिंग क्षमता और स्थिरता दर्ज करें और चेक बटन दबाएं",
   "अगला बटन दबाएँ"
];

var hindibtn = document.querySelector("#hindi")
var engbtn = document.querySelector("#eng")
var langselector = document.querySelector("#langselector")
var mes1  
  
var counter=0

var lang
function hindi1(){
    console.log(lang)
    lang="hindi"
    langselector.style.visibility="hidden"
    update()
}

function eng1(){
    console.log(lang)
    lang="eng"
    langselector.style.visibility="hidden"
    update() 
}



function speech1(){
    if(lang=="hindi"){
        mes1=messagesh[counter-1]
        console.log(mes1)
    }
    else if(lang=="eng"){
        mes1=messages[counter-1]
        console.log(mes1)
    }
    setTimeout(function(){ 
        const utterance = new SpeechSynthesisUtterance(mes1);
        utterance.lang = 'en-EN';
        utterance.pitch=1;
        utterance.rate=1;
        utterance.volume=1;
        speechSynthesis.speak(utterance);
    },500)
}


    var inst=document.querySelector("#message")
     inst.innerText=messages[counter]
     function update(){
      console.log(messages[counter].charAt())
      if(lang=="hindi"){
          inst.innerText=messagesh[counter]
      }
      else if(lang=="eng"){
          inst.innerText=messages[counter];
        }
      counter+=1
      speech1()
  }
   
  var sgm=document.querySelector("#sgm")
  var gm=document.querySelector("#gm")
  var i1=document.querySelector("#i1")
  var i2=document.querySelector("#i2")
  var i3=document.querySelector("#i3")
  var i4=document.querySelector("#i4")
  var i5=document.querySelector("#i5")
  var FC=document.querySelector("#FC")
  var FS=document.querySelector("#FS")
 var end=document.querySelector("#end")
  var pipe=document.querySelector("#pipe")
  var d=document.querySelector("#stir")
  var onb=document.querySelector("#onb")
  var offb=document.querySelector("#offb")
  var tareb =document.querySelector("#tareb")
  var wm=document.querySelector("#wm")
  var cylin = document.querySelector("#cylin")
  var cylinsol = document.querySelector("#cylinsol")
//   var p=document.querySelector("#petri")


  function nxt(){
    if(f==0){                                  //yahan hover step hide hoga //
       

    hs1.style.visibility="hidden"
    hs2.style.visibility="hidden"      
    hs3.style.visibility="hidden"
    hs4.style.visibility="hidden"
    hs5.style.visibility="hidden"
    hwm.style.visibility="hidden"
    hmachine.style.visibility="hidden"
    hspatula.style.visibility="hidden"
    hpowder.style.visibility="hidden"
    hcylinder.style.visibility="hidden"
    cylin.style.visibility="hidden"
    introwhip.style.visibility="hidden"
    ye1.style.visibility="hidden"
    yyy.style.visibility="hidden"
    // b1.style.visibility="hidden"
    // b2.style.visibility="hidden"
    // b3.style.visibility="hidden"
    // b4.style.visibility="hidden"
    // b5.style.visibility="hidden"
    emp1.style.visibility="visible"
    emp2.style.visibility="visible"
    emp3.style.visibility="visible"
    emp4.style.visibility="visible"
    emp5.style.visibility="visible"
    bottle.style.visibility="visible"
    cylinsol.style.visibility="hidden"
    // water1.style.visibility="hidden"
    
     cylin.style.visibility="hidden"
     update();
    }

     if(f==22){
        ye1.style.visibility="hidden"
        yyy.style.visibility="hidden"
       wm.style.visibility ="hidden"
       offb.style.visibility ="hidden"
       tareb.style.visibility ="hidden"
       onb.style.visibility ="hidden"
       number.style.visibility ="hidden"
       bottle.style.transitionDuration="0s"
       bottle.style.visibility ="hidden"
       cap.style.visibility="hidden"
       cap.style.transitionDuration="0s"
       sgm.style.visibility ="hidden"
       spatula.style.visibility ="hidden"
       spatula.style.transitionDuration="0s"
       spatula2.style.visibility ="hidden"
       spatula2.style.transitionDuration="0s"
       cylinsol.style.visibility="visible";
       cylinder.style.visibility="visible";
       update();
    }

       if(f==28){/*dtep3*/
      b1.style.visibility="visible"
      b2.style.visibility="visible"
      b3.style.visibility="visible"
      b4.style.visibility="visible"
      b5.style.visibility="visible"
      cylinsol.style.visibility="hidden";
      cylinsol.style.transitionDuration="0s"
      cylinder.style.visibility="hidden";
      cylinder.style.transitionDuration="0s"
      whipmachine.style.visibility="visible";
      pipe.style.visibility="visible";
      ye1.style.visibility="visible"
      yyy.style.visibility="hidden"
      update();
     }

     if(f==41){/*dtep4*/
    whipmachine.style.visibility="hidden";
    whipmachine.style.transitionDuration="0s"
    pipe.style.visibility="hidden";
    pipe.style.transitionDuration="0s"
    ye1.style.visibility="hidden"
    yyy.style.visibility="hidden"
    cylin1.style.visibility="visible"
    cylin2.style.visibility="visible"
    cylin3.style.visibility="visible"
    cylin4.style.visibility="visible"
    cylin5.style.visibility="visible"
    t1.style.visibility="visible"
    t2.style.visibility="visible"
    t3.style.visibility="visible"
    t4.style.visibility="visible"
    t5.style.visibility="visible"
    mytable.style.visibility="visible";

    update();
    }
    if(f==46){
        mytable.style.visibility="hidden"
        c1.style.visibility="hidden"
        c2.style.visibility="hidden"
        c3.style.visibility="hidden"
        c4.style.visibility="hidden"
        c5.style.visibility="hidden"
        cylin1.style.visibility="hidden"
        cylin2.style.visibility="hidden"
        cylin3.style.visibility="hidden"
        cylin4.style.visibility="hidden"
        cylin5.style.visibility="hidden"
       
        mytable1.style.visibility="hidden"
        toptable.style.visibility="visible"
        mytable3.style.visibility="visible"
        usertable.style.visibility="visible"
        submitresult.style.visibility="visible"
        FC.style.visibility="visible"
        FS.style.visibility="visible"         //line no. 1078 pr f==44 ho rha 
        update();
        f=47
    }
    if(f==48){
        backgray.style.visibility="visible"
        end.style.visibility="visible"  
    }
    }




/*************************Step 1  :taulne vaala ****************** */
var sgm = document.querySelector("#sgm")
var gm = document.querySelector("#gm")
var i1 = document.querySelector("#i1")
var i2 = document.querySelector("#i2")
var i3 = document.querySelector("#i3")
var i4 = document.querySelector("#i4")
var i5 = document.querySelector("#i5")
var FC = document.querySelector("#FC")
var FS = document.querySelector("#FS")
var end = document.querySelector("#end")
var pipe = document.querySelector("#pipe")
var d = document.querySelector("#stir")
var onb = document.querySelector("#onb")
var offb = document.querySelector("#offb")
var tareb = document.querySelector("#tareb")
var wm = document.querySelector("#wm")
var p = document.querySelector("#petri")
var s1b = document.querySelector("#emp1")
var s2b = document.querySelector("#emp2")
var s3b = document.querySelector("#emp3")
var s4b = document.querySelector("#emp4")
var s5b = document.querySelector("#emp5")
var capon = document.querySelector("#cap")
var spt = document.querySelector("#spatula")
var spt2 = document.querySelector("#spatula2")
var po1 = document.querySelector("#p1")
var po2 = document.querySelector("#p2")
var po3 = document.querySelector("#p3")
var po4 = document.querySelector("#p4")
var po5 = document.querySelector("#p5")
/*step2nd*/
var cylinup = document.querySelector("#cylinder")
var cysolup = document.querySelector("#cylinsol")
var drp0 = document.querySelector("#drop0")
var drp1 = document.querySelector("#drop1")
var drp2 = document.querySelector("#drop2")
var drp3 = document.querySelector("#drop3")
var drp4 = document.querySelector("#drop4")
var b1 = document.querySelector("#b1")
var b2 = document.querySelector("#b2")
var b3 = document.querySelector("#b3")
var b4 = document.querySelector("#b4")
var b5 = document.querySelector("#b5")


var f = 0;

function on() {
    console.log('f')
    if (f == 0) {
        number.style.visibility = "visible";
        // f=2;
        // update();
    }
    f += 1;
    update();
}
function s1() {
    console.log('f')
    if (f == 1) {
        s1b.style.transform = "translate(-270%,-60%)"

        setTimeout(function () {
            number.innerHTML = "20gm";

        }, 2000)
    }
    update();
    f += 1;
}

function tare() {       //tare krega machine ko
    if (f == 2) {
        number.innerHTML = "0gm";
        f = 3;
        update();

    }
    else if (f == 7) {
        number.innerHTML = "0gm";
        f = 8;
        update();

    }
    else if (f == 11) {
        number.innerHTML = "0gm";
        f = 12;
        update();

    }
    else if (f == 15) {
        number.innerHTML = "0gm";
        f = 16;
        update();

    }
    else if (f == 19) {
        number.innerHTML = "0gm";
        f = 20;      //go to line 477
        update();
    }
}
function capopen() {
    console.log('f')
    if (f == 3) {

        capon.style.transform = "translate(0%,-300%)"

        
        setTimeout(function () {
            capon.style.transform = "translate( 0%,800%)"

        }, 2000)
    }
    f += 1;
    update();
}

function pick() {
    console.log('f')
    if (f == 4) {           //chammach utaenge//
        spt.style.transform = "translate(18%,-280%)rotate(-30deg)"

        setTimeout(function () {
            spatula.style.visibility = "hidden"
            sgm.style.visibility = "visible"      //bhari hui chammach dekhegi//
        }, 1000)
        setTimeout(function () {

            sgm.style.transform = "translate(-60%,-250%)rotate(-10deg)"

        }, 3000)

        setTimeout(function () {

            spt2.style.visibility = "visible";
            s1b.style.visibility = "hidden";
            po1.style.visibility = "visible";
            number.innerHTML = "1gm";
            sgm.style.visibility = "hidden";


        }, 4000)
        setTimeout(function () {
            spt2.style.visibility = "hidden";
            sgm.style.transform = "translate(0%,0%)rotate(0deg)"

        }, 5000)
        setTimeout(function () {

            spatula.style.visibility = "visible";
            spatula.style.transform = "translate(0%,0%)"
            update();
            f = 5;
        }, 6000)
    }
    else if (f == 8) {
        spt.style.transform = "translate(18%,-280%)rotate(-30deg)"

        setTimeout(function () {
            spt.style.visibility = "hidden"
            sgm.style.visibility = "visible"      //bhari hui chammach dekhegi//
        }, 1000)
        setTimeout(function () {

            sgm.style.transform = "translate(-60%,-250%)rotate(-10deg)"

        }, 3000)

        setTimeout(function () {

            spt2.style.visibility = "visible";
            s2b.style.visibility = "hidden";
            po2.style.visibility = "visible";
            number.innerHTML = "2gm";
            sgm.style.visibility = "hidden";


        }, 4000)
        setTimeout(function () {
            spt2.style.visibility = "hidden";
            sgm.style.transform = "translate(0%,0%)rotate(0deg)"


        }, 5000)
        setTimeout(function () {

            spatula.style.visibility = "visible";
            spatula.style.transform = "translate(0%,0%)"
            s2b.style.visibility = "hidden";
            update();
            f = 9;
        }, 6000)
    }
    else if (f == 12) {
        spt.style.transform = "translate(18%,-280%)rotate(-30deg)"

        setTimeout(function () {
            spt.style.visibility = "hidden"
            sgm.style.visibility = "visible"      //bhari hui chammach dekhegi//
        }, 1000)
        setTimeout(function () {

            sgm.style.transform = "translate(-60%,-250%)rotate(-10deg)"

        }, 3000)

        setTimeout(function () {

            spt2.style.visibility = "visible";
            s3b.style.visibility = "hidden";
            po3.style.visibility = "visible";
            number.innerHTML = "3gm";
            sgm.style.visibility = "hidden";


        }, 4000)
        setTimeout(function () {
            spt2.style.visibility = "hidden";
            sgm.style.transform = "translate(0%,0%)rotate(0deg)"

        }, 5000)
        setTimeout(function () {

            spatula.style.visibility = "visible";
            spatula.style.transform = "translate(0%,0%)"
            s3b.style.visibility = "hidden";
            update();
            f = 13;
        }, 6000)
    }
    else if (f == 16) {
        spt.style.transform = "translate(18%,-280%)rotate(-30deg)"

        setTimeout(function () {
            spt.style.visibility = "hidden"
            sgm.style.visibility = "visible"      //bhari hui chammach dekhegi//
        }, 1000)
        setTimeout(function () {

            sgm.style.transform = "translate(-60%,-250%)rotate(-10deg)"

        }, 3000)

        setTimeout(function () {

            spt2.style.visibility = "visible";
            s4b.style.visibility = "hidden";
            po4.style.visibility = "visible";
            number.innerHTML = "4gm";
            sgm.style.visibility = "hidden";


        }, 4000)
        setTimeout(function () {
            spt2.style.visibility = "hidden";
            sgm.style.transform = "translate(0%,0%)rotate(0deg)"

        }, 5000)
        setTimeout(function () {

            spatula.style.visibility = "visible";
            spatula.style.transform = "translate(0%,0%)"
            s4b.style.visibility = "hidden";
            update();
            f = 17;
        }, 6000)
    }
    else if (f == 20) {
        spt.style.transform = "translate(18%,-280%)rotate(-30deg)"

        setTimeout(function () {
            spt.style.visibility = "hidden"
            sgm.style.visibility = "visible"      //bhari hui chammach dekhegi//
        }, 1000)
        setTimeout(function () {

            sgm.style.transform = "translate(-60%,-250%)rotate(-10deg)"

        }, 3000)

        setTimeout(function () {

            spt2.style.visibility = "visible";
            s5b.style.visibility = "hidden";
            po5.style.visibility = "visible";
            number.innerHTML = "5gm";
            sgm.style.visibility = "hidden";


        }, 4000)
        setTimeout(function () {
            spt2.style.visibility = "hidden";
            sgm.style.transform = "translate(0%,0%)rotate(0deg)"

        }, 5000)
        setTimeout(function () {

            spatula.style.visibility = "visible";
            spatula.style.transform = "translate(0%,0%)"
            s5b.style.visibility = "hidden";
            update();
            f = 21;
        }, 6000)
    }
}



function p1() {
    console.log(f)
    if (f == 5) {
        po1.style.transform = "translate(250%,60%)";
    }
    f += 1;
    update();
}
function s2() {
    console.log(f)
    if (f == 6) {
        s2b.style.transform = "translate(-370%,-60%)"

        setTimeout(function () {
            number.innerHTML = "20gm";

        }, 2000)
    }
    update();
    f += 1;
}
function p2() {
    console.log('f')
    if (f == 9) {

        po2.style.transform = "translate(350%,60%)"
    }
    f += 1;
    update();
}
function s3() {
    console.log('f')
    if (f == 10) {
        s3b.style.transform = "translate(-470%,-60%)"

        setTimeout(function () {
            number.innerHTML = "20gm";

        }, 2000)
    }
    update();
    f += 1;
}
function p3() {
    console.log('f')
    if (f == 13) {

        po3.style.transform = "translate(450%,60%)"


    }
    update();
    f += 1;
}
function s4() {
    console.log('f')
    if (f == 14) {
        s4b.style.transform = "translate(-570%,-60%)"

        setTimeout(function () {
            number.innerHTML = "20gm";

        }, 2000)
    }
    update();
    f += 1;
}
function p4() {
    console.log('f')
    if (f == 17) {

        po4.style.transform = "translate(550%,60%)"
    }
    f += 1;
    update();
}
function s5() {
    console.log('f')
    if (f == 18) {
        s5b.style.transform = "translate(-670%,-60%)"

        setTimeout(function () {
            number.innerHTML = "20gm";
        }, 2000)
    }
    update();
    f += 1;
}
function p5() {
    console.log('f')
    if (f == 21) {

        po5.style.transform = "translate(650%,60%)"
    }
    f =22;
    update();
}
/***************************************************step2nd********************************/






function cypour() {
    if ( f== 22) {
        cylinup.style.transform = "translate(80%,-60%) rotate(60deg)"
        cysolup.style.transform = "translate(80%,-170%) rotate(60deg)"

        setTimeout(function () {

            cysolup.style.visibility = "hidden";
        }, 1000)

        setTimeout(function () {
            drp0.style.visibility = "visible";

            b1.style.visibility = "visible";
            po1.style.visibility = "hidden";


        }, 3000)


        setTimeout(function () {

            cylinup.style.transform = "translate(0%,-0%)rotate(0deg)"
            cysolup.style.transform = "translate(0%,-0%)rotate(0deg)"
            drp0.style.visibility = "hidden";
        }, 4000)
        setTimeout(function () {
            cysolup.style.visibility = "visible";
            
        }, 5000)
       f=24;
       update();
    }
    else if (f == 24) {

        cylinup.style.transform = "translate(200%,-60%) rotate(80deg)"
        cysolup.style.transform = "translate(300%,-180%) rotate(80deg)"

        setTimeout(function () {

            cysolup.style.visibility = "hidden";
        }, 1000)

        setTimeout(function () {
            drp1.style.visibility = "visible";
            b2.style.visibility = "visible";
            po2.style.visibility = "hidden";


        }, 3000)

        setTimeout(function () {
            cylinup.style.transform = "translate(0%,-0%)rotate(0deg)"
            cysolup.style.transform = "translate(0%,-0%)rotate(0deg)"
            drp1.style.visibility = "hidden";
        }, 4000)
        setTimeout(function () {
            cysolup.style.visibility = "visible";
            
        }, 5000)
        f=25;
        update();
    }
    else if (f == 25) {

        cylinup.style.transform = "translate(400%,-60%) rotate(80deg)"
        cysolup.style.transform = "translate(680%,-185%) rotate(80deg)"

        setTimeout(function () {

            cysolup.style.visibility = "hidden";
        }, 1000)

        setTimeout(function () {
            drp2.style.visibility = "visible";
            b3.style.visibility = "visible";
            po3.style.visibility = "hidden";


        }, 3000)

        setTimeout(function () {
            cylinup.style.transform = "translate(0%,-0%)rotate(0deg)"
            cysolup.style.transform = "translate(0%,-0%)rotate(0deg)"
            drp2.style.visibility = "hidden";
        }, 4000)
        setTimeout(function () {
            cysolup.style.visibility = "visible";
            
        }, 5000)
        f=26;
        update();
    }
    else if (f == 26) {

        cylinup.style.transform = "translate(550%,-60%) rotate(80deg)"
        cysolup.style.transform = "translate(980%,-183%) rotate(80deg)"

        setTimeout(function () {

            cysolup.style.visibility = "hidden";
        }, 1000)

        setTimeout(function () {
            drp3.style.visibility = "visible";
            b4.style.visibility = "visible";
            po4.style.visibility = "hidden";


        }, 3000)

        setTimeout(function () {
            cylinup.style.transform = "translate(0%,-0%)rotate(0deg)"
            cysolup.style.transform = "translate(0%,-0%)rotate(0deg)"
            drp3.style.visibility = "hidden";
        }, 4000)
        setTimeout(function () {
            cysolup.style.visibility = "visible";
            
        }, 5000)
        f=27;
        update();
    }
    else if (f == 27) {

        cylinup.style.transform = "translate(680%,-60%) rotate(80deg)"
        cysolup.style.transform = "translate(1220%,-183%) rotate(80deg)"

        setTimeout(function () {

            cysolup.style.visibility = "hidden";
        }, 1000)

        setTimeout(function () {
            drp4.style.visibility = "visible";
            b5.style.visibility = "visible";
            po5.style.visibility = "hidden";


        }, 3000)

        setTimeout(function () {
            cylinup.style.transform = "translate(0%,-0%)rotate(0deg)"
            cysolup.style.transform = "translate(0%,-0%)rotate(0deg)"
            drp4.style.visibility = "hidden";
        }, 4000)
        setTimeout(function () {
            cysolup.style.visibility = "visible";
            
        }, 5000)
        f=28;
        update();
    }

 

}

/**************************************Step 3 whipping krna (foam bnana)**************************************/



function y1(){
    if(f==28){
        ye1.style.backgroundColor="Red"
        setTimeout(function(){
            ye1.style.visibility="hidden";
           },1000)
        f=29;
        update();
        
    }
}

function move1(){
    if(f==29){
        console.log('f')
        
        b1.style.transform="translate(-116%,0%)"
        setTimeout(function(){
         pipe.style.transform="translate(0%,26%)"
        },1000)
           setTimeout(function(){
           ye1.style.top="35%"
           yyy.style.top="32%"
            pipe.style.transform="translate(0%,30%) rotate(-2.5deg)"
           },1500)
           setTimeout(function(){
            pipe.style.transform="translate(0%,30%) rotate(2.5deg)"
           },2000)
        setTimeout(function(){
           b1.style.visibility="hidden"
           b1foam.style.visibility="visible"
        },3000)
        setTimeout(function(){
            ye1.style.top="28%"
            yyy.style.top="25%"
            pipe.style.transform="translate(0%,0%) rotate(0deg)"
           },4000)
        f=30
        update();
    }}
    function back1(){
        if(f==30){
            b1foam.style.transform="translate(115%,0%)"
            f=31
            update();
        }
    }
  

  function move2(){
    if(f==31){
        b2.style.transform="translate(-228%,0%)"
        setTimeout(function(){
            ye1.style.top="35%"
           yyy.style.top="32%"
            pipe.style.transform="translate(0%,20%) rotate(-3deg)"
           },1500)
           setTimeout(function(){
            pipe.style.transform="translate(0%,20%) rotate(3deg)"
           },2000)
        setTimeout(function(){
            b2.style.visibility="hidden"
            b2foam.style.visibility="visible"
        },3000)
        setTimeout(function(){
            ye1.style.top="28%"
            yyy.style.top="25%"
            pipe.style.transform="translate(0%,0%) rotate(0deg)"
           },4000)
        f=32
        update();
    }}

    function back2(){
        if(f==32){
            b2foam.style.transform="translate(220%,0%)"
            f=33
            update();
        }
    }  
  
  function move3(){
    if(f==33){
        b3.style.transform="translate(-316%,0%)"
        setTimeout(function(){
            ye1.style.top="35%"
            yyy.style.top="32%"
            pipe.style.transform="translate(0%,30%) rotate(-3deg)"
           },1500)
           setTimeout(function(){
            pipe.style.transform="translate(0%,30%) rotate(3deg)"
           },2000)
        setTimeout(function(){
            b3.style.visibility="hidden"
            b3foam.style.visibility="visible"
        },3000)
        setTimeout(function(){
            ye1.style.top="28%"
            yyy.style.top="25%"
            pipe.style.transform="translate(0%,0%) rotate(0deg)"
           },4000)
        f=34
        update();
    }
}
    function back3(){
        if(f==34){
            b3foam.style.transform="translate(292%,0%)"
            f=35
            update();
        }
    }
    
    
  function move4(){
    if(f==35){
        b4.style.transform="translate(-429%,0%)"
        setTimeout(function(){
            ye1.style.top="35%"
            yyy.style.top="32%"
            pipe.style.transform="translate(0%,30%) rotate(-3deg)"
           },1500)
           setTimeout(function(){
            pipe.style.transform="translate(0%,30%) rotate(3deg)"
           },2000)
        setTimeout(function(){
            b4.style.visibility="hidden"
            b4foam.style.visibility="visible"
        },3000)
        setTimeout(function(){
            ye1.style.top="28%"
            yyy.style.top="25%"
            pipe.style.transform="translate(0%,0%) rotate(0deg)"
           },4000)
        f=36
        update();
    }
}
function back4(){
    if(f==36){
        b4foam.style.transform="translate(427%,0%)"
        f=37
        update();
   }
}
   
  
  function move5(){
    if(f==37){
        b5.style.transform="translate(-533%,0%)"
        setTimeout(function(){
            ye1.style.top="35%"
            yyy.style.top="32%"
            pipe.style.transform="translate(0%,30%) rotate(-3deg)"
           },1500)
           setTimeout(function(){
            pipe.style.transform="translate(0%,30%) rotate(3deg)"
           },2000)
        setTimeout(function(){
            b5.style.visibility="hidden"
            b5foam.style.visibility="visible"
        },3000)
        setTimeout(function(){
            ye1.style.top="28%"
            yyy.style.top="25%"
            pipe.style.transform="translate(0%,0%) rotate(0deg)"
           },4000)
        f=38
        update();
    }
}
  function back5(){
    if(f==38){
        b5foam.style.transform="translate(535%,0%)"
        setTimeout(function(){
            yyy.style.visibility="visible";
           },1000)
        f=39
        update();
    }
  }

  function y2(){
    if(f==39){
        ye1.style.backgroundColor="Yellow"
        yyy.style.backgroundColor="Red"
        setTimeout(function(){
            backgray.style.visibility="visible"
            popbutton1.style.visibility="visible";
        })

        f=40   //  line 990 ...but nhi jaana
        update();
    }
    
  }
  

 
  

  /******************Step 4 : beaker se cylinder me foam daalna****************************/
  function up1(){
    if(f==41){       // S1 beaker se 1st cylinder me jaega 
        b1foam.style.transform="translate(117%,-101%)"
        setTimeout(function(){
        b1foam.style.transform="translate(117%,-101%) rotate(-45deg)"
        },1000)
        setTimeout(function(){
        //r1.style.visibility="visible"
        b1foam.style.visibility="hidden"
        c5.style.visibility="visible"
        z1.innerHTML="77"
        },2000)
        setTimeout(function(){
        // r1.style.transform="translate(-56%,70%) rotate(45deg)"
         f=42  //just neeche
         update(); 
        },3000)
    }
  }
  function up2(){
    if(f==42){    // S2 se 2nd cylinder me
        b2foam.style.transform="translate(76%,-104%)"
        setTimeout(function(){
        b2foam.style.transform="translate(76%,-104%) rotate(-45deg)"
        },1000)
        setTimeout(function(){
       // r2.style.visibility="visible"
        b2foam.style.visibility="hidden"
        c4.style.visibility="visible"
        z2.innerHTML="104"
        },2000)
        setTimeout(function(){
         //r2.style.transform="translate(-86%,175%) rotate(45deg)"
         f=43  //just neeche
         update();
        },3000)
    }
  }
  function up3(){
    if(f==43){     //S3 se cylinder me
        b3foam.style.transform="translate(31%,-100%)"
        setTimeout(function(){
        b3foam.style.transform="translate(31%,-100%) rotate(-45deg)"
        },1000)
        setTimeout(function(){
        //r3.style.visibility="visible"
        b3foam.style.visibility="hidden"
        c3.style.visibility="visible"
        z3.innerHTML="137"
        },2000)
        setTimeout(function(){
        // r3.style.transform="translate(30%,297%) rotate(45deg)"
         f=44      //just neeche
         update();
        },3000)
    }
  }

  function up4(){
    if(f==44){       //S4 se cylinder me
        b4foam.style.transform="translate(-9%,-100%)"
        setTimeout(function(){
        b4foam.style.transform="translate(-9%,-100%) rotate(-45deg)"
        },1000)
        setTimeout(function(){
       // r4.style.visibility="visible"
        b4foam.style.visibility="hidden"
        c2.style.visibility="visible"
        z4.innerHTML="104"
        },2000)
        setTimeout(function(){
        // r4.style.transform="translate(150%,373%) rotate(45deg)"
         f=45 //just neeche
         update();
        },3000)
    }
  }

 
  function up5(){
    if(f==45){             //S5 se cylinder me jaega
        b5foam.style.transform="translate(-55%,-102%)"
        setTimeout(function(){
        b5foam.style.transform="translate(-55%,-102%) rotate(-45deg)"
        },1000)
        setTimeout(function(){
        //r5.style.visibility="visible"
        b5foam.style.visibility="hidden"
        c1.style.visibility="visible"
        z5.innerHTML="137"
        },2000)
        setTimeout(function(){
         //r5.style.transform="translate(255%,495%) rotate(45deg)"
         update();
        },3000)
        setTimeout(function(){
            mytable.style.visibility="hidden"
            mytable1.style.visibility="visible"
            i1.innerText="57"
            i2.innerText="12"
            i3.innerText="47"
            i4.innerText="86"
            i5.innerText="57"

            c1.style.top="64%"
            c2.style.top="55%"
            c3.style.top="52%"
            c4.style.top="52%"
            c5.style.top="55%"

            c1.style.height="5%"
            c2.style.height="14%"
            c3.style.height="17%"
            c4.style.height="17%"
            c5.style.height="14%"
            update();
            f=46    //go to nxt function
         },12000)
    }
  }


  /**********step 3 complete************** */




/* **************Ye code mt dekhna openpop se....****************/

  function openPopup() {
    if(f== 40){
      document.getElementById("myPopup").style.display = "block";
    }
  }
  
  function closePopup() {
    document.getElementById("myPopup").style.display = "none";
    backgray.style.visibility="hidden";
    popbutton1.style.transitionDuration="0s"
      popbutton1.style.visibility="hidden";
      f=41 //go to nxt function
      
  }
  
  function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked').value;
    const correctAnswer = "Protein isolate";
  
    if (selectedAnswer === correctAnswer) {
      alert("Correct!");
    } else {
      alert("Wrong! The correct answer is Protein isolate.");
    }
  
    closePopup();
  }

  const utable = document.getElementById('usertable');
  const submitButton = document.getElementById('submitresult');
  const first=document.getElementById('first')
  const second=document.getElementById('second')
  const third=document.getElementById('third')
  const fourth=document.getElementById('fourth')
  const fifthr =document.getElementById('fifth')

  const first1=document.getElementById('first1')
  const second2=document.getElementById('second2')
  const third3=document.getElementById('third3')
  const fourth4=document.getElementById('fourth4')
  const fifth5=document.getElementById('fifth5')

  var myinput=document.querySelector(".myinput")
  submitButton.disabled = false; // Initially disable submit button

  // Function to check if all inputs in the table are filled
  function areAllInputsFilled() {
    const inputs = utable.querySelectorAll('input');
    return !Array.from(inputs).some(input => input.value === '');
  }
  
  var j1=document.querySelector("#j1")
  var j2=document.querySelector("#j2")
  var j3=document.querySelector("#j3")
  var j4=document.querySelector("#j4")
  var j5=document.querySelector("#j5")
  var k1=document.querySelector("#k1")
  var k2=document.querySelector("#k2")
  var k3=document.querySelector("#k3")
  var k4=document.querySelector("#k4")
  var k5=document.querySelector("#k5")
  var fifth=document.querySelector("#fifth")
  // Event listener for submit button click (can be changed to other events)
  submitButton.addEventListener('click', () => {
    if (areAllInputsFilled()) {
      first.disabled=true;
      second.disabled=true;
      third.disabled=true;
      fourth.disabled=true;
      fifthr.disabled=true;
      first1.disabled=true;
      second2.disabled=true;
      third3.disabled=true;
      fourth4.disabled=true;
      fifth5.disabled=true;
    
      submitButton.disabled =true; 
      j1.innerText="54"
      j2.innerText="108"
      j3.innerText="174"
      j4.innerText="108"
      j5.innerText="57"

      k1.innerText="74.02"
      k2.innerText="11.53"
      k3.innerText="34.30"
      k4.innerText="82.69"
      k5.innerText="57.90"
      update();
      f=48;
      alert('All inputs are filled!');
    } else {
      alert('Please fill in all required fields.');
    }
  });

  const arrow = document.querySelector(".arrow");              
   setTimeout(() => {
              
   });
     
