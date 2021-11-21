const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second"); //selecting classes from HTML Laurita

function setDate() {
	const now = new Date(); //CURRENT DATE laurita

	const getSecond = now.getSeconds(); //to get curent seconds laurita
	const getMinute = now.getMinutes(); //to get curent minutes laurita
	const getHour = now.getHours(); //to get curent hour laurita

	const secondDegree = (getSecond / 60) * 360; //to calculate degrees for seconds arrow laurita
	const minuteDegree = (getMinute / 60) * 360; //to calculate degrees for minutes arrow laurita
	const hourDegree = (getHour / 12) * 360; //to calculate degrees for hour arrow laurita

	second.style.transform = `rotate(${secondDegree}deg)`; //overriding css laurita
	minute.style.transform = `rotate(${minuteDegree}deg)`; //overriding css laurita
	hour.style.transform = `rotate(${hourDegree}deg)`; //overriding css laurita
}
setInterval(() => {
	setDate();
}, 1000);//calling this function every second laurita
