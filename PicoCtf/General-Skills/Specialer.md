# Description 
We are placed into a restrictive shell where only certain commands are available,cmds like ```cat``` ```less``` ```more``` are not available.

# Summary 
- To know list of available commands,we can either press ```TAB``` twice or use ```help``` command .
- <img width="715" height="770" alt="image" src="https://github.com/user-attachments/assets/762c4917-11b0-4923-bb50-ba91304b2c2b" />
- We will use ```echo .* */*``` to know directories and files present.
- then  use bash Command Substitution and input redirection to get the flag.
- Any command that comes in between ```$()``` will be ran and then we can stroe or use its output anywhere .
- Input redirection :- ``` echo "$(<flag.txt)" ``` can be used to give echo contets of flag.txt as stdin.


# Resources :
- https://www.youtube.com/watch?v=OR-DNz5dksY
- 
