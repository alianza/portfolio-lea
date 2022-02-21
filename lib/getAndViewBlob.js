export default function getAndViewBlob(path) {
    fetch(path).then(response => {
        response.blob().then(blob => {
            const fileURL = URL.createObjectURL(blob)
            window.open(fileURL)
        })
    })
}
