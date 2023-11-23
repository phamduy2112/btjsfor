// input lấy số ng dùng nhập vào và số nguyên tố sẽ lớn hơn hoặc bằng 2 không thể dưới 2 vì nếu dưới 2 đó k phải là số nguyên tố
//xử lí: đầu tiên sẽ có 1 vòng lặp duyệt qua người dùng nhập và tạo 1 biến tạm thời tiếp theo mình sẽ duyệt qua vòng lặp thứ 2 chỉnh là kt xem dk j<=i/2 và trong đó sẽ có nếu i chia hết cho j thì biến dem tăng lên và xuất ra i tiếp theo mình sẽ tạo 1 thẻ span và trong thẻ span mình sẽ xuất ra i 
// output: xuất ra từ số nguey6n tố từ 2 -> n
document.getElementById('btn5').onclick=function(e){
    e.preventDefault();

    var n=Number(document.getElementById('input-n').value);
    if(n>=2){
 for(var i=2;i<=n;i++){
        var dem=0;
        for(var j=2;j<=i/2;j++){
         if(i%j===0){
            dem++;
        }   
        }
        if(dem==0){
          
var span=document.createElement('span');
span.textContent=`Số nguyên tố: ${i} `;
document.getElementById('kq5').appendChild(span);

        }
    } 
    }else{
    document.getElementById('kq5').innerHTML='bắt đầu nhập từ 2 hoặc bằng 2 trở lên vì số nguyên tố không thể dưới 2'
    }
   

}

