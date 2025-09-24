CC = gcc
CFLAGS = -Wall -Wextra -std=c17

APP = app
OBJS = main.o isEven.o isOdd.o

all: $(APP)

$(APP): $(OBJS)
	$(CC) $(CFLAGS) $(OBJS) -o $(APP)

main.o: main.c isEven.h isOdd.h
	$(CC) $(CFLAGS) -c main.c

isEven.o: isEven.c isEven.h
	$(CC) $(CFLAGS) -c isEven.c

isOdd.o: isOdd.c isOdd.h
	$(CC) $(CFLAGS) -c isOdd.c

clean:
	rm -rf *.o $(APP)