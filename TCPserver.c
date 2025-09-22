// <>  , .

#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/socket.h>
#include <sys/types.h>
#include <netinet/in.h>

int main ()
{
    char server_msg[256] = "You have connected to the server 123445353443";
    int server_d = socket(AF_INET, SOCK_STREAM, 0);

    struct sockaddr_in server_address;

    server_address.sin_family = AF_INET;
    server_address.sin_port = htons (8000);
    server_address.sin_addr.s_addr = INADDR_ANY;

    bind(server_d, (struct sockaddr*) &server_address, sizeof (server_address));

    listen(server_d, 2);
    int client_sock = accept (server_d,NULL,NULL);

    send (client_sock, server_msg, sizeof(server_msg), 0);
    close(server_d);

    return 0;
}