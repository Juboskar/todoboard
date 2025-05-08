#!/bin/sh

cp ./.githooks/commit-msg ./.git/hooks/commit-msg
chmod +x ./.git/hooks/commit-msg

echo "Completed git hook commit message setup"