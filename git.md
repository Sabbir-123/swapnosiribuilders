# Git Configuration & Commands for SBL

This document outlines the git commands and credentials structure used to configure, secure, and push the **Swapnosiri Builders Ltd. (SBL)** web portal.

## 🔗 Repository Information
*   **Remote URL:** `https://github.com/Sabbir-123/swapnosiribuilders.git`
*   **Default Branch:** `main`

---

## 🔒 Security & Environment Variables
To prevent sensitive credentials (such as SMTP passwords) from being exposed publicly on GitHub:
1. All private configurations are stored in `.env.local` (local environment variables).
2. `.env.local` is added to `.gitignore` so it is never pushed to public repositories.
3. A template file `.env.example` is committed as a reference for production environments.

---

## 🛠️ Commands Executed to Initialize & Push

```bash
# 1. Initialize git (if not already done)
git init

# 2. Configure .gitignore to keep credentials secure
# (node_modules, .next, and .env.local are ignored)

# 3. Stage all code, design resources, and configurations
git add .

# 4. Stage the environment template (overriding .gitignore rule)
git add -f .env.example

# 5. Create first commit
git commit -m "first commit"

# 6. Ensure default branch is named 'main'
git branch -M main

# 7. Bind the GitHub remote repository
git remote add origin https://github.com/Sabbir-123/swapnosiribuilders.git

# 8. Push project to remote repository
git push -u origin main
```

---

## 🔄 Daily Workflow Commands

### Pull latest changes
```bash
git pull origin main
```

### Stage and commit updates
```bash
git add .
git commit -m "Describe your changes here"
git push origin main
```
