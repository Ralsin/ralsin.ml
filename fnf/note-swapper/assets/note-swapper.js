function swap(){
	var output = document.getElementById("input").value
        .split('"mustHitSection":false').join('"mustHitSection":toTrue')
        .split('"mustHitSection":true').join('"mustHitSection":false')
        .split('"mustHitSection":toTrue').join('"mustHitSection":true');
  
	document.getElementById("output").value = output;
}



function yes(){
    var importedFile = document.getElementById('import-file').files[0];

    var reader = new FileReader();
    reader.onload = function() {
        var fileContent = JSON.stringify(JSON.parse(reader.result))
        swapJson(fileContent)
    }
    reader.readAsText(importedFile)
}
function swapJson(jsonFile){
    var outputFile = JSON.parse(jsonFile
        .split('"mustHitSection":false').join('"mustHitSection":toTrue')
        .split('"mustHitSection":true').join('"mustHitSection":false')
        .split('"mustHitSection":toTrue').join('"mustHitSection":true')
    )
    var exName = document.getElementById('import-file').files[0].name;
    console.log(exName)
    downloadObjectAsJson(outputFile, exName)
}
function downloadObjectAsJson(exportObj, exportName){ //took from here - stackoverflow.com/questions/19721439
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", exportName);
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}