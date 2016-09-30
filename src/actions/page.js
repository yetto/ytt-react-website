class Page {

	constructor(dev) {

		this.scrollReference = document.getElementById("mainWrapper");

		// Size
		this.posWidth = Math.max(
				document.documentElement.clientWidth,
				window.innerWidth || 0
			);
		this.posHeight = Math.max(
				document.documentElement.clientHeight,
				window.innerHeight || 0
			);

		// Position
		this.posX	= this.scrollReference.scrollLeft;
		this.posY	= this.scrollReference.scrollTop;

		// During scroll lock no changes will be made to menu
		this.scrollUnlcoked = true;

		// app
		this.app = document.getElementById("app");

		// If dev true init dev overlay
		if (dev) this.devOverlay = this.initDevOverlay()
		this.dev = dev

		this.initWindowTracking();

	} // End constructor


	pageReducer({posWidth = 0, posHeight, posX = 0, posY }) {

		if (posWidth === 0 ) {
			posWidth = this.posWidth
			posHeight = this.posHeight
		}

		if (posX === 0) {
			posX = this.posX,
			posY = this.posY
		}

		if (this.psy < 99) {
			console.log("99");
			this.infoSection.style.top = this.ph + "px";
		}

		if (this.psy > 100 && this.psy < 1000) {

			this.infoSection.style.top = this.psy + "px";

			if (this.scrollUnlcoked) {
				this.scrollUnlcoked = false;
				oAnim.waveHook(this.what);
				setTimeout(function() {
					oAnim.waveHook(this.we);
				}, 100);
				setTimeout(function() {
					oAnim.waveHook(this.how);
				}, 200);
				setTimeout(function() {
					oAnim.waveHook(this.who);
				}, 300);
				setTimeout(function() {
					oAnim.waveHook(this.talk);
				}, 400);
				setTimeout(function() {
					oPage.clearSectionClasses(oPage.sections);
				}, 1000);
			}
		}

		if (this.psy > 1001) {
			console.log("this.psy > 1001");
			this.infoSection.style.top = "-" + this.psy + "px";
		}

	} // END trackScroll

	initWindowTracking(){

		window.onresize = function(e){

			let
			posWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
			posHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

			this.posWidth = posWidth,
			this.posHeight = posHeight

			this.pageReducer({posWidth, posHeight})
			if(this.dev) this.setDevOverlay({posWidth, posHeight})

		}.bind(this)

		this.scrollReference.addEventListener("scroll", function(e){

			let
			posX = this.scrollReference.scrollLeft,
			posY = this.scrollReference.scrollTop

			this.posX = posX,
			this.posY = posY

			this.pageReducer({posX, posY})
			if(this.dev) this.setDevOverlay({posX, posY})

		}.bind(this))

	} // END initWindowTracking

	clearSectionClasses(arr) {
		console.log("clearSectionClasses");
		this.scrollUnlcoked = true;
		for (var i = arr.length - 1; i >= 0; i--) {
			arr[i].setAttribute("class", "palette");
		};
	} // END clearSectionClasses

initDevOverlay() {

		console.log("devOverlay");

		// Create element to append
		let overlay  = document.createElement('div');
		overlay.id = "devOverlay";
		document.body.appendChild(overlay);

		let str = [
				"H: ",
				this.posX,
				"px | V: ",
				this.posY,
				"px | W: ",
				this.posWidth,
				"px | H: ",
				this.posHeight,
				"px"
			].join()

		overlay.innerHTML = str
		return overlay

	}

	setDevOverlay({posWidth = 0, posHeight, posX = 0, posY }) {

		if (posWidth === 0 ) {
			posWidth = this.posWidth
			posHeight = this.posHeight
		}

		if (posX === 0) {
			posX = this.posX,
			posY = this.posY
		}

		let str = [
				"H: ",
				posX,
				"px | V: ",
				posY,
				"px | W: ",
				posWidth,
				"px | H: ",
				posHeight,
				"px"
			].join()

		this.devOverlay.innerHTML = str

	}

} // END page

const page = new Page(true);

export default page;