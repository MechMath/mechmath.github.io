WuProver GitHub Pages — Jekyll 最小站点框架

本仓库已添加最小的 Jekyll 配置、布局和样式，主要文件：

- _config.yml
- Gemfile
- _layouts/default.html
- assets/css/style.css
- index.html (已替换为 Jekyll front matter)
- about.md

本地预览（需要 Ruby + Bundler）：

```bash
gem install bundler
bundle install
bundle exec jekyll serve --livereload --host 0.0.0.0
```

在浏览器访问 `http://127.0.0.1:4000/`。