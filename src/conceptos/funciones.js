const upcase = (strings, ...values) => {
	return values.map((name) => name[0].toUpperCase()).join(" ") + strings[2];
};

const person = {
	first: "brendan",
	last: "eich",
	age: 56,
	position: "CEO of Brave Software",
};
let { first, last } = person;

const emoticon = [
	["┌", "("],
	["˘", "⌣"],
	["˘", ")", "ʃ"],
];
console.log(
	//los values son: ${first} y $(last), los strings son: lo que está entre cada devisión.
	upcase`${first} ${last} is the creator of JavaScript! ` +
		emoticon.flat().join("")
);
