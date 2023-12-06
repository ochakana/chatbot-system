FROM node:18.17.0

# 作業ディレクトリを設定
WORKDIR /app/nextjs_app

# 依存関係ファイルをコピー
COPY package.json yarn.lock ./

# 依存関係をインストール
RUN yarn install

# アプリケーションのソースコードをコピー
COPY . .

# ポート3000を公開
EXPOSE 3000

# アプリケーションを起動
# CMD ["yarn", "start"]

# デバッグ
CMD [ "sleep", "infinity" ]
