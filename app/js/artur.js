function onShowHq(e) {
  const old = $(this).siblings('img').first();
  const oldSrc = old.attr('src');
  const newSrc = oldSrc.replace('output_low', 'output');
  old.attr('src', newSrc);

  $(this).siblings('button').first().toggle();
  $(this).toggle();
}

function onShowLq(e) {
  const old = $(this).siblings('img').first();
  const oldSrc = old.attr('src');
  const newSrc = oldSrc.replace('output', 'output_low');
  old.attr('src', newSrc);

  $(this).siblings('button').first().toggle();
  $(this).toggle();
}

function drawImages(data, folderName) {
  data.forEach(x => {
		const images = x.outputImages.map(
			image =>
				`<figure class="image"><img class="img-responsive" alt="Deep Ochsenkopf Output" src="../images/output_low/${
					folderName
			}/${image}" /><figcaption>Dreamed Image</figcaption><button class="btn-link pull-right btn-hq">Show HQ Image</button><button class="btn-link pull-right btn-lq">Show LQ Image</button></figure>`
		);


			const originalImage = x.outputImages[0].split('_sz_')[0] + '.jpg';
		images.unshift(
			`<figure class="image"><img class="img-responsive" alt="Input" src="../images/original/${
			folderName
			}/${originalImage}" /><figcaption>Original Image</figcaption></figure>`
		);

		$('#images-container')
			.append(`<h2 class="image-title">${x.title}</h2>`)
			.append(images)
			.append('<hr>');
	});

  $('.btn-hq').click(onShowHq);
  $('.btn-lq').click(onShowLq).toggle();

}

export default drawImages;
