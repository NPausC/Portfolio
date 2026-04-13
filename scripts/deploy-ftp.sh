#!/usr/bin/env bash
set -euo pipefail

FTP_HOST="${FTP_HOST:-}"
FTP_USER="${FTP_USER:-}"
FTP_PASSWORD="${FTP_PASSWORD:-}"
FTP_PORT="${FTP_PORT:-21}"
REMOTE_PATH="${FTP_REMOTE_PATH:-/angular-projects/portfolio}"
LOCAL_DIST="${LOCAL_DIST:-dist/portfolio/browser}"

if [[ -z "$FTP_HOST" || -z "$FTP_USER" || -z "$FTP_PASSWORD" ]]; then
  echo "Missing FTP credentials. Set FTP_HOST, FTP_USER, FTP_PASSWORD."
  exit 1
fi

if [[ ! -d "$LOCAL_DIST" ]]; then
  echo "Build output not found at '$LOCAL_DIST'. Run npm run build:ftp first."
  exit 1
fi

if command -v lftp >/dev/null 2>&1; then
  lftp -u "$FTP_USER","$FTP_PASSWORD" -p "$FTP_PORT" "$FTP_HOST" <<LFTP
set ftp:ssl-allow no
set net:max-retries 2
set net:timeout 20
mkdir -p "$REMOTE_PATH"
mirror -R --delete --verbose "$LOCAL_DIST" "$REMOTE_PATH"
bye
LFTP
else
  if ! command -v curl >/dev/null 2>&1; then
    echo "Neither lftp nor curl is available for FTP upload."
    exit 1
  fi

  echo "lftp not found, using curl fallback upload..."
  local_dist_abs="$(cd "$LOCAL_DIST" && pwd)"
  while IFS= read -r -d '' file; do
    relative_path="${file#$local_dist_abs/}"
    remote_file="$REMOTE_PATH/$relative_path"
    curl --fail --silent --show-error \
      --user "$FTP_USER:$FTP_PASSWORD" \
      --ftp-create-dirs \
      --upload-file "$file" \
      "ftp://$FTP_HOST:$FTP_PORT$remote_file"
  done < <(find "$local_dist_abs" -type f -print0)
fi

echo "Deployment complete: $LOCAL_DIST -> ftp://$FTP_HOST:$FTP_PORT$REMOTE_PATH"
