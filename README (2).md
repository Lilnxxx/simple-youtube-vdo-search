
# youtube-video-seracher

Dont't let the title fool yoo, this tool works by finding a query inside a youtube video , it seraches for words used in the video just like find in notepad.


## How to use

first you need to install dependencies

```bash
  move to cd client
  npm install 
  repeat same for server direct.
```
    
## API Reference

#### Get caption file from server

```http
  GET /api/video_id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `vid_id` | `string` | **Required**. Your Video id |

#### Get query

```http
  GET /api/find/query
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

The video id is the part after "v=" in a youtube video url


## Features

- can easily search for queries in a video
- the tool provides whole sentences where the query was used
- User can also click on the specific statement to move to the youtube video at specified time

