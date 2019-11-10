

var heyHeader = [0x06, 0x0E, 0x2B, 0x34, 0x02, 0x0B, 0x01, 0x01, 0x0E, 0x01, 0x03, 0x01, 0x01, 0x00, 0x00, 0x00];

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
    registredData.push(aByte);
    str_cus = str_cus + byteStr + ", ";
  }
  document.getElementById("demo").innerHTML = str_cus;
}

function analyse()
{
  let step = 0
  for (let headerStep = 0; headerStep < heyHeader.length; headerStep++)
  {
    console.log(registredData[step], "----", heyHeader[headerStep]);
    step++;
  }

  let messageSize = registredData[step++] & parseInt("1111",2);
  let totalSize = 0;
  for (let packSize = messageSize; packSize > 0; packSize--)
  {
    totalSize += registredData[step++] << (packSize - 1) * 8;
  }
  console.log(totalSize);

  for (let packSize = messageSize; packSize < totalSize; packSize++)
  {
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