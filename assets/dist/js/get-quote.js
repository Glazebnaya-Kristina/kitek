$(document).ready(function () {
  $("#file-1").fileinput({
    uploadUrl: "/ file-upload-batch / 1",
    showCaption: false,
    dropZoneEnabled: false
  });

  $('.btn-file .hidden-xs').text('Attach Files');

  $('.input[type="tel"]').inputmask("+9-999-99-999");
});
