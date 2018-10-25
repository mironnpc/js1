
/*
1) Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию. Доска должна быть разлинована соответствующим образом, т.е.
чередовать черные и белые ячейки. Строки должны нумероваться числами от 1 до 8, столбцы
– латинскими буквами A, B, C, D, E, F, G, H.
2) Заполнить созданную таблицу буквами, отвечающими за шахматную фигуру, например К-
король, Ф – ферзь и тп., причем все фигуры должны стоять на своих местах и быть
соответственно черными и белыми.
3) * Заменить буквы, обозначающие фигуры картинками.
4) * Создать массив объектов товаров, схожих с массивом объектов корзины и по шаблону, организовать вывод всех товаров на страницу, которая была сверстана к последнему уроку. (То есть из верстки в index.html должны уйти все карточки товаров, должен остатся только шаблон товара, по которому сгенерируются все остальные товары на странице).
*/
    
function addGridItem(className, textInItem, idCell) {
    //Создаем
    let newGridElement = document.createElement("div");
    //Настраиваем
    newGridElement.setAttribute("class",className);
    if (idCell != undefined)
        newGridElement.setAttribute("id",idCell);
    newGridElement.innerHTML = textInItem;
    //Возвращаем
    return newGridElement
}

function blackAndWhite(color) {
    if (color == "black") {
        return "white";
    } else {
        return "black";
    }
}

function charInGrid(numItem) {
    let str = "ABCDEFGH";
    return str.charAt(numItem)
}
    
function drawChessBorder() {

    //Определяем body
    let oBody = document.querySelector("body");
    //Создаем основной контейнер
    let newContaner = document.createElement("div");
    //Прописываем класс контейнеру
    newContaner.setAttribute("class","grid-main-container");
    //Вставляем контейнер в body
    oBody.insertBefore(newContaner, oBody.children[oBody.childElementCount-1]); 
    //Определяем вставленный контейнер
    let oContainer = document.querySelector(".grid-main-container");
    
    //Заполняем контейнер
    //Создаем grid-char
    for (var i = 0; i < 10; i++) {
        //Создаем grid-char
        oContainer.insertBefore(addGridItem("grid-item grid-char", charInGrid(i-1)), oContainer.children[oContainer.childElementCount]); 
    }
    
    //Создаем доску
    var color = "white";
    for (var i = 0; i < 8; i++) {
        //Создаем grid-num
        oContainer.insertBefore(addGridItem("grid-item grid-num", i+1), oContainer.children[oContainer.childElementCount]);
        //Создаем grid-item-black&white
        for (var j = 0; j < 8; j++) {
            color = blackAndWhite(color);
            oContainer.insertBefore(addGridItem("grid-item grid-" + color, '', charInGrid(j) + (i + 1)), oContainer.children[oContainer.childElementCount]);
        }
        //Меняем цвет для следующей итерации
        color = blackAndWhite(color);
        //Создаем grid-num
        oContainer.insertBefore(addGridItem("grid-item grid-num", i+1), oContainer.children[oContainer.childElementCount]);
    }

    //Создаем grid-char
    for (var i = 0; i < 10; i++) {
        //Создаем grid-char
        oContainer.insertBefore(addGridItem("grid-item grid-char", charInGrid(i-1)), oContainer.children[oContainer.childElementCount]); 
    }

}

//Шахматы в игре
var objChessInGame = {
    arrChessPosition: new Array(),
    addChess: function (pos, chess) {
        this.arrChessPosition[this.arrChessPosition.length] = {
            position: pos,
            figure: chess
        }
    },
    removeChess: function (pos) {
        let iElem = this.checkChessPosition(pos);
            
        this.arrChessPosition.splice(iElem,1);
    },
    checkChessPosition: function(pos) {
        for (let iElem in this.arrChessPosition) {
            if (this.arrChessPosition[iElem].position == pos) {
                return iElem;
            }
        }
    }
}

//НАЧНЕМ!

setTimeout(startChessGame, 1000);

function startChessGame () {
    //Рисуем доску!
    drawChessBorder();
    
    //Раставляем фигуры
    objChessInGame.addChess("A2", "peon-w");
    objChessInGame.addChess("B2", "peon-w");
    objChessInGame.addChess("C2", "peon-w");
    objChessInGame.addChess("D2", "peon-w");
    objChessInGame.addChess("E2", "peon-w");
    objChessInGame.addChess("F2", "peon-w");
    objChessInGame.addChess("G2", "peon-w");
    objChessInGame.addChess("H2", "peon-w");
    
    objChessInGame.addChess("A7", "peon-b");
    objChessInGame.addChess("B7", "peon-b");
    objChessInGame.addChess("C7", "peon-b");
    objChessInGame.addChess("D7", "peon-b");
    objChessInGame.addChess("E7", "peon-b");
    objChessInGame.addChess("F7", "peon-b");
    objChessInGame.addChess("G7", "peon-b");
    objChessInGame.addChess("H7", "peon-b");
    
    for (let i = 0; i < objChessInGame.arrChessPosition.length; i++) {
        let cellInBorder = document.getElementById(objChessInGame.arrChessPosition[i].position);
        
        cellInBorder.innerHTML = '<img class="chess" src="svg/' + objChessInGame.arrChessPosition[i].figure + '.svg" alt="chess">';
        
        console.log(objChessInGame.arrChessPosition[i].position)
    }

}
    

    