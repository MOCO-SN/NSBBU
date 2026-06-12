<?php
require_once 'config.php';

// Only process POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: ../index.html');
    exit;
}

// Get form data
$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$phone = trim($_POST['phone'] ?? '');
$subject = trim($_POST['subject'] ?? '');
$message = trim($_POST['message'] ?? '');
$referer = $_SERVER['HTTP_REFERER'] ?? '../index.html';

// Validate required fields
$errors = [];
if (empty($name)) $errors[] = 'Name is required.';
if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = 'Valid email is required.';
if (empty($message)) $errors[] = 'Message cannot be empty.';

if (!empty($errors)) {
    $error_msg = urlencode(implode(' ', $errors));
    header("Location: $referer?contact_error=$error_msg");
    exit;
}

try {
    $pdo = new PDO(
        "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME . ";charset=utf8mb4",
        DB_USER,
        DB_PASS,
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
    );
    
    // Insert into database
    $ip = $_SERVER['REMOTE_ADDR'] ?? '';
    $stmt = $pdo->prepare("
        INSERT INTO contact_messages (name, email, phone, subject, message, ip_address, created_at)
        VALUES (?, ?, ?, ?, ?, ?, NOW())
    ");
    $stmt->execute([$name, $email, $phone, $subject, $message, $ip]);
    
    // Optional: Send email notification to admin
    $to = 'admin@yourdomain.com'; // CHANGE THIS TO YOUR EMAIL
    $email_subject = "New Contact Message: $subject";
    $email_body = "You have received a new message from your website.\n\n"
                . "Name: $name\n"
                . "Email: $email\n"
                . "Phone: $phone\n"
                . "Subject: $subject\n\n"
                . "Message:\n$message\n\n"
                . "IP: $ip";
    $headers = "From: $email\r\nReply-To: $email";
    
    // Uncomment below to actually send email (make sure your server supports mail())
    // mail($to, $email_subject, $email_body, $headers);
    
    $success_msg = urlencode('Thank you! We will get back to you soon.');
    header("Location: $referer?contact_success=$success_msg");
    
} catch (PDOException $e) {
    error_log("Contact form error: " . $e->getMessage());
    $error_msg = urlencode('Something went wrong. Please try again later.');
    header("Location: $referer?contact_error=$error_msg");
}
exit;
?>