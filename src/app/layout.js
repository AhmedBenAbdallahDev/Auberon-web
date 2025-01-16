import "@/styles/globals.css";
import "@/styles/modal-video.css";
import 'lightgallery/css/lightgallery.css';

export const metadata = {
  title: 'Auberon - Development Studio',
  description: 'Development Studio Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/home/assets/img/fav2.png" />
        <link rel="shortcut icon" href="/home/assets/img/fav2.png" />
        <link href="https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link href="/common/assets/css/lib/bootstrap.min.css" rel="stylesheet" />
        <link href="/common/assets/css/lib/all.min.css" rel="stylesheet" />
        <link href="/common/assets/css/lib/line-awesome.css" rel="stylesheet" />
        <link href="/common/assets/css/lib/themify-icons.css" rel="stylesheet" />
        <link href="/common/assets/css/lib/ionicons.css" rel="stylesheet" />
        <link href="/common/assets/css/lib/animate.css" rel="stylesheet" />
        <link href="/common/assets/css/lib/swiper8.min.css" rel="stylesheet" />
        <link href="/common/assets/css/common_style.css" rel="stylesheet" />
        <link href="/home/assets/css/home_style.css" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
