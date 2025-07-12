# Makefile for tailwind and live-server
# Created: 12/07/2025

# compile tailwindcss
tailwind:
	npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch

# run live-server
live:
	live-server --open=src/index.html --host=0.0.0.0

