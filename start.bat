@echo off
REM ============================================================
REM  Inicia o site PiaR e abre o navegador automaticamente.
REM
REM  Como usar : clique duas vezes neste arquivo.
REM  Para parar: feche esta janela preta.
REM ============================================================

title PiaR Site - servidor local
cd /d "%~dp0"

echo.
echo  ===========================================================
echo   PiaR Site - inicializando...
echo  ===========================================================
echo.

REM Primeiro uso: garante que as dependencias existam.
if not exist node_modules (
  echo  Primeira execucao detectada. Instalando dependencias...
  echo  Isso pode demorar 1-2 minutos. So acontece uma vez.
  echo.
  call npm install
  if errorlevel 1 (
    echo.
    echo  ERRO ao instalar dependencias. Verifique sua conexao
    echo  e se o Node.js esta instalado ^(https://nodejs.org^).
    pause
    exit /b 1
  )
  echo.
)

echo  Subindo servidor e abrindo o navegador em http://localhost:4321
echo  Para parar: feche esta janela.
echo.

call npm start

pause
