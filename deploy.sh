# 忽略错误
set -e

# 打包（构建）
npm run docs:build

# 进入待发布目录
cd docs/.vitepress/dist

# 将代码提交到gitee上，进行托管
git init
git add -A
git commit -m 'online'

# 部署到码云上
git push -f https://gitee.com/xiangyang666/vitepress master:gh-pages

cd -