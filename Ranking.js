class Rating {
  constructor(def) {
    this.starAmount = def.starAmount;
    this.spawnPoint = def.parent;
    this.idTemplate = "tmpText";
    this.htmlNode;
    this.template;
    this.storedScore;
    this.initEngine()
  }

  calificate() {
const elements = document.querySelectorAll('.starColor')
    document.addEventListener('click', (event) => {
      if (event.target.classList.contains('starColor')){
	let index = Array.from(elements).indexOf(event.target)
	for (let turn = 0; turn <= index; turn++){
	elements[turn].classList.add('starChecked')
}	

    this.storedScore = index + 1;
console.log(this.storedScore)

painting(elements.length)
function painting(toPaint) {

  if (elements[toPaint]) {
    elements[toPaint].classList.remove('starChecked');
  }

  if (toPaint > index + 1) {
    return painting(toPaint - 1);
  }
}
	
}
    });
  }

createStar(params){
 let icon = document.createElement("i");
icon.classList = params.style.figure
return icon
}

impStar(index){
  this.contentStar = document.querySelector('.stars')
  let imp = this.createStar({
    style: {
      figure: "fa-solid fa-star starColor " + index,
    }
  })

  this.contentStar?.appendChild(imp);

}

  templateInsert = () => {
      const $templateDefaults = `<template id=${this.idTemplate}>
          <div id="containerGeneral">
          <div class="textCenter">
          <div class="stars">
        </div>
                      </div>
          </div>
          </template>`;
      this.template ??= $templateDefaults;
      document.body.insertAdjacentHTML('afterend', this.template);
    this.htmlNode ??= document.querySelector(`#${this.idTemplate}`).content.firstElementChild.cloneNode(true);

this.locateCaller()

  };

locateCaller(){
let location = document.querySelector(`.${this.spawnPoint}`)
location.appendChild(this.htmlNode)
}

  initEngine() {

    this.templateInsert()  
this.starAmount > 0 && Array.from({length : this.starAmount}, (_,index) => this.impStar(index));
	this.calificate()
  }
}
