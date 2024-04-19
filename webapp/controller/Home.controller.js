sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel ) {
        "use strict";
        

        return Controller.extend("com.app.simpleform.controller.Home", {
            onInit: function () {
                const oPerson = {
                    employee: {
                        EmployeeName: "Srilekha",
                        street: "Sector 25",
                        No:45,
                        zipcode: 122022,
                        city: "Gurugram"
                    }
            }
            const oJsonModel = new JSONModel(oPerson);
            this.getView().setModel(oJsonModel,);
         }
        });
    });
