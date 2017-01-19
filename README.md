# braceletus

## Setup your SSH key

1. Verify if you have an SSH key setup with cat ~/.ssh/id_rsa
2. If no SSH key is found, generate it with ssh-keygen -t rsa
3. Copy your SSH key to your clipboard with pbcopy < ~/.ssh/id_rsa.pub
4. Your SSH key is now in your clipboard. Go copy it in your Github Account

## Setup Project

1. Fork the project
2. Clone your Fork with git clone git@github.com:username/braceletus.git
3. You are now ready to code!

## Development flow

1. Make your modifications
2. Stage your files with git add .
3. Create your commit with git commit -m "Commit message"
4. Fetch the last changes with git pull <remote> <branch>
5. Solve conflicts if necessary
6. Push your changes with git push <remote> <branch>
7. Generate a Pull Request on github.com