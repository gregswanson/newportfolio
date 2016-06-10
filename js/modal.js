/////Open Modal
$('#lightbox').on( 'click', '.hover-text', function() {
	var modalID = this.id;
	alert(modalID);
	$('#modalImages').empty();
	$('#modalTitle').empty();
	// var url = $(this).data('youtube');
	// var level = myUsers2[modalID].level;
   $('#myModal').modal('show');

   $('#modalTitle').html('<h2 class="modalText">' + portfolioimg[modalID].noteone +'</h2>');
   for(var i = 0; i < portfolioimg[modalID].imgs.length; i++) {
   	$('#modalImages').append('<div><img src="' + portfolioimg[modalID].imgs[i] + '" class=" modalImage image-responsive"></div>');
   };

 	
 //  $('#modalInst').text(myUsers2[modalID].Instrument);
 //  $('#modalCity').text(myUsers2[modalID].city);
 //  $('#modalLevel').text(myUsers2[modalID].level);
 //  $('#modalAbout').text(myUsers2[modalID].about);
 //  $('#modalFrame').attr('src', url);
});