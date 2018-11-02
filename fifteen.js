window.onload= function(){
    let puzzleArea = document.getElementById("puzzlearea");
    puzzleArea.style.display = "grid";
    puzzleArea.style.gridTemplateColumns = "repeat(4,auto)";
    let puzzlePiece = puzzleArea.children;
    pieceSet();
    //console.log(isMovable(puzzlePiece[9]));
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
        if (isMovable(this)){
            let empty = findEmpty();
            let xEmp = parseInt(empty[3]);
            let yEmp = parseInt(empty[5]);
            this.style.gridRow = `${yEmp + 1} / span 1`;
            this.style.gridColumn = `${xEmp + 1} / span 1`;
            this.setAttribute("id", "xy(" + xEmp + "," + yEmp + ")" );
        }
    }
    
    function isMovable (piece){
        let coo = $( piece ).attr('id');
        let xCo = parseInt(coo[3]);
        let yCo = parseInt(coo[5]);
        let upID = document.getElementById(`xy(${xCo},${yCo-1})`);
        let downID = document.getElementById(`xy(${xCo},${yCo+1})`);
        let leftID = document.getElementById(`xy(${xCo-1},${yCo})`);
        let rightID = document.getElementById(`xy(${xCo+1},${yCo})`);
        if ( xCo != 0 && xCo != 3 && yCo != 3 && yCo != 0 && (upID == null|| downID == null || leftID == null || rightID == null)){
            return true;
        }
        
        else if (xCo != 3 && xCo != 0 && yCo == 0 && (downID == null || leftID == null || rightID == null)) {
            return true;
        }
        
        else if (xCo != 0 && yCo == 3 && (upID == null || leftID == null || rightID == null)){
            return true;
        }
        
        else if (xCo == 0 && yCo != 3 && yCo != 0 && (upID == null|| downID == null || rightID == null)){
            return true;
        }
        
        else if (xCo == 3 && yCo != 0 && (upID == null|| downID == null || leftID == null)){
            return true;
        }

        else if (xCo == 3 && yCo == 0 &&(downID == null || leftID == null)){
            return true;
        }

        else if (xCo == 0 && yCo == 0 && (downID == null || rightID == null)){
            return true;
        }

        else if (xCo == 0 && yCo == 3 && (upID == null || rightID == null)){
            return true;
        }
        
        else {return false; }
    }
    
}