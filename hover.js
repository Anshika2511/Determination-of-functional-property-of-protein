var hs1=document.querySelector("#hs1")
var hs2=document.querySelector("#hs2")
var hs3=document.querySelector("#hs3")
var hs4=document.querySelector("#hs4")
var hs5=document.querySelector("#hs5")
var hcylinder=document.querySelector("#hcylinder")
var hpowder=document.querySelector("#hpowder")
var hwm=document.querySelector("#hwm")
var hpetri=document.querySelector("#hpetri")
var hspatula=document.querySelector("#hspatula")
var hovt = document.querySelector("#hovt")
var hcounter=0
var hvalue="none"
var body=document.querySelector("#bod")


body.addEventListener("mouseover",function(){
    steper()
})

hs1.addEventListener("mouseenter",function(){
    hcounter+=1
    hovt.style.transitionDuration="0.5s"
    hovt.style.visibility="visible"
    hovt.innerText="S1 beaker"
    hovt.style.top="42%"
    hovt.style.left="47%"

})
hs1.addEventListener("mouseout",function(){
    hovt.style.transitionDuration="0s"
    hovt.style.visibility="hidden"
})

hs2.addEventListener("mouseenter",function(){
    hcounter+=1
    hovt.style.transitionDuration="0.5s"
    hovt.style.visibility="visible"
    hovt.innerText="S2 beaker"
    hovt.style.top="42%"
    hovt.style.left="55%"

})
hs2.addEventListener("mouseout",function(){
    hovt.style.transitionDuration="0s"
    hovt.style.visibility="hidden"
})

hs3.addEventListener("mouseenter",function(){
    hcounter+=1
    hovt.style.transitionDuration="0.5s"
    hovt.style.visibility="visible"
    hovt.innerText="S3 beaker"
    hovt.style.top="42%"
    hovt.style.left="65%"

})
hs3.addEventListener("mouseout",function(){
    hovt.style.transitionDuration="0s"
    hovt.style.visibility="hidden"
})

hs4.addEventListener("mouseenter",function(){
    hcounter+=1
    hovt.style.transitionDuration="0.5s"
    hovt.style.visibility="visible"
    hovt.innerText="S4 beaker"
    hovt.style.top="42%"
    hovt.style.left="73%"

})
hs4.addEventListener("mouseout",function(){
    hovt.style.transitionDuration="0s"
    hovt.style.visibility="hidden"
})

hs5.addEventListener("mouseenter",function(){
    hcounter+=1
    hovt.style.transitionDuration="0.5s"
    hovt.style.visibility="visible"
    hovt.innerText="S5 beaker"
    hovt.style.top="42%"
    hovt.style.left="80%"

})
hs5.addEventListener("mouseout",function(){
    hovt.style.transitionDuration="0s"
    hovt.style.visibility="hidden"
})

hpowder.addEventListener("mouseenter",function(){
    hcounter+=1
    hovt.style.transitionDuration="0.5s"
    hovt.style.visibility="visible"
    hovt.innerText="Protein isolate"
    hovt.style.top="53%"
    hovt.style.left="30%"

})
hpowder.addEventListener("mouseout",function(){
    hovt.style.transitionDuration="0s"
    hovt.style.visibility="hidden"
})

hcylinder.addEventListener("mouseenter",function(){
    hcounter+=1
    hovt.style.transitionDuration="0.5s"
    hovt.style.visibility="visible"
    hovt.innerText="Cylinder"
    hovt.style.top="45%"
    hovt.style.left="36%"

})
hcylinder.addEventListener("mouseout",function(){
    hovt.style.transitionDuration="0s"
    hovt.style.visibility="hidden"
})

hspatula.addEventListener("mouseenter",function(){
    hcounter+=1
    hovt.style.transitionDuration="0.5s"
    hovt.style.visibility="visible"
    hovt.innerText="Spatula"
    hovt.style.top="72%"
    hovt.style.left="30%"

})
hspatula.addEventListener("mouseout",function(){
    hovt.style.transitionDuration="0s"
    hovt.style.visibility="hidden"
})

hwm.addEventListener("mouseenter",function(){
    hcounter+=1
    hovt.style.transitionDuration="0.5s"
    hovt.style.visibility="visible"
    hovt.innerText="Weighing machine"
    hovt.style.top="45%"
    hovt.style.left="23%"

})
hwm.addEventListener("mouseout",function(){
    hovt.style.transitionDuration="0s"
    hovt.style.visibility="hidden"
})

hpetri.addEventListener("mouseenter",function(){
    hcounter+=1
    hovt.style.transitionDuration="0.5s"
    hovt.style.visibility="visible"
    hovt.innerText="Petri dish"
    hovt.style.top="65%"
    hovt.style.left="10%"

})
hpetri.addEventListener("mouseout",function(){
    hovt.style.transitionDuration="0s"
    hovt.style.visibility="hidden"
})

console.log(hcounter)

function steper(){
    if(hcounter==10){
    console.log(hcounter)
    if(hvalue=="none"){
        console.log(counter)
        f=0
        counter=1
        update();
        hvalue="done"
       
    }
}
}