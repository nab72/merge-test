console.log("Conflict Created");
console.log("Valid Email");
console.log("updated");
<script>
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    const email = document.getElementById('email').value;
    if (!email.includes('@')) {
      event.preventDefault(); // Prevents form submission
      alert('Please enter a valid email address.');
    }
  });
</script>