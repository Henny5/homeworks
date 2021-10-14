/*xglobal $*/
(function () {
  'use strict';

  //$(document.body).prepend('<input type="checkbox" id="agree">I agree to the license terms and conditions>');

  const theNameInput = $('#name');
  const theAddressInput = $('#address');
  const theNameResult = $('#nameResult');
  const theAddressResult = $('#addressResult');

  $('#theForm').submit(e => {
    e.preventDefault();
    theNameResult.text(theNameInput.val());
    theAddressResult.text(theAddressInput.val());
  });

  //$('#theForm').on('submit',()=>{

 // })
//this means on this part of the form do this callbakc

  //const theInputs = $('#theForm input');
  const theButton = $('#theForm button');
  const theAgreeCheckbox = $('#agree');
  /*$('#agree').change(() => {
    //theButton.prop('disabled', !theAgreeCheckbox.prop('checked'));
    theButton.prop('disabled', !theAgreeCheckbox.is(':checked'));
    //theInputs.prop('disabled', !theAgreeCheckbox.is(':checked'));
  });*/

  $('<span><input type="checkbox">I agree to the license terms and conditions</span>')
    .prependTo(document.body)
    .find('input')
    .change(function () {
      //theButton.prop('disabled', !theAgreeCheckbox.prop('checked'));
      theButton.prop('disabled', !this.checked);
      //theInputs.prop('disabled', !theAgreeCheckbox.is(':checked'));
    });
}());

//file that updates dom with info u upload to file using jquery