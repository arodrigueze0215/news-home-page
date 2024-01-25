import Logo from '../../components/Logo'
import Button from '../../components/Button'

export default function Home() {
  return (
    <main
      className='flex min-h-screen flex-col items-center justify-between p-24'
    >
      <h1 className="title-1">Title 1 - 55pt/Inter Bk</h1>
      <h2 className="title-2">Title 2 - 40pt/Inter ExBold</h2>
      <h3 className="subtitle-1">Subtitle 1 - 32pt/Inter ExBold</h3>
      <h4 className="subtitle-2">Subtitle 2 - 20pt/Inter ExBold</h4>
      <h5 className="subtitle-3">Subtitle 3 - 18pt/Inter ExBold</h5>
      <span className="text">Text - 14pt/Inter Medium</span>
      <Button>READ MORE</Button>
      <Logo/>
    </main>
  )
}
