const http = require('http');
const { exec } = require('child_process');

const PORT = 80;

// Function to get the output of the fortune command
function getFortune(callback) {
	exec('/usr/games/fortune', (error, stdout) => {
		callback(stdout);
	});
}

// Create the server
const server = http.createServer((req, res) => {
	getFortune((fortune) => {
		// Generate the HTML content
		const html = `
			<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>Fortuna says</title>
				<style>
					body {
						font-family: Arial, sans-serif;
						background-color: #f0f8ff;
						color: #333;
						margin: 0;
						display: flex;
						justify-content: center;
						align-items: center;
						height: 100vh;
					}
					.container {
						text-align: center;
						background: #ffffff;
						padding: 20px;
						border-radius: 10px;
						box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
					}
					h1 {
						color: #007acc;
					}
					p {
						white-space: pre-wrap;
					}
				</style>
			</head>
			<body>
				<div class="container">
					<h1>FORTUNA SAYS:</h1>
					<p>${fortune}</p>
				</div>
			</body>
			</html>
		`;

		// Send the response
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.end(html);
	});
});

// Start the server
server.listen(PORT, () => {
	console.log(`Server is running`);
});

