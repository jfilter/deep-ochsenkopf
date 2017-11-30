function drawImages(data, folderName) {
  data.forEach(x =>{
    const images = x.outputImages.map(image => `<img class="img-responsive image" alt="Responsive image" src="../images/output/${folderName}/${image}" />`);
    const originalImage = x.outputImages[0].split('_sz_')[0] + '.jpg';
    images.unshift(`<img class="img-responsive image" alt="Responsive image" src="../images/original/${folderName}/${originalImage}" />`);

    $('#images-container')
        .append(`<h2 class="image-title">${x.title}</h2>`)
        .append(images)
        .append('<hr>');
  });
}

export default drawImages;
