const request = document.querySelector('.request');
const popup   = document.querySelector('.popup');
const closePopup   = document.querySelector('.closePopup');
const openMenu   = document.querySelector('.openMenu ');
const menu  = document.querySelector('.menu');
const closeMenu = document.querySelector('.closeMenu');
request.addEventListener('click',function() {
	popup.style.display = 'flex'; console.log(popup);
});
closePopup.addEventListener('click',function() {
	popup.style.display = 'none'; console.log(popup);
})
openMenu.addEventListener('click',function() {
menu.style.left = 0; console.log(menu);});

closeMenu.addEventListener('click',function() {
menu.style.left = '-50vw'; console.log(menu);})
	