# 🔗 How to Update HR Assistant Link

After deploying your HR Assistant to Streamlit Cloud, follow these steps to update the link on your GitHub Pages site.

## Quick Steps

1. **Deploy to Streamlit Cloud** (if not done yet):
   - Go to https://share.streamlit.io
   - Sign in with GitHub
   - Click "New app"
   - Select: `Clefairybiubiubiu/AI-powered-HR-Assistant`
   - Main file: `resume_jd_matcher.py`
   - Click "Deploy"
   - Wait for deployment to complete

2. **Get Your Streamlit URL**:
   - After deployment, you'll see a URL like: `https://your-app-name.streamlit.app`
   - Copy this URL

3. **Update the Link**:
   - Open `script.js` in this repository
   - Find line 7: `const HR_ASSISTANT_URL = "#";`
   - Replace `"#"` with your Streamlit URL:
     ```javascript
     const HR_ASSISTANT_URL = "https://your-app-name.streamlit.app";
     ```

4. **Commit and Push**:
   ```bash
   git add script.js
   git commit -m "Update HR Assistant Streamlit Cloud URL"
   git push origin main
   ```

5. **Verify**:
   - Visit your GitHub Pages site: https://clefairybiubiubiu.github.io
   - The HR Assistant link should now work!

## Example

Before:
```javascript
const HR_ASSISTANT_URL = "#";
```

After:
```javascript
const HR_ASSISTANT_URL = "https://hr-assistant.streamlit.app";
```

---

**Note**: GitHub Pages updates may take a few minutes to reflect changes.

