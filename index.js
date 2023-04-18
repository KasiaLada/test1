// // const name = "Kasia";
// // const cat = "Pnelopa";

// // console.log(`czesc, jestem ${name}, a to jest ${cat}, mój kot`);

// // const catAge = 16;

// // console.log("Pnelopa ma już " + catAge + "lat " + name + "!");

// // const msg = "abgkfddggjhhj";
// // console.log(msg.toUpperCase());

// // const text1 = "powieksz mnie";
// // console.log(text1.toUpperCase());

// // const text2 = "ZAPISZ MNIE MAŁYMI LITERAMI";
// // console.log(text2.toLowerCase())

// // const text3 = "$#%#^ wytnij te dziwne znaki na początku!";
// // console.log(text3.slice(6));

// // const text4 = 'sprawdź, czy zawieram słowo "czy"';
// // console.log(text4.includes("czy"));

// // const text5 =
// //     'wyLoguj w konsoli tylko literę "L", która znajduje się w wyrazie "Wyloguj"';
// // console.log(text5.charAt(2))

// // const text6 = "pies zamień każde słowo pies, na słowo kot pies";
// // console.log(text6.replaceAll("pies", "kot"));

// // const text7 = "podziel, ten, string, od, przecinków";
// // console.log(text7.split(","));

// // const text1 = "powiększ mnie!";
// // const text2 = "ZAPISZ MNIE MAŁYMI LITERAMI";
// // const text3 = "$#%#^ wytnij te dziwne znaki na początku!";
// // const text4 = 'sprawdź, czy zawieram słowo "czy"';
// // const text5 =
// // 	'wyLoguj w konsoli tylko literę "L", która znajduje się w wyrazie "Wyloguj"';
// // const text6 = "pies zamień każde słowo pies, na słowo kot pies";
// // const text7 = "podziel, ten, string, od, przecinków";

// // console.log(text1.toUpperCase());
// // console.log(text2.toLowerCase());
// // console.log(text3.slice(6));
// // console.log(text4.includes("czy"));
// // console.log(text5.charAt(2));
// // console.log(text6.replaceAll("pies", "kot"));
// // console.log(text7.split(","));

// // console.log(10 === "10");

// // const pass = "dgdgd!fgff";

// // if (pass.length > 10 && pass.includes("!")) {
// // 	// console.log(pass.includes("!"));
// // 	console.log("masz reweacyjne hasło");
// // } else if (pass.length > 10) {
// // 	console.log("masz dobre hasło");
// // } else {
// // 	console.log("masz za krótkie hasło");
// // }

// // ==========================
// // const x = 50;
// // const y = 30;

// // if (x > y) {
// // 	console.log(`${x}>${y}`);
// // }
// // ====================
// // const color = "blue";
// // const newColor = "green";

// // if (color === newColor) {
// // 	console.log("kolory się zgadzają");
// // } else {
// // 	console.log("kolory się nie zgadzają");
// // }
// // ==============
// // const x = 100;
// // const y = 50;
// // if (x > y) {
// // 	console.log("x > y");
// // } else if (x === y) {
// // 	console.log("x=y");
// // } else {
// // 	console.log("x<y");
// // }
// // // =============

// const promo = "40%";

// switch (promo) {
// 	case "20%":
// 		console.log("dzis jest promoja 20%");
// 		break;
// 	case "10%":
// 		console.log("dzis jest promoja 10%");
// 		break;
// 	case "30%":
// 		console.log("dzis jest promoja 30%");
// 		break;
// 	default:
// 		// console.log("dzis nie ma promocji");
// 		console.log(`dziś mamy ${promo} zniżki`);
// }

// // =============== operator warunkowy

// // const x = 10;

// // const check = (x % 2 === 0) ? "x jest parzyste" : "x nie jest parzyste"
// // console.log(check);

// // ==========================

// // const x = 50;

// // if (x >= 100) {
// // 	console.log("x>=100".toUpperCase());
// // } else if (x < 100 && x > 30) {
// // 	console.log(("X jest średniakiem").toUpperCase());
// // } else {
// // 	console.log(("x jest mały").toUpperCase());
// // }

// // const x = 50;
// // let text;

// // if (x >= 100) {
// // 	text = "x>=100";
// // } else if (x < 100 && x > 30) {
// // 	text = "X jest średniakiem";
// // } else {
// // 	text = "x jest mały";
// // }
// // console.log(text.toUpperCase());

// // ======PĘTLE

