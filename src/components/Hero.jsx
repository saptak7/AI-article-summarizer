import { logo } from '../assets'

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
        <button
          type="button"
          onClick={() => window.open('https://github.com/saptak7')}
          className="black_btn"
        >
          Github
        </button>
      </nav>
      <h1 className="head_text">
        Sumz
        <br className="max-md:hidden" />
        <span className="orange_gradient">Article Summarizer</span>
      </h1>
      <h2 className="desc">
        Enhance your understanding with Sumz,an open source article summarizer
        that transforms lengthy articles into concise summaries.
      </h2>
    </header>
  )
}
export default Hero
