# braceletus

## Reference Links

* One Drive: https://1drv.ms/f/s!AojJeyhfJsx_gZoyI18SXwCGGfyLeg

## Setup your SSH key

1. Verify if you have an SSH key setup with cat ~/.ssh/id_rsa
2. If no SSH key is found, generate it with ssh-keygen -t rsa
3. Copy your SSH key to your clipboard with pbcopy < ~/.ssh/id_rsa.pub
4. Your SSH key is now in your clipboard. Go copy it in your Github Account

## Setup Project

1. Fork the project
2. Clone your Fork with git clone git@github.com:username/braceletus.git
3. Add a remote to original repo with git remote add upstream git@github.com:AustinDidierTran/braceletus.git
4. You are now ready to code!

## Development flow

1. Make your modifications
2. Stage your files with git add .
3. Create your commit with git commit -m "Commit message"
4. Update your upstream with git fetch upstream
5. Fetch the last changes with git pull upstream 'branch'
6. Solve conflicts if necessary
7. Push your changes with git push 'remote' 'branch'
8. Generate a Pull Request on github.com