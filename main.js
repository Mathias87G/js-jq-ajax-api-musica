// Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali.
// Servendoci di handlebars stampiamo tutto a schermo.
//
// Bonus: Creare una select con i seguenti generi: pop, rock, metal e jazz.
// In base a cosa scegliamo nella select vedremo i corrispondenti

$(document).ready(function() {

  $.ajax(
    {
      // API
      'url': 'https://flynn.boolean.careers/exercises/api/array/music',
      'method': 'GET',
      'success': function(data){

        // ciclo per dati da API e compilazione template handlebars
        var array_cd = data.response
          for ( var i = 0 ; i < array_cd.length; i++) {
          // handlebars
          var source = $('#entry-template').html();
  			  var template = Handlebars.compile(source);
          var content = data.response[i];
  				var html = template(content);
          //appendo dati clonati in html
  			  $('.cds-container').append(html);
        }
      },
      'error':function(){
        alert('Attenzione! Errore!');
      }
    }
  );
});
