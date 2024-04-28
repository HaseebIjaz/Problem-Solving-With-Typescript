const xmlString = `<address>
<street>Roble Ave</street>
<mtfcc>S1400</mtfcc>
<streetNumber>649</streetNumber>
<lat>37.45127</lat>
<lng>-122.18032</lng>
<distance>0.04</distance>
<postalcode>94025</postalcode>
<placename>Menlo Park</placename>
<adminCode2>081</adminCode2>
<adminName2>San Mateo</adminName2>
<adminCode1>CA</adminCode1>
<adminName1>California</adminName1>
<countryCode>US</countryCode>
</address>`


let parser = new DOMParser();
let xmlDoc = parser.parseFromString(xmlString, "text/xml" );

xmlDoc.getElementsByTagName("streetNumber")[0].childNodes[0].nodeValue;

xmlDoc.getElementsByTagName("street")[0].childNodes[0].nodeValue;

xmlDoc.getElementsByTagName("postalCode")[0].childNodes[0].nodeValue;
