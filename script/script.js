var swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  loop: true,
});

function download(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function(e) {
      var imgInput = input.parentNode.querySelector('.img-input');
      imgInput.style.backgroundImage = 'url(' + e.target.result + ')';
      imgInput.style.backgroundSize = 'cover';
      imgInput.style.backgroundRepeat = 'no-repeat';
      imgInput.style.backgroundPosition = 'center';


      let labelText = input.parentNode.querySelector('.attach');
      let labelFormat = input.parentNode.querySelector('.format')
      labelText.textContent = 'Скриншот прикреплён:';
      labelFormat.textContent = input.files[0].name;
    };

    reader.readAsDataURL(input.files[0]);
  }
}