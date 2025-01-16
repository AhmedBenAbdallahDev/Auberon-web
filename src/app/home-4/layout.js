import generateStylesheetObject from '@/common/generateStylesheetsObject';

export const metadata = {
  title: 'Auberon - Development Studio',
  icons: {
    icon: "/home/assets/img/fav2.png",
    shortcut: "/home/assets/img/fav2.png",
    other: generateStylesheetObject([
      'https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@300;400;500;600;700;800;900&display=swap',
      '/common/assets/css/lib/bootstrap.min.css',
      '/common/assets/css/lib/all.min.css',
      '/common/assets/css/lib/line-awesome.css',
      '/common/assets/css/lib/themify-icons.css',
      '/common/assets/css/lib/ionicons.css',
      '/common/assets/css/lib/animate.css',
      '/common/assets/css/lib/swiper8.min.css',
      '/common/assets/css/common_style.css',
      '/home/assets/css/home_style.css'
    ])
  }
}

export default function Layout({ children }) {
  return children;
} 