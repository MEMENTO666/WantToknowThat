import { textContents } from "./contents.js";

const VIEWMORE = document.querySelector("#viewMore");
const PREVIEW = document.getElementById("preview");
let currentItems = 4;
const maxItemCount = textContents.length;

const createPhotoDiv = (title, imageUrl) => {
  const childDiv = document.createElement('div');
  childDiv.style.width = '100%';
  childDiv.style.height = '55px';
  childDiv.style.backgroundColor = '#15151A';
  childDiv.style.opacity = 0.8;
  childDiv.style.color = 'white';

  const p = document.createElement('p');
  p.style.margin = '0px';
  p.style.fontSize = '14px';
  p.style.fontWeight = 'bold';
  p.style.padding = '10px';
  p.textContent = title;
  
  childDiv.appendChild(p);

  const photoDiv = document.createElement('div');
  photoDiv.style.width = '330px';
  photoDiv.style.height = '220px';
  photoDiv.style.border = '1px solid rgba(253, 155, 0, 1)';
  photoDiv.style.display = 'flex';
  photoDiv.style.margin = '5px';
  photoDiv.style.flexDirection = 'column';
  photoDiv.style.justifyContent = 'flex-end';
  photoDiv.style.backgroundImage = `url(${imageUrl})`;
  photoDiv.style.backgroundPosition = 'center';
  photoDiv.style.backgroundSize = 'cover';
  
  photoDiv.addEventListener("mouseover",(e) => {
    photoDiv.style.scale = (1.1);
    photoDiv.style.transition = "0.4s";
  });

  photoDiv.addEventListener("mouseout",(e) => {
    photoDiv.style.scale = "none";
    photoDiv.style.transition = "0.4s";
  });


  photoDiv.appendChild(childDiv);
  return photoDiv;
}

for(let i=0; i<currentItems; i++)
{
  const photoDiv = createPhotoDiv(textContents[i].title, textContents[i].url);
  PREVIEW.appendChild(photoDiv);
}

VIEWMORE.addEventListener("click", (e) => {
  console.log('#### max = ', maxItemCount);
  console.log('#### current = ', currentItems);

  if(maxItemCount <= currentItems) {
    return;
  }

  for(let i=0; i<4; i++)
  {
    const photoDiv = createPhotoDiv(textContents[currentItems].title, textContents[currentItems].url);
    PREVIEW.appendChild(photoDiv);
    currentItems++;

    if(maxItemCount === currentItems) {
      return;
    }
  }
});

VIEWMORE.addEventListener("mouseover",(e) => {
  VIEWMORE.style.width = "95px";
  VIEWMORE.style.height = "45px";
  VIEWMORE.style.fontSize = "18px";
  VIEWMORE.style.transition = "0.4s";
});

VIEWMORE.addEventListener("mouseout",(e) => {
  VIEWMORE.style.width = "90px";
  VIEWMORE.style.height = "40px";
  VIEWMORE.style.transition = "0.4s";
  VIEWMORE.style.fontSize = "16px";

});