// const color = ["green", "red", "orange", "black", "white"];

// for (let i = 0; i < color.length; i++) {
// 	console.log(color[i]);
// }

// // const cities = ["Katowice", "Kraków", "Wrocław"];
// // for (let i = 0; i < cities.length; i++) {
// // 	console.log(`to miasto nazywa sie ${cities[i].toUpperCase()}`);
// // }

// // let x = 0;
// // while (x <= 10) {
// // 	x = x + 2;
// // 	console.log(x);
// // }

// // let x = 0;
// // while (x <= 10) {
// // 	// x = x + 2;
// // 	x+=2
// // 	console.log(x);
// // }

// // let x = 20;
// // do {
// // 	x = x - 3;
// // 	console.log(x);
// // } while (x > 0);

// // let x = 20;
// // do {
// // 	x = x - 3;
// // } while (x > 0);
// // console.log(x);

// // let array = [5, 8, 10, 23, 48, 60];
// // for (const numbers of array) {
// // 	console.log(numbers / 5);
// // 	if (x % 2) {
// // 		console.log("liczba jest parzysta");
// // 	} else {
// // 			console.log("liczba jest nieparzysta");
// // 		}
// // 	}

// // let numbers = [5, 8, 10, 23, 48, 60];
// // for (const number of numbers) {
// // 	if (number % 2 === 0) {
// // 		console.log(`liczba ${number} jest parzysta`);
// // 	} else {
// // 		console.log(`liczba ${number} jest nieparzysta`);
// // 	}
// // }

// const colors = [1];
// colors.push("gold");
// console.log(colors);

// colors.pop("gold");
// console.log(colors);

// colors.unshift("gold");
// console.log(colors);

// colors.push("gold");
// console.log(colors);

// colors.shift("gold");
// console.log(colors);

// // zadanie1 =========

// let score;

// const add = (x, y) => {
// 	score = x + y;
// 	// if (score % 2 === 0) {
// 	// 	evenMsg();
// 	// } else {
// 	// 	oddMsg();
// 	// }
// 	score % 2 === 0 ? evenMsg() : oddMsg();
// };

// const evenMsg = () => {
// 	console.log(`liczba ${score} jest parzysta`);
// };
// const oddMsg = () => {
// 	console.log(`liczba ${score} jest nieparzysta`);
// };
// add(10, 10);

// // zad 2=============

// let celsius;
// let temp;

// const fahrenheit = c => {
// 	celsius = c;
// 	temp = celsius * 1.8 + 32;
// 	console.log(`${celsius}C = ${temp}F`);
// };

// fahrenheit(20);

// // zad 3  ============

// const num = 10;
// const numbers = [];

// for (let i = 0; i < num; i++) {
// 	numbers.push(i);
// }
// // console.log(numbers);

// const checkNumbers = number => {
// 	if (number % 3 === 0 && number !== 0) {
// 		console.log(`${number} jest podzielne przez 3`);
// 	} else {
// 		console.log(`${number} nie jest podzielne przez 3`);
// 	}
// };
// numbers.forEach(checkNumbers)

// // ===============

// const x = 50;
// const y = 30;
// if (x > y) {
// 	console.log(`"${x} jest większe niż ${y}"` );
// }

// ===========

// const color = 'blue';
// let newColor = 'green';
// if (color === newColor) {
// 	console.log("kolory sie zgadzja");
// } else (color !== newColor) {
// 	console.log("nie zgadzaja soe");
// }

// const x = 100;
// const y = 50;
// if (x > y) {
// 	console.log(`"${x} jest większe niż ${y}"` );
// } else if (x === y) {
// 	console.log(x=y);
// } else {
// 	console.log(x<y);
// }

// const x = 10
// const newX = (x % 2 === 0) ? 'jest':'nie jest';
// console.log(newX);

// let x = 50;
// if (x >= 100) {
// 	console.log(x > 100);
// } else if (x < 100 && x > 30) {
// 	console.log("x jest sr".toUpperCase());
// } else  {
// 	console.log("mały".toUpperCase());
// }

// const colors = ['g', 'r', 'b']
// for (let i = 0; i < colors.length; i++) {
// 	console.log(colors[i]);
// }

// const cities = ["Mysłowice", "Katowice", "Gliwice"];
// for (let i = 0; i < cities.length; i++) {
// 	console.log(`to miasto nazywa sie ${cities[i].toUpperCase()}`);
// }

