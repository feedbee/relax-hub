//	JavaScript API 2.0 for Uppod 1+
//  All function must be accessable in hglobal scope with fixed names
//  http://uppod.ru/js

// Events handling (proxy to RelaxHub.Player)
function uppodEvent(playerID, event) {
	RelaxHub.Player.handleGlobalEvent(playerID, event);
}

// Commands
function uppodSend(playerID, com, callback) {
	document.getElementById(playerID).sendToUppod(com);
}

// Requests
function uppodGet(playerID, com, callback) {
	return document.getElementById(playerID).getUppod(com);
}