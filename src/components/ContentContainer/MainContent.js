import Form from "./Form.js"
import MainLookup from "./MainLookup"
import "./main.css"
const MainContent = () => {
  return (
    <div className="content-container">
      <MainLookup />
      <Form />
    </div>
  )
}

export default MainContent