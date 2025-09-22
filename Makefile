CLIENT_SRC = TCPclient.c
SERVER_SRC = TCPserver.c
CLIENT_BIN = bin/client
SERVER_BIN = bin/server
CC         = gcc
CFLAGS     = -g -Wextra -Wall -Werror

.PHONY: all server client clean

all: server client

bin:
	mkdir -p bin

server: bin $(SERVER_SRC)
	$(CC) $(CFLAGS) $(SERVER_SRC) -o $(SERVER_BIN)

client: bin $(CLIENT_SRC)
	$(CC) $(CFLAGS) $(CLIENT_SRC) -o $(CLIENT_BIN)

clean:
	rm -rf bin

