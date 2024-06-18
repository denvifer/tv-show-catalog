**How to run the app**


1. Ensure you have Node.js installed (for development, I used Node.js v20.11.1 / npm v10.2.4 on macOS).
2. Run `npm i`.
3. Run `npm run dev`.
4. Wait for the data to be loaded into the BFF (Backend for Frontend) memory cache. You can monitor the progress in the Node.js console. This usually takes about 15 seconds. When the "Loading complete." message appears, you can open/refresh the web page <http://localhost:3000/>.

   \

**Tech stack**

* **Nuxt framework**: I prefer using frameworks like Nuxt / Next.js nowadays because they provide many useful features out of the box, allowing you to focus on the app's functionality. For example, in this app, we utilize SSR to some extent (basic UI with skeletons is delivered to the browser within the initial document request).
* **TypeScript**: I default to using TypeScript in all my projects. It significantly improves the development experience and team performance.

  \

**Architecture decisions / techniques**

* **BFF (Backend for Frontend)**: Given that the provided API requires loading all data for grouping, I've implemented a small server that fetches data into memory cache, groups, and orders entities. This way, the frontend can retrieve only the necessary subset of data, ensuring efficient performance.
* **SSR (Server Side Rendering)**: As mentioned earlier, SSR helps delivering UI within the first Document request. In the current version, only the minimal UI with skeletons is pre-rendered, but it can be easily extended with real data thanks to our BFF.
* **List virtualization**: Due to the large number of shows under each genre, all horizontal lists in the catalog are virtualized. This ensures consistent performance regardless of the number of items loaded.

  \


