# GitHub Setup Instructions

Follow these steps to publish your Harbor Editorial Freelancers 2026 database to GitHub.

## Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository (e.g., `harbor-freelancers-2026` or `harbor-editorial-freelancers`)
5. Choose Public or Private (your choice)
6. **Do NOT** initialize with a README, .gitignore, or license (we already have these)
7. Click "Create repository"

## Step 2: Connect and Push to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
cd /Users/natecali/Documents/Cursor/freelance-editor-database

# Make your first commit (if you haven't already)
git add .
git commit -m "Initial commit: Harbor Editorial Freelancers 2026"

# Connect to your GitHub repository (replace YOUR_USERNAME and YOUR_REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Important**: Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.

## Step 3: Enable GitHub Pages (Optional - to host the site)

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Select "main" branch and "/ (root)" folder
6. Click "Save"
7. Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## Alternative: Using GitHub Desktop

If you prefer a graphical interface:

1. Download [GitHub Desktop](https://desktop.github.com/)
2. Sign in to GitHub Desktop
3. Go to File → Add Local Repository
4. Navigate to `/Users/natecali/Documents/Cursor/freelance-editor-database`
5. Click "Publish repository" button
6. Choose a name and make it public/private
7. Click "Publish Repository"

Then to enable GitHub Pages:
1. Go to your repository on GitHub.com
2. Settings → Pages
3. Select "Deploy from a branch" → "main" → "/ (root)"
4. Save

## File Structure

Your repository contains:
- `index.html` - Main application file
- `script.js` - All functionality
- `styles.css` - Styling
- `README.md` - Documentation
- `.gitignore` - Git ignore file

## Notes

- Data is stored in browser localStorage, so each user will have their own data
- The password for viewing day rates is: `Harbor`
- No backend server required - it's a pure client-side application
- Safe to make public - no sensitive data is in the code (rates are password-protected)

