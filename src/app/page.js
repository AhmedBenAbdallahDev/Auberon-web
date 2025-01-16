import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/home');
}

export const metadata = {
  title: 'Auberon - Development Studio'
}
