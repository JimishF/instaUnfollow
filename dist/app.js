const getBundleJs = async () => {
  return fetch('/bundle.js')
    .then(response => response.text())
    .then((response) => {
      return response
    })
    .catch(err => console.log(err))
}

const app = async () => {
  const jsContent = await getBundleJs()
  document.querySelector('#script').innerHTML = jsContent
}

app()
