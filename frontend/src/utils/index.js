export { default as dayjs } from './dayjs'

export function getImgDimensions(imgSrc) {
  return new Promise((resolve) => {
    let img = new Image()
    img.onload = function () {
      let { width, height } = img
      resolve({ width, height, ratio: width / height })
    }
    img.src = imgSrc
  })
}

export function htmlToText(html) {
  let tmp = document.createElement('div')
  tmp.innerHTML = html
  return tmp.textContent || tmp.innerText || ''
}
