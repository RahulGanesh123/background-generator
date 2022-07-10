var css = document.querySelector("h3")
var color1 =  document.querySelector(".color1")
var color2 = document.querySelector(".color2")
var body = document.querySelector("body")

console.log(css)
console.log(color1)
console.log(color2)
console.log(body)

function setGradient() {
	body.style.background = "linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")"

	css.innerHTML = body.style.background
}

//Notice how a function is being passed to a function. That is all a callback function is, its just a function being passed to another function, and when doing so, you need to remove the (). The reason being is that the callback function is only called AFTER a specific event has occurred. 
color1.addEventListener("input", setGradient)
color2.addEventListener("input", setGradient)