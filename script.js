function toggleVoyages() {
    var voyagesDiv = document.getElementById('voyages');
	var displaySettingVoyages = voyagesDiv.style.display;
	var factsDiv = document.getElementById('facts');
	var displaySettingFacts = factsDiv.style.display;
	var signalDiv = document.getElementById('signal');
	var displaySettingSignal = signalDiv.style.display;

	if (displaySettingVoyages == 'block') {
	  voyagesDiv.style.display = 'none';
	  }
	else if (displaySettingFacts == 'block' || displaySettingSignal == 'block'){
	    factsDiv.style.display = 'none';
		signalDiv.style.display = 'none';
		voyagesDiv.style.display = 'block';
	  }
	else {
	  voyagesDiv.style.display = 'block';
	}
};
function toggleFacts() {
    var voyagesDiv = document.getElementById('voyages');
	var displaySettingVoyages = voyagesDiv.style.display;
	var factsDiv = document.getElementById('facts');
	var displaySettingFacts = factsDiv.style.display;
	var signalDiv = document.getElementById('signal');
	var displaySettingSignal = signalDiv.style.display;

	if (displaySettingFacts == 'block') {
	  factsDiv.style.display = 'none';
	  }
	  else if (displaySettingVoyages == 'block' || displaySettingSignal == 'block'){
	    voyagesDiv.style.display = 'none';
		signalDiv.style.display = 'none';
		factsDiv.style.display = 'block';
	  }
	  else {
	    factsDiv.style.display = 'block';
	}
};
function toggleSignal() {
    var voyagesDiv = document.getElementById('voyages');
	var displaySettingVoyages = voyagesDiv.style.display;
	var factsDiv = document.getElementById('facts');
	var displaySettingFacts = factsDiv.style.display;
	var signalDiv = document.getElementById('signal');
	var displaySettingSignal = signalDiv.style.display;

	if (displaySettingSignal == 'block') {
	  signalDiv.style.display = 'none';
	  }
	  else if (displaySettingFacts == 'block' || displaySettingVoyages == 'block'){
	    factsDiv.style.display = 'none';
		voyagesDiv.style.display = 'none';
		signalDiv.style.display = 'block';
	  }
	  else {
	    signalDiv.style.display = 'block';
	}
};
