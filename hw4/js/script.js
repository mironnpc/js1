/*
Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.
*/

function numberToObject (iNum) {
    let nums = {
        'единицы': 0,
        'десятки': 0,
        'сотни': 0
        };
    if ((iNum > 999) || (iNum < 0 )) {
        return nums;
    } else {
        nums['сотни'] = parseInt(iNum/100);
        nums['десятки'] = parseInt((iNum - (parseInt(iNum/100) * 100))/10);
        //nums['единицы'] = iNum - ((parseInt((iNum - (parseInt(iNum/100) * 100))/10) * 10) + (parseInt(iNum/100) * 100));
        nums['единицы'] = iNum - ((nums['десятки'] * 10) + (nums['сотни'] * 100));
        return nums;
    }
} 

console.log(numberToObject(245));

/*
Продолжаем работу с нашим интернет-магазином 2.1. В прошлом ДЗ Вы реализовали корзину на базе массивов. Какими объектами можно заменить элементы данных массивов? 2.2. Реализуйте такие объекты 2.3. Перенесите функционал подсчета корзины на объектно-ориентированную базу
*/

var objBasket = {
    arrGoods: new Array(),
    checkGoodInBasket: function(iId) {
        for (let iElem in this.arrGoods) {
            if (this.arrGoods[iElem].id == iId) {
                return iElem;
            }
        }
    },
    addGoodToBasket: function(iId, sName, iCount, fPrice) {
        if (iCount != 0) {
            if (this.checkGoodInBasket(iId) == undefined) {
                this.arrGoods[this.arrGoods.length] = {
                    id: iId, //ид товара
                    name: sName, //назнание товара
                    count: iCount, //кол-во товара
                    price: fPrice //
                }    
            } else {
                this.arrGoods[this.checkGoodInBasket(iId)].count += iCount; 
            }
        } 
    },
    deleteGoodFromBasket: function(iId, iCount) {
        let iElem = this.checkGoodInBasket(iId);
        
        if ((this.arrGoods[iElem].id == iId) && (this.arrGoods[iElem].count <= iCount)) {
            this.arrGoods.splice(iElem,1);
        } else if ((this.arrGoods[iElem].id == iId) && (this.arrGoods[iElem].count > iCount)) {
            this.arrGoods[iElem].count -= iCount;
        }
    },
    countGoodsInBasket: function() {
        let iCountGoods = 0;
        
        for (let iElem in this.arrGoods) {
            iCountGoods += this.arrGoods[iElem].count; 
        }
        
        return iCountGoods;    
    },
    fullPriceInBasket: function() {
        let fFullPrice = 0;
        
        for (let iElem in this.arrGoods) {
            fFullPrice += this.arrGoods[iElem].count * this.arrGoods[iElem].price; 
        }
        
        return fFullPrice;    
    }
};

//Добавляем в корзину товары
objBasket.addGoodToBasket(122, "Beer", 1, 10.5);
objBasket.addGoodToBasket(123, "Vodka", 10, 9.5);
objBasket.addGoodToBasket(124, "Sidr", 3, 8.5);
objBasket.addGoodToBasket(125, "Ele", 25, 7.5);

//Ой нет, больше сидра!
objBasket.addGoodToBasket(124, "Sidr", 7, 8.5);

//Удаляем товар из корзины
//Давайте без водки
objBasket.deleteGoodFromBasket(123, 10);
//Давайте поменьше эля
objBasket.deleteGoodFromBasket(125, 20);

console.log("**********КОРЗИНА!**********");
console.log(objBasket);
console.log("В корзине " + objBasket.arrGoods.length + " вида товара. Общее кол-во товара: " + objBasket.countGoodsInBasket() + " на сумму: " + objBasket.fullPriceInBasket());
