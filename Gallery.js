let BabyImages = ['DSC_0568.JPG','DSC_0594.JPG','DSC_0618.JPG','DSC_0624.JPG','DSC_0700.JPG','DSC_0718.JPG','DSC_0736.JPG','DSC_0746.JPG']
let BMImages = ['DSC_0233.jpg','DSC_1023.jpg','DSC_1025.jpg','DSC_1066.jpg','DSC_1130.jpg']
let FamilyImages = ['DSC_1135.JPG','DSC_1185.JPG','DSC_1200.JPG','DSC_1205.JPG','DSC_1241.JPG','DSC_1264.JPG','DSC_1408.jpg','DSC_1828.JPG',
                    'DSC_1842.JPG','DSC_1865.JPG','DSC_1879.JPG','DSC_1940.JPG','DSC_1944.JPG','DSC_2061.JPG','DSC_2096.JPG']
let NatureImages = ['DSC_0038.jpg','DSC_0136.jpg','DSC_0266.jpg','DSC_0731.jpg','DSC_0884.jpg','DSC_0889.jpg','DSC_0970.jpg','DSC_0989.jpg','lake.JPG']

const createDivs = () => {
    for (let i = 0; i < BabyImages.length; i++) {
        let newDiv = document.createElement("div")
        newDiv.className = "GalleryItem"
        newDiv.setAttribute("style",`background-image: url(GalleryPhotos/Baby/${BabyImages[i]})`)
        BabyGalleryItem.appendChild(newDiv)        
    }

    for (let i = 0; i < BMImages.length; i++) {
        let newDiv = document.createElement("div")
        newDiv.className = "GalleryItem"
        newDiv.setAttribute("style",`background-image: url(GalleryPhotos/Bar-Mitzvah/${BMImages[i]})`)
        BarMitzvahGalleryItem.appendChild(newDiv)        
    }

    for (let i = 0; i < FamilyImages.length; i++) {
        let newDiv = document.createElement("div")
        newDiv.className = "GalleryItem"
        newDiv.setAttribute("style",`background-image: url(GalleryPhotos/Family/${FamilyImages[i]})`)
        FamilyGalleryItem.appendChild(newDiv)        
    }

    for (let i = 0; i < NatureImages.length; i++) {
        let newDiv = document.createElement("div")
        newDiv.className = "GalleryItem"
        newDiv.setAttribute("style",`background-image: url(GalleryPhotos/Nature/${NatureImages[i]})`)
        NatureGalleryItem.appendChild(newDiv)        
    }
}