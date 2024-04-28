const messages = ["Make yourself familiar with the equipments by hovering over them.",
   "Press on the next button.",
   "Press ON button on the weighing machine.",
   "Place petri dish on the machine.",
   "Press tare button.",
   "Pick up spatula and place 1g protein.",
   "Click petri dish on the machine and put this powder in the S1 beaker!",
   "Press tare button!",
   "Pick up spatula to measure 2g protein.",
   "Press petri dish present on the machine  .",
   "Press tare button.",
   "Click spatula to measure 3g protein.",
   "Click once again on spatula .",
   "Press petri dish and put the powder in s3.",
   "Press on tare button." ,
   "Click on spatula to measure 4g protein.",
   "Click again on spatula!." ,
   "Click on petri dish to put powder in s4.",
   "Press tare button.",
   "Click on spatula to measure 5g protein!.",
   "Click spatula again!",
   "Once again click on the spatula!",
   "Click petri dish and put the powder in s5.",
   "Press on OFF button",
   "Press on the next button. ",
   "Press ON button on the whipping machine.",
   "Click on S1 beaker to whip it until foamed",
   "Click foamed s1 beaker",
   "Click on S2 beaker to whip it until foamed",
   "Click foamed s2 beaker",
   "Click on S3 beaker to whip it until foamed",
   "Click foamed s3 beaker!",
   "Click on S4 beaker to whip it until foamed",
   "Click foamed s4 beaker",
   "Click on S5 beaker to whip it until foamed",
   "Click foamed s5 beaker",
   "Press OFF button on the whipping machine",
   "Press on next button",
   "Pour s1 foam in cylinder and measure volume",
   "Pour s2 foam in cylinder and measure volume ",
   "Pour s3 foam in cylinder and measure volume",
   "Pour s4 foam in cylinder and measure volume",
   "Pour s5 foam in cylinder and measure volume",
   "Record the volumes again after few seconds( note:1hr in real)",
   "Press on the next button",
   "Enter your calculated foaming capacity and stability and press check button",
   "Press the next button"
];

