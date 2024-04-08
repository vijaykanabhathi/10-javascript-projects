let imgbox=document.getElementById("imgbox");
let QRimage=document.getElementById("qrimg");
let QRtext=document.getElementById("QRTEXT");


function generateqr() {
    if(QRtext.value.length>0){
    QRimage.src= "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+QRtext.value;
    imgbox.classList.add("show-img");
    }else{
        QRtext.classList.add("error");
        setTimeout(()=>{
        QRtext.classList.remove("error");
        alert('Please enter some text');
        },1000)


        
    }
}