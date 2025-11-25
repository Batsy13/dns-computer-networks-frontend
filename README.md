<a id="readme-top"></a>

<br />
<div align="center">
<h3 align="center">Distributed Network Client (Frontend)</h3>
<p align="center">
A Next.js interface built to demonstrate DNS Round Robin and Session Persistence.
</p>
</div>

<details>
<summary>Table of Contents</summary>
<ol>
<li>
<a href="#about-the-project">About The Project</a>
<ul>
<li><a href="#key-features">Key Features</a></li>
<li><a href="#built-with">Built With</a></li>
</ul>
</li>
<li>
<a href="#getting-started">Getting Started</a>
<ul>
<li><a href="#prerequisites">Prerequisites</a></li>
<li><a href="#running-the-project">Running the Project</a></li>
</ul>
</li>
<li>
  <a href="#contact">Contact</a>
</li>
</ol>
</details>

## About The Project

This frontend application serves as the user interface for the Distributed Systems project. It is deployed alongside the backend on 3 Google Cloud Virtual Machines served via Nginx.

The application interacts with the backend to perform authentication and displays critical network information, specifically the Server Hostname, to verify that the DNS Round Robin load balancing is functioning correctly while the user session remains active.

<img width="1897" height="1052" alt="image" src="https://github.com/user-attachments/assets/0acff6f6-dd75-4bf2-8551-001413590e75" />

## Key Features

**Authentication Flow:** Login and Registration using server-side sessions.

**Hostname Visualization:** Displays the specific GCP instance name (instance-http-1, instance-http-2, etc.) responding to the request.

**Resilience:** Handles the http server changing and maintains the user logged in.


## Built With

[![React][React.js]][React-url]
[![Tailwind CSS][Tailwindcss]][Tailwind-url]
[![Next][Next.js]][Next.js-url]
[![Shadcn][Shadcn]][Shadcn-url]
[![Shadcn][Redis]][Redis-url]
[![Shadcn][Mongo]][Mongo-url]

## Getting Started

To get a local copy of this project up and running, follow these simple steps.

### Prerequisites

Before you begin, make sure you have the following tools installed on your machine:

* **Git**: For cloning the repository.
* **Node.js**: Includes npm, which is necessary for running JavaScript projects.
* **pnpm**: A fast, disk space efficient package manager.
* **pm2**(optional): To run multiple applications.

It's also recommended to use a code editor like [VSCode](https://code.visualstudio.com/) for a better development experience.

### Running the Project

1.  **Clone this repository:**
    ```bash
    git clone https://github.com/Batsy13/bat-ui.git
    ```
2.  **Navigate to the project folder:**
    ```bash
    cd bat-ui
    ```
3.  **Create a .env file. Crucial: The API URL must point to the domain name to avoid CORS issues.** 
    ```bash
    NEXT_PUBLIC_API_URL=http://www.your-url.com.br/api
    ```
4.  **Install the dependencies:**
    ```bash
    pnpm install
    ```
5.  **Build an run:**
    ```bash
    pm2 run build
    ```
    ```bash
    pm2 start pnpm --name "frontend" -- start
    ```

## Contact

Feel free to connect with me!

* **LinkedIn**: [@Pedro Costa](https://www.linkedin.com/in/pedro-costa-b189262b3/)
* **Project Link**: [dns-computer-networks-frontend on GitHub](https://github.com/Batsy13/dns-computer-networks-frontend)

[Mongo]: https://img.shields.io/badge/-MongoDB-13aa52?style=for-the-badge&logo=mongodb&logoColor=white
[Mongo-url]: https://www.mongodb.com/
[Redis]: https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white
[Redis-url]: https://redis.io/
[Shadcn]: https://img.shields.io/badge/shadcn%2Fui-000?logo=shadcnui&logoColor=fff&style=for-the-badge
[Shadcn-url]: https://ui.shadcn.com/
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next.js-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[Tailwindcss]: https://img.shields.io/badge/Tailwind_CSS-grey?style=for-the-badge&logo=tailwind-css&logoColor=38B2AC
[Tailwind-url]: https://tailwindcss.com/
[React-url]: https://reactjs.org/
[Shadcn-url]: https://ui.shadcn.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>
