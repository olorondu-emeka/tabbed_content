document.addEventListener('DOMContentLoaded', function(){
	var tabContain = document.querySelector('#tab-container');
	var panels = document.querySelectorAll('.tab-content p');
	var tabs = document.querySelectorAll('.tabs span');
	tabContain.addEventListener('click', function(e){
		var eventObj = e.target;
			if(eventObj.tagName == "SPAN"){
				
				tabs.forEach(function(tab){
					if (tab.classList.contains('active')){
						tab.classList.remove('active');
						eventObj.classList.add('active');
					}	

				});

				var targetPanel = document.querySelector(eventObj.dataset.target)
				panels.forEach(function(panel){
						if(!(targetPanel.classList.contains('active-content')) && panel.classList.contains('active-content'))
						{
							//remove class from previous tab
							//and add class to current tab
							targetPanel.classList.add('active-content');
							panel.classList.remove('active-content');
						}
					
					
				});

			}
	});
		
		
});


/*
			panels.forEach(function(panel){
				if (panel.getAttribute('id') == e.target.getAttribute('data-target'))
					panel.classList.add('active-content');
				else
					panel.classList.remove('active-content');
			});*/




/*
			var tabContain = document.querySelector('#tab-container');
		tabContain.addEventListener('click', function(e){
		var eventObj = e;
		if(e.target.tagName == "span"){
			var panels = document.querySelectorAll('.tab-content p');
			var tabs = document.querySelectorAll('.tabs span');
			tabs.forEach(function(tab){
				if (!(e.target.classList.contains('active')) && tab.classList.contains('active')){
					tab.classList.remove('active');
					e.target.classList.add('active');
				}
					

			});
			
			

		}
	});
	*/