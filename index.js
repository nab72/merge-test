console.log("again Conflict created");
console.log("Conflict resolved #1 test");
<button id="myBtn">Click me</button>
<p id="demo"></p>

<script>
  const btn = document.getElementById("myBtn");
  btn.addEventListener("click", function() {
    document.getElementById("demo").innerHTML = Date(); //
  });
</script>
