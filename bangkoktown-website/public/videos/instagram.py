import yt_dlp

# List of Instagram reel URLs
urls = [
    "https://www.instagram.com/reel/DH0PRlGRCn4/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D",
    "https://www.instagram.com/reel/DL44oHJRkoo/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D",
    "https://www.instagram.com/reel/DL9lgYxxbxX/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D",
    "https://www.instagram.com/reel/DNvLn9Z5pAW/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA%3D%3D",
]

# Corresponding output file names
names = ["video1.mp4", "video2.mp4", "video3.mp4", "video4.mp4"]

# Download each video
for url, name in zip(urls, names):
    ydl_opts = {
        "outtmpl": name,  # Output file name
        "quiet": True,  # Suppress output
        "no_warnings": True,
    }
    with yt_dlp.YoutubeDL(ydl_opts) as ydl:
        ydl.download([url])

print("Downloads completed!")
