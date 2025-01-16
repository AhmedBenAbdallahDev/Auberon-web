import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/home-4');
}

export const metadata = {
  title: 'Auberon - Development Studio'
}
