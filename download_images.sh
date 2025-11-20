#!/bin/sh
# download_images.sh
# Simple script to download sample images into images/ folder using wget or curl.
# Run this on a machine with internet access (Linux/macOS/Termux).

mkdir -p images/banners images/services images/gallery

imgs=(
"https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=1200"
"https://source.unsplash.com/1200x800/?haldi,decor"
"https://source.unsplash.com/1200x800/?mehndi,decor"
"https://source.unsplash.com/1200x800/?wedding,decor"
"https://source.unsplash.com/1200x800/?baby-shower,decor"
"https://source.unsplash.com/1200x800/?birthday,party"
"https://source.unsplash.com/1200x800/?balloon,party"
)

i=1
for url in "${imgs[@]}"; do
  echo "Downloading $url ..."
  if command -v wget >/dev/null 2>&1; then
    wget -q -O images/gallery/img_$i.jpg "$url"
  elif command -v curl >/dev/null 2>&1; then
    curl -s -L "$url" -o images/gallery/img_$i.jpg
  else
    echo "Please install wget or curl to download images."
    exit 1
  fi
  i=$((i+1))
done

echo "Done. Images saved in images/gallery/"