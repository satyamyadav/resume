// 
// lol ;) if it was hard to write ! it would be harder to read !! the hackish bhasad
// 
app.components.tabActivators = function($tabContainer) {
	var $tabs = $tabContainer.find('.list-tabs');
  var $tab = $tabs.find('li').find('a');
	var $navTabs = $('#main-app').find('.nav-tabs');
	$tab.on('click', function(ev){
		ev.preventDefault();
		var $this = $(this);
		var link = $this.attr('href');
		// console.log('tab  clicked', $this.attr('href'));
    var $targetLink = $navTabs.find('a[href=' + link +']')
    $targetLink.click();
	})

}