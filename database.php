<?php

$email = $_POST['email'];
$password = $_POST['password'];

// Database connection
$conn = new mysqli('localhost', 'root', '', 'user');
if ($conn->connect_error) {
    echo($conn->connect_error);
    die("register fail".$conn->connect_error);
} else {

    $stmt = $conn->prepare("insert into student2(email, password) values(?, ?)");
    $stmt->bind_param("ss",$email, $password);
    $execval= $stmt->execute();
    echo $execval;
   
echo '<script>
alert("Registration is successful");
window.location = "chat.html";
</script>';
    
    $stmt->close();
    $conn->close();

}

?>