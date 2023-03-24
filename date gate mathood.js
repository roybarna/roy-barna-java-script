<!DOCTYPE html>
<html>
<body>
<h1>JavaScript Dates</h1>
<h2>JavaScript getMonth()</h2>
<p>Return the month as a number.</p>
<p>You can use an array of names to return the month as a name:</p>

<p id="demo"></p>

<script>
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const d = new Date();
let month = months[d.getMonth()];
document.getElementById("demo").innerHTML = month;
</script>

</body>
</html>
