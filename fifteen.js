window.onload= function(){
    let puzzleArea = document.getElementById("puzzlearea");
    puzzleArea.style.display = "grid";
    puzzleArea.style.gridTemplateColumns = "repeat(4,auto)";
    let puzzlePiece = puzzleArea.children;
    pieceSet();
    //puzzlePiece[14].style.gridColumn = "4/ span 1";
    function pieceSet (){
        let i = 0;
        for (let y = 0; y < 4; y++){
            for (let x = 0; x < 4; x++){
                //console.log(x);
                //console.log(y);
                if(x==3&& y==3){break;};
                puzzlePiece[i].classList.add("puzzlepiece");
                puzzlePiece[i].style.position = "relative";
                puzzlePiece[i].setAttribute("id", "xy(" + x + "," + y + ")");
                puzzlePiece[i].style.backgroundPosition = (-1 * 100 * x) + "px" + " " + (-1 * 100 * y) + "px";
                puzzlePiece[i].addEventListener("click",movePiece);
                i++;
            }
        }
    }
    
    function findEmpty (){
        let movable = "";
        for (let y = 0; y < 4; y++){
            for (let x = 0; x < 4; x++){
                if (document.getElementById(`xy(${x},${y})`) == null){
                    movable = `xy(${x},${y})`;
                    break;
                } 
            }
        }
        return movable;
    }
     
    function movePiece (){
        let empty = findEmpty();
        let xEmp = parseInt(empty[3]);
        let yEmp = parseInt(empty[5]);
        this.style.gridRow = `${xEmp + 1} / span 1`;
        this.style.gridColumn = `${yEmp + 1} / span 1`;
        this.setAttribute("id", "xy(" + xEmp + "," + yEmp + ")" );
    }    
    
}