// output: khi người dùng bấm vào ô input
// xử lí mình sẽ duyệt qua vòng lặp for và tạo 1 thẻ div và text là i để biết ô nào chẵn lẽ và mình sẽ dùng toán tử thứ 3 để làm  nếu chẵn là đỏ còn lẻ là blue 
// output: xuất ra 10 thẻ div chẵn lẻ theo màu

document.getElementById('btn-4').onclick=function(e){
 e.preventDefault();
    for(var i=1;i<=10;i++){
       var div =document.createElement('div');
       div.textContent=i;
       div.style.color='white';
       div.style.background=i%2===0 ? 'red' : 'blue';
      document.body.appendChild(div);

    }

}