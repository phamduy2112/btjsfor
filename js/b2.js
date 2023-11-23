// logic S(n) = x + x^2 + x^3 + … + x^n
// output: bắt sự kiện ng dùng nhập vào 
// tạo 1 biến tong và tich mình sẽ dùng 1 vòng lặp for và mình sẽ lấy tích *= x , x ở đây vd x= 3 tich*=3 khi đó nếu nó nhỏ hơn n thì sẽ là tich=tich*3 tich(th2)= 3 *3=9 và tong+=tich khi mà vòng lặp for điều kiện bé hơn hoặc bằng n;
//input xuất ra cho ng dùng biết tổng



document.getElementById('btn2').onclick=function(e){
    e.preventDefault();
var x=Number(document.getElementById('input-x').value);
var n=Number(document.getElementById('input-n').value);
if(x>0&&n>0){
    var S=tinhTong(x,n);

    document.getElementById('kq2').innerHTML=`Tính tổng: ${S}`;
}else{
    document.getElementById('kq2').innerHTML=`Không được nhập số âm mời bạn nhập lại`;
}

}
function tinhTong(n,x){
    var tich=1;
    var tong=0;
    for(var i=1;i<=n;i++){

        tich*=x;
        tong+=tich;
       
       }
    return tong;
}
