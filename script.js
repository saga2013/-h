let box = document.createElement("div");
let bo1 = document.createElement("div");
let bo2 = document.createElement("div");
let bo3 = document.createElement("div");
let boxik = new Date();
console.log(boxik);

document.body.appendChild(box)
box.style.backgroundColor = "orange";
box.style.width = "750px";
box.style.height = "300px";
box.style.display = "flex"
box.style.justifyContent = "space-evenly"
box.style.alignItems = "center"
bo1.style.width = "150px";
bo1.style.height = "150px";
bo1.style.fontSize = "130px";
bo2.style.fontSize = "130px";
bo2.style.textAlign = "center"
bo3.style.textAlign = "center"
bo3.style.fontSize = "130px";
box.style.color = "white";
bo1.style.backgroundColor = "black";
bo2.style.width = "150px";
bo2.style.height = "150px";
bo2.style.backgroundColor = "black";
bo3.style.width = "150px";
bo3.style.height = "150px";
bo3.style.backgroundColor = "black";

bo1.textContent = boxik.getHours()
bo2.textContent = boxik.getMinutes()
bo3.textContent = boxik.getSeconds()

box.appendChild(bo1)
box.appendChild(bo2)
box.appendChild(bo3)

 let i =setInterval(()=>{
    boxik=new Date()
    bo3.textContent = boxik.getSeconds()
})
setTimeout(() => {
    clearInterval(i)
}, 12000);
