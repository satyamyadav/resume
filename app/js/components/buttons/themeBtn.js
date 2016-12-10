app.components.themeBtn = function($btn) {

	$btn.on('click', function(ev){
		ev.preventDefault();
		console.log('themes btn clicked');
    
		if(typeof(Storage) !== "undefined") {
	    var themes = {};
	          // Code for localStorage/sessionStorage.
	    if (localStorage.themes) {
	      // console.log('mila')
	      themes = JSON.parse(window.localStorage.getItem('themes'));
				displayData(themes, 'modals/themeModal', $('#themeModal'));
				
	    } else {
	      // console.log('nahi mila')
	      app.utils.ajax.get('public/data/themes.json').then(function(data){
	        localStorage.setItem('themes', JSON.stringify(data));
					displayData(data, 'modals/themeModal', $('#themeModal'));

	      });
	    }
	  } else {
	      // Sorry! No Web Storage support..
	  }
		
		
    // var data = JSON.parse(window.localStorage.getItem('themes'));

    app.utils.loadModal('#themeModal');
	})


	function displayData(data, template, $target) {
	  var templateUrl = 'public/views/' + template + '.html';
	  app.utils.ajax.get(templateUrl).then(function(tmpl){

	    var compiled_html = _.template(tmpl)({
	      data: data
	    });

	    // appent to body
	    $target.html(compiled_html);
	    // $target.find('img').each(function () {
	    //   var $this = $(this);
	    //   app.utils.loadImg($this);
	    // });
	  });
	}


}