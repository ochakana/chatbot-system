FROM node:18.17.0

# 作業ディレクトリを設定
WORKDIR /app/expressjs_app

# 依存関係ファイルをコピー
COPY package.json yarn.lock ./

# 依存関係をインストール
RUN yarn install

# アプリケーションのソースコードをコピー
COPY . .

# TypeScriptのビルド
RUN yarn build

# ポート5000を公開
EXPOSE 5000

# アプリケーションを起動
CMD ["yarn", "start"]

# デバッグ
# CMD [ "sleep", "infinity" ]
