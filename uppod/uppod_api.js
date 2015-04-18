//	JavaScript API 2.0 for Uppod 1+
//  http://uppod.ru/js

// Events

function uppodEvent(playerID, event) { 
	playerStatusChanged(playerID, event);
}

// Commands

function uppodSend(playerID, com, callback) {
	document.getElementById(playerID).sendToUppod(com);
}

// Requests

function uppodGet(playerID, com, callback) {
	return document.getElementById(playerID).getUppod(com);
}
