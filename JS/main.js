// LocalStorage in js

// localStorage.setItem("ism","ibo");
// localStorage.setItem("familiya","Olimjonov");
// localStorage.setItem("yoshi","18");

// localStorage["ism"] = "Sabo";
// localStorage["familiya"] = "Komiljonova";
// localStorage["yoshi"] = "17";

// localStorage.removeItem("ism")
// localStorage.removeItem("familiya")
// localStorage.removeItem("yoshi")
// localStorage.clear()

// let uningIsmi = localStorage.getItem("ism");
// let uningFamiliyasi = localStorage.getItem("familiya");
// let uningYoshi = localStorage.getItem("yoshi");

// console.log(uningIsmi,uningFamiliyasi,uningYoshi);

// https request in JS

// let sorov = new XMLHttpRequest();

// sorov.open("get","https://getty.uz/serverdan/malumot/olish")
// sorov.send();
// sorov.onload = function(){
//     console.log(sorov.responseText)
// }

// let jsFile = {ism: "Robert", yoshi: 17};
// let jsonFile = '{"ism":"Jozef", "yoshi":"21"}';
// console.log(JSON.stringify(jsFile))
// console.log(JSON.parse(jsonFile))

// let sorov = new XMLHttpRequest();
// sorov.open("get","jsonFile.json");
// sorov.send();
// sorov.onload = function(){
//     console.log(JSON.parse(sorov.responseText));
// }

// let matn = "sen gapir men esa sen bilan yozib boramiz sen";
// let birinchiSenIndeksi = matn.indexOf("sen"); 
// console.log(matn.indexOf("sen",birinchiSenIndeksi+1))

let matn = "Salom hammaga! salom berdim hammaga!. salom"

// console.log(matn.replace(/salom||/gi,"alik"))

let yangiMatn = matn.replace(/salom|hammaga/gi,function(soz){
    if(soz == "Salom" || soz == "salom"){
        return "alik"
    }
    else if(soz == "hammaga"){
        return "barchaga"
    }
})

console.log(yangiMatn)














































