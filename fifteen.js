window.onload= function(){
    let puzzleArea = document.getElementById("puzzlearea");
    puzzleArea.style.display = "grid";
    puzzleArea.style.gridTemplateColumns = "repeat(4,auto)";
    let puzzlePiece = document.querySelectorAll("#puzzlearea div");
    pieceSet();
    function pieceSet (){
        let i = 0;
        for (let y = 0; y < 4; y++){
            for (let x = 0; x < 4; x++){
                puzzlePiece[i].classList.add("puzzlepiece");
                puzzlePiece[i].style.position = "relative";
                puzzlePiece[i].setAttribute("id", "xy(" + x + "," + y + ")");
                puzzlePiece[i].style.backgroundPosition = (-1 * 100 * x) + "px" + " " + (-1 * 100 * y) + "px";
                i++;
            }
        }
    }
}