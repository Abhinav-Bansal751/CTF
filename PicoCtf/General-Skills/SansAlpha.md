# Description

<img width="948" height="727" alt="image" src="https://github.com/user-attachments/assets/fb30cc30-f093-4623-ac1b-45db215e56e5" />

- We had to connect with the given shell using ssh and get the flag.
- But all Alphabetic characters and backslash were restricted .
- We are  dropped into a restricted Bash shell via ssh where non-alphabetic characters are allowed, and even the backslash (\) is blocked
- Goal: read flag.txt inside the blargh directory and retrieve the flag

## Steps :-
### Method 1 : Bash Error Messages + Parameter Expansion
- Bash outputs error messages contain alphabetic characters ,even though you can’t type them yourself. By capturing these messages, you can extract needed letters
    - Run something invalid to generate an error, e.g.:
    - _1="$(- 2>&1)"
    -This stores the error output like bash: bash: -: command not found: command not found in the variable $_1
    - Use parameter expansion ${var:offset:length} to pick the letters c, a, t from _1
    - _2="${_1:9:1}${_1:1:1}${_1:19:1}"  # c, a, t
    - Finally, run :- $_2 **/*
    - Which runs cat blargh/flag.txt, revealing the flag
 ### Method 2 : Wildcard Globbing (*, ?) to Run Base64 
- Globbing is a feature of the shell (like Bash) that lets you use wildcard characters to match filenames or directories. It's how the shell automatically expands patterns like *, ?, or [...] into matching file or folder names.
- Another approach avoids letters entirely by using wildcards to find /bin/base64 and read the flag indirectly
1. Use wildcards to locate base64: ```/???/????64``` . This matches /bin/base64 but avoids matching other files like /bin/x86_64 using further exclusions like [!_].
2.  Run it on the flag file: ```${_1[0]} */????.???``` This runs /bin/base64 /home/ctf-player/blargh/flag.txt, outputting a base64-encoded version of the flag which can be decoded externally.

### Method 3 : Globbing + Special Shell Substitution ($(), <)
- third method uses advanced shell features to inject letters from nearby files or previous outputs
1. Trigger errors to learn evaded paths or file names.
2. Use globbing patterns like */* to access nested directories.
3. Employ substitutions such as: ```"$(<pattern)"``` to insert file contents directly and bypass restrictions

## Summary :-
- To find all files and folder in my current directory with limited characters that are allowed, I used file/folder globbbing and found a 6 letter folder called blargh
- <img width="703" height="456" alt="image" src="https://github.com/user-attachments/assets/aa5a7c71-a5d4-457d-a964-7c95a51d1a96" />
- Then using ```*``` ,I found a file inside that directory .
- <img width="708" height="375" alt="image" src="https://github.com/user-attachments/assets/9f69964b-628a-4f71-9dd3-1858f9e77a87" />
- <img width="696" height="704" alt="image" src="https://github.com/user-attachments/assets/67f524e4-ffd6-479f-82dc-050e4e3f83c5" />
- cmd extraction using stnd error didnt work for me,instead i found a file using ``` $_ ``` .Then loaded the file using $_ and extracted characters from it to form cat command and print the flag.

# Resources used
- https://sportshead.dev/2024/04/03/picoctf24-general-skills/
- https://asareynolds.com/posts/writeups/picoctf2024/sansalpha/
- https://medium.com/%40niceselol/picoctf-2024-sansalpha-86bbdb58bde6
- https://mqcybersec.org/writeups/picoctf-sansalpha/
- https://www.youtube.com/watch?v=3s5gM-vA1x4
- https://www.youtube.com/watch?v=fyRw0JmmggY
- https://www.youtube.com/watch?v=ITTdaIh5mjA
- 
