import '../imports/startup/client/Startup';
import './style.css';

function generateBarCode()
{
  var nric = $('#text').val();
  var url = 'https://api.qrserver.com/v1/create-qr-code/?data=' + nric + '&amp;size=50x50';
  $('#barcode').attr('src', url);
}