<?php
// Include database configuration (adjust path if needed)
require_once 'config.php';

// Only process POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST' || !isset($_POST['email'])) {
    // If direct access, go home
    header('Location: ../index.html');
    exit;
}

$email = trim($_POST['email']);
$referer = $_SERVER['HTTP_REFERER'] ?? '../index.html';

// Validate email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $error = urlencode('Please enter a valid email address.');
    header("Location: $referer?subscribe_error=$error");
    exit;
}

try {
    $pdo = new PDO(
        "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8mb4",
        DB_USER,
        DB_PASS,
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
    );
    
    // Check for duplicate email
    $stmt = $pdo->prepare("SELECT id FROM subscribers WHERE email = ?");
    $stmt->execute([$email]);
    
    if ($stmt->fetch()) {
        $error = urlencode('This email is already subscribed!');
        header("Location: $referer?subscribe_error=$error");
        exit;
    }
    
    // Insert new subscriber
    $ip = $_SERVER['REMOTE_ADDR'] ?? '';
    $insert = $pdo->prepare("INSERT INTO subscribers (email, ip_address, subscribed_at) VALUES (?, ?, NOW())");
    $insert->execute([$email, $ip]);
    
    $success = urlencode('Thank you! You’ll hear from us when we launch.');
    header("Location: $referer?subscribe_success=$success");
    
} catch (PDOException $e) {
    error_log("Subscription error: " . $e->getMessage());
    $error = urlencode('Something went wrong. Please try again later.');
    header("Location: $referer?subscribe_error=$error");
}
exit;
?>