git init
git remote add origin <repository-url>
git add .*
git commit -m
git push -u origin main

git checkout -b feature/my-feature

git checkout main
git merge feature/my-feature

git branch -d feature/my-feature

name: CI/CD Pipeline

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '14'

      - name: Install dependencies
        run: npm install

      - name: Deploy
        run: npm run deploy

feat: log in
fix: error
docs: update README.txt
# 变更日志

## [1.0.0] - 2024-10-09
### 添加
- 用户登录功能
- 注册页面

### 修复
- 修复了一些小错误
















































