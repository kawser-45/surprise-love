function toggleMessage() {
  const message = document.getElementById("loveMessage");
  if (message.style.display === "none" || message.style.display === "") {
    message.style.display = "block"; // মেসেজ শো করবে
  } else {
    message.style.display = "none"; // মেসেজ হাইড করবে
  }
}

  
  

const containerElement = document.getElementById('counter');

const plusBtn = document.getElementById('plusBtn');

const minusBtn = document.getElementById('minusBtn');

let count = 0;

const updateCounter = (value) =>{

    (count = count +  value);
    containerElement.textContent = count;

    if (count >= 10) {
        plusBtn.setAttribute('disabled', true);
    } else{
        plusBtn.removeAttribute('disabled', false);
    }

   
    if (count <= 0) {
        minusBtn.setAttribute('disabled', true);
    } else{
        minusBtn.removeAttribute('disabled', false);
    }
}

plusBtn.addEventListener('click', () => {
 
    updateCounter(1);
});

minusBtn.addEventListener('click', () => {
    updateCounter(-1);
});




const generatorColor = () => {

  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  
    return `rgb(${r}, ${g}, ${b})`;
}
// console.log(generatorColor());

const updateColor = () => {
   const color = generatorColor();
   const colorBox = document.getElementById('colorBox');
   const colorCode =  document.getElementById('colorCode');

    colorBox.style.backgroundColor = color;
    colorCode.innerText = color;
}

const CopyColorCode = () => {
    const colorCode =  document.getElementById('colorCode');
   const inputTag = document.createElement('input');
   document.body.appendChild(inputTag);
   inputTag.value = colorCode.innerText;


   inputTag .select();
   document .execCommand('copy');
   document .body.removeChild(inputTag);
   alert('Color Copied to Clipboard');

}

document.getElementById('copyButton').addEventListener('click', () => {
    CopyColorCode();
});

function newColorBtn () {
    
    updateColor()
}