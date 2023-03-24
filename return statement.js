1. <html>
2. <head> 
3. <script type = "text/javascript">
4. function concatenate(first, last) {
5. var full;
6. full = first + last;
7. return full;
8. }
9. function secondFunction() {
10. var result;
11. result = concatenate('Zara', 'Ali');
12. document.write (result );
13. }
14. </script> 
15. </head>
16. <body>
17. <p>Click the following button to call the function</p> 
18. <form>
19. <input type = "button" onclick = "secondFunction()" value = "Call Function">
20. </form> 
21. <p>Use different parameters inside the function and then try...</p> 
22. </body>
23. </html>