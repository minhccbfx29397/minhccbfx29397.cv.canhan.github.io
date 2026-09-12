const kinhnghiem = document.getElementById("kinhnghiem");
const noidungkinhnghiem = document.getElementById("noidungkinhnghiem");
const noidungchinhkinhnghiem = document.getElementById("noidungchinhkinhnghiem");
kinhnghiem.addEventListener("mouseenter", function () {
   
     noidungkinhnghiem.style.display = "block";
  

});

kinhnghiem.addEventListener("mouseleave", function () {

    noidungkinhnghiem.style.display = "none";
});

noidungkinhnghiem.addEventListener("click", function () {
    if (noidungchinhkinhnghiem.style.display === "none") {
        noidungchinhkinhnghiem.style.display = "block";
    } else {
        noidungchinhkinhnghiem.style.display = "none";
    }

});

noidungkinhnghiem.addEventListener("mouseleave", function () {

    noidungchinhkinhnghiem.style.display = "none";
});

const hocvan = document.getElementById("hocvan");
const noidunghocvan = document.getElementById("noidunghocvan");
const noidungchinhhocvan = document.getElementById("noidungchinhhocvan");
hocvan.addEventListener("mouseenter", function () {

    noidunghocvan.style.display = "block";

});

hocvan.addEventListener("mouseleave", function () {

    noidunghocvan.style.display = "none";
});

noidunghocvan.addEventListener("click", function () {
    if (noidungchinhhocvan.style.display === "none") {
        noidungchinhhocvan.style.display = "block";
    } else {
        noidungchinhhocvan.style.display = "none";
    }

});

noidunghocvan.addEventListener("mouseleave", function () {

    noidungchinhhocvan.style.display = "none";
});

const hoatdong = document.getElementById("hoatdong");
const noidunghoatdong = document.getElementById("noidunghoatdong");
const noidungchinhhoatdong = document.getElementById("noidungchinhhoatdong");
hoatdong.addEventListener("mouseenter", function () {

    noidunghoatdong.style.display = "block";

});

hoatdong.addEventListener("mouseleave", function () {

    noidunghoatdong.style.display = "none";
});

noidunghoatdong.addEventListener("click", function () {
    if (noidungchinhhoatdong.style.display === "none") {
        noidungchinhhoatdong.style.display = "block";
    } else {
        noidungchinhhoatdong.style.display = "none";
    }

});

noidunghoatdong.addEventListener("mouseleave", function () {

    noidungchinhhoatdong.style.display = "none";
});

const sothich = document.getElementById("sothich");
const noidungsothich = document.getElementById("noidungsothich");
const noidungchinhsothich = document.getElementById("noidungchinhsothich");
sothich.addEventListener("mouseenter", function () {

    noidungsothich.style.display = "block";

});

sothich.addEventListener("mouseleave", function () {

    noidungsothich.style.display = "none";
});

noidungsothich.addEventListener("click", function () {
    if (noidungchinhsothich.style.display === "none") {
        noidungchinhsothich.style.display = "block";
    } else {
        noidungchinhsothich.style.display = "none";
    }

});

noidungsothich.addEventListener("mouseleave", function () {

    noidungchinhsothich.style.display = "none";
});

const ngonngu = document.getElementById("ngonngu");
const noidungngonngu = document.getElementById("noidungngonngu");
const noidungchinhngonngu = document.getElementById("noidungchinhngonngu");
ngonngu.addEventListener("mouseenter", function () {

    noidungngonngu.style.display = "block";

});

ngonngu.addEventListener("mouseleave", function () {

    noidungngonngu.style.display = "none";
});

noidungngonngu.addEventListener("click", function () {
    if (noidungchinhngonngu.style.display === "none") {
        noidungchinhngonngu.style.display = "block";
    } else {
        noidungchinhngonngu.style.display = "none";
    }

});

noidungngonngu.addEventListener("mouseleave", function () {

    noidungchinhngonngu.style.display = "none";
});

const kinang = document.getElementById("kinang");
const noidungkinang = document.getElementById("noidungkinang");
const noidungchinhkinang1 = document.getElementById("noidungchinhkinang1");
kinang.addEventListener("mouseenter", function () {

    noidungkinang.style.display = "block";

});

kinang.addEventListener("mouseleave", function () {

    noidungkinang.style.display = "none";
});

noidungkinang.addEventListener("click", function () {
    if (noidungchinhkinang1.style.display === "none") {
        noidungchinhkinang1.style.display = "block";
    } else {
        noidungchinhkinang1.style.display = "none";
    }

});

noidungkinang.addEventListener("mouseleave", function () {

    noidungchinhkinang1.style.display = "none";
});

const form_thongtincanhan = document.getElementById("form-thongtincanhan");
const input_thongtincanhan = document.getElementById("input-thongtincanhan");
const button_thongtincanhan = document.getElementById("button-thongtincanhan");
const container_thongtincanhan = document.getElementById("container-thongtincanhan");
form_thongtincanhan.addEventListener("submit", function (event) {
    event.preventDefault();
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex. test(input_thongtincanhan.value)){
        alert("Email không đúng định dạng !");
        return;
    }

    if (input_thongtincanhan.value==="minhccbFX29397@funix.edu.vn"){
        container_thongtincanhan.classList.remove("d-none");

    }else{
        alert("Email sai rồi");
    }

} );




