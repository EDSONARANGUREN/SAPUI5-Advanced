// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "logaligroup/Employees/model/formatter"
],
    function (Controller, formatter) {
        //        return Controller.extend("logaligroup.Employees.controller.EmployeeDetails", {

        function onInit() {

        };

        function onCreateIncidence() {

            var tableIncidence = this.getView().byId("tableIncidence");
            var newIncidence = sap.ui.xmlfragment("logaligroup.Employees.fragment.NewIncidence", this);
            var incidenceModel = this.getView().getModel("incidenceModel");
            var oData = incidenceModel.getData();
            var index = oData.length;

            oData.push({ index: index + 1 });
            incidenceModel.refresh();
            newIncidence.bindElement("incidenceModel>/" + index);
            tableIncidence.addContent(newIncidence);
        };

        function onDeleteIncidence(oEvent) {

            var tableIncidence = this.getView().byId("tableIncidence");
            var rowIncidence = oEvent.getSource().getParent().getParent();
            var incidenceModel = this.getView().getModel("incidenceModel");
            var oData = incidenceModel.getData();
            var contextObej = rowIncidence.getBindingContext("incidenceModel");

            oData.splice(contextObej.index - 1, 1);
            for (var i in oData) {
                oData[i].index = parseInt(i) + 1;
            };

            incidenceModel.refresh();
            tableIncidence.removeContent(rowIncidence);

            for (var j in tableIncidence.getContent()) {
                tableIncidence.getContent()[j].bindElement("incidenceModdel>/"+j);
            }
        };

        var Main = Controller.extend("logaligroup.Employees.controller.EmployeeDetails", {});
        Main.prototype.onInit = onInit;
        Main.prototype.onCreateIncidence = onCreateIncidence;
        Main.prototype.onDeleteIncidence = onDeleteIncidence;
        Main.prototype.Formatter = formatter;
        return Main;
    });
