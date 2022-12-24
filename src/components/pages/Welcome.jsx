import Button from '../elements/Button'
import Header from '../elements/Header';

export const Welcome = () => {
  return (
    <section>
      <Header />
      <div className="text-3xl flex flex-col items-center justify-center h-screen w-screen">
        <h1>
          Wondering if you should leave your <br></br> recruiter before they ghost you?
        </h1>
        <Button className='w-2/6 py-4 m-8'> Take our short assessment</Button>
      </div>
    </section>
  )
}

export default Welcome;
