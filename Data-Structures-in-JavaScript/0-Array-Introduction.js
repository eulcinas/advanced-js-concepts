const strings = ["a", "b", "c", "d"];
// 4*4=16 bytes of storage

//? access array
strings[2];

//? push
strings.push("e"); // 0(1) operation

//? pop
strings.pop(); // 0(1)

//? unshift
strings.unshift("x"); // 0(n)

//? splice
strings.splice(2, 0, "alien"); // 0(n)

console.log(strings);
