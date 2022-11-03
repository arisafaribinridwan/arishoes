const wrapper = document.getElementById("wrapper")
const modal = document.getElementById("modal")
const imageModal = document.getElementById("imageDialog")
const titleModal = document.getElementById("titleDialog")
const descDialog = document.getElementById("descDialog")
const ourproduct = document.getElementById("ourProducts")


function getDetail(nomor) {
    // console.log('Product No;', nomor)
    const title = document.getElementById("prodTitle" + nomor);
    imageModal.src = "assets/nike" + nomor + ".png"
    titleModal.textContent = title.textContent

    // ourproduct.style.display = "none"
    modal.classList.add("open")
}

function closeDialog() {
    modal.classList.remove("open")
    // ourproduct.style.display = "block"
}