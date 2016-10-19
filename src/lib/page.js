import store from '../app/store'
import * as pageAct from '../actions/pageActions'

class Page {

	constructor(dev) {

		// Elements
		this.scrollReference = document.getElementById("mainWrapper");
		// app
		this.app = document.getElementById("app");
		// Internal
		this.lastDispatch = Date.now()
		this.throttleBy = 100
		// Size
		this.posWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0 );
		this.posHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
		// Position
		this.posX	= this.scrollReference.scrollLeft;
		this.posY	= this.scrollReference.scrollTop;
		// mouse
		this.mouseX;
		this.mouseY;
		// During scroll lock no changes will be made to menu
		this.isScrolling = true;
		// If dev true init dev overlay
		if (dev) this.devOverlay = this.initDevOverlay()
		this.dev = dev

		// Init
		this.initWindowTracking();
		// expose page stats globally
		window.page = this;

	} // End constructor


	dispatchThrottle(fn,throttleBy,args){
		let timeOut = this.lastDispatch + throttleBy
		if (timeOut <= Date.now()) {
			fn(args)
			this.lastDispatch = Date.now()
		}

	} // END dispatchThrottle


	mouseDispatcher({
		mouseX = 0,
		mouseY = 0
	}){
		store.dispatch(pageAct.mousePosChanged(mouseX,mouseY))
	} // END mouseDispatcher

	resizeDispatcher({
		posWidth = this.posWidth,
		posHeight = this.posHeight
	}){
		// console.log("resizeDispatcher",arguments,this);
		if (posWidth != this.posWidth)
			return store.dispatch(pageAct.widthChanged(posWidth))
		if (posHeight != this.posHeight)
			return store.dispatch(pageAct.heightChanged(posHeight))

	} // END resizeDispatcher

	scrollDispatcher({
		posX = this.posX,
		posY = this.posY
	}){
		// console.log("scrollDispatcher",arguments,this);
		if (posX != this.posX)
			store.dispatch(pageAct.xChanged(this.posX))

		if (posY != this.posY)
			store.dispatch(pageAct.yChanged(this.posY))

	} // END scrollDispatcher

	initWindowTracking(){

		/*
		*	######### onresize
		*/
		const windowResize = (e) => {

			let
				posWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
				posHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)

			this.dispatchThrottle(this.resizeDispatcher.bind(this),400,{posWidth, posHeight})

			this.posWidth = posWidth,
			this.posHeight = posHeight

			if(this.dev)
				this.setDevOverlay({posWidth, posHeight})

		}
		window.addEventListener('resize', windowResize)
		/*
		*	######### END onresize
		*/



		/*
		*	######### Mouse movement
		*/
    const mouseMove = (e) => {

    		let mouseX, mouseY

        if (e.pageX || e.pageY) {
            mouseX = e.pageX
            mouseY = e.pageY
        } else if (e.clientX || e.clientY) {
            mouseX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft
            mouseY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop
        }

        this.dispatchThrottle(this.mouseDispatcher.bind(this),100,{mouseX,mouseY})

				this.mouseX = mouseX
				this.mouseY = mouseY

        if(this.dev)
        	this.setDevOverlay({mouseX, mouseY})

    }
    if (!('ontouchstart' in window))
        window.addEventListener('mousemove', mouseMove)
		/*
		*	######### END Mouse movement
		*/



		/*
		*	######### Mouse movement
		*/
		const windowScroll = (e) => {

				let
					posX = this.scrollReference.scrollLeft,
					posY = this.scrollReference.scrollTop

				this.dispatchThrottle(this.scrollDispatcher.bind(this),100,{posX, posY})

				this.posX = posX,
				this.posY = posY

				if(this.dev)
					this.setDevOverlay({posX, posY})

		}
		this.scrollReference.addEventListener("scroll", windowScroll)
		/*
		*	######### END Mouse movement
		*/

	} // END initWindowTracking


initDevOverlay() {

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
				"px | mouseX",
				this.mouseX,
				"mouseY",
				this.mouseY
			].join()

		overlay.innerHTML = str
		return overlay

	}

	setDevOverlay({posWidth = 0, posHeight, posX = 0, posY, mouseX = 0, mouseY }) {

		if (posWidth === 0 ) {
			posWidth = this.posWidth
			posHeight = this.posHeight
		}

		if (posX === 0) {
			posX = this.posX,
			posY = this.posY
		}

		if (mouseX === 0) {
			mouseX = this.mouseX
			mouseY = this.mouseY
		}

		let str = [
				"H: ",
				this.posX,
				"px | V: ",
				this.posY,
				"px | W: ",
				this.posWidth,
				"px | H: ",
				this.posHeight,
				"px | mouseX",
				this.mouseX,
				"mouseY",
				this.mouseY
			].join()

		this.devOverlay.innerHTML = str

	}

} // END page

const page = new Page(true);

export default page;