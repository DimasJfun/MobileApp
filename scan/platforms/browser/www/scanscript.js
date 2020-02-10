function barcodescanner(){
    cordova.plugins.barcodeScanner.scan(
    function (result) {
    alert("We got a barcode\n" +
    "Result: " + result.text + "\n" +
    "Format: " + result.format + "\n" +
    "Cancelled: " + result.cancelled);
    },
    function (error) {
    alert("Scanning failed: " + error);
    },
    {
        showFlipCameraButton : true,
        showTorchButton : true,
        torchOn: false,
        saveHistory: true,
        prompt : "Place a barcode inside the scan area",
        resultDisplayDuration: 500,
        formats : "QR_CODE,PDF_417",
        orientation : "portrait",
        disableSuccessBeep: false }
        );
        }