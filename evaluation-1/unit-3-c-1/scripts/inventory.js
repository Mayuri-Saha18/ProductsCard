function display(){
    let data=JSON.parse(localStorage.getItem("products")) || [];
    let all_products=document.getElementById("all_products");
    all_products.innerHTML=null;

    data.forEach(function(elem,index){
        let div=document.createElement("div")
        let img=document.createElement("img")
        img.src=elem.image;
        let typ=document.createElement("p")
        typ.innerText=elem.type;
        let des=document.createElement("p")
        des.innerText=elem.desc;
        let pr=document.createElement("p")
        pr.innerText=elem.price;
        let button=document.createElement("button")
        button.innerText="Remove product";
        button.setAttribute("id","remove_product")
        button.addEventListener("click",function(){
            remove(index);
        })
        div.append(img,typ,des,pr,button);
        all_products.append(div);
    })
}
display();

function remove(index){
    let data=JSON.parse(localStorage.getItem("products")) || [];
    let newPrdct=data.filter(function(elem,i){
        if(i===index){
            let trash=JSON.parse(localStorage.getItem("trash")) || [];
            trash.push(elem)
            localStorage.setItem("trash",JSON.stringify(trash));
        }else{
            return i!==index;
        }
    });
    localStorage.setItem("products",JSON.stringify(newPrdct));
    display();
    console.log(newPrdct);

}