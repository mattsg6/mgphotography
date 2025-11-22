function genImages(num) {
  let parent = document.getElementById("parent");
  let div = document.getElementById("div-img-0");
  let a = document.getElementById("a-img-0");
  let img = document.getElementById("img-0");
  let count = 1;
  while (count < num) {
    let cloneDiv = div.cloneNode(false);
    cloneDiv.id = `div-img-${count}`;
    cloneA = a.cloneNode(false);
    cloneA.id = `a-img-${count}`;
    cloneA.href = cloneA.href.replace("img1", `img${count + 1}`);
    cloneImg = img.cloneNode(false);
    cloneImg.id = `img-${count}`;
    cloneImg.src = cloneImg.src.replace("img1", `img${count + 1}`);
    cloneA.appendChild(cloneImg);
    cloneDiv.appendChild(cloneA);
    parent.append(cloneDiv);
    count++;
  }
}
