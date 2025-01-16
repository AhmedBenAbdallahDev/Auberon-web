export default function generateStylesheetObject(urls) {
  return urls.map(url => ({
    rel: 'stylesheet',
    url
  }));
}