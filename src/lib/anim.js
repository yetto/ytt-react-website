class Anim {
	constructor(pageObjectArg) {
		console.log("ANIM", pageObjectArg);
		this.pageObject = pageObjectArg;

	}

	// Animation hooks
	waveHook(element) {
		element.setAttribute("class", "palette wave");
	}

	// Card in out controller
	cardIO(element, prevElement, unSetPrev, setPrev) {
		console.log(prevElement);
		if (prevElement != undefined) {
			if (element.id == prevElement.id) {
				console.log("element.id == prevElement.id");
				unSetPrev();
				this.cardOutHook(element);
			} else {
				console.log("element.id !== prevElement.id");
				this.cardOutHook(prevElement);
				this.cardInHook(element);
				setPrev(element);
			};
		} else {
			console.log("prevElement was undefined");
			this.cardInHook(element);
			setPrev(element);
		};
	}

	// Add anim in class for cards
	cardInHook(element) {
		element.setAttribute("class", "card card-in");
		element.style.opacity = 1;
	}

	// Add anim out class for cards
	cardOutHook(element) {
		if (element == undefined) {
			console.log("cardOutHook element was undefined");
		} else {
			element.setAttribute("class", "card card-out");
			element.style.opacity = 0;
			setTimeout(function() {
				oAnim.cardRemoveAnimClasses(element);
			}, 550);
		};
	}

	// Crad close button
	cardXBtn(prevElement, unSetPrev) {
		if (prevElement == undefined) {
			console.log("cardXBtn element was undefined");
		} else {
			prevElement.setAttribute("class", "card card-out");
			prevElement.style.opacity = 0;
			unSetPrev();
			setTimeout(function() {
				oAnim.cardRemoveAnimClasses(prevElement);
			}, 550);
		};
	}

	// Card Menu button
	cardMBtn(prevElement, unSetPrev) {
		if (prevElement == undefined) {
			console.log("cardXBtn element was undefined");
		} else {
			prevElement.setAttribute("class", "card card-out");
			prevElement.style.opacity = 0;
			unSetPrev();
			setTimeout(function() {
				oAnim.cardRemoveAnimClasses(prevElement);
			}, 550);
		};
	}

	// Cleans up classes after anim
	cardRemoveAnimClasses(element) {
		element.setAttribute("class", "card");
	}

	// Cleans up classes after anim
	cardClassCleenup(element) {
		for (var i = this.pageObject.cardSections.length - 1; i >= 0; i--) {
			this.pageObject.cardSections[i].setAttribute("class", "card");
		};
		this.pageObject.cardSections.push(element);
	}


}