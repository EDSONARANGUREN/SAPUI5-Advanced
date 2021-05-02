sap.ui.define([

],
    function () {

        function dateFormat(date) {

            var timeDay = 24 * 60 * 60 * 1000;

            if (date) {
                var dateNow = new Date();
                var dateFormat = sap.ui.core.format.DateFormat.getDateInstance({ pattern: "yyyy/MM/d" });
                var dateNowFormat = new Date(dateFormat.format(dateNow));
                var oResourceBundle = this.getView().getModel("i18n").getResourceBundle();

                switch (true) {
                    // Yesterday
                    case date.getTime() === dateNowFormat.getTime() - timeDay:
                        return oResourceBundle.getText("yesterday");
                    // Today
                    case date.getTime() === dateNowFormat.getTime():
                        return oResourceBundle.getText("today");
                    // Tomorrow
                    case date.getTime() === dateNowFormat.getTime() + timeDay:
                        return oResourceBundle.getText("tomorrow");
                    // Another day
                    default:
                        return oResourceBundle.getText("anotherDay");
                }
            }

        }
        return {
            dateFormat: dateFormat
        };
    });