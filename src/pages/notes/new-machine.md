---
templateKey: notes
related_post_label: Check out this related post
tags: []
path: new-machine
title: New Machine
date: 2020-07-25T05:00:00Z
status: published
description: ''
related_post_body: ''
related_post: []
cover: ''
twitter_cover: ''

---
Today I setup a new machine on Digital Ocean,  Here are my installation notes.

``` bash
apt update && apt upgrade -y

apt install zsh
chsh zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
curl -fsSL https://starship.rs/install.sh | bash
echo 'eval "$(starship init zsh)"' >> ~/.zshrc

# python
sudo apt update
sudo apt install python3-pip -y
echo 'alias python=python3' >> ~/.zshrc
echo 'alias pip=pip3' >> ~/.zshrc

# pipx
apt install python3-venv
pip install pipx
pipx install black
pipx install shell-functools

# docker
sudo apt update
sudo apt install apt-transport-https ca-certificates curl gnupg-agent software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt update
sudo apt install docker-ce

# docker-compose
sudo curl -L "https://github.com/docker/compose/releases/download/1.25.5/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# configure git
git config --global user.name "Waylon Walker"
git config --global user.email waylon@waylonwalker.com

# fzf
git clone --depth 1 https://github.com/junegunn/fzf.git ~/.fzf
~/.fzf/install

# forgit
git clone https://github.com/wfxr/forgit ~/.forgit
echo ". ~/.forgit/forgit.plugin.zsh" >> ~/.zshrc

# ag
apt install silversearcher-ag

# bat
apt install bat
echo "alias cat=batcat" >> ~/.zshrc
```