var scr = "https://cdn.pixabay.com/photo/2016/11/14/03/44/girls-1822521_640.jpg";



var varaint1 = document.querySelector('#v1');
var varaint2 = document.querySelector('#v2');
var varaint3 = document.querySelector('#v3');
var varaint4 = document.querySelector('#v4');
var varaint5 = document.querySelector('#v5');


function change(id){
    let data = document.querySelector('#'+id).src;

    document.querySelector('#main_product').setAttribute('src',data);
}

varaint1.addEventListener('mouseover',()=>{
    let data = varaint1.src;
    document.querySelector('#main_product').setAttribute('src',data);
})

varaint1.addEventListener('mouseout',()=>{
    document.querySelector('#main_product').setAttribute('src',scr);
})
varaint2.addEventListener('mouseover',()=>{
    let data = varaint2.src;
    document.querySelector('#main_product').setAttribute('src',data);
})

varaint2.addEventListener('mouseout',()=>{
    document.querySelector('#main_product').setAttribute('src',scr);
})
varaint3.addEventListener('mouseover',()=>{
    let data = varaint3.src;
    document.querySelector('#main_product').setAttribute('src',data);
})

varaint3.addEventListener('mouseout',()=>{
    document.querySelector('#main_product').setAttribute('src',scr);
})
varaint4.addEventListener('mouseover',()=>{
    let data = varaint4.src;
    document.querySelector('#main_product').setAttribute('src',data);
})

varaint4.addEventListener('mouseout',()=>{
    document.querySelector('#main_product').setAttribute('src',scr);
})

varaint5.addEventListener('mouseover',()=>{
    let data = varaint5.src;
    document.querySelector('#main_product').setAttribute('src',data);
})

varaint5.addEventListener('mouseout',()=>{
    document.querySelector('#main_product').setAttribute('src',scr);
})



var state_nav_mobile = false;
function show_nav_mobile(){

    if(state_nav_mobile){
        document.querySelector('.mobile_nav').style.display = 'none';
        document.querySelector('.mobile_nav').style.visibility = 'hidden';
        state_nav_mobile = false;
    }else{
        document.querySelector('.mobile_nav').style.display = 'block';
        document.querySelector('.mobile_nav').style.visibility = 'visible';
        state_nav_mobile = true;
    }

}
var qty_p = 1;
function plus_qty(){
  
    qty_p++;
    document.querySelector('#qty').textContent = qty_p;
}
function minu_qty(){
    if(qty_p < 0){
        qty_p = 0;
    }
 
    document.querySelector('#qty').textContent = qty_p;
    qty_p--;
}

function change_data(){
    document.querySelector('#shop_val').textContent = qty_p;
    alert("Added "+qty_p+" item to your cart.")
}