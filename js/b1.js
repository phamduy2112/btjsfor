// output: lấy n
// xử lí : sử dụng vòng lặp while để lặp điều kiện qua S và S+=n nếu S lớn hơn số 10000 thì dừng lại và xuất ra giá trị n n đây là giá trị bé nhất
// output xuất ra giá trị n bé nhất
var S = 0;
var n = 0;
// sử dụng vòng lặp while với điều kiện S < 10000
while(S < 10000)
{
 //bước nhảy của vòng lặp là n++
 n++;
 //cứ sau mỗi vòng lặp thì tổng S sẽ được cộng dồn với n cho đến khi S > 10000 thì thoát khỏi vòng lặp
 S = S + n;
} 
document.getElementById('kq1').innerHTML=`số bé nhất ${n}`;