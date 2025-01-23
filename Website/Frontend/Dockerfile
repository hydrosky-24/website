# Gunakan image resmi Nginx sebagai base image
FROM nginx:alpine

# Menyalin file dari folder lokal ke dalam container
# Pastikan folder aplikasi Anda berada di folder yang benar
COPY ./ /usr/share/nginx/html

# Ekspos port 80 untuk akses ke web server
EXPOSE 8080

# Nginx akan menjalankan prosesnya secara otomatis saat container dijalankan
CMD ["nginx", "-g", "daemon off;"]
