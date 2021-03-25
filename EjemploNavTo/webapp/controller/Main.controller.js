sap.ui.define([
		"sap/ui/core/mvc/Controller"
	],
	/**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
	function (Controller) {
		"use strict";

		return Controller.extend("EjemploNavTo.EjemploNavTo.controller.Main", {
			onInit: function () {

            },
            onNavigateVista2: function() {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("RouteVista2", {text:"Bienvenido a la vista 2 (Main-->Vista2)"});
            },
            onNavigateVista3: function() {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("RouteVista3", {text:"Bienvenido a la vista 3 (Main-->Vista3)"});
            }
		});
	});