# web_server_c
---
## **How to Run the Server and Client**

1. **Compile both the server and client:**

    ```sh
    make
    ```
    <button onclick="navigator.clipboard.writeText('make')">Copy</button>

    This will create a `./bin` directory containing both the server and client executable files.

2. **Start the server:**

    ```sh
    ./bin/server
    ```
    <button onclick="navigator.clipboard.writeText('./bin/server')">Copy</button>

3. **Open a new terminal tab or window, navigate to the project folder, and run the client:**

    ```sh
    ./bin/client
    ```
    <button onclick="navigator.clipboard.writeText('./bin/client')">Copy</button>

    You will see a message from the server: "You have connected to the server successfully."  
    Both the server and client will terminate immediately after the connection.

### **Note:**  
If you encounter permission issues, make the binaries executable:

```sh
chmod +x ./bin/server ./bin/client
```
<button onclick="navigator.clipboard.writeText('chmod +x ./bin/server ./bin/client')">Copy</button>


## [**TCPclient**](./src/TCPclient.c)

- Establishes a TCP connection to a specified server IP and port.
- Sends data to the server and receives responses.
- Handles connection errors and ensures proper socket closure.
- Typically used to initiate communication with a TCP server.

---

## [**TCPserver**](./src/TCPserver.c)

- Listens for incoming TCP connections on a specified port.
- Accepts client connections and manages data exchange.
- Can handle multiple clients (depending on implementation).
- Ensures proper resource management and socket closure.
- Used to provide services or data to TCP clients.

---

## **Why write it in C**

Starting directly with Node.js may not be ideal for beginner developers who want to code backend APIs, because the abstraction that Node.js provides can prevent a developer from understanding the core concepts used under the hood. Writing it in C removes that abstraction and boosts the developer's confidence in knowing what they are doing while building node servers. Although it is not necessary to know all of this, some developers care about understanding each line of code they write, as it builds confidence and allows them to document their work more clearly, making future fixes easier.
