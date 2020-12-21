export function screenSize(editorDom) {
  let screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  let screenHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;
  let defWidth = 1920;
  let defHeight = 1080;
  let xScale = screenWidth / defWidth;
  let yScale = screenHeight / defHeight;
  console.log(document.body.clientWidth, document.documentElement.clientWidth);
  editorDom.style.cssText += ';transform: scale(' + xScale + ',' + yScale + ')';
  window.addEventListener('resize', () => {
    let screenWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    let screenHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight;
    xScale = screenWidth / defWidth;
    yScale = screenHeight / defHeight;

    editorDom.style.cssText +=
      ';transform: scale(' + xScale + ',' + yScale + ')';
  });
}