const messagesh=["उपकरणों के ऊपर माउस ले जाकर स्वयं को उनसे परिचित कराएं।",
"अगला बटन दबाएँ",
"वजन मापने वाली मशीन पर ON बटन दबाएँ।",
"मशीन पर पेट्री डिश रखें।",
"टायर बटन दबाएँ।",
"स्पैटुला उठाएं और 1 ग्राम प्रोटीन डालें।",
"मशीन पर पेट्री डिश पर क्लिक करें और इस पाउडर को S1 बीकर में डालें!",
"टायर बटन दबाएँ!",
"2 ग्राम प्रोटीन मापने के लिए स्पैटुला उठाएँ।",
"मशीन पर मौजूद प्रेस पेट्री डिश।",
"टायर बटन दबाएँ।",
"3जी प्रोटीन मापने के लिए स्पैटुला पर क्लिक करें।",
"एक बार फिर से स्पैटुला पर क्लिक करें।",
"पेट्री डिश दबाएं और पाउडर को s3 में डालें।",
"टायर बटन दबाएँ।" ,
"4जी प्रोटीन मापने के लिए स्पैटुला पर क्लिक करें।",
"स्पैटुला पर फिर से क्लिक करें!" ,
"एस4 में पाउडर डालने के लिए पेट्री डिश पर क्लिक करें।",
"टायर बटन दबाएँ।",
"5 ग्राम प्रोटीन मापने के लिए स्पैटुला पर क्लिक करें!",
"स्पैटुला पर फिर से क्लिक करें!",
"एक बार फिर स्पैटुला पर क्लिक करें!",
"पेट्री डिश पर क्लिक करें और पाउडर को s5 में डालें।",
"वजन मापने वाली मशीन पर OFF बटन दबाएँ",
"अगला बटन दबाएँ।",
"व्हिपिंग मशीन पर ON बटन दबाएँ।",
"इसे झाग बनने तक फेंटने के लिए S1 बीकर पर क्लिक करें",
"फोमयुक्त S1 बीकर पर क्लिक करें",
"इसे झाग बनने तक फेंटने के लिए S2 बीकर पर क्लिक करें",
"फोमयुक्त S2 बीकर पर क्लिक करें",
"इसे झाग बनने तक फेंटने के लिए S3 बीकर पर क्लिक करें",
"फोमयुक्त S3 बीकर पर क्लिक करें!",
"इसे झाग बनने तक फेंटने के लिए S4 बीकर पर क्लिक करें",
"फोमयुक्त s4 बीकर पर क्लिक करें",
"इसे झाग बनने तक फेंटने के लिए S5 बीकर पर क्लिक करें",
"फोमयुक्त S5 बीकर पर क्लिक करें",
"व्हिपिंग मशीन पर OFF बटन दबाएँ।",
"अगला बटन दबाएँ",
"सिलेंडर में एस1 फोम डालें और आयतन मापें",
"सिलेंडर में s2 फोम डालें और आयतन मापें",
"सिलेंडर में s3 फोम डालें और आयतन मापें",
"सिलेंडर में s4 फोम डालें और आयतन मापें",
"सिलेंडर में s5 फोम डालें और मात्रा मापें",
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
        utterance.lang = 'hi-IN';
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
   
  var d=document.querySelector("#stir")
  var onb=document.querySelector("#onb")
  var offb=document.querySelector("#offb")
  var tareb =document.querySelector("#tareb")
  var wm=document.querySelector("#wm")
  var p=document.querySelector("#petri")
  function nxt(){
    if(f==0){
        cylin.style.visibility="hidden"

    hs1.style.visibility="hidden"
    hs2.style.visibility="hidden"
    hs3.style.visibility="hidden"
    hs4.style.visibility="hidden"
    hs5.style.visibility="hidden"
    hwm.style.visibility="hidden"
    hpetri.style.visibility="hidden"
    hspatula.style.visibility="hidden"
    hcylinder.style.visibility="hidden"
    hpowder.style.visibility="hidden"

        f=1
        update();
    }
    else if(f==23){
        wm.style.visibility="hidden"
        onb.style.visibility="hidden"
        offb.style.visibility="hidden"
        tareb.style.visibility="hidden"
        spatula.style.transitionDuration="0s"
        spatula.style.visibility="hidden"
        sgm.style.transitionDuration="0s"
        sgm.style.visibility="hidden"
        p.style.transitionDuration="0s"
        p.style.visibility="hidden"
        bowl.style.visibility="hidden"
        powder.style.visibility="hidden"

        
       
        b1.style.visibility="hidden"
        b2.style.visibility="hidden"
        b3.style.visibility="hidden"
        b4.style.visibility="hidden"
        b5.style.visibility="hidden"

        fp.style.visibility="hidden"
        fp2.style.visibility="hidden"
        fp3.style.visibility="hidden"
        fp4.style.visibility="hidden"
        fp5.style.visibility="hidden"

        gms1.style.visibility="hidden"
        gms2.style.visibility="hidden"
        gms3.style.visibility="hidden"
        gms4.style.visibility="hidden"
        gms5.style.visibility="hidden"
        whipmachine.style.visibility="visible"
        b1gm.style.visibility="visible"
        b2gm.style.visibility="visible"
        b3gm.style.visibility="visible"
        b4gm.style.visibility="visible"
        b5gm.style.visibility="visible"

        ye1.style.visibility="visible"
        ye2.style.visibility="visible"
        update();
         f=24
    }
    else if(f==37){
        whipmachine.style.visibility="hidden"
        ye1.style.visibility="hidden"
        ye2.style.visibility="hidden"

        cylin1.style.visibility="visible"
        cylin2.style.visibility="visible"
        cylin3.style.visibility="visible"
        cylin4.style.visibility="visible"
        cylin5.style.visibility="visible"
        mytable.style.visibility="visible"
        f=38
        update();
    }
    else if(f==43){
        mytable.style.visibility="hidden"
        emp1.style.visibility="hidden"
        emp2.style.visibility="hidden"
        emp3.style.visibility="hidden"
        emp4.style.visibility="hidden"
        emp5.style.visibility="hidden"
        c1.style.visibility="hidden"
        c2.style.visibility="hidden"
        c5.style.visibility="hidden"
        cylin1.style.visibility="hidden"
        cylin2.style.visibility="hidden"
        cylin3.style.visibility="hidden"
        cylin4.style.visibility="hidden"
        cylin5.style.visibility="hidden"
        c3.style.visibility="hidden"
        c4.style.visibility="hidden"
        mytable1.style.visibility="hidden"
        toptable.style.visibility="visible"
        mytable3.style.visibility="visible"
        usertable.style.visibility="visible"
        submitresult.style.visibility="visible"
        FC.style.visibility="visible"
        FS.style.visibility="visible"
        update();
    }
    else if(f==44){
        backgray.style.visibility="visible"
        end.style.visibility="visible"
    }
  }
  var FC=document.querySelector("#FC")
  var FS=document.querySelector("#FS")
 var end=document.querySelector("#end")
  function up1(){
    if(f==38){
        b1foam.style.transform="translate(117%,-101%)"
        setTimeout(function(){
        b1foam.style.transform="translate(117%,-101%) rotate(-45deg)"
        },1000)
        setTimeout(function(){
        emp1.style.visibility="visible"
        b1foam.style.visibility="hidden"
        c5.style.visibility="visible"
        z1.innerHTML="77"
        },2000)
        setTimeout(function(){
         emp1.style.transform="translate(-56%,90%) rotate(45deg)"
         f=39
         update();
        },3000)
    }
  }
  function up2(){
    if(f==39){
        b2foam.style.transform="translate(76%,-104%)"
        setTimeout(function(){
        b2foam.style.transform="translate(76%,-104%) rotate(-45deg)"
        },1000)
        setTimeout(function(){
        emp2.style.visibility="visible"
        b2foam.style.visibility="hidden"
        c4.style.visibility="visible"
        z2.innerHTML="104"
        },2000)
        setTimeout(function(){
         emp2.style.transform="translate(54%,195%) rotate(45deg)"
         f=40
         update();
        },3000)
    }
  }
  function up3(){
    if(f==40){
        b3foam.style.transform="translate(31%,-100%)"
        setTimeout(function(){
        b3foam.style.transform="translate(31%,-100%) rotate(-45deg)"
        },1000)
        setTimeout(function(){
        emp3.style.visibility="visible"
        b3foam.style.visibility="hidden"
        c3.style.visibility="visible"
        z3.innerHTML="137"
        },2000)
        setTimeout(function(){
         emp3.style.transform="translate(160%,297%) rotate(45deg)"
         f=41
         update();
        },3000)
    }
  }

  function up4(){
    if(f==41){
        b4foam.style.transform="translate(-9%,-100%)"
        setTimeout(function(){
        b4foam.style.transform="translate(-9%,-100%) rotate(-45deg)"
        },1000)
        setTimeout(function(){
        emp4.style.visibility="visible"
        b4foam.style.visibility="hidden"
        c2.style.visibility="visible"
        z4.innerHTML="104"
        },2000)
        setTimeout(function(){
         emp4.style.transform="translate(270%,373%) rotate(45deg)"
         f=42
         update();
        },3000)
    }
  }

  var i1=document.querySelector("#i1")
  var i2=document.querySelector("#i2")
  var i3=document.querySelector("#i3")
  var i4=document.querySelector("#i4")
  var i5=document.querySelector("#i5")
  function up5(){
    if(f==42){
        b5foam.style.transform="translate(-55%,-102%)"
        setTimeout(function(){
        b5foam.style.transform="translate(-55%,-102%) rotate(-45deg)"
        },1000)
        setTimeout(function(){
        emp5.style.visibility="visible"
        b5foam.style.visibility="hidden"
        c1.style.visibility="visible"
        z5.innerHTML="137"
        },2000)
        setTimeout(function(){
         emp5.style.transform="translate(375%,495%) rotate(45deg)"
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
            update();
            f=43
         },12000)
    }
  }


  function y1(){
    if(f==24){
        ye1.style.backgroundColor="Red"
        f=25
        update();
    }
}

function move1(){
    if(f==25){
        b1gm.style.transitionDuration="1s"
        b2gm.style.transitionDuration="1s"
        b3gm.style.transitionDuration="1s"
        b4gm.style.transitionDuration="1s"
        b5gm.style.transitionDuration="1s"
        b1gm.style.transform="translate(-174.5%,0%)"
        setTimeout(function(){
           b1gm.style.visibility="hidden"
           b1foam.style.visibility="visible"
           
        },3000)
        f=26
        update();
    }}
    function back1(){
        if(f==26){
            b1foam.style.transform="translate(135%,0%)"
            f=27
            update();
        }
    }
  

  function move2(){
    if(f==27){
        b2gm.style.transform="translate(-281%,0%)"
        setTimeout(function(){
            b2gm.style.visibility="hidden"
            b2foam.style.visibility="visible"
        },3000)
        f=28
        update();
    }}

    function back2(){
        if(f==28){
            b2foam.style.transform="translate(240%,0%)"
            f=29
            update();
        }
    }  
  
  function move3(){
    if(f==29){
        b3gm.style.transform="translate(-375.4%,0%)"
        setTimeout(function(){
            b3gm.style.visibility="hidden"
            b3foam.style.visibility="visible"
        },3000)
        f=30
        update();
    }
}
    function back3(){
        if(f==30){
            b3foam.style.transform="translate(333%,0%)"
            f=31
            update();
        }
    }
    
    
  function move4(){
    if(f==31){
        b4gm.style.transform="translate(-465%,0%)"
        setTimeout(function(){
            b4gm.style.visibility="hidden"
            b4foam.style.visibility="visible"
        },3000)
        f=32
        update();
    }
}
function back4(){
    if(f==32){
        b4foam.style.transform="translate(460%,0%)"
        f=33
        update();
   }
}
   
  
  function move5(){
    if(f==33){
        b5gm.style.transform="translate(-561.5%,0%)"
        setTimeout(function(){
            b5gm.style.visibility="hidden"
            b5foam.style.visibility="visible"
        },3000)
        f=34
        update();
    }
}
  function back5(){
    if(f==34){
        b5foam.style.transform="translate(545%,0%)"
        f=35
        update();
    }
  }

  function y2(){
    if(f==35){
        ye1.style.backgroundColor="Yellow"
        ye2.style.backgroundColor="Red"
        setTimeout(function(){
            backgray.style.visibility="visible"
            popbutton1.style.visibility="visible";
        })
        f=36
        update();
    }
  }
  
  
  
  function on(){
    console.log('pau')
    number.style.visibility="visible";
    f=2;
    update();
  }

  function place(){
    if(f==2){
        p.style.transform="translate(0,-500%)"
        setTimeout(function(){
            p.style.transform="translate(170%,-500%)"
        },1000)
        setTimeout(function(){
            number.innerHTML="5gm";
            f=3
            update();
        },2000)
    }
  }

  function tare(){
    if(f==3){
        number.innerHTML="0gm";
        f=4;
        update();
    }
    else if(f==6){
        number.innerHTML="0gm";
        f=7;
        update();
    }
    else if(f==9){
        number.innerHTML="0gm";
        f=10;
        update();
    }
    else if(f==13){
        number.innerHTML="0gm";
        f=14;
        update();
    }
    else if(f==17){
        number.innerHTML="0gm";
        f=18;
        update();
    }
  }
    
  var sgm=document.querySelector("#sgm")
  var gm=document.querySelector("#gm")
  function pick(){
    if(f==4){
        spatula.style.transform="translate(40%,-110%)"
        setTimeout(function(){
            spatula.style.visibility="hidden"
            sgm.style.visibility="visible"
        },1000)
        setTimeout(function(){
            sgm.style.transform="translate(-100%,-110%)"
            spatula.style.transform="translate(0%,0%)"
        },2000)
        setTimeout(function(){
            gm.style.visibility="visible"
        },2500)
        setTimeout(function(){
            p.style.visibility="hidden"
            gm.style.visibility="hidden"
            sgm.style.visibility="hidden"
            fp.style.visibility="visible"
            number.innerHTML="1gm";
            f=5
            update();
        },3000)
        
    }
   
    else if(f==7){
        spatula.style.transform="translate(40%,-110%)"
        setTimeout(function(){
            spatula.style.visibility="hidden"
            sgm.style.visibility="visible"
        },1000)
        setTimeout(function(){
            sgm.style.transform="translate(-100%,-110%)"
        },2000)
        setTimeout(function(){
            gm.style.visibility="visible"
        },2500)
        setTimeout(function(){
            fp2.style.visibility="visible"
            sgm.style.visibility="hidden"
            number.innerHTML="2gm";
            p.style.visibility="hidden"
            gm.style.visibility="hidden"
            f=8
            update();
        },3000)
    }

    else if(f==10){
        spatula.style.transform="translate(40%,-110%)"
        setTimeout(function(){
            spatula.style.visibility="hidden"
            sgm.style.visibility="visible"
        },1000)
        setTimeout(function(){
            sgm.style.transform="translate(-100%,-110%)"
            spatula.style.transform="translate(0%,0%)"
        },2000)
        setTimeout(function(){
            gm.style.visibility="visible"
            sgm.style.visibility="hidden"
            spatula.style.visibility="visible"
            number.innerHTML="1gm";
            f=11
            update();
        },3000)
    }
    else if(f==11){
        sgm.style.transform="translate(0%,0%)"
        spatula.style.transform="translate(40%,-110%)"
        setTimeout(function(){
            spatula.style.visibility="hidden"
            sgm.style.visibility="visible"
        },1000)
        setTimeout(function(){
            sgm.style.transform="translate(-100%,-110%)"
        },2000)
        setTimeout(function(){
            gm.style.visibility="visible"
        },2500)
        setTimeout(function(){
            
            sgm.style.visibility="hidden"
            number.innerHTML="3gm";
            fp3.style.visibility="visible"
            p.style.visibility="hidden"
            gm.style.visibility="hidden"
            f=12
            update();
        },3000)
    }
    else if(f==14){
        spatula.style.transform="translate(40%,-110%)"
        setTimeout(function(){
            spatula.style.visibility="hidden"
            sgm.style.visibility="visible"
        },1000)
        setTimeout(function(){
            sgm.style.transform="translate(-100%,-110%)"
            spatula.style.transform="translate(0%,0%)"
        },2000)
        setTimeout(function(){
            gm.style.visibility="visible"
            sgm.style.visibility="hidden"
            spatula.style.visibility="visible"
            number.innerHTML="2gm";
            f=15
            update();
        },3000)
    }
    else if(f==15){
        sgm.style.transform="translate(0%,0%)"
        spatula.style.transform="translate(40%,-110%)"
        setTimeout(function(){
            spatula.style.visibility="hidden"
            sgm.style.visibility="visible"
        },1000)
        setTimeout(function(){
            sgm.style.transform="translate(-100%,-110%)"
        },2000)
        setTimeout(function(){
            gm.style.visibility="visible"
        },2500)
        setTimeout(function(){
            
            sgm.style.visibility="hidden"
            number.innerHTML="4gm";
            fp4.style.visibility="visible"
            p.style.visibility="hidden"
            gm.style.visibility="hidden"
            f=16
            update();
        },3000)
    }
else if(f==18){
    spatula.style.transform="translate(40%,-110%)"
        setTimeout(function(){
            spatula.style.visibility="hidden"
            sgm.style.visibility="visible"
        },1000)
        setTimeout(function(){
            sgm.style.transform="translate(-100%,-110%)"
            spatula.style.transform="translate(0%,0%)"
        },2000)
        setTimeout(function(){
            gm.style.visibility="visible"
            sgm.style.visibility="hidden"
            spatula.style.visibility="visible"
            number.innerHTML="1gm";
            f=19
            update();
        },3000)
}
else if(f==19){
    sgm.style.transform="translate(0%,0%)"
        spatula.style.transform="translate(40%,-110%)"
        setTimeout(function(){
            spatula.style.visibility="hidden"
            sgm.style.visibility="visible"
        },1000)
        setTimeout(function(){
            sgm.style.transform="translate(-100%,-110%)"
        },2000)
        setTimeout(function(){
            gm.style.visibility="visible"
            spatula.style.transform="translate(0%,0%)"
        },2500)
        setTimeout(function(){
            spatula.style.visibility="visible"
            sgm.style.visibility="hidden"
            number.innerHTML="3gm";
            fp5.style.visibility="visible"
            p.style.visibility="hidden"
            gm.style.visibility="hidden"
            f=20
            update();
        },3000)
}
else if(f==20){
    sgm.style.transform="translate(0%,0%)"
        spatula.style.transform="translate(40%,-110%)"
        setTimeout(function(){
            spatula.style.visibility="hidden"
            sgm.style.visibility="visible"
        },1000)
        setTimeout(function(){
            sgm.style.transform="translate(-100%,-110%)"
        },2000)
        setTimeout(function(){
            gm.style.visibility="visible"
        },2500)
        setTimeout(function(){
            sgm.style.visibility="hidden"
            number.innerHTML="5gm";
            fp5.style.visibility="visible"
            p.style.visibility="hidden"
            gm.style.visibility="hidden"
            f=21
            update();
        },3000)
}
  }

  function pour(){
    if(f==5){
        fp.style.tranform="translate(0%,-300%)"
        setTimeout(function(){
            fp.style.transform="translate(400%,-300%)"
        },1000)
        setTimeout(function(){
            fp.style.transform="translate(400%,-300%) rotate(45deg)"
            
        },2000)
        setTimeout(function(){
            gms1.style.visibility="visible" 
            spatula.style.transform="translate(0%,0%)"
           sgm.style.transform="translate(0%,0%)"
           
        },2500)

        setTimeout(function(){
            fp.style.visibility="hidden"
            p.style.visibility="visible"
            number.innerHTML="5gm";
            spatula.style.visibility="visible"
            f=6
            update();
        },3000)
    }
    else if(f==8){
        fp2.style.tranform="translate(0%,-300%)"
        setTimeout(function(){
            fp2.style.transform="translate(550%,-300%)"
        },1000)
        setTimeout(function(){
            fp2.style.transform="translate(550%,-300%) rotate(45deg)"
        },2000)
        setTimeout(function(){
            gms2.style.visibility="visible" 
            spatula.style.transform="translate(0%,0%)"
           sgm.style.transform="translate(0%,0%)"
        },2500)

        setTimeout(function(){
            fp2.style.visibility="hidden"
            p.style.visibility="visible"
            number.innerHTML="5gm";
            spatula.style.visibility="visible"
            f=9
            update();
        },3000)
    }
    else if(f==12){
        fp3.style.tranform="translate(0%,-300%)"
        setTimeout(function(){
            fp3.style.transform="translate(670%,-300%)"
        },1000)
        setTimeout(function(){
            fp3.style.transform="translate(670%,-300%) rotate(45deg)"
        },2000)
        setTimeout(function(){
            gms3.style.visibility="visible" 
            spatula.style.transform="translate(0%,0%)"
           sgm.style.transform="translate(0%,0%)"
        },2500)

        setTimeout(function(){
            fp3.style.visibility="hidden"
            p.style.visibility="visible"
            number.innerHTML="5gm";
            spatula.style.visibility="visible"
            f=13
            update();
        },3000)
    }
    else if(f==16){
        fp4.style.tranform="translate(0%,-300%)"
        setTimeout(function(){
            fp4.style.transform="translate(850%,-300%)"
        },1000)
        setTimeout(function(){
            fp4.style.transform="translate(850%,-300%) rotate(45deg)"
        },2000)
        setTimeout(function(){
            gms4.style.visibility="visible" 
            spatula.style.transform="translate(0%,0%)"
           sgm.style.transform="translate(0%,0%)"
        },2500)

        setTimeout(function(){
            fp4.style.visibility="hidden"
            p.style.visibility="visible"
            number.innerHTML="5gm";
            spatula.style.visibility="visible"
            f=17
            update();
        },3000)
    }
    else if(f==21){
        fp5.style.tranform="translate(0%,-300%)"
        setTimeout(function(){
            fp5.style.transform="translate(950%,-300%)"
        },1000)
        setTimeout(function(){
            fp5.style.transform="translate(950%,-300%) rotate(45deg)"
        },2000)
        setTimeout(function(){
            gms5.style.visibility="visible" 
            spatula.style.transform="translate(0%,0%)"
           sgm.style.transform="translate(0%,0%)"
        },2500)

        setTimeout(function(){
            fp5.style.visibility="hidden"
            p.style.visibility="visible"
            number.innerHTML="5gm";
            spatula.style.visibility="visible"
            f=22
            update();
        },3000)
    }
  }

  function off(){
    if(f==22){
        number.style.visibility="hidden"
        f=23
        update();
    }
  }

  function openPopup() {
    if(f==36){
      document.getElementById("myPopup").style.display = "block";
    }
  }
  
  function closePopup() {
    document.getElementById("myPopup").style.display = "none";
    backgray.style.visibility="hidden";
    popbutton1.style.transitionDuration="0s"
      popbutton1.style.visibility="hidden";
      f=37
      

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
      f=44;
      alert('All inputs are filled!');
    } else {
      alert('Please fill in all required fields.');
    }
  });
