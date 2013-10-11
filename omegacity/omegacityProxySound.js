/**
 * @fileoverview Proxy HUD Object
 * @author Tony Parisi
 */

ProxySound = function(param) {
	this.game = param.game;
	this.game.hud = this;
}

ProxySound.prototype.enterState = function(state, data) {
	CocoonJS.App.forward("soundEnterState('" + state + "','" + data + "');");

}

ProxySound.prototype.leaveState = function(state, data) {
}

