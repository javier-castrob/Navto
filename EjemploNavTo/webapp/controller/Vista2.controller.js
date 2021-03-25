sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/ui/model/json/JSONModel",
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, History, JSONModel) {
        "use strict";

        return Controller.extend("EjemploNavTo.EjemploNavTo.controller.Vista2", {
            onInit: function () {
                this.getOwnerComponent().getRouter().getRoute("RouteVista2").attachPatternMatched(this._añadirTextModel, this);
            },
            _añadirTextModel: function(oEvent) {
                let stext = oEvent.getParameter("arguments").text;
                let oText = {
                    text: stext,
                }
                let otextModel = new JSONModel (oText);
                this.getView().setModel(otextModel, "Text");                
            },
            onNavigateVista3: function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("RouteVista3", {text:"Bienvenido a la vista 3 (Vista2-->Vista3)"});
            },

            onNavigateBack: function () {
                const oHistory = History.getInstance();
                const sPreviousHash = oHistory.getPreviousHash();

                if (sPreviousHash !== undefined) {
                    window.history.go(-1);
                } else {
                    var oRoute = sap.ui.core.UIComponent.getRouterFor(this);
                    oRoute.navTo("RouteMain");
                }

            }

        });
    });