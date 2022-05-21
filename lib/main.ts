console.log(mg.document.children)

console.log(__html__)

mg.showUI(__html__)

mg.ui.onmessage = (msg) => {
    console.log('onmessage', msg)
}