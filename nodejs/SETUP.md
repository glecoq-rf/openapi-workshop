## 1. Installation

### 1.1. Install NVM (Node Version Manager):
[See this page to learn more about NVM](https://github.com/nvm-sh/nvm)

Using curl:
```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

Using wget:
```sh
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

Check the NVM installation with:
```sh
nvm --version
```
This should display `0.39.3`

### 1.2. Install the latest NodeJS version:

You can now install any version you want of NodeJS with NVM. Let's install latest stable version:

```sh
nvm install node
```

Let's now activate the installed node version:
```sh
nvm use node
```

To check the version is correctly installed:
```sh
node --version
```

```sh
npm --version
```