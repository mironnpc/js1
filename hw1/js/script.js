//1) Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в градусах по Фаренгейту. Подсказка: расчёт идёт по формуле: Tf = (9 / 5) * Tc + 32, где Tf – температура по Фаренгейту, Tc – температура по Цельсию
var Tf;
var Tc = 36;

Tf = (9 / 5) * Tc + 32;
console.log(Tc + "°C = " + Tf + "°F");

//--------------------------------------------------------------------------------

//2) Работа с переменными.
var q1 = 1;
var q2 = 2;
var q3 = 3;
var q4 = 4;

console.log(q1 + q2 - q3 / q4);
console.log(q1 + "" + (q2 - q3 / q4));

//--------------------------------------------------------------------------------

//3) Объявить две переменные: admin и name. Записать в name строку "Василий"; Скопировать значение из name в admin. Вывести admin (должно вывести «Василий»).

var admin;
var name = "Василий";

admin = name;

console.log(admin);

//--------------------------------------------------------------------------------

//4) * Чему будет равно JS-выражение 1000 + "108";

console.log(1000 + "108");

//5) * Самостоятельно разобраться с атрибутами тега script (async и defer)
//async скрипт будет выполняться без ожидания загрузки веб-страницы
//defer Наборот ждет сначало пока сформируется веб-страница