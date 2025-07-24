# script for transforming photos to webp
# Created : 24/07/2025

import os
from PIL import Image

# Define input and output directories
input_dir = os.curdir
output_dir = os.path.join(input_dir, "webp")

# Create 'webp' directory if it doesn't exist
os.makedirs(output_dir, exist_ok=True)

# Allowed input extensions
input_extensions = (".jpg", ".jpeg", ".png")

# Loop through files in current directory
for filename in os.listdir(input_dir):
    if filename.lower().endswith(input_extensions):
        image_path = os.path.join(input_dir, filename)
        output_filename = os.path.splitext(filename)[0] + ".webp"
        output_path = os.path.join(output_dir, output_filename)

        # Convert and save image
        with Image.open(image_path) as img:
            img.convert("RGB").save(output_path, "webp", quality=100)
            print(f"Converted: {filename} -> webp/{output_filename}")
