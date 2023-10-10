const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [2048, 2048],
  //dimensions: "A4",
  //units: "cm",
  //orientation: "landscape",
  //orientation: "portrait",
  //pixelsPerInch: 300,
};

const sketch = () => {
  return ({ context, width, height }) => {
    // the context that comes is: const context = canvas.getContext("2d"); from the canvas API
    context.fillStyle = "#BADA55";
    context.fillRect(0, 0, width, height); // x, y

    //circle
    context.beginPath();
    context.arc(width / 2, height / 2, width * 0.2, 0, Math.PI * 2, false);
    context.fillStyle = "white";
    context.fill();
    // line arround the circle
    context.lineWidth = 50;
    context.strokeStyle = "green";
    context.stroke();
  };
};

canvasSketch(sketch, settings);
