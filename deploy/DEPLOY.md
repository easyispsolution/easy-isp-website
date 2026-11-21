# Easy ISP Solution (`easyispsolution.com`) — Deployment Reference

## Static Nginx Deployment (AWS EC2 / Lightsail / VPS)

1. Point `easyispsolution.com` and `www.easyispsolution.com` (`A` records) to your server IP (`<YOUR_SERVER_IP>`).
2. Clone and enable Nginx on the server (`sudo su -`):
```bash
mkdir -p /var/www
git clone -b main https://github.com/easyispsolution/easy-isp-website.git /var/www/easyispsolution.com
chmod -R 755 /var/www/easyispsolution.com
cp /var/www/easyispsolution.com/deploy/nginx-easyispsolution.conf /etc/nginx/conf.d/easyispsolution.com.conf
nginx -t && systemctl reload nginx
which certbot || dnf install -y certbot python3-certbot-nginx
certbot --nginx -d easyispsolution.com -d www.easyispsolution.com --redirect
```
3. Future updates:
```bash
cd /var/www/easyispsolution.com && git pull origin main
```
