/*
1) Доработать функцию замены картинки в галерее таким образом, чтобы она проверяла наличие картинки по указанному в src адресу.
2) Добавить в галерею функцию перехода к следующему изображению. По сторонам от большой картинки должны быть стрелки “вперед” и “назад”, по нажатию на которые происходит замена изображения на следующее или предыдущее. 
3) * Продолжаем работать с модулем корзины. У каждого товара на странице есть кнопка «Купить», при нажатии на которую происходит добавление имени и цены товара в блок корзины. Корзина должна уметь считать общую сумму заказа. По желанию, разнообразить функционал.
4) * При клике на кнопку «Подробнее», должно открыться всплывающее окно (сделать любым удобным способом) в нем будет описание, цена, кнопка «Купить», фотография (при желании сделать по несколько фото в виде слайдера, по подобию что делали на уроке).
*/

//1

let loopInterval;   //Глобальный loop указатель
let loopCount = 0;  //Счетчик смены картинок
let timer = 3000;   //Таймер переключения картинок

function loopPics(images) {
    loopCount++;
    changeBigPicture(loopCount, images);
}

function init() {
    let arrowLeft = document.querySelector(".arrowLeftImg");
    let arrowRight = document.querySelector(".arrowRightImg");
    let images = document.querySelectorAll(".smallImg");
    
    //Задаем события для мелких картинок
    for (let i = 0; i < images.length; i++) {
        images[i].onclick = function() {
            changeBigPicture(i, images);
        }
    }
    //Задаем событие для стрелки влево
    arrowLeft.onclick = function() {
        changeBigPicture(loopCount-1, images);
        clearInterval(loopInterval);
        //задаем интервал заного, сделано для того чтобы не перескакивал сразу после нажатия на стрелку
        loopInterval = setInterval(loopPics, timer, images);
    }
    //Задаем событие для стрелки вправо
    arrowRight.onclick = function() {
        changeBigPicture(loopCount+1, images);
        clearInterval(loopInterval);
        //задаем интервал заного, сделано для того чтобы не перескакивал сразу после нажатия на стрелку
        loopInterval = setInterval(loopPics, timer, images);
    }
    loopInterval = setInterval(loopPics, timer, images);
}

function changeBigPicture(index, images) {
    //Проверка на последний, первый элемент
    if (index >= images.length) {
        index = 0;
    } else if (index < 0) {
        index = images.length - 1;
    }
    
    //если высота картинки ровна нулю значит картинка не загрузилась, переходим к следующей.
    if (images[index].naturalHeight == 0) {
        changeBigPicture(index + 1, images);
    } else {
        let appBigPic = document.getElementById("bigImg");
        appBigPic.src = images[index].src;
        loopCount = index;
    } 
}


window.onload = init;