import BeatLoader from "react-spinners/BeatLoader"

const Spinner = ({ loading }) => {
  return (
    <>
      <span className='beat-loader'>
        <BeatLoader color='blue' loading={loading} margin='5px' />
      </span>
    </>
  )
}

export default Spinner
