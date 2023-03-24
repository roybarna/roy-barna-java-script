1. <html>
2. <head> 
3. <script type = "text/javascript">
4. <!--
5. function WriteCookie() {
6. if( document.myform.customer.value == "" ) {
alert("Enter some value!");
return;
7. }
8. cookievalue = escape(document.myform.customer.value) + ";";
9. document.cookie = "name=" + cookievalue;
10. document.write ("Setting Cookies : " + "name=" + cookievalue );
11. }
12. //-->
13. </script> 
14. </head>
15. <body> 
16. <form name = "myform" action = "">
17. Enter name: <input type = "text" name = "customer"/>
18. <input type = "button" value = "Set Cookie" onclick = "WriteCookie();"/>
19. </form> 
20. </body>
21. </html>