let displayCode = () => {
     let htmlTextArea = document.getElementById("htmlTextArea").value;
     let cssTextArea = document.getElementById("cssTextArea").value;
     let jsTextArea = document.getElementById("jsTextArea")

     let output = document.getElementById("output");

     output.contentDocument.body.innerHTML = htmlTextArea + "<style>" + cssTextArea + "</style>" + "<script>" + jsTextArea + "</script>";
     output.contentWindow.eval(jsTextArea.value)
}



