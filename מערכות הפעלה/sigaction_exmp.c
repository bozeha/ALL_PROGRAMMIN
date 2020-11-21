#include <stdio.h>
#include <signal.h>

using namespace std;

void handler(int signum){
	if(signum == SIGINT){
		printf( "control signal is pressed!");
	}

}

int main(){
	struct sigaction sa;
	sa.sa_handler = handler;
		
	while(1){
		printf("/");
		usleep(1000000);
		if(sigaction(SIGINT,&sa,NULL)==-1)
			perror("SIGACTION");
	}
	return 0;
}