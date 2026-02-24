
import requests

urls = {
    "assets/pic7.jpg": "https://multimodal-cortex-prod_1117260580971.commondatastorage.googleapis.com/381afaa7-ad8f-4e97-ae9c-15b4c337d20e/1771524673322_image.png?GoogleAccessId=cortex-prod%40multimodal-cortex-prod.iam.gserviceaccount.com&Expires=1771611074&Signature=S01Z8X2o14cI%2BBV7LhH2zO8%2FMfVq0y6%2F%2B4Q3z%2BwJdJ7l4v%2B1z%2B%2B%2B%2B%2B%2B%2B%2B%2B%2B%2B",
    "assets/pic9.jpg": "https://multimodal-cortex-prod_1117260580971.commondatastorage.googleapis.com/381afaa7-ad8f-4e97-ae9c-15b4c337d20e/1771524784407_image.png?GoogleAccessId=cortex-prod%40multimodal-cortex-prod.iam.gserviceaccount.com&Expires=1771611186&Signature=G107a%2BZt5s5e2R2N%2FGkX%2B%2F882hI3j2g2e7gG3A%2F%2B4Q3z%2BwJdJ7l4v%2B1z%2B%2B%2B%2B%2B%2B%2B%2B%2B%2B%2B"
}

for filename, url in urls.items():
    print(f"Downloading {filename}...")
    try:
        response = requests.get(url)
        if response.status_code == 200:
            with open(filename, 'wb') as f:
                f.write(response.content)
            print(f"Success: {filename}")
        else:
            print(f"Failed: {filename} with status {response.status_code}")
            print(response.text[:200])
    except Exception as e:
        print(f"Error: {e}")
