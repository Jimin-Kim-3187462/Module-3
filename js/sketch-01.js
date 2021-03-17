    function setup() {
    
    
        
    createCanvas(1000, 1000); // width, height
    background(212, 237, 199); //rgb

    var i; // 동그라미 연속으로 내려가는거
    i = 0;  

    stroke(0);
    fill(255);
    while (i < 100) // 이거 숫자 올라갈수록 여러개됨 (길어짐)
    {
        // ellipse(50 * i, 50 * i, 200, 200); --> 동그라미들 사선으로 내려가는거
        fill(random(255), random(255), random(255)) // 공 색깔 다양하게
        ellipse(random(1000), random(1000), 200, 200); // 캔버스안에 왼쪽 오른쪽에 1000꽉차게 랜덤으로 공 나타나게 한후, 공의 사이즈는 200으로 함
        i = i + 1; // 이걸 쉽게 i++;라고 쓸수도잇음 동일한 것
    }

    // for(var i = 1; i < 100; i++) {
       // fill(random(255), random(255), random(255)) // 공 색깔 다양하게
       // ellipse(random(1000), random(1000), 200, 200);
    //}

    // for 는 while의 랜덤과 동일함. 둘중 하나만 하면됨.

    noStroke()
    fill (68, 58, 148);
    rect(100, 100, 50, 500); // 왼 위 left, top, width, height

    noStroke()
    fill (68, 58, 148);
    ellipse(200, 200, 200, 200); // 

    noStroke()
    fill (212, 237, 199);
    ellipse(200, 200, 50, 50); // 
    }


    function draw () {
        stroke(0);
        noFill(0); //이거 두개는 테두리만 잇는 빈 동그라미 가능
                                                        /*noStroke(0);
                                                        fill(255, 0, 0);
                                                        var rad = random(50) *2; // 이거는 흩뿌려지는 피 가능 */

        var rad = random(100) * 2; // var rad빼고 밑에 rad 대신 200을 넣으면 일정한 동그라미 가능
        ellipse(mouseX, mouseY, rad, rad); // 화면에 까맣게 그림그릴 수 잇음 내가 닿는 곳마다.
    }
function mousePressed() {

    saveCanvas("sketch-01","png");
}