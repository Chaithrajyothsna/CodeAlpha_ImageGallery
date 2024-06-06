const images = [
    'https://th.bing.com/th/id/OIP.eJma-Mr5l3VeUugXIFiw2QHaFj?rs=1&pid=ImgDetMain',
    'https://th.bing.com/th/id/OIP.o4bSEf5EOPzPPv_MUFeSNAHaH_?rs=1&pid=ImgDetMain',
    'https://th.bing.com/th/id/OIP.lPHUDoljesNp5fhJiYbNzgHaFj?w=2732&h=2048&rs=1&pid=ImgDetMain',
    'https://th.bing.com/th/id/OIP.qgWg2d0KH72KCefFEI2_4AHaHa?rs=1&pid=ImgDetMain',
    'https://koala.sh/api/image/v2-56fvy-retcd.jpg?width=1216&height=832&dream',
    'https://res.cloudinary.com/bloomnation/c_pad,d_vendor:global:catalog:product:image.png,f_auto,fl_preserve_transparency,q_auto/v1523136002/vendor/5398/catalog/product/2/0/20180407021403_file_5ac8d22b93ebf.jpg',
    'https://th.bing.com/th/id/OIP.oe37o15uYZpSW0cCnnH9VwAAAA?w=450&h=253&rs=1&pid=ImgDetMain',
    'https://th.bing.com/th/id/R.3dfda9deac3b38b9edc14d0b778b567b?rik=47fkBaImwoLpmQ&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fFree-Download-Wildlife-Image.jpg&ehk=0Y6qVq5JBhu1a00gxIhsITN9M9Ntlxqcz5hGyTTQRqw%3d&risl=&pid=ImgRaw&r=0',
    'https://th.bing.com/th/id/OIP.FkA-Wxzr0A9jM5JUcrlhcAHaFj?w=600&h=450&rs=1&pid=ImgDetMain'
    // Add more image paths as needed
];

let currentIndex = 0;

const currentImage = document.getElementById('current-image');

function showImage(index) {
    currentIndex = index;
    currentImage.src = images[currentIndex];
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

// Initialize with the first image
showImage(currentIndex);
