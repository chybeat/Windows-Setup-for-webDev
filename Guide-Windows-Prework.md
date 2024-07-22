# Archivo en Markdown

Utilidad para leer e interacrtuar con este archivo como se debe!:

[https://github.com/c3er/mdview/releases](https://github.com/c3er/mdview/releases)
---

## Configuracion de Windows
### Distribuciones de teclado

- **Español Latinoaméricano** _(El simbolo de arroba en la "Q")_:

	![https://upload.wikimedia.org/wikipedia/commons/8/8e/KB_Latin_American.svg](https://upload.wikimedia.org/wikipedia/commons/8/8e/KB_Latin_American.svg)

- **Español** _(El simbolo de arroba en el "2")_:

	![https://upload.wikimedia.org/wikipedia/commons/7/74/KB_Spanish.svg](https://upload.wikimedia.org/wikipedia/commons/7/74/KB_Spanish.svg)

- **Estados Unidos Interncacional** _(Sin "Ñ", pero con posiblidad de obtenerla con ALT derecho ó ALTGr)_:
	
	![https://upload.wikimedia.org/wikipedia/commons/2/22/KB_US-International.svg](https://upload.wikimedia.org/wikipedia/commons/2/22/KB_US-International.svg)

- **Estados Unidos** _(Sin "Ñ" sin posibilida de obtenerla)_:

	![https://upload.wikimedia.org/wikipedia/commons/5/51/KB_United_States-NoAltGr.svg](https://upload.wikimedia.org/wikipedia/commons/5/51/KB_United_States-NoAltGr.svg)

- **Reino Unido** _(Arroga junto a la virgulilla)_:

	![https://upload.wikimedia.org/wikipedia/commons/d/da/KB_United_Kingdom.svg](https://upload.wikimedia.org/wikipedia/commons/d/da/KB_United_Kingdom.svg)

### Tema oscuro!!

Beneficios del tema oscuro:

[https://www.portafolio.co/tendencias/el-modo-oscuro-en-los-dispositivos-y-sus-beneficios-528691](https://www.portafolio.co/tendencias/el-modo-oscuro-en-los-dispositivos-y-sus-beneficios-528691)

[https://www.lasexta.com/tecnologia-tecnoxplora/internet/modo-oscuro-esta-moda-pero-realmente-perjudicial-vista_2022113063873caabef62f00012396eb.html](https://www.lasexta.com/tecnologia-tecnoxplora/internet/modo-oscuro-esta-moda-pero-realmente-perjudicial-vista_2022113063873caabef62f00012396eb.html)

### Barra de tareas
- Quitar widgets, buscar, vista de tareas
- Comportamiento
- Alineacion  la izquierda
- Combinar botones.. cuando la barra esta llena

### Explorador de Windows
- Opciones del explorador de Windows
- Mostrar extensions
- Mostrar archivos ocultos (no de Sistema operativo y ¿Desktop.ini?)
- Mostrar carpetas de navegacion

- Powertoys https://github.com/microsoft/PowerToys/releases/tag/v0.82.1
Dejar activo fancy Zones
Dimensiones : D:\Dropbox\htdocs\Utils\screen\datos de pantallas.xlsx


## Navegadores
- Estadísticas de uso de los navegadores: [https://gs.statcounter.com/browser-market-share](https://gs.statcounter.com/browser-market-share)

- Pagina de prework con información de los navegadores (omitir todo el resto): [https://chybeat.github.io/Windows-Setup-for-webDev/public_html/](https://chybeat.github.io/Windows-Setup-for-webDev/public_html/)
- Configurar los dispotivivos para responsivo 1336x722 Laptop HD
## WSL
_Archivo con información: D:\\Dropbox\\htdocs\\windowsPrework\\.Data-no-page\\add this.txt_

### Actualizar linux
Instalar compatibilidad con ficheros comprimidos:
```Bash
	sudo apt install -y zip 
```
Instalar Node.js y npm"
```Bash
	sudo apt install -y nodejs && sudo apt install -y npm
```
Actualizar Linux
```Bash
	sudo apt update && sudo apt upgrade -y
```
## VsCode
Instalador de Visual Studio Code: [https://code.visualstudio.com/sha/download?build=stable&os=win32-x64](https://code.visualstudio.com/sha/download?build=stable&os=win32-x64)

### Extensiones recomendadas:
- WSL: [https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl)
- Prettier: [https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- Eslint: [https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- npm intellisense: [https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense)
- Live Server: [https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- Node.js Modules Intellisense: [https://marketplace.visualstudio.com/items?itemName=leizongmin.node-module-intellisense](https://marketplace.visualstudio.com/items?itemName=leizongmin.node-module-intellisense)
- Sortlines: [https://marketplace.visualstudio.com/items?itemName=Tyriar.sort-lines](https://marketplace.visualstudio.com/items?itemName=Tyriar.sort-lines)
- vscode-pdf: [https://marketplace.visualstudio.com/items?itemName=tomoki1207.pdf](https://marketplace.visualstudio.com/items?itemName=tomoki1207.pdf)
- Markdown Preview Enhanced: [https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced)
- Svg: [https://marketplace.visualstudio.com/items?itemName=jock.svg](https://marketplace.visualstudio.com/items?itemName=jock.svg)

## Git

### Sourcetree:
Enlace de descarga: [https://www.sourcetreeapp.com/](https://www.sourcetreeapp.com/) (Atlassian creador de  Trello y Bitbucket). **👉👉!!Al instalar no instalar mercurial!!👈👈**
	
### Configuración del shell (linux o gitbash)

- Ver la lista completa de configuraciones actuales (si no existen muestra un error).
```Bash
	git config --global --list
```
- Agregar un usuario a git
```Bash
	git config --global user.name "User name"
```
- Agregar un correo a git
```Bash
	git config --global user.email "your@email.com"
```
- Crear el archivo eliminar.txt con el texto "Hello, Wolrd!", abrir configurar vscode por primera vez dentro de git y luego elimiar el archivo al cerrar Vscode
```Bash
	echo 'Hello, World!' >> eliminar.txt && code --wait eliminar.txt && rm -fr eliminar.txt
```
Configurar Vscode como editor para git
```Bash
	git config --global core.editor "code --wait"
```
Comando para mostrar .gitconfig (archivo de configuracion de got dentro de linux)
```Bash
	git config --global -e
```
- Agregar a .gitconfig
```
	[diff]
		tool = vscode
	[difftool "vscode"]
		cmd = code --wait --diff $LOCAL $REMOTE
	[init]
		defaultBranch = main
```

## Node.js para Windows

Enlace de descarga:
[https://nodejs.org/en/download/prebuilt-installer/current](https://nodejs.org/en/download/prebuilt-installer/current)

Actualizar npm (desde powershell)

Actualizar NPM
```PowerShell
npm install -g npm
```

Prueba de Node.js:
```Powershell
node -v
```
Prueba de npm:

```Powershell
npm -v
```