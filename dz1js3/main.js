let patternPhonRu = /^\+7\s\d{3}\s\d{3}\s\d{2}\s\d{2}/
let patternPhonKG = /^\+996\s\d{3}\s\d{2}\s\d{2}\s\d{2}/

const phone = document.querySelector("#phone")
const btn = document.querySelector('button')
const log = document.querySelector("#log")
console.log(btn);
console.log(phone);
btn.addEventListener('click', e => {
  if (patternPhonKG.test(phone.value)) {
    log.innerHTML = `
      <div>KG</div>
    `
  }else if (patternPhonRu.test(phone.value)) {
    log.innerHTML =  `
      <div>Ru</div>
    `
  }
})


