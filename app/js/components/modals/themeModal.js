app.components.themeModal = function($modal) {

	var $selectBtn = $modal.find('.select-theme-button');
	var $applyBtn = $modal.find('.apply-theme-button');
	var selectedTheme = 'main';
	var $msg = $modal.find('.selected-theme');
	
	$selectBtn.on('click', function(ev){
		ev.preventDefault();
		var $this = $(this);
			
		selectedTheme = $this.data('theme');
		$msg.html('Theme selected: ' + selectedTheme);	
		
	});	
	
	$applyBtn.on('click', function(ev){
		ev.preventDefault();
    
		
		var resume = JSON.parse(window.localStorage.getItem('resumeData'));
		resume['theme'] = selectedTheme;
    localStorage.setItem('resumeData', JSON.stringify(resume));

    location.reload();

	})



}
