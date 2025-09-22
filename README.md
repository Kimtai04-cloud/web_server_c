# web_server_c

## **TCPclient**

- Establishes a TCP connection to a specified server IP and port.
- Sends data to the server and receives responses.
- Handles connection errors and ensures proper socket closure.
- Typically used to initiate communication with a TCP server.

---

## **TCPserver**

- Listens for incoming TCP connections on a specified port.
- Accepts client connections and manages data exchange.
- Can handle multiple clients (depending on implementation).
- Ensures proper resource management and socket closure.
- Used to provide services or data to TCP clients.

---

## **Why write it in C**

Starting directly with Node.js may not be ideal for beginner developers who want to code backend APIs, because the abstraction that Node.js provides can prevent a developer from understanding the core concepts used under the hood. Writing it in C removes that abstraction and boosts the developer's confidence in knowing what they are doing while building node servers. Although it is not necessary to know all of this, some developers care about understanding each line of code they write, as it builds confidence and allows them to document their work more clearly, making future fixes easier.
