// Extra feature: Multiple backgrounds
window.onload= function(){
    let puzzleArea = document.getElementById("puzzlearea");
    puzzleArea.style.display = "grid";
    puzzleArea.style.gridTemplateColumns = "repeat(4,auto)";
    let puzzlePiece = puzzleArea.children;
    pieceSet();
    backgrounds();
    document.getElementById("shufflebutton").addEventListener("click", shuffle);


    function pieceSet (){
        let i = 0;
        for (let y = 0; y < 4; y++){
            for (let x = 0; x < 4; x++){
                if(x==3&& y==3){break;};
                puzzlePiece[i].classList.add("puzzlepiece");
                puzzlePiece[i].style.position = "relative";
                puzzlePiece[i].setAttribute("id", "xy(" + x + "," + y + ")");
                puzzlePiece[i].style.backgroundPosition = (-1 * 100 * x) + "px" + " " + (-1 * 100 * y) + "px";
                puzzlePiece[i].style.gridRow = `${y + 1} / span 1`;
                puzzlePiece[i].style.gridColumn = `${x + 1} / span 1`;
                puzzlePiece[i].addEventListener("click",movePiece);
                puzzlePiece[i].addEventListener("mouseover", function (){
                    if (isMovable(this))
                        this.classList.add("movablepiece");
                    else
                        this.classList.remove("movablepiece");
                })
                i++;
            }
        }
        setBackground(Math.floor(Math.random() * 4));
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
        
        else if (xCo != 0 && xCo != 3 && yCo == 3 && (upID == null || leftID == null || rightID == null)){
            return true;
        }
        
        else if (xCo == 0 && yCo != 3 && yCo != 0 && (upID == null|| downID == null || rightID == null)){
            return true;
        }
        
        else if (xCo == 3 && yCo != 3 && yCo != 0 && (upID == null|| downID == null || leftID == null)){
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

        else if (xCo == 3 && yCo == 3 && (upID == null || leftID == null)){
            return true;
        }
        
        else {return false; }
    }

    function shuffle(){
        for (let i = 0; i < 300; i++){
            let empty = findEmpty();
            let xCo = parseInt(empty[3]);
            let yCo = parseInt(empty[5]);
            let upID = document.getElementById(`xy(${xCo},${yCo-1})`);
            let downID = document.getElementById(`xy(${xCo},${yCo+1})`);
            let leftID = document.getElementById(`xy(${xCo-1},${yCo})`);
            let rightID = document.getElementById(`xy(${xCo+1},${yCo})`); 
            let move =  Math.floor(Math.random() * 3);
            if (move == 0 && upID != null){
                movePiece.call(upID);
            }
            else if (move == 1 && downID != null){
                movePiece.call(downID);
            }
            else if (move == 2 && leftID != null){
                movePiece.call(leftID);
            }
            else if (rightID != null){
                movePiece.call(rightID);
            }
        }
    }

    function backgrounds (){
        let bg1 = document.createElement("button");
        let bg2 = document.createElement("button");
        let bg3 = document.createElement("button");
        let bg4 = document.createElement("button");
        let bgText1 = document.createTextNode("Background 1");
        let bgText2 = document.createTextNode("Background 2");
        let bgText3 = document.createTextNode("Background 3");
        let bgText4 = document.createTextNode("Background 4");   
        bg1.appendChild(bgText1);
        bg2.appendChild(bgText2);
        bg3.appendChild(bgText3);
        bg4.appendChild(bgText4);
        document.getElementById("controls").appendChild(bg1);
        document.getElementById("controls").appendChild(bg2);
        document.getElementById("controls").appendChild(bg3);
        document.getElementById("controls").appendChild(bg4);
        bg1.addEventListener("click", function(){ setBackground(0)});
        bg2.addEventListener("click", function(){ setBackground(1)});
        bg3.addEventListener("click", function(){ setBackground(2)});
        bg4.addEventListener("click", function(){ setBackground(3)});
    }

    function setBackground(ind){
        if (ind == 0){
            for (let i = 0; i < puzzlePiece.length; i ++){
                puzzlePiece[i].style.backgroundImage = "url(https://scontent.fktp1-1.fna.fbcdn.net/v/t1.0-9/45335630_1108518139322103_5562430518919692288_n.jpg?_nc_cat=108&_nc_ht=scontent.fktp1-1.fna&oh=6634a73d49f04a7faecd0e5deefcba7d&oe=5C4A9C18)";
            }
        }

        else if (ind == 1){
            for (let i = 0; i < puzzlePiece.length; i ++){
                puzzlePiece[i].style.backgroundImage = "url(https://scontent.fktp1-1.fna.fbcdn.net/v/t1.0-9/45351666_1108518159322101_4160483808308625408_n.jpg?_nc_cat=109&_nc_ht=scontent.fktp1-1.fna&oh=e57d28fb42e77ad96dca7c3c3d6edf11&oe=5C87E88F)";
            }
        }

        else if (ind == 2){
            for (let i = 0; i < puzzlePiece.length; i ++){
                puzzlePiece[i].style.backgroundImage = "url(https://scontent.fktp1-1.fna.fbcdn.net/v/t1.0-9/45279136_1108518255988758_3168952000566001664_n.jpg?_nc_cat=111&_nc_ht=scontent.fktp1-1.fna&oh=8d887ec97176048ffc9b113485fe9b88&oe=5C7D8053)";
            }
        }

        else {
            for (let i = 0; i < puzzlePiece.length; i ++){
                puzzlePiece[i].style.backgroundImage = "url(https://scontent.fktp1-1.fna.fbcdn.net/v/t1.0-9/45212702_1108518329322084_4035099543841275904_n.jpg?_nc_cat=106&_nc_ht=scontent.fktp1-1.fna&oh=d29c883ff5b058d5589fa9aa82f696ad&oe=5C80094A)";
                puzzlePiece[i].style.backgroundSize = 400 + "px " + 400 + "px"; 
            }
        }
    }

}