//store the products array in localstorage as "products"
function prdctinfo(t,d,p,i){
    this.type=t;
    this.desc=d;
    this.price=p;
    this.image=i;
}
function Submit(event){
    event.preventDefault();
    let form=document.getElementById("products")
    let Type=form.type.value;
    let Description=form.desc.value;
    let Price=form.price.value;
    let Image=form.image.value;

let PrdctData= new prdctinfo(Type,Description,Price,Image);
let data=JSON.parse(localStorage.getItem("products")) || [];
data.push(PrdctData)
localStorage.setItem("products",JSON.stringify(data))
console.log(PrdctData)
}