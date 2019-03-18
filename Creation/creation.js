var lastScrollTop = 0;

function getImageElements () {
    return document.getElementById("images-container");
}


function getNextImageNumber(currentImageNumber, children, isScrollDirectionDown) {
    if(isScrollDirectionDown) {
        if(currentImageNumber < children.length - 1) {
            return ++currentImageNumber;
        } else {
            return 0;
        }
    } else {
        if(currentImageNumber === 0) {
            return children.length - 1;
        } else {
            return --currentImageNumber;
        }
    }
}

function isDirectionDown() {
    var delta;
    var direction;

    if (event.wheelDelta) {
        delta = event.wheelDelta;
    } else {
        delta = -1 * event.deltaY;
    }

    if (delta < 0) {
        direction = true;
    } else if (delta > 0){
        direction = false;
    }

    return direction;
}


var isWheelInProgress = false;
var imagesContainer = getImageElements();
var currentImage = 0;
document.addEventListener("wheel", function (event) {
    var isScrollDirectionDown = isDirectionDown();
    if(!isWheelInProgress) {
        isWheelInProgress = true;
        setTimeout(function () {
            var children = imagesContainer.children;
            var nextImageNumber = getNextImageNumber(currentImage, children, isScrollDirectionDown);
            children[currentImage].style.height = "0";
            children[currentImage].style.display = "none";
            children[nextImageNumber].style.height = "initial";
            children[nextImageNumber].style.display = "initial";
            currentImage = nextImageNumber;
            // if(nextImageNumber === 0) {
            //     currentImage = 0;
            // } else if(isScrollDirectionDown) {
            //     currentImage++;
            // } else {
            //     currentImage = nextImageNumber;
            // }
            isWheelInProgress = false;
        }, 1000);
    }
});

// var buttonToClick = document.getElementById("button-for-click");
// buttonToClick.addEventListener("click", function () {
//     alert("i was clicked");
// });

