
const App = () => {

function submitForm(e) {
  e.preventDefault()
  console.log("Form submitted")
}

  return (
    <div>
      <form onSubmit={submitForm}>
        <input type="text" placeholder='Enter your name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App