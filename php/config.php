<?php
// Database configuration for your specific database name
define('DB_HOST', '127.0.0.1');  // Usually 'localhost' for shared hosting, change if needed
define('DB_NAME', 'u807707365_bbutest');  // Your database name
define('DB_USER', 'u807707365_bbutestuser');  // Replace with your actual DB username
define('DB_PASS', 'Bbutestuser1');  // Replace with your actual DB password

// Set timezone
date_default_timezone_set('UTC');

// Error reporting (turn off in production)
ini_set('display_errors', 0);
ini_set('log_errors', 1);
error_reporting(E_ALL);
?>