const generateRGBcolor = () => {

    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
};


const updateColor = () => {

    const color = generateRGBcolor();
    const colorBox = document.getElementById("colorBox");
    const colorCode = document.getElementById("colorCode");

    colorBox.style.backgroundColor = color;
    colorCode.innerText = color;
};


const copyColorcode = () => {

    const colorCode = document.getElementById("colorCode");

    const inputTag = document.createElement("input");
    document.body.appendChild(inputTag);

    inputTag.value = colorCode.innerText;
    inputTag.select();

    document.execCommand("copy");
    document.body.removeChild(inputTag);

    alert("Color code copied!");
};


// event listeners
document.getElementById("generateBtn").addEventListener("click", updateColor);
document.getElementById("copyButton").addEventListener("click", copyColorcode);
