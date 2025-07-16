const generateBtn = document.getElementById("generateBtn");
const memeCanvas = document.getElementById("memeCanvas");
const ctx = memeCanvas.getContext("2d");

generateBtn.addEventListener("click", () => {
  const topText = document.getElementById("topText").value;
  const bottomText = document.getElementById("bottomText").value;
  const imageUpload = document.getElementById("imageUpload").files[0];

  if (imageUpload) {
    const reader = new FileReader();
    reader.onload = function (event) {
      const img = new Image();
      img.onload = function () {
        ctx.clearRect(0, 0, memeCanvas.width, memeCanvas.height);
        ctx.drawImage(img, 0, 0, memeCanvas.width, memeCanvas.height);
        ctx.font = "30px Impact";
        ctx.fillStyle = "white";
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.textAlign = "center";

        // Top text
        ctx.fillText(topText, memeCanvas.width / 2, 40);
        ctx.strokeText(topText, memeCanvas.width / 2, 40);

        // Bottom text
        ctx.fillText(bottomText, memeCanvas.width / 2, memeCanvas.height - 20);
        ctx.strokeText(
          bottomText,
          memeCanvas.width / 2,
          memeCanvas.height - 20
        );
      };
      img.src = event.target.result;
    };
    reader.readAsDataURL(imageUpload);
  } else {
    alert("Please upload an image!");
  }
});
