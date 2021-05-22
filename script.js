const resultImg = document.getElementById("resultImg");
const Download = document.getElementById("Download");

const generateMockup = () => {
  const websiteAdress = document.getElementById("websiteAddress").value;
  const bgColor = document.getElementById("bgColor").value;
  const mockup =
    "https://2s9e3bif52.execute-api.eu-central-1.amazonaws.com/production/screenshot?url=" +
    websiteAdress +
    "&color=" +
    bgColor;
  console.log(mockup);
  resultImg.src = mockup;

  Download.addEventListener("click", () => {
    window.open(mockup);
  });
};
