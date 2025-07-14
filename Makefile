# Makefile for tailwind and live-server
# Created: 12/07/2025

# compile tailwindcss
tailwind:
	npx @tailwindcss/cli -i ./docs/input.css -o ./docs/output.css --watch

# run live-server
live:
	live-server --open=docs/index.html --host=0.0.0.0

