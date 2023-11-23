// input: mình sẽ bắt ng dùng nhập vào mình sẽ lấy số đó và chuyển thành number nếu là số âm xuất ra số âm không dc
// và mình sẽ duyệt qua vòng lặp for giaithua*=i
// ouput: xuất ra tổng luỹ thừa
document.getElementById('btn3').onclick=function(e){
    e.preventDefault();

var n=Number(document.getElementById('input-n').value);
var tongGiaiThua=tinhGiaiThua(n);
document.getElementById('kq3').innerHTML=`Tổng giai thừa: ${tongGiaiThua}`;
}
function tinhGiaiThua(n){
    var giaithua=1;
    for(var i=1;i<=n;i++){
        giaithua*=i;
        }
    return giaithua;
}