// let x = 0;
// while (x <= 10) {
// 	x += 2;
// 	console.log(x);
// }

// let x = 20
// do {
// 	x -= 3;
// } while (x>0)
// console.log(x);
// ========================
// const numbers = [5, 8, 10, 23, 48, 60];
// for (const number of numbers) {
// 	console.log(number / 5);

// 	console.log("---------");
// }
// for (const number of numbers) {
// 	if (number % 2 === 0) {
// 		console.log(`liczba ${number} jest parzysta`);
// 	} else {
// 		console.log(`liczba ${number} jest nieparzysta`);
// 	}
// }

// const numbers = [1, 2, 3, 4];
// const meals = ['spaghetti', 'zupa']
// const menu = [...meals,...numbers]
// console.log(menu);

//     const numbers = [0, 0, 1, 1, 2, 2, 2];
// 		const colors = ["red", "green", "blue", true, 123];
// const cars = [123, true, "audi", "bmw", "mercedes", "ferrari", "🤷‍♂️", "👀"];

// let numbers2 = numbers.slice(0, 2)
// console.log(numbers2);

// let numbers3 = numbers.slice(-3)
// console.log(numbers3);

// let randomStuff = colors.splice(-2)
// console.log(colors);
// console.log(randomStuff);

// let newCars = cars.splice(2, 4, "test")
// console.log(cars);
// console.log(newCars);

// const numbers = [1, 2, 3]
// const food = ["hamb", "pizza"]
// const newArray = [...numbers, ...food]
// console.log(newArray);

// const numbers = [1, 5, 13, 26, 48];
// const newNumbers = numbers.map(number => number * 5);
// console.log(newNumbers);

// for (const number of newNumbers) {
// 	if (number % 2 === 0) {
// 		console.log('parz');
//     } else {
//         console.log('nie');
//     }
// }

// for (const number of newNumbers) {
// 	if (number % 2 === 0) {
// 		console.log("parzysta");
// 	} else {
// 		console.log("nieparz");
// 	}
// }
// const number = ["green"];
// number.push("red");
// number.unshift("blue");
// console.log(number);

// for (let i = 0; i < number.length; i++) {
//     console.log(`moj ulubiony kolor to ${number[i].charAt(0).toUpperCase() + number[i].slice(1)}
//     `);
// }

// function hello(name, age) {
// name = "Kasia";
// age = 18;
// 	console.log(`Cześć mam na imię ${name} i mam ${age}lat`);
// }
// hello("Kasia", 18);

// const test = (name, age) => console.log(name, age);
// test("name", 18);

// const add = (num1, num2) => {
// 	console.log("czesc");
// 	return num1 * num2;
// };
// const test2 = name => console.log(`mam na imię ${name}`);
// test2("Kasia");

// const test4 = (name, age) => console.log(name, age);
// test4("Kasia", 18);

// const days = ["poniedziałek", "wtorek", "sroda"];
// const days2 = days.forEach(day => console.log(day));

// const name = (params) => {

// }

// let score;
// const add = (x, y) => {
// 	score = x + y;
// 	if (score % 2 === 0) {
// 		evenMsg();
// 	} else {
// 		oddMsg2();
// 	}
// };
// const evenMsg = () => {
// 	console.log(`liczba ${score} jest parzysta`);
// };
// const oddMsg2 = () => {
// 	console.log(`liczba ${score} jest nieparzysta`);
// };
// add(10,10)

// let score;
// const add = (x, y) => {
// 	score = x + y;
// 	if (score % 2 === 0) {
// 		name();
// 	} else {
// 		name2();
// 	}
// };

// const name = () => {
// 	console.log(`liczba ${score} jest parzysta`);
// };

// const name2 = () => {
// 	console.log(`liczba ${score} jest nieparzysta`);
// };
// add(2, 5);

// let celsius;
// let temp;
// const fahrenheit = c => {
//     celsius = c;
//     temp = c * 1.8 + 32;
//     console.log(`${c} stopni = ${temp}`);
// };
// fahrenheit(12);

const num = 10;
const numbers = [];

for (let i = 0; i < num; i++) {
	numbers.push(i);
}

// console.log(numbers);

const checkNumbers = number => {
	if (number % 3 === 0 && number !== 0) {
		console.log(`${number} jest podzielne przez 3`);
	} else {
		console.log(`${number} nie jest podzielne przez 3 lub ${number} = 0`);
	}
};
numbers.forEach(checkNumbers);
