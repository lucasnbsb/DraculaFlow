# DraculaFlow
Following in a time-honored tradition of piping fortune into cowsay, DraculaFlow prints a random dracula quote in your terminal.

usage:
`dracula-flow <number> (optional)`

includes a .cow file to use with `cowsay`

```bash
dracula-flow | cowsay -f dracula.cow
```
Sample usage, aliases `dracula-say` to print a random quote

ps: swap out brew and bashrc for your package manager and shell of choice

```bash
#!/bin/bash
brew install cowsay;
npm install -g dracula-flow;
curl https://raw.githubusercontent.com/lucasnbsb/DraculaFlow/refs/heads/main/dracula.cow --create-dirs -o ~/.cowfiles/dracula.cow;
echo "alias dracula-say='dracula-flow | cowsay -f ~/.cowfiles/dracula.cow'" >> ~/.bashrc;
source ~/.bashrc;
dracula-say;
```



