# Professional Gamer Overlay v2

This is a modular, high-performance gaming overlay designed for Lightstream, OBS, and other streaming software.

## 🚀 How to Host on GitHub (Free & Permanent)

To use this overlay in Lightstream, it must be hosted on a public URL. Follow these steps to host it for free using **GitHub Pages**:

1. **Create a GitHub Account**: If you don't have one, sign up at [github.com](https://github.com).
2. **Create a New Repository**:
   - Click the **+** icon in the top right and select **New repository**.
   - Name it `gaming-overlay`.
   - Set it to **Public**.
   - Click **Create repository**.
3. **Upload Files**:
   - On your new repository page, click **uploading an existing file**.
   - Drag and drop these files from your computer:
     - `index.html`
     - `style.css`
     - `script.js`
   - Scroll down and click **Commit changes**.
4. **Enable GitHub Pages**:
   - Go to the **Settings** tab of your repository.
   - Click **Pages** in the left sidebar.
   - Under **Build and deployment > Branch**, select `main` (or `master`) and `/ (root)`.
   - Click **Save**.
5. **Get Your URL**:
   - Wait about 60 seconds. Refresh the page.
   - You will see a message: "Your site is live at `https://yourusername.github.io/gaming-overlay/`".
   - **Copy this URL**.

## 📺 Using in Lightstream

1. Open **Lightstream Studio**.
2. Add a new **Layer**.
3. Select **3rd Party** > **Browser Source**.
4. Paste your GitHub Pages URL.
5. Set the resolution to **1920x1080**.

## 🛠 Local Development

If you want to test changes on your own PC before uploading:
- Run `start_server.bat` to start a local server.
- Access it at `http://localhost:8082`.
