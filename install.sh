#!/bin/bash
# Required to be ran as 'sudo'

cd app/ || echo 'Failed to change directories, ensure you are running as sudo'
filepath=$PWD
npm install -g npm
meteor npm run install
mkdir -p /opt/inventory/mongo/backup
echo '#!/bin/bash' > /etc/cron/meteor.backup
echo 'mongodump --host=192.168.200.73 --port=3000 --quiet --out=/opt/inventory/mongo/backup/' > /etc/cron/meteor.backup
chmod +x /etc/cron/meteor.backup
cd "$filepath" || echo 'Failed to change directories, ensure you are running as sudo'
meteor npm run start
