import requests

SPOTIFY_CREATE_PLAYLIST_URL = 'https://api.sotify.com/v1/users/thenyquist/playlists'
# OLD
ACCESS_TOKEN = 'BQAsmf6h3p9_CCPR-85-V8qfTTE5jt4l9wfeYSq311CZ5Mr18h1LDrdDslObZIQPQtEBRgphf8sHnSixnINXnJ77h6I_ViT5i_fn-n6iy8Yb7Ui3-VQ'

def create_playlist_on_spotify(name, public):
    response = requests.post(
        SPOTIFY_CREATE_PLAYLIST_URL,
        headers={
            "Authorization": f"Bearer {ACCESS_TOKEN}"
        },
        json={
            "name": name,
            "public": public
        }
    )
    json_resp = response.json()

    return json_resp

def main():
    playlist = create_playlist_on_spotify(
        name="API Created Playlist",
        public=False
    )

    print(f"Playlist: {playlist}")

if __name__ == '__main__':
    main()
