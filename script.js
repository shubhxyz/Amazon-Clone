const imgs =  document.querySelectorAll('.header-slider ul img');
const prev_btn =  document.querySelecorAll('.control_prev');
const next_btn =  document.querySelectorAll('.control_next');

let n = 0;

function changeSlide(){
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';
    }
    // imgs[n].style.display = 'block';
}
changeSlide();