showImg(1);

function showImg(slideIndex) {
    let whole_gallery = document.getElementsByClassName("image");
    let small = document.getElementsByClassName("small_display");
    for(i = 0; i < whole_gallery.length; i++) whole_gallery[i].style.display = "none";
    for(i = 0; i < small.length; i++) small[i].className = small[i].className.replace(" hide", "");
    whole_gallery[slideIndex-1].style.display = "block";
    small[slideIndex-1].className += " hide";
}