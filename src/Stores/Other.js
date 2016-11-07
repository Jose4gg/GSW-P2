export default function Search() {
    extendObservable(this, {
        text: "",
        setText: action(function(texto) {
              this.text = texto
        })
    })
}