let colors = [
    "Red",
    "Yellow",
    "Blue",
    "Gray",
]


let popped = 0;
var rounding = Math.floor(Math.random() * colors.length);
document.getElementById("findColor").innerText = "Find " + colors[rounding]
console.log(rounding)
document.addEventListener('click', function(e){
    for(var i = 0; i<24; i++){
        var rounding = Math.floor(Math.random() * colors.length);
        console.log(rounding)
    document.getElementById("findColor").innerText = "Find " + colors[rounding]
    
    }
    
    if (e.target.className === "balloon"){
        
                e.target.style.backgroundColor = "#ededed";
                e.target.textContent = "blast!";
                popped++;
                removeEvent(e);
                checkAllPopped();
    }   
});

function removeEvent(e){
    e.target.removeEventListener('click', function(){
        
    })
};

function checkAllPopped(){
    if (popped === 24){
        console.log('all popped!');
        let gallery = document.querySelector('#balloon-gallery');
        let message = document.querySelector('#yay-no-balloons');
        gallery.innerHTML = '';
        message.style.display = 'block';
    }
};
