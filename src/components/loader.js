import loader from "../assets/gifs/loading.gif"
const Loader = () => {
  return (
    <div
      style={{
        background: "black",
        height: '100%',
        width: "100%"

      }}
    >

      <br /><br /><br /><br /><br /><br /><br /><br /><br />
      <center>
        <img src={loader} height="250px" alt="" /></center>
    </div>
  )
}

export default Loader