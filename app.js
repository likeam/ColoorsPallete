function run(){
    //  FOR THE INTIAL RUN
    const colorInputOne = document.getElementById("color1");
    const colorInputTwo = document.getElementById("color2");
    const paletteCount = document.getElementById("palette-count-input");


    [colorInputOne, colorInputTwo, paletteCount].forEach((colorInput) => {
        colorInput.addEventListener("input", function(){
            //CALL A FUNCTION WHICH GENERATES COLORS

        });
    });
}
function generatePalette(color1, color2,paletteCount){
    const paletteContainer = document.getElementById("palette");
    // REMOVE ALL THE CHILD NODES AND APPEND NEW NODES
    paletteContainer.innerHTML ="";


    const colorPalette = chroma.scale([color1, color2]).mode("lch").colors(paletteCount);

    //ARRYS OF COLORS
    colorPalette.forEach(colorPalette =>{
        const paletteItem = document.createElement("div");
        paletteItem.classList.add("palette-item");
        pall
    })
}

window.addEventListener("load", () =>{
    run();
});