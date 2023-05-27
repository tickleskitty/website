<?php
$file = $_GET['file']; // Assuming the file path is passed as a query parameter

if (file_exists($file)) {
    // File exists, do something with it
    // For example, you can output the file contents
    $fileContents = file_get_contents($file);
    echo $fileContents;
} else {
    // File not found, redirect to the error page
    header("Location: error.html");
    exit;
}
?>
