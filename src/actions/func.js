// Main INI
var oPage = new Page(true);
var oAnim = new Anim(oPage);

// PAGE EVENT LISTENERS
oPage.sDrive.addEventListener("scroll", oPage.trackScroll.bind(oPage));
oPage.infoSection.style.top = oPage.ph+"px";

// CARDS EVENT LISTENERS
oPage.what.addEventListener("click", function() {
	oAnim.cardIO(oPage.whatC,oPage.prevClickedCard,unSetPrev,setPrev);
}, true);
oPage.we.addEventListener("click", function() {
	oAnim.cardIO(oPage.weC,oPage.prevClickedCard,unSetPrev,setPrev);
}, true);
oPage.how.addEventListener("click", function() {
	oAnim.cardIO(oPage.howC,oPage.prevClickedCard,unSetPrev,setPrev);
}, true);
oPage.who.addEventListener("click", function() {
	oAnim.cardIO(oPage.whoC,oPage.prevClickedCard,unSetPrev,setPrev);
}, true);

// CLOSE buttons
var cardsXbtns = document.querySelectorAll('.xBtn');
console.log(cardsXbtns);
for( var i = 0; i < cardsXbtns.length; i ++ ) {
	cardsXbtns[i].addEventListener('click', function() {
		oAnim.cardXBtn(oPage.prevClickedCard,unSetPrev);
	} , false );
}
// MENU buttons
var cardsMbtns = document.querySelectorAll('.mBtn');
console.log(cardsMbtns);
for( var i = 0; i < cardsMbtns.length; i ++ ) {
	cardsMbtns[i].addEventListener('click', function() {
		oAnim.cardMBtn(oPage.prevClickedCard,unSetPrev);
		oPage.trackScroll();
	} , false );
}

// CARDS CALLBACKS
function unSetPrev(){
	oPage.prevClickedCard = undefined;
}
function setPrev(element){
	oPage.prevClickedCard = element;
}