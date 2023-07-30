import requests

headers = {
    'Authorization': 'Bearer BQB7OB-UlJUeOgypVHnYwZ0xrRndrS5IdY4f4UIxmCK05lgeCXMhktDqatfLDVoVOzOfxoKBhOU4Zf1wAZgkLUGXAyh6FGGYGkFl_6mPmq03A17gcB7SHqv__0ylFoRnz_P8-MK5v9X5v7lk7conTRXv6ayxWunSWbFUqxnKU98ctwAs-2IbPcTsfflzCUbM_iqK6kovGg',
}

response = requests.get('https://api.spotify.com/v1/me/top/artists', headers=headers)

# Check if the request was successful (status code 200)
if response.status_code == 200:
    data = response.json()
    print(data)
else:
    print("Error: Unable to fetch data.")
