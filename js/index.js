

var heyHeader = ["06", "0E", "2B", "34", "02", "0B", "01", "01", "0E", "01", "03", "01", "01", "00", "00", "00"];

var registredData = []

function printHexCharcters(e)
{
  result = e.target.result;
  var str_cus = "";
  for (n = 0; n < result.length; ++n)
  {
    aByte = result.charCodeAt(n);
    byteStr = aByte.toString(16);
    if (byteStr.length < 2)
    {
      byteStr = "0" + byteStr;
    }

    byteStr = byteStr.toUpperCase();
    registredData.push(byteStr);
    str_cus = str_cus + byteStr + ", ";
  }
  document.getElementById("demo").innerHTML = str_cus;
}

function analyse()
{
  for (let step = 0; step < registredData.length; step)
  {
    for (let headerStep = 0; headerStep < heyHeader.length; headerStep++)
    {
      console.log(registredData[step], "----", heyHeader[headerStep]);
      step++;
    }
    console.log(registredData[step++]);
    console.log(registredData[step++]);
  }
}

function myFunction()
    {
    var text = document.getElementById("image-file").files[0];
    fr = new FileReader();
    fr.onload = function (e)
          {
          printHexCharcters(e)
          }
    fr.readAsBinaryString(text);
    }