@echo off
setlocal

:: 设置目标目录，默认为 dist
set "TARGET_DIR=dist"
if not "%1"=="" set "TARGET_DIR=%1"

:: 创建目标目录
if not exist "%TARGET_DIR%" mkdir "%TARGET_DIR%"

:: 复制 public/*
xcopy .\public\* "%TARGET_DIR%\" /E /I /Y

:: 复制 rlottie-wasm.wasm
copy .\src\lib\rlottie\rlottie-wasm.wasm "%TARGET_DIR%\" /Y

:: 复制 decoderWorker.min.wasm
copy .\node_modules\opus-recorder\dist\decoderWorker.min.wasm "%TARGET_DIR%\" /Y

:: 复制 emoji-data-ios/img-apple-64
xcopy .\node_modules\emoji-data-ios\img-apple-64 "%TARGET_DIR%\img-apple-64\" /E /I /Y

:: 复制 emoji-data-ios/img-apple-160
xcopy .\node_modules\emoji-data-ios\img-apple-160 "%TARGET_DIR%\img-apple-160\" /E /I /Y

echo 资源已复制到 %TARGET_DIR%
endlocal
