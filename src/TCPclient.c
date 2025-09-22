// <>  , .

#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

#include <sys/types.h>
#include <sys/socket.h>

#include <netinet/in.h>

#define LOG_ERR(str,con)  printf ("%s with status %i\n", str, con)

int main ()
{
    int socket_d = socket (AF_INET, SOCK_STREAM, 0);
    struct sockaddr_in server_address;
    server_address.sin_family = AF_INET;
    server_address.sin_port = htons (8000);
    server_address.sin_addr.s_addr = INADDR_ANY;

    int con = connect (socket_d,(struct sockaddr *) &server_address, sizeof(server_address));
    if (con) {
        LOG_ERR("connection error", con);
    }
    
    char server_response[256];
    recv (socket_d, &server_response, sizeof(server_response), 0);

    printf ("Server res: %s\n", server_response);
    close(socket_d);

    return 0;
}