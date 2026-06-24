
const products=[
{name:'โค้ก 1.25L',price:35},
{name:'มาม่า',price:7},
{name:'นม UHT',price:15},
{name:'น้ำปลา',price:28},
{name:'ผงซักฟอก',price:59},
{name:'ข้าวสาร 5kg',price:199}
];

const grid=document.getElementById('productsGrid');
if(grid){
products.forEach(p=>{
const d=document.createElement('div');
d.className='product';
d.innerHTML=`<h3>${p.name}</h3><p>${p.price} บาท</p>
<select><option>1 ชิ้น</option><option>10 ชิ้น</option><option>แพ็ค</option></select>
<button onclick="alert('เพิ่มลงตะกร้าแล้ว')">เพิ่มลงตะกร้า</button>
<button onclick="alert('เพิ่มรายการโปรดแล้ว')">❤</button>`;
grid.appendChild(d);
});
}

function login(){
if(!localStorage.getItem('profile')){
const fn=document.getElementById('fn')?.value||'';
const ln=document.getElementById('ln')?.value||'';
const phone=document.getElementById('phone')?.value||'';
localStorage.setItem('profile',JSON.stringify({fn,ln,phone}));
}
localStorage.setItem('loggedIn','1');
document.getElementById('loginOverlay').style.display='none';
}

function logout(){
localStorage.removeItem('loggedIn');
location.reload();
}

window.onload=()=>{
const extra=document.getElementById('extra');
if(!localStorage.getItem('profile')){
extra.innerHTML=`<input id="fn" placeholder="ชื่อ"><input id="ln" placeholder="นามสกุล"><input id="phone" placeholder="เบอร์โทร">`;
}
if(localStorage.getItem('loggedIn')){
document.getElementById('loginOverlay').style.display='none';
}
}
