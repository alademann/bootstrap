# Install RVM and ruby via RVM and set default
echo '////////////////////////'
echo ''

if ! builtin type -p rvm &>/dev/null; then
    echo "Installing RVM"
    \curl -#L https://get.rvm.io | bash -s stable --autolibs=3 --ruby=2.0.0

    echo "Sourcing HOME/.rvm/scripts/rvm and setting Ruby 2.0.0 as default"
    source $HOME/.rvm/scripts/rvm
    source $HOME/.bashrc
    source $HOME/.zsrch
else
    echo "RVM already installed"
fi

rvm --default use 2.0.0

echo ''
echo '////////////////////////'


# Install Homebrew
echo '////////////////////////'
echo ''

if ! builtin type -p brew &>/dev/null; then
    echo 'Installing Homebrew'
    ruby -e "$(curl -fsSL https://raw.github.com/mxcl/homebrew/go)"
else
    echo "Homebrew already installed"
fi

echo ''
echo '////////////////////////'


# Install python
echo '////////////////////////'
echo ''
echo 'Installing Python'
echo ''
echo '////////////////////////'
brew install python


# Setup pip
echo '////////////////////////'
echo ''
echo 'Installing Python dependencies using pip'
echo ''
echo '////////////////////////'
sudo easy_install pip
sudo pip install --upgrade distribute
sudo pip install pygments


# Install ruby gems
echo '////////////////////////'
echo ''
echo 'Installing Ruby Gem dependencies for Sassy CSS'
echo ''
echo '////////////////////////'
sudo gem install bundler
bundle


# Install npm packages
echo '////////////////////////'
echo ''
echo 'Installing NPM dependencies for grunt tasks'
echo ''
echo '////////////////////////'
sudo npm install -g grunt-cli
npm install


# Last steps instructions
echo ''
echo ''
echo '////////////////////////'
echo ''
echo 'To complete your install, follow these last steps:'
echo ''
echo "1) Add the following line to your .profile file located at ~/.profile (or /Users/you-user-name/.profile): If you don't have a .profile file - create one.:"
echo ''
echo 'export PATH="/usr/local/share/python:${PATH}"'
echo ''
echo '2) Save the .profile file and run the following command in your console:'
echo ''
echo 'source ~/.profile'
echo ''
echo '////////////////////////'
echo ''
echo ''