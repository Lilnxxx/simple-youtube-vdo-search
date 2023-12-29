# YouTube Video Searcher

Don't let the title fool you; this tool is designed to provide a sophisticated search experience within YouTube videos. It allows users to efficiently find specific queries within video content, similar to using the "find" feature in Notepad.

## How to Use

Getting started with the YouTube Video Searcher is a breeze. Simply follow these steps:

1. **Install Dependencies:**
   - Navigate to the `client` directory.
   - Run the following command to install the necessary client dependencies:
     ```bash
     cd client
     npm install
     ```
   - Repeat the same process for the `server` directory.

## Features

The YouTube Video Searcher comes packed with powerful features tailored to enhance your video searching experience:

- **Effortless Query Search:**
  - Quickly and easily search for specific queries within a video.

- **Detailed Results:**
  - Receive comprehensive results, including entire sentences where the query was used, providing valuable context.

- **Time-Stamped Navigation:**
  - Seamlessly navigate to specific points in a YouTube video by clicking on the relevant statements.

## Usage Tips

Optimize your usage of the YouTube Video Searcher with these helpful tips:

- **Obtain Video ID:**
  - Find the video ID by extracting the part after "v=" in a YouTube video URL.

- **Efficient Query Searches:**
  - Use the tool to efficiently search for specific queries within videos, saving time and enhancing productivity.

- **Detailed Timestamps:**
  - Leverage the time-stamped navigation feature to pinpoint and jump directly to the exact moments within a video.


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



## Support and Contact

We are dedicated to providing you with the best experience. Feel free to reach out with any questions, feedback, or concerns:

- Email: [your.email@example.com](mailto:your.email@example.com)

Thank you for choosing YouTube Video Searcher to enhance your video exploration journey!

---

![YouTube Video Searcher Logo](link/to/logo.png) <!-- Add a logo image if available -->

