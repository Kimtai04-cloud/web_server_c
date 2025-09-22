import { WebSocketServer } from 'ws';
import net from 'net';
import dotenv from 'dotenv';

try {
    dotenv.config();
} catch (error) {
    console.warn('Warning: .env file not found, using default values');
}

const WS_PORT = process.env.WS_PORT || 9000;
const TCP_HOST = process.env.TCP_HOST || '127.0.0.1';
const TCP_PORT = process.env.TCP_PORT || 8000;

const wss = new WebSocketServer(
    { 
        port: WS_PORT 
    }
);

wss
.on('connection', (ws) => {
    console.log('Browser connected via WebSocket');
    const tcpClient = net.createConnection(
        { 
            host: TCP_HOST,
            port: TCP_PORT 
        }, () => {
            console.log('Connected to TCP server');
        }
    );

    ws.on('message', (message) => {
        try {
            const messageStr = message.toString();
            console.log('Received from browser:', messageStr);
            tcpClient.write(messageStr);
        } catch (error) {
            console.error('Error processing message:', error);
        }
    });

    tcpClient.on('data', (data) => {
        try {
            const dataStr = data.toString();
            console.log('Received from TCP server:', dataStr);
            ws.send(dataStr);
        } catch (error) {
            console.error('Error sending data to browser:', error);
        }
    });

    tcpClient.on('error', (err) => {
        console.error('TCP error:', err);
        ws.close();
    });

    tcpClient.on('close', () => {
        console.log('TCP connection closed');
        ws.close();
    });

    ws.on('error', (error) => {
        console.error('WebSocket error:', error);
        tcpClient.end();
    });

    ws.on('close', () => {
        console.log('WebSocket connection closed');
        tcpClient.end();
    });
});

console.log(`WebSocket proxy running on ws://localhost:${WS_PORT}`);
console.log(`Forwards to TCP server at ${TCP_HOST}:${TCP_PORT}`);