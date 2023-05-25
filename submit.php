<?php
// Retrieve form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Validate and sanitize the data
// ...

// Connect to the database
$servername = "localhost";
$username = "root";
$password = "loganpeake12!";
$dbname = "MySQL80";

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare and execute the database query
$stmt = $conn->prepare("INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $name, $email, $message);
$stmt->execute();

// Close the statement and database connection
$stmt->close();
$conn->close();

// Redirect the user to a thank you page
header('Location: thank_you.html');
exit();
?>